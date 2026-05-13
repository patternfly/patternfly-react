const visitDrawerDemoWithGlassTheme = () => {
  cy.visit('http://localhost:3000/drawer-demo-nav-link');
  cy.viewport(1280, 800);
  cy.document().then((doc) => {
    doc.documentElement.classList.add('pf-v6-theme-glass');
  });
  cy.get('html').should('have.class', 'pf-v6-theme-glass');
};

/** Matches integration checks for “glass” panel visuals (semi-transparent bg and/or backdrop-filter). */
const rgbaCommaAlpha = (color: string): number | undefined => {
  if (color === 'transparent') {
    return 0;
  }
  if (!color.startsWith('rgba(') || !color.endsWith(')')) {
    return undefined;
  }
  const inner = color.slice('rgba('.length, -1);
  const parts = inner.split(',').map((p) => p.trim());
  if (parts.length !== 4) {
    return undefined;
  }
  return parseFloat(parts[3]);
};

const rgbSlashAlpha = (color: string): number | undefined => {
  if (!color.startsWith('rgb(')) {
    return undefined;
  }
  const slash = color.indexOf('/');
  const close = color.lastIndexOf(')');
  if (slash === -1 || close === -1 || slash >= close) {
    return undefined;
  }
  const a = parseFloat(color.slice(slash + 1, close).trim());
  return Number.isNaN(a) ? undefined : a;
};

const drawerPanelShowsGlassVisualTreatment = (el: HTMLElement): boolean => {
  const style = window.getComputedStyle(el);
  const bg = style.backgroundColor;
  const backdrop = style.backdropFilter;
  const alpha = rgbaCommaAlpha(bg) ?? rgbSlashAlpha(bg);
  const hasSemiTransparentBackground = alpha !== undefined && alpha < 1;
  const hasBackdropBlur = Boolean(backdrop && backdrop !== 'none');
  return hasSemiTransparentBackground || hasBackdropBlur;
};

const assertGlassPlainPanel = (testId: string, headlineSnippet: string) => {
  cy.get(`[data-testid="${testId}"]`).should(($el) => {
    expect($el, testId).to.have.length(1);
    expect($el).to.not.have.attr('hidden');
    expect($el).to.not.have.attr('inert');
    expect($el).to.have.class('pf-m-glass');
    expect($el).to.have.class('pf-m-plain');
    expect($el).to.have.class('pf-m-no-plain-on-glass');
    expect($el).to.contain.text(headlineSnippet);
  });

  cy.get(`[data-testid="${testId}"]`).should(($el) => {
    if (!drawerPanelShowsGlassVisualTreatment($el[0])) {
      const style = window.getComputedStyle($el[0]);
      throw new Error(
        `expected glass panel (semi-transparent background or backdrop-filter); got backgroundColor=${style.backgroundColor}, backdropFilter=${style.backdropFilter || ''}`
      );
    }
  });
};

