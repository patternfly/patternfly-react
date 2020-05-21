describe('Nav Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#nav-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/nav-demo-nav-link');
  });

  it('Verify Default Nav', () => {
    cy.get('#nav-primary-default .pf-c-nav__link').each((defaultNavLink: JQuery<HTMLAnchorElement>, index: number) => {
      const isCurrent = defaultNavLink.hasClass('pf-m-current');
      expect(isCurrent).to.be.equal(index === 0);
    });
    cy.get('#default-link3').then((defaultLink3: JQuery<HTMLAnchorElement>) => {
      cy.wrap(defaultLink3).click();
      cy.url().should('eq', 'http://localhost:3000/nav-demo-nav-link#default-link3');
      cy.get('#nav-primary-default .pf-c-nav__link').each(
        (defaultNavLink: JQuery<HTMLAnchorElement>, index: number) => {
          const isCurrent = defaultNavLink.hasClass('pf-m-current');
          expect(isCurrent).to.be.equal(index === 2);
        }
      );
    });
    cy.get('#default-no-navigate-link').then((noNavigateLink: JQuery<HTMLAnchorElement>) => {
      cy.wrap(noNavigateLink).click();
      cy.url().should('eq', 'http://localhost:3000/nav-demo-nav-link#default-link3');
      cy.get('#nav-primary-default .pf-c-nav__link').each(
        (defaultNavLink: JQuery<HTMLAnchorElement>, index: number) => {
          const isCurrent = defaultNavLink.hasClass('pf-m-current');
          expect(isCurrent).to.be.equal(index === 4);
        }
      );
    });
  });

  it('Verify Expandable Nav', () => {
    // All groups start open
    cy.get('#nav-primary-expandable .pf-c-nav__link[id="grp-1"]').each((expandableGroup: JQuery<HTMLAnchorElement>) => {
      expect(expandableGroup.attr('aria-expanded')).to.be.equal('true');
    });

    // Verify close and open of group 1
    cy.get('#grp-1').then((group1Link: JQuery<HTMLAnchorElement>) => {
      cy.wrap(group1Link).click();
      cy.get('#grp-1').then((updatedGroup1Link: JQuery<HTMLAnchorElement>) => {
        expect(updatedGroup1Link.attr('aria-expanded')).to.be.equal('false');
      });
      cy.get('#grp-2').then((group2Link: JQuery<HTMLAnchorElement>) => {
        expect(group2Link.attr('aria-expanded')).to.be.equal('true');
      });
      cy.wrap(group1Link).click();
      cy.get('#grp-1').then((updatedGroup1Link: JQuery<HTMLAnchorElement>) => {
        expect(updatedGroup1Link.attr('aria-expanded')).to.be.equal('true');
      });
    });

    // Verify sub-nav selections
    cy.get('#grp-1').then((group1Link: JQuery<HTMLAnchorElement>) => {
      const parent = group1Link.parent();
      expect(parent.hasClass('pf-m-current')).to.be.equal(true);
    });
    cy.get('#itm-1-1').then((item1Link: JQuery<HTMLAnchorElement>) => {
      expect(item1Link.hasClass('pf-m-current')).to.be.equal(true);
    });
    cy.get('#itm-1-2').then((item2Link: JQuery<HTMLAnchorElement>) => {
      cy.wrap(item2Link).click();
      cy.get('#itm-1-1').then((item1Link: JQuery<HTMLAnchorElement>) => {
        expect(item1Link.hasClass('pf-m-current')).to.be.equal(false);
      });
      cy.get('#itm-1-2').then((updatedItem2Link: JQuery<HTMLAnchorElement>) => {
        expect(updatedItem2Link.hasClass('pf-m-current')).to.be.equal(true);
      });
    });
    cy.get('#itm-2-2').then((item2Link: JQuery<HTMLAnchorElement>) => {
      cy.wrap(item2Link).click();
      cy.get('#itm-1-2').then((updatedItem2Link: JQuery<HTMLAnchorElement>) => {
        expect(updatedItem2Link.hasClass('pf-m-current')).to.be.equal(false);
      });
      cy.get('#grp-1').then((group1Link: JQuery<HTMLAnchorElement>) => {
        const parent = group1Link.parent();
        expect(parent.hasClass('pf-m-current')).to.be.equal(false);
      });
      cy.get('#grp-2').then((group2Link: JQuery<HTMLAnchorElement>) => {
        const parent = group2Link.parent();
        expect(parent.hasClass('pf-m-current')).to.be.equal(true);
      });
    });
  });

  it('Verify Horizontal Nav', () => {
    cy.get('#nav-primary-horizontal .pf-c-nav__link').each(
      (horizontalLink: JQuery<HTMLAnchorElement>, index: number) => {
        const isCurrent = horizontalLink.hasClass('pf-m-current');
        expect(isCurrent).to.be.equal(index === 0);
      }
    );
    cy.get('#nav-primary-horizontal #horizontal-link2').then((horizontalLink2: JQuery<HTMLAnchorElement>) => {
      cy.wrap(horizontalLink2).click();
      cy.get('#nav-primary-horizontal .pf-c-nav__link').each(
        (horaizontalNavLink: JQuery<HTMLAnchorElement>, index: number) => {
          const isCurrent = horaizontalNavLink.hasClass('pf-m-current');
          expect(isCurrent).to.be.equal(index === 1);
        }
      );
    });
  });
});
