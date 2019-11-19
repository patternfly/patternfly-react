describe('Form Select Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#form-select-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/form-select-demo-nav-link');
  });

  it('Verify default value content', () => {
    cy.get('#select1').should('have.value', '2');
  });

  it('Verify form allows correct selection', () => {
    cy.get('#select1')
      .select('3')
      .should('have.value', '3');
  });

  it('Verify disabled select', () => {
    cy.get('#select1.pf-c-form-control')
      .find('optgroup[label="Group3"]')
      .should('be.disabled');
  });

  it('Verify validated  select', () => {
    cy.get('#validated-select');
    cy.get('#validated-select.pf-m-success').should('not.exist');
    cy.get('#validated-select').then(select => {
      expect(select.attr('aria-invalid')).to.be.equal('false');
    });
    // Select value other than 3 so it is invalid
    cy.get('#validated-select')
      .select('1')
      .should('have.value', '1');
    cy.get('#validated-select').then(select => {
      expect(select.attr('aria-invalid')).to.be.equal('true');
    });
    // Select value of 3 so it is valid
    cy.get('#validated-select')
      .select('3')
      .should('have.value', '3');
    cy.get('#validated-select').then(select => {
      expect(select.attr('aria-invalid')).to.be.equal('false');
    });
    cy.get('#validated-select.pf-m-success').should('exist');
  });
});
