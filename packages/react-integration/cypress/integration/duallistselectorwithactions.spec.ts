describe('Dual List Selector With Actions Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dual-list-selector-with-actions-demo-nav-link');
  });

  it('Verify existence', () => {
    cy.get('#dual-list-selector-demo').should('exist');
  });

  it('Verify default value content', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .first()
      .should('have.value', '');
    cy.get('.pf-c-dual-list-selector__list li').should('have.length', 4);
  });

  it('Verify custom aria-labels, status, and titles', () => {
    cy.get('.pf-m-available .pf-c-dual-list-selector__title-text').contains('Demo available options');
    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('4 available');
    cy.get('.pf-m-available .pf-c-dual-list-selector__tools-filter input').should(
      'have.attr',
      'aria-label',
      'Demo available options search'
    );
    cy.get('.pf-m-available .pf-c-dual-list-selector__list').should(
      'have.attr',
      'aria-labelledby',
      'dual-list-selector-demo-available-pane-status'
    );

    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(1)
      .should('have.attr', 'aria-label', 'Demo add all');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .should('have.attr', 'aria-label', 'Demo add selected')
      .and('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(3)
      .should('have.attr', 'aria-label', 'Demo remove selected')
      .and('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(2)
      .should('have.attr', 'aria-label', 'Demo remove all')
      .and('have.attr', 'disabled');

    cy.get('.pf-m-chosen .pf-c-dual-list-selector__title-text').contains('Demo chosen options');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__status-text').contains('0 chosen');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__tools-filter input').should(
      'have.attr',
      'aria-label',
      'Demo chosen options search'
    );
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__list').should('not.have.attr', 'aria-labelledby');
  });

  it('Verify selecting options', () => {
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('not.exist');
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('exist');
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('have.length', 2);
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('have.length', 1);
  });

  it('Verify selecting and choosing options', () => {
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 3);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 1);
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(0)
      .click();

    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('2 available');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__status-text').contains('2 chosen');

    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 2);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 2);
  });

  it('Verify removing all options', () => {
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(2)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 0);
    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('4 available');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__status-text').contains('0 chosen');
  });

  it('Verify choosing all options', () => {
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 0);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('0 available');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__status-text').contains('4 chosen');
  });

  it('Verify sort works', () => {
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__list-item')
      .last()
      .contains('Option 3');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__tools-actions button')
      .first()
      .click();
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__list-item')
      .last()
      .contains('Option 4');
  });

  it('Verify chosen search works', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(1)
      .type('Option 1');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 1);
  });

  it('Verify removing all options', () => {
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(1)
      .type('{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}');
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(2)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 0);
  });

  it('Verify available search works', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(0)
      .type('Option 3');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 1);
  });

  xit('Verify adding all filtered options', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 1);
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 0);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 1);
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(0)
      .type('{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 3);
  });
});
