describe('Tab Demo String Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#tab-string-event-key-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/tab-string-event-key-demo-nav-link');
  });

  it('Verify tabs with string event keys, and tab navigation', () => {
    cy.get('.pf-c-tabs__link').each((demoButton: JQuery<HTMLButtonElement>, index: number) => {
      const currentItem: number = index + 1;
      expect(demoButton.text()).to.equal(`Tab item ${currentItem}`);
      cy.wrap(demoButton).click();
      cy.get(`#demoTab${currentItem}Section`).then((demoSection: JQuery<HTMLElement>) => {
        expect(demoSection.prop('hidden')).to.equal(false);
        expect(demoSection.text()).to.equal(`Tab ${currentItem} section`);
      });
    });
  });
});
