describe('Dual List Selector deprecated With Actions Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dual-list-selector-with-actions-demo-nav-link');
  });

  it('Verify existence', () => {
    cy.get('.pf-v6-c-dual-list-selector').should('exist');
  });

  it('Verify default value content', () => {
    cy.get('.pf-v6-c-dual-list-selector__list').first().should('have.value', '');
    cy.get('.pf-v6-c-dual-list-selector__list li').should('have.length', 4);
  });

  it('Verify custom aria-labels, status, and titles', () => {
    cy.get('.pf-m-available .pf-v6-c-dual-list-selector__title-text').contains('Available options');
    cy.get('.pf-m-available .pf-v6-c-dual-list-selector__status-text').contains('0 of 4 options selected');
    cy.get('.pf-m-available .pf-v6-c-dual-list-selector__tools-filter input').should(
      'have.attr',
      'aria-label',
      'Search input'
    );
    cy.get('.pf-m-available .pf-v6-c-dual-list-selector__list').should('have.attr', 'aria-labelledby');

    cy.get('.pf-v6-c-dual-list-selector__controls-item button').eq(1).should('have.attr', 'aria-label', 'Add all');
    cy.get('.pf-v6-c-dual-list-selector__controls-item button')
      .eq(0)
      .should('have.attr', 'aria-label', 'Add selected')
      .and('have.attr', 'disabled');
    cy.get('.pf-v6-c-dual-list-selector__controls-item button')
      .eq(3)
      .should('have.attr', 'aria-label', 'Remove selected')
      .and('have.attr', 'disabled');
    cy.get('.pf-v6-c-dual-list-selector__controls-item button')
      .eq(2)
      .should('have.attr', 'aria-label', 'Remove all')
      .and('have.attr', 'disabled');

    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__title-text').contains('Chosen options');
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__status-text').contains('0 of 0 options selected');
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__tools-filter input').should(
      'have.attr',
      'aria-label',
      'Search input'
    );
  });

  it('Verify selecting options', () => {
    cy.get('.pf-v6-c-dual-list-selector__list-item .pf-m-selected').should('not.exist');
    cy.get('.pf-v6-c-dual-list-selector__list-item').eq(0).click();
    cy.get('.pf-v6-c-dual-list-selector__list-item .pf-m-selected').should('exist');
    cy.get('.pf-v6-c-dual-list-selector__list-item').eq(1).click();
    cy.get('.pf-v6-c-dual-list-selector__list-item .pf-m-selected').should('have.length', 2);
    cy.get('.pf-v6-c-dual-list-selector__list-item').eq(0).click();
    cy.get('.pf-v6-c-dual-list-selector__list-item .pf-m-selected').should('have.length', 1);
  });

  it('Verify selecting and choosing options', () => {
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(0).click();
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 3);
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 1);
    cy.get('.pf-v6-c-dual-list-selector__list-item').eq(1).click();
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(0).click();

    cy.get('.pf-m-available .pf-v6-c-dual-list-selector__status-text').contains('0 of 2 options selected');
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__status-text').contains('0 of 2 options selected');

    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 2);
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 2);

    cy.get('.pf-v6-c-dual-list-selector__list-item').eq(0).click();
    cy.get('.pf-m-available .pf-v6-c-dual-list-selector__status-text').contains('1 of 2 options selected');
    cy.get('.pf-v6-c-dual-list-selector__list-item').eq(0).click();
  });

  it('Verify removing all options', () => {
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(2).click();
    cy.get('.pf-v6-c-dual-list-selector__menu').eq(0).find('li').should('have.length', 4);
    cy.get('.pf-v6-c-dual-list-selector__menu').eq(1).find('li').should('have.length', 0);
    cy.get('.pf-m-available .pf-v6-c-dual-list-selector__status-text').contains('0 of 4 options selected');
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__status-text').contains('0 of 0 options selected');
  });

  it('Verify choosing all options', () => {
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(1).click();
    cy.get('.pf-v6-c-dual-list-selector__menu').eq(0).find('li').should('have.length', 0);
    cy.get('.pf-v6-c-dual-list-selector__menu').eq(1).find('li').should('have.length', 4);
    cy.get('.pf-m-available .pf-v6-c-dual-list-selector__status-text').contains('0 of 0 options selected');
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__status-text').contains('0 of 4 options selected');
  });

  it('Verify sort works', () => {
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__list-item').last().contains('Option 4');
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__tools-actions button').first().click();
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__list-item').last().contains('Option 1');
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__list-item').first().contains('Option 4');

    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__tools-actions button').first().click();
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__list-item').last().contains('Option 4');
    cy.get('.pf-m-chosen .pf-v6-c-dual-list-selector__list-item').first().contains('Option 1');
  });

  it('Verify chosen search works', () => {
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 4);
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input').eq(1).type('Option 1');
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 1);
  });

  it('Verify removing all options', () => {
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input')
      .eq(1)
      .type('{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}');
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(2).click();
    cy.get('.pf-v6-c-dual-list-selector__menu').eq(0).find('li').should('have.length', 4);
    cy.get('.pf-v6-c-dual-list-selector__menu').eq(1).find('li').should('have.length', 0);
  });

  it('Verify available search works', () => {
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 4);
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input').eq(0).type('Option 3');
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 1);
  });

  it('Verify adding all filtered options', () => {
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 1);
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(1).click();
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 0);
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 1);
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input')
      .eq(0)
      .type('{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}');
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 3);
  });
});
