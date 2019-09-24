describe('OverflowMenu Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#overflow-menu-demo-nav-item-link').click(); 
    cy.url().should('eq', 'http://localhost:3000/overflow-menu-demo-nav-link');
  });

  describe('Simple OverflowMenu Medium', () => {
    context('List view', () => {
      beforeEach(() => {
        cy.viewport(768, 800);
      });

      it('displays OverflowMenuContent', () => {
        cy.get('#simple-overflow-menu .pf-c-overflow-menu__content').should('be.visible');
        cy.get('#simple-overflow-menu .pf-c-overflow-menu__control').should('not.be.visible');
      });
    });

    context('Dropdown view', () => {
      beforeEach(() => {
        cy.viewport(767, 800);
      });

      it('displays OverflowMenuControl', () => {
        cy.get('#simple-overflow-menu .pf-c-overflow-menu__control').should('be.visible');
        cy.get('#simple-overflow-menu .pf-c-overflow-menu__content').should('not.be.visible');
        cy.get('#simple-overflow-menu .pf-c-overflow-menu__group, #simple-overflow-menu .pf-c-overflow-menu__item').should('have.attr', 'hidden');
      });

      it('Verify toggle dropdown', () => {
        cy.get('#simple-overflow-menu button').should('have.class', 'pf-c-dropdown__toggle'); 
      });
    
      it('Verify dropdown menu expanded', () => {
        cy.get('#simple-overflow-menu button').last().click();
        cy.get('#simple-overflow-menu .pf-c-dropdown').should('have.class', 'pf-m-expanded');
      });
    });
  });

  describe('Additional Options OverflowMenu Large', () => {
    context('List view', () => {
      beforeEach(() => {
        cy.viewport(992, 800);
      });

      it('displays OverflowMenuContent and OverflowMenuControl', () => {
        cy.get('#additional-options-overflow-menu .pf-c-overflow-menu__content, #additional-options-overflow-menu .pf-c-overflow-menu__control').should('be.visible');
      });
    });

    context('Dropdown view', () => {
      beforeEach(() => {
        cy.viewport(991, 800);
      });

      it('displays OverflowMenuControl', () => {
        cy.get('#additional-options-overflow-menu .pf-c-overflow-menu__control').should('be.visible');
        cy.get('#additional-options-overflow-menu .pf-c-overflow-menu__content').should('not.be.visible');
        cy.get('#additional-options-overflow-menu .pf-c-overflow-menu__group, #additional-options-overflow-menu .pf-c-overflow-menu__item').should('have.attr', 'hidden');
      });

      it('Verify toggle dropdown', () => {
        cy.get('#additional-options-overflow-menu button').should('have.class', 'pf-c-dropdown__toggle'); 
      });
    
      it('Verify dropdown menu expanded', () => {
        cy.get('#additional-options-overflow-menu button').last().click();
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
        cy.get('#persist-overflow-menu .pf-c-overflow-menu__content, #persist-overflow-menu .pf-c-overflow-menu__control').should('be.visible');
      });
    });

    context('Dropdown view', () => {
      beforeEach(() => {
        cy.viewport(1199, 800);
      });

      it('displays OverflowMenuControl and Persistent items', () => {
        cy.get('#persist-overflow-menu .pf-c-overflow-menu__control').should('be.visible');
        cy.get(`#persist-overflow-menu .pf-c-overflow-menu__content .pf-c-overflow-menu__group.pf-m-persistent,
        #persist-overflow-menu .pf-c-overflow-menu__content .pf-c-overflow-menu__item.pf-m-persistent`).should('be.visible');
        cy.get('#persist-overflow-menu .pf-c-overflow-menu__group:not(.pf-m-persistent), #persist-overflow-menu .pf-c-overflow-menu__item:not(.pf-m-persistent)').should('have.attr', 'hidden');
      });

      it('Verify toggle dropdown', () => {
        cy.get('#persist-overflow-menu button').should('have.class', 'pf-c-dropdown__toggle'); 
      });
    
      it('Verify dropdown menu expanded', () => {
        cy.get('#persist-overflow-menu button').last().click();
        cy.get('#persist-overflow-menu .pf-c-dropdown').should('have.class', 'pf-m-expanded');
      });
    });
  });
}); 
