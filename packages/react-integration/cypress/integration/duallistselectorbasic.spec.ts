describe('Dual List Selector BasicDemo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dual-list-selector-basic-demo-nav-link');
  });

  it('Verify existence', () => {
    cy.get('.pf-c-dual-list-selector').should('exist');
  });

  it('Verify default aria-labels, status, and titles', () => {
    cy.get('.pf-m-available .pf-c-dual-list-selector__title-text').contains('Available options');
    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('0 of 4 items selected');
    cy.get('.pf-m-available .pf-c-dual-list-selector__tools-filter input').should(
      'have.attr',
      'aria-label',
      'Available search input'
    );

    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(1)
      .should('have.attr', 'aria-label', 'Add all');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .should('have.attr', 'aria-label', 'Add selected')
      .and('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(3)
      .should('have.attr', 'aria-label', 'Remove selected')
      .and('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(2)
      .should('have.attr', 'aria-label', 'Remove all')
      .and('have.attr', 'disabled');

    cy.get('.pf-m-chosen .pf-c-dual-list-selector__title-text').contains('Chosen options');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__status-text').contains('0 of 0 items selected');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__tools-filter input').should(
      'have.attr',
      'aria-label',
      'Chosen search input'
    );
  });

  it('Verify default value content', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .first()
      .should('have.value', '');
    cy.get('.pf-c-dual-list-selector__list li').should('have.length', 4);
  });

  it('Verify selecting options', () => {
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('not.exist');
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .and('not.have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('exist');
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(1)
      .click();
    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('2 of 4 items selected');
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('have.length', 2);
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('have.length', 1);
    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('1 of 4 items selected');
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

    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(1)
      .should('not.have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .should('not.have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(3)
      .should('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(2)
      .should('not.have.attr', 'disabled');

    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('1 of 3 items selected');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__status-text').contains('0 of 1 items selected');

    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(0)
      .click();
    cy.get('.pf-c-tooltip').should('exist');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 2);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 2);

    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('0 of 2 items selected');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__status-text').contains('0 of 2 items selected');
  });

  it('Verify removing all options', () => {
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(2)
      .click();
    cy.get('.pf-c-tooltip').should('exist');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 0);
  });

  it('Verify choosing all options', () => {
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(1)
      .click();
    cy.get('.pf-c-tooltip').should('exist');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 0);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 4);

    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(1)
      .should('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .should('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(3)
      .should('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(2)
      .should('not.have.attr', 'disabled');

    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('0 of 0 items selected');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__status-text').contains('0 of 4 items selected');
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

    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(1)
      .should('not.have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .should('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(3)
      .should('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(2)
      .should('have.attr', 'disabled');

    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('0 of 4 items selected');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__status-text').contains('0 of 0 items selected');
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
});
