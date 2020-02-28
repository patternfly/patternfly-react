describe('Text Area Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#text-area-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/text-area-nav-link');
  });

  it('Verify Text area exist', () => {
    cy.get('#textarea1').should('exist');
  });

  it('Verify Required Text area exist', () => {
    cy.get('#textarea2').should('exist');
  });

  it('Verify Horizontally resizable Text area exist', () => {
    cy.get('#textarea3').should('exist');
  });

  it('Verify Vertically resizable Text area exist', () => {
    cy.get('#textarea4').should('exist');
  });

  it('Verify Text Area can be updated and that invalid is applied', () => {
    cy.get('#textarea1').should('have.value', '');
    cy.get('#textarea1').type('testing');
    cy.get('#textarea1').should('have.value', 'testing');
    // Clear text area and verify it is invalid
    cy.get('#textarea1')
      .clear()
      .then(textarea => {
        expect(textarea.attr('aria-invalid')).to.be.equal('true');
      });
  });

  it('Verify Required Text Area can be updated and that invalid is applied', () => {
    // Verify it is required
    cy.get('#textarea2').should('have.attr', 'required');
    cy.get('#textarea2').should('have.value', '');
    cy.get('#textarea2').type('testing');
    cy.get('#textarea2').should('have.value', 'testing');
    // Clear text area and verify it is invalid
    cy.get('#textarea2')
      .clear()
      .then(textarea => {
        expect(textarea.attr('aria-invalid')).to.be.equal('true');
      });
  });

  it('Verify Text Area can has horizontally resizable attribute', () => {
    cy.get('#textarea3.pf-m-resize-horizontal').should('exist');
    cy.get('#textarea3').should('have.value', '');
    cy.get('#textarea3').type('testing');
    cy.get('#textarea3').should('have.value', 'testing');
    // Clear text area and verify it is invalid
    cy.get('#textarea3')
      .clear()
      .then(textarea => {
        expect(textarea.attr('aria-invalid')).to.be.equal('true');
      });
  });

  it('Verify Text Area can has vertically resizable attribute', () => {
    cy.get('#textarea4.pf-m-resize-vertical').should('exist');
    cy.get('#textarea4').should('have.value', '');
    cy.get('#textarea4').type('testing');
    cy.get('#textarea4').should('have.value', 'testing');
    // Clear text area and verify it is invalid
    cy.get('#textarea4')
      .clear()
      .then(textarea => {
        expect(textarea.attr('aria-invalid')).to.be.equal('true');
      });
  });

  it('Verify Text Area can be validated using validated prop', () => {
    cy.get('#textarea5.pf-m-success').should('not.exist');
    cy.get('#textarea5').then(textarea => {
      expect(textarea.attr('aria-invalid')).to.be.equal('false');
    });
    cy.get('#textarea5').should('have.value', '');
    // Type string value less than 5 characters so it is invalid
    cy.get('#textarea5').type('test');
    cy.get('#textarea5').should('have.value', 'test');
    cy.get('#textarea5').then(textarea => {
      expect(textarea.attr('aria-invalid')).to.be.equal('true');
    });
    // Clear text area and y=type string longer than 5 Characters so it is valid
    cy.get('#textarea5')
      .clear()
      .type('testing')
      .should('have.value', 'testing');
    cy.get('#textarea5.pf-m-success').should('exist');
    cy.get('#textarea5').then(textarea => {
      expect(textarea.attr('aria-invalid')).to.be.equal('false');
    });
    // Clear text area and verify it is invalid
    cy.get('#textarea5')
      .clear()
      .then(textarea => {
        expect(textarea.attr('aria-invalid')).to.be.equal('true');
      });
  });
});
