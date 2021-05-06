describe('Gallery Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#gallery-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/gallery-demo-nav-link');
  });
  it('Verify gallery item', () => {
    cy.get('.pf-c-page__main-section')
      .find('div')
      .first()
      .should('have.class', 'pf-l-gallery');
  });

  it('Verify gutters', () => {
    cy.get('.pf-l-gallery').should('have.class', 'pf-m-gutter');
  });

  it('Verify gallery min/max breakpoints ', () => {
    cy.get('.pf-l-gallery').should(
      'have.attr',
      'style',
      '--pf-l-gallery--GridTemplateColumns--min:100%; --pf-l-gallery--GridTemplateColumns--min-on-sm:80px; --pf-l-gallery--GridTemplateColumns--min-on-md:100px; --pf-l-gallery--GridTemplateColumns--min-on-lg:150px; --pf-l-gallery--GridTemplateColumns--min-on-xl:300px; --pf-l-gallery--GridTemplateColumns--min-on-2xl:500px; --pf-l-gallery--GridTemplateColumns--max:100%; --pf-l-gallery--GridTemplateColumns--max-on-sm:80px; --pf-l-gallery--GridTemplateColumns--max-on-md:120px; --pf-l-gallery--GridTemplateColumns--max-on-lg:150px; --pf-l-gallery--GridTemplateColumns--max-on-xl:1fr; --pf-l-gallery--GridTemplateColumns--max-on-2xl:500px;'
    );
  });
});