describe('Drawer Demo Test', () => {
  afterEach(() => {
    cy.document().then((doc) => {
      doc.documentElement.classList.remove('pf-v6-theme-glass');
    });
  });

  it('Navigate to the drawer demo', () => {
    cy.visit('http://localhost:3000/drawer-demo-nav-link');
  });

  it('glass theme + isInline drawer + plain/glass: panel shows glass treatment (transparent bg and/or backdrop-filter)', () => {
    visitDrawerDemoWithGlassTheme();

    cy.get('#drawer-glass-plain-inline.pf-v6-c-drawer').should(($drawer) => {
      expect($drawer).to.have.length(1);
      expect($drawer).to.have.class('pf-m-expanded');
      expect($drawer).to.have.class('pf-m-inline');
      expect($drawer).to.not.have.class('pf-m-static');
    });

    assertGlassPlainPanel('drawer-glass-plain-panel-inline', 'Glass theme plain / no-plain-on-glass combo (inline)');
  });

  it('glass theme + isStatic drawer + plain/glass: panel shows glass treatment (transparent bg and/or backdrop-filter)', () => {
    visitDrawerDemoWithGlassTheme();

    cy.get('#drawer-glass-plain-static.pf-v6-c-drawer').should(($drawer) => {
      expect($drawer).to.have.length(1);
      expect($drawer).to.have.class('pf-m-expanded');
      expect($drawer).to.have.class('pf-m-static');
      expect($drawer).to.not.have.class('pf-m-inline');
    });

    assertGlassPlainPanel('drawer-glass-plain-panel-static', 'Glass theme plain / no-plain-on-glass combo (static)');
  });

  it('glass theme + default overlay drawer: isPlain / isGlass / isNoPlainOnGlass modifiers do not get glass panel styles from Core', () => {
    visitDrawerDemoWithGlassTheme();

    cy.get('#drawer-glass-plain-overlay.pf-v6-c-drawer').should(($drawer) => {
      expect($drawer).to.have.length(1);
      expect($drawer).to.have.class('pf-m-expanded');
      expect($drawer).to.not.have.class('pf-m-inline');
      expect($drawer).to.not.have.class('pf-m-static');
    });

    cy.get('[data-testid="drawer-glass-plain-panel-overlay"]').should(($el) => {
      expect($el).to.have.length(1);
      expect($el).to.not.have.attr('hidden');
      expect($el).to.not.have.attr('inert');
      expect($el).to.have.class('pf-m-glass');
      expect($el).to.have.class('pf-m-plain');
      expect($el).to.have.class('pf-m-no-plain-on-glass');
      expect($el).to.contain.text('Glass theme plain / no-plain-on-glass combo (overlay)');
      expect(
        drawerPanelShowsGlassVisualTreatment($el[0]),
        'Core should not apply glass/plain-on-glass panel treatment without inline or static drawer'
      ).to.equal(false);
    });
  });

  it('glass theme: drawer panel has no glass CSS when isGlass is false', () => {
    visitDrawerDemoWithGlassTheme();

    cy.get('#drawer-glass-theme-no-isglass.pf-v6-c-drawer').should(($drawer) => {
      expect($drawer).to.have.length(1);
      expect($drawer).to.have.class('pf-m-expanded');
      expect($drawer).to.have.class('pf-m-inline');
    });

    cy.get('[data-testid="drawer-panel-content-glass-theme-no-isglass"]').should(($el) => {
      expect($el).to.have.length(1);
      expect($el).to.not.have.attr('hidden');
      expect($el).to.not.have.attr('inert');
      expect($el).to.have.class('pf-m-plain');
      expect($el).to.not.have.class('pf-m-glass');
      expect(
        drawerPanelShowsGlassVisualTreatment($el[0]),
        'panel must not get glass treatment from theme alone; set isGlass for pf-m-glass and glass styles'
      ).to.equal(false);
    });
  });

  it('Verify focus is automatically handled with focus trap enabled', () => {
    cy.get('#toggleFocusTrapButton').click();
    cy.get('#focusTrap-panelContent .pf-v6-c-button.pf-m-plain').should('have.focus');
    cy.get('#focusTrap-panelContent .pf-v6-c-button.pf-m-plain').click();
    cy.get('#toggleFocusTrapButton').should('have.focus');
  });

  it('Verify focus can be customized with focus trap enabled', () => {
    cy.get('#toggleCustomFocusButton').click();
    // Wait for transition animation to end
    cy.wait(500);
    cy.get('#customFocus-panelContent').should('have.focus');
    cy.get('#toggleCustomFocusButton').click();
  });

  it('DrawerSection isPlain: Core applies pf-m-plain and computed styles differ from default section', () => {
    cy.visit('http://localhost:3000/drawer-demo-nav-link');
    cy.viewport(1280, 800);
    cy.get('#toggleButton').click();
    cy.get('#basic-drawer.pf-v6-c-drawer').should('have.class', 'pf-m-expanded');

    cy.get('[data-testid="drawer-section-is-plain"]').should(($el) => {
      expect($el).to.have.length(1);
      expect($el).to.have.class('pf-v6-c-drawer__section');
      expect($el).to.have.class('pf-m-plain');
    });

    cy.get('[data-testid="drawer-section-default"]').should(($el) => {
      expect($el).to.have.length(1);
      expect($el).to.have.class('pf-v6-c-drawer__section');
      expect($el).to.not.have.class('pf-m-plain');
    });

    cy.get('[data-testid="drawer-section-default"]').then(($default) => {
      cy.get('[data-testid="drawer-section-is-plain"]').should(($plain) => {
        const sDef = window.getComputedStyle($default[0]);
        const sPlain = window.getComputedStyle($plain[0]);
        const differs =
          sPlain.backgroundColor !== sDef.backgroundColor ||
          sPlain.boxShadow !== sDef.boxShadow ||
          sPlain.borderTopWidth !== sDef.borderTopWidth;
        if (!differs) {
          throw new Error(
            `expected isPlain section to differ from default in backgroundColor, boxShadow, or borderTopWidth; ` +
              `bg default=${sDef.backgroundColor} plain=${sPlain.backgroundColor}; ` +
              `boxShadow default=${sDef.boxShadow} plain=${sPlain.boxShadow}; ` +
              `borderTopWidth default=${sDef.borderTopWidth} plain=${sPlain.borderTopWidth}`
          );
        }
      });
    });

    // Leave basic drawer collapsed for later specs (e.g. "Verify drawer expands and collapses").
    cy.get('#toggleButton').click();
    cy.get('#basic-drawer.pf-v6-c-drawer').should('not.have.class', 'pf-m-expanded');
  });

  it('Verify text in content', () => {
    const drawerContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

    cy.get('#basic-drawer.pf-v6-c-drawer').contains(drawerContent);
  });

  it('Verify drawer expands and collapses', () => {
    cy.get('#basic-drawer.pf-v6-c-drawer').should('not.have.class', 'pf-m-expanded');
    cy.get('#toggleButton').click();
    cy.get('#basic-drawer.pf-v6-c-drawer').should('have.class', 'pf-m-expanded');
    cy.get('#toggleButton').click();
  });

  it('Verify bottom drawer with background variant', () => {
    cy.get('#basic-drawer.pf-v6-c-drawer').should('have.class', 'pf-m-panel-bottom');
    cy.get('#basic-drawer .pf-v6-c-drawer__panel').should('have.class', 'pf-m-secondary');
  });

  it('Verify panel widths', () => {
    // Large viewport
    const $drawerPanel = cy.get('#basic-drawer .pf-v6-c-drawer__panel');
    $drawerPanel.should('have.class', 'pf-m-width-100');
    $drawerPanel.should('have.class', 'pf-m-width-50-on-lg');
    $drawerPanel.should('have.class', 'pf-m-width-33-on-xl');
    $drawerPanel.should('have.class', 'pf-m-width-25-on-2xl');
    $drawerPanel.should('have.css', 'flex-basis', 'max(24px, min(300px, 100%))');
    // Medium viewport
    cy.viewport(800, 660);
    cy.get('#basic-drawer .pf-v6-c-drawer__panel').should('have.css', 'flex-basis', 'max(24px, min(100% + 0px, 100%))');
    // Xl viewport
    cy.viewport(1200, 660);
    cy.get('#basic-drawer .pf-v6-c-drawer__panel').should('have.css', 'flex-basis', 'max(24px, min(300px, 100%))');
    // 2Xl viewport
    cy.viewport(1450, 660);
    cy.get('#basic-drawer .pf-v6-c-drawer__panel').should('have.css', 'flex-basis', 'max(24px, min(300px, 100%))');
  });

  it('Verify that focus gets sent to drawer', () => {
    cy.get('#toggleButton').click();
    cy.wrap(() => cy.focused().contains('drawer-panel in demo with onExpand'), { timeout: 1000 });
  });
});
