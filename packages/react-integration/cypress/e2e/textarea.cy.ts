describe('Text Area Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/text-area-nav-link');
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
      .then((textarea) => {
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
      .then((textarea) => {
        expect(textarea.attr('aria-invalid')).to.be.equal('true');
      });
  });

  it('Verify Text Area can has horizontally resizable attribute', () => {
    cy.get('.pf-m-resize-horizontal > #textarea3').should('exist');
    cy.get('#textarea3').should('have.value', '');
    cy.get('#textarea3').type('testing');
    cy.get('#textarea3').should('have.value', 'testing');
    // Clear text area and verify it is invalid
    cy.get('#textarea3')
      .clear()
      .then((textarea) => {
        expect(textarea.attr('aria-invalid')).to.be.equal('true');
      });
  });

  it('Verify Text Area can has vertically resizable attribute', () => {
    cy.get('.pf-m-resize-vertical > #textarea4').should('exist');
    cy.get('#textarea4').should('have.value', '');
    cy.get('#textarea4').type('testing');
    cy.get('#textarea4').should('have.value', 'testing');
    // Clear text area and verify it is invalid
    cy.get('#textarea4')
      .clear()
      .then((textarea) => {
        expect(textarea.attr('aria-invalid')).to.be.equal('true');
      });
  });

  it('Verify Text Area can be validated using validated prop', () => {
    cy.get('.pf-m-success > #textarea5').should('not.exist');
    cy.get('#textarea5').then((textarea) => {
      expect(textarea.attr('aria-invalid')).to.be.equal('false');
    });
    cy.get('#textarea5').should('have.value', '');
    // Type string value less than 5 characters so it is invalid
    cy.get('#textarea5').type('test');
    cy.get('#textarea5').should('have.value', 'test');
    cy.get('#textarea5').then((textarea) => {
      expect(textarea.attr('aria-invalid')).to.be.equal('true');
    });
    // Clear text area and type string longer than 5 Characters so it is valid
    cy.get('#textarea5').clear().type('testing').should('have.value', 'testing');
    cy.get('.pf-m-success > #textarea5').should('exist');
    cy.get('#textarea5').then((textarea) => {
      expect(textarea.attr('aria-invalid')).to.be.equal('false');
    });
    // Clear text area and verify it is warning
    cy.get('#textarea5')
      .clear()
      .then((textarea) => {
        expect(textarea.attr('aria-invalid')).to.be.equal('false');
      });
    cy.get('.pf-m-warning > #textarea5').should('exist');
  });

  it('Verify Text Area can not be changed when disabled', () => {
    cy.get('#textarea6-a').should('be.disabled');
    cy.get('#textarea6-a').type('testing', { force: true });
    cy.get('#textarea6-a').should('have.value', 'disabled text area');

    cy.get('#textarea6-b').should('be.disabled');
    cy.get('#textarea6-a').type('testing', { force: true });
    cy.get('#textarea6-b').should('have.value', 'isDisabled text area');

    cy.get('#textarea7-a').type('testing', { force: true });
    cy.get('#textarea7-a').should('have.value', 'readOnly text area');

    cy.get('#textarea7-b').type('testing', { force: true });
    cy.get('#textarea7-b').should('have.value', 'isReadOnly text area');
  });

  it('Verify text area autoresizes', () => {
    cy.get('#autoResize')
      .invoke('outerHeight')
      .then((startingHeight) => {
        cy.get('#autoResize').type('0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n0');
        cy.get('#autoResize').invoke('outerHeight').should('be.gt', startingHeight);
      });
  });
});
