describe('Alert Group Animations Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/alert-group-animations-demo-nav-link');
  });

  it('Renders alert group item with animation', () => {
    cy.clock();
    cy.get('#add-alert-button').click();
    cy.get('.pf-v6-c-alert-group__item').then(($groupItem) => {
      const currentItem = $groupItem.get(0);
      const height = currentItem.offsetHeight;
      expect(height).to.equal(0);
    });
    cy.tick(1000);
    cy.get('.pf-v6-c-alert-group__item').then(($groupItem) => {
      const currentItem = $groupItem.get(0);
      const height = currentItem.offsetHeight;
      expect(height).to.be.greaterThan(0);
    });
    cy.clock().invoke('restore');
    cy.get('#alert-close-button').click({ waitForAnimations: true });
    cy.get('.pf-v6-c-alert').should('not.exist');
  });

  it('Removes alert group item with animation', () => {
    let left: number;
    cy.clock();
    cy.get('#add-alert-button').click();
    cy.tick(1000);
    cy.get('.pf-v6-c-alert-group__item').then(($groupItem) => {
      const currentItem = $groupItem.get(0);
      left = currentItem.getBoundingClientRect().left;
    });
    cy.get('#alert-close-button').click();
    cy.tick(50);
    cy.get('.pf-v6-c-alert-group__item').then(($groupItem) => {
      const currentItem = $groupItem.get(0);
      const leftAfterAnimation = currentItem.getBoundingClientRect().left;

      expect(left).to.be.lessThan(leftAfterAnimation);
    });
  });
});
