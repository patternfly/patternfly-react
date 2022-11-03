describe('OverflowMenu Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/overflow-menu-demo-nav-link');
  });

  describe('Simple OverflowMenu Medium', () => {
    context('List view', () => {
      beforeEach(() => {
        cy.viewport(768, 800);
      });

      it('displays OverflowMenuContent', () => {
        cy.get('#simple-overflow-menu .pf-c-overflow-menu__content').should('exist');
        cy.get('#simple-overflow-menu .pf-c-overflow-menu__control').should('not.exist');
      });
    });

    context('Dropdown view', () => {
      beforeEach(() => {
        cy.viewport(767, 800);
      });

      it('displays OverflowMenuControl', () => {
        cy.get('#simple-overflow-menu .pf-c-overflow-menu__control').should('exist');
        cy.get('#simple-overflow-menu .pf-c-overflow-menu__content').should('not.exist');
      });

      it('Verify toggle dropdown', () => {
        cy.get('#simple-overflow-menu button').should('have.class', 'pf-c-dropdown__toggle');
      });

      it('Verify dropdown menu expanded', () => {
        cy.get('#simple-overflow-menu button')
          .last()
          .click({ force: true });
        cy.get('#simple-overflow-menu .pf-c-dropdown').should('have.class', 'pf-m-expanded');
        // close overflow menu again
        cy.get('#simple-overflow-menu button')
          .last()
          .click({ force: true });
      });
    });
  });

  describe('Additional Options OverflowMenu Large', () => {
    context('List view', () => {
      beforeEach(() => {
        cy.viewport(992, 800);
      });

      it('displays OverflowMenuContent and OverflowMenuControl', () => {
        cy.get(
          '#additional-options-overflow-menu .pf-c-overflow-menu__content, #additional-options-overflow-menu .pf-c-overflow-menu__control'
        ).should('be.visible');
      });
    });

    context('Dropdown view', () => {
      beforeEach(() => {
        cy.viewport(991, 800);
      });

      it('displays OverflowMenuControl', () => {
        cy.get('#additional-options-overflow-menu .pf-c-overflow-menu__control').should('exist');
        cy.get('#additional-options-overflow-menu .pf-c-overflow-menu__content').should('not.exist');
      });

      it('Verify toggle dropdown', () => {
        cy.get('#additional-options-overflow-menu button').should('have.class', 'pf-c-dropdown__toggle');
      });

      it('Verify dropdown menu expanded', () => {
        cy.get('#additional-options-overflow-menu button')
          .last()
          .click({ force: true });
        cy.get('#additional-options-overflow-menu .pf-c-dropdown').should('have.class', 'pf-m-expanded');
      });
    });
  });

  describe('Persist OverflowMenu X-Large', () => {
    context('List view', () => {
      beforeEach(() => {
        cy.viewport(1200, 800);
      });

      it('displays OverflowMenuContent and OverflowMenuControl', () => {
        cy.get(
          '#persist-overflow-menu .pf-c-overflow-menu__content, #persist-overflow-menu .pf-c-overflow-menu__control'
        ).should('be.visible');
      });
    });

    context('Dropdown view', () => {
      beforeEach(() => {
        cy.viewport(1199, 800);
      });

      it('displays OverflowMenuControl and Persistent items', () => {
        cy.get('#persist-overflow-menu .pf-c-overflow-menu__control').should('be.visible');
        cy.get(
          `#persist-overflow-menu .pf-c-overflow-menu__content .pf-c-overflow-menu__group,
        #persist-overflow-menu .pf-c-overflow-menu__content .pf-c-overflow-menu__item`
        ).should('be.visible');
      });

      it('Verify toggle dropdown', () => {
        cy.get('#persist-overflow-menu button').should('have.class', 'pf-c-dropdown__toggle');
      });

      it('Verify dropdown menu expanded', () => {
        cy.get('#persist-overflow-menu button')
          .last()
          .click({ force: true });
        cy.get('#persist-overflow-menu .pf-c-dropdown').should('have.class', 'pf-m-expanded');
      });
    });
  });

  describe('Container Breakpoint OverflowMenu Small', () => {
    context('List view', () => {
      beforeEach(() => {
        cy.viewport(1200, 800);
      });

      it('displays OverflowMenuContent', () => {
        cy.get('#container-breakpoint-overflow-menu .pf-c-overflow-menu__content').should('exist');
        cy.get('#container-breakpoint-overflow-menu .pf-c-overflow-menu__control').should('not.exist');
      });
    });

    context('Dropdown view', () => {
      beforeEach(() => {
        cy.viewport(1200, 800);
        cy.get('#container-breakpoint-container').invoke('attr', 'style', 'width: 575px');
      });

      it('displays OverflowMenuControl', () => {
        cy.get('#container-breakpoint-overflow-menu .pf-c-overflow-menu__control').should('exist');
        cy.get('#container-breakpoint-overflow-menu .pf-c-overflow-menu__content').should('not.exist');
      });

      it('Verify toggle dropdown', () => {
        cy.get('#container-breakpoint-overflow-menu button').should('have.class', 'pf-c-dropdown__toggle');
      });

      it('Verify dropdown menu expanded', () => {
        cy.get('#container-breakpoint-overflow-menu button')
          .last()
          .click({ force: true });
        cy.get('#container-breakpoint-overflow-menu .pf-c-dropdown').should('have.class', 'pf-m-expanded');
        // close overflow menu again
        cy.get('#container-breakpoint-overflow-menu button')
          .last()
          .click({ force: true });
      });
    });
  });
});
