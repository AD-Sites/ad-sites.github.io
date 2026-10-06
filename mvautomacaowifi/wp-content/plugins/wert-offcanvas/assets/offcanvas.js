/**
 * Wert Offcanvas Menu — comportamento no front-end.
 *
 * - Intercepta o clique no seletor de gatilho (padrão: hambúrguer do Divi).
 * - Abre/fecha o painel deslizante com overlay, ESC e foco acessível.
 * - Opcionalmente impede o menu nativo do Divi de abrir junto.
 */
(function () {
	'use strict';

	var cfg = window.WertOffcanvas || {};
	var selector = cfg.selector || '';
	var closeDefault = !!cfg.closeDefault;

	var root, panel, lastFocused;

	function init() {
		root = document.getElementById('wofc-root');
		if (!root) {
			return;
		}
		panel = document.getElementById('wofc-panel');

		bindTriggers();
		bindClosers();
		bindKeys();
		bindSubmenus();
	}

	/**
	 * Accordion dos submenus: clique na seta (ou no link do item-pai sem URL
	 * real, ex.: href="#") abre/fecha o submenu. Outros itens-pai só recolhem
	 * via seta para não atrapalhar a navegação.
	 */
	function bindSubmenus() {
		var nav = panel.querySelector('.wofc-nav--accordion');
		if (!nav) {
			return; // modo "sempre aberto" não tem accordion.
		}

		nav.addEventListener('click', function (e) {
			var toggle = e.target.closest('.wofc-submenu-toggle');

			// Item-pai cujo link é apenas "#": o próprio link funciona como toggle.
			if (!toggle) {
				var link = e.target.closest('.menu-item-has-children > a');
				if (link) {
					var href = link.getAttribute('href') || '';
					if (href === '#' || href === '' || href.slice(-1) === '#') {
						e.preventDefault();
						toggleItem(link.parentNode);
					}
				}
				return;
			}

			e.preventDefault();
			e.stopPropagation();
			toggleItem(toggle.closest('.menu-item-has-children'));
		});
	}

	function toggleItem(li) {
		if (!li) {
			return;
		}
		var open = li.classList.toggle('is-open');
		var btn = li.querySelector(':scope > .wofc-submenu-toggle');
		if (btn) {
			btn.setAttribute('aria-expanded', open ? 'true' : 'false');
		}
	}

	/**
	 * Liga o(s) gatilho(s): o seletor configurado + qualquer .wofc-trigger
	 * (botões do shortcode [wert_offcanvas_toggle]).
	 */
	function bindTriggers() {
		// Delegação no documento: pega elementos que entram depois (ex.: AJAX do Divi).
		document.addEventListener('click', function (e) {
			var trigger = null;

			if (selector) {
				trigger = e.target.closest(selector);
			}
			if (!trigger) {
				trigger = e.target.closest('.wofc-trigger');
			}

			if (!trigger) {
				return;
			}

			// Impede o comportamento padrão do hambúrguer do Divi, se pedido.
			if (closeDefault) {
				e.preventDefault();
				e.stopImmediatePropagation();
			}

			open();
		}, true); // fase de captura: roda antes do handler do Divi.
	}

	function bindClosers() {
		root.addEventListener('click', function (e) {
			if (e.target.closest('[data-wofc-close]')) {
				e.preventDefault();
				close();
			}
		});

		// Fecha ao clicar num link do menu (navegação interna na mesma página).
		root.addEventListener('click', function (e) {
			var link = e.target.closest('a[href]');
			if (!link) {
				return;
			}

			// Itens-pai (com submenu) servem para abrir o submenu, não para fechar.
			if (link.parentNode && link.parentNode.classList.contains('menu-item-has-children')) {
				return;
			}

			var href = link.getAttribute('href') || '';
			// "#" puro é placeholder, não navega — não fecha o painel.
			// Âncoras reais (#secao) fecham para revelar o conteúdo da página.
			if (href.charAt(0) === '#' && href.length > 1) {
				close();
			}
		});
	}

	function bindKeys() {
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && isOpen()) {
				close();
			}
			if (e.key === 'Tab' && isOpen()) {
				trapFocus(e);
			}
		});
	}

	function isOpen() {
		return root.classList.contains('is-open');
	}

	function open() {
		if (isOpen()) {
			return;
		}
		lastFocused = document.activeElement;
		root.classList.add('is-open');
		root.setAttribute('aria-hidden', 'false');
		document.body.classList.add('wofc-open');
		syncAria(true);

		// Foca o primeiro elemento focável (botão fechar).
		var focusable = getFocusable();
		if (focusable.length) {
			focusable[0].focus();
		}
	}

	function close() {
		if (!isOpen()) {
			return;
		}
		root.classList.remove('is-open');
		root.setAttribute('aria-hidden', 'true');
		document.body.classList.remove('wofc-open');
		syncAria(false);

		if (lastFocused && typeof lastFocused.focus === 'function') {
			lastFocused.focus();
		}
	}

	/** Atualiza aria-expanded nos gatilhos visíveis. */
	function syncAria(expanded) {
		var triggers = document.querySelectorAll('.wofc-trigger');
		triggers.forEach(function (t) {
			t.setAttribute('aria-expanded', expanded ? 'true' : 'false');
		});
	}

	function getFocusable() {
		return Array.prototype.slice.call(
			panel.querySelectorAll('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])')
		).filter(function (el) {
			return el.offsetParent !== null;
		});
	}

	/** Mantém o foco dentro do painel enquanto aberto. */
	function trapFocus(e) {
		var focusable = getFocusable();
		if (!focusable.length) {
			return;
		}
		var first = focusable[0];
		var last = focusable[focusable.length - 1];

		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
