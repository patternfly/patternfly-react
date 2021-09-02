describe('Description List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#description-list-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/description-list-demo-nav-link');
  });

  it('Verify default list and group', () => {
    cy.get('.pf-c-description-list')
      .should('exist')
      .children('.pf-c-description-list__group');
  });

  it('Verify text', () => {
    cy.get('.pf-c-description-list__term').contains('Name');
  });

  it('Verify description', () => {
    cy.get('.pf-c-description-list__description').contains('Example');
  });

  it('Verify Responsive Description List', () => {
    cy.get('.pf-c-description-list[id="responsive-description-list"]').should(
      'have.class',
      'pf-m-2-col-on-lg pf-m-3-col-on-xl'
    );
  });

  it('Verify Horizontal Description List', () => {
    cy.get('.pf-c-description-list[id="horizontal-description-list"]').should('have.class', 'pf-m-horizontal');
  });

  it('Verify Auto Column Widths Description List', () => {
    cy.get('.pf-c-description-list[id="auto-col-widths-description-list"]').should(
      'have.class',
      'pf-m-auto-column-widths'
    );
  });

  it('Verify Inline Grid Description List', () => {
    cy.get('.pf-c-description-list[id="inline-grid-description-list"]').should('have.class', 'pf-m-inline-grid');
  });

  it('Verify Auto Fit Description List', () => {
    cy.get('.pf-c-description-list[id="auto-fit-description-list"]').should('have.class', 'pf-m-auto-fit');
    cy.get('.pf-c-description-list[id="auto-fit-description-list"]').should(
      'have.attr',
      'style',
      '--pf-c-description-list--GridTemplateColumns--min-on-md:100px; --pf-c-description-list--GridTemplateColumns--min-on-lg:150px; --pf-c-description-list--GridTemplateColumns--min-on-xl:200px; --pf-c-description-list--GridTemplateColumns--min-on-2xl:300px;'
    );
  });

  it('Verify list with help text', () => {
    cy.get('#description-list-help-text')
      .should('exist')
      .children('.pf-c-description-list__group');
    cy.get('.pf-c-popover__content').should('not.exist');
    cy.get(
      '#description-list-help-text > :nth-child(1) > .pf-c-description-list__term > .pf-c-description-list__text'
    ).click();
    cy.get('.pf-c-popover__content').should('exist');
  });

  it('Verify compact list', () => {
    cy.get('#compact-description-list').should('have.class', 'pf-m-compact');
  });

  it('Verify fluid list', () => {
    cy.get('#fluid-description-list').should('have.class', 'pf-m-fluid');
  });
});
