describe('Data List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/data-list-demo-nav-link');
  });

  it('in glass theme, does not apply glass plain transparent background when pf-m-no-plain-on-glass is present (even with pf-m-plain)', () => {
    cy.visit('http://localhost:3000/data-list-demo-nav-link');
    cy.document().then((doc) => {
      doc.documentElement.classList.add('pf-v6-theme-glass');
    });

    cy.get('[data-testid="data-list-glass-plain-both"]')
      .should('have.class', 'pf-m-no-plain-on-glass')
      .and('have.class', 'pf-m-plain');

    // Glass/plain tokens set --pf-v6-c-data-list__item--BackgroundColor on the list; items paint it.
    // The `<ul>` has no background-color rule, so its computed background stays transparent.
    cy.get('[data-testid="data-list-glass-plain-both"] .pf-v6-c-data-list__item')
      .first()
      .then(($item) => {
        const el = $item[0];
        const win = el.ownerDocument.defaultView;
        if (!win) {
          throw new Error('expected window');
        }
        const bg = win.getComputedStyle(el).backgroundColor;
        const fullyTransparent = bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)' || bg === 'rgba(0,0,0,0)';
        expect(fullyTransparent, `expected non-transparent item background, got ${bg}`).to.eq(false);
      });
  });

  it('Verify rows selectable', () => {
    cy.visit('http://localhost:3000/data-list-demo-nav-link');
    cy.get('#row1.pf-m-clickable').should('exist');
    cy.get('#row2.pf-m-clickable').should('exist');

    cy.get('#row1.pf-m-selected').should('not.exist');
    cy.get('#row2.pf-m-selected').should('not.exist');

    cy.get('#row1').click();
    cy.get('#row1.pf-m-selected').should('exist');
    cy.get('#row2.pf-m-selected').should('not.exist');

    cy.get('#row2').click();
    cy.get('#row1.pf-m-selected').should('not.exist');
    cy.get('#row2.pf-m-selected').should('exist');
  });
});

// Skip this test until a new drag and drop is implemented
describe.skip('Data List Draggable Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/data-list-draggable-demo-nav-link');
  });

  it('Verify drag', () => {
    cy.get('#data1').contains('Item 1');
    cy.get('#drag1').type(' ');
    cy.get('#drag1').type('{downarrow}');
    cy.get('#data1').should('have.class', 'pf-m-ghost-row');
    cy.get('#drag1').type('{downarrow}');
    cy.get('#drag1').type('{enter}');
    cy.get('#data1').should('not.have.class', 'pf-m-ghost-row');
  });
});
