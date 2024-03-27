describe('Jump Link Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/jump-links-demo-nav-link');
  });

  it('Should jump on click', () => {
    cy.get('#ts-demo-app-page-id').then((el) => {
      const firstScroll = el.scrollTop();
      expect(firstScroll).to.eq(0);
    });
    cy.get('#heading-3').click();
    cy.get('#ts-demo-app-page-id')
      .parent()
      .then((el) => {
        expect(el.scrollTop()).to.not.eq(0);
      });
  });
});
