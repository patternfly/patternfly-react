import React, { Component } from 'react';
import { Page, Nav, NavList, NavItem, NavVariants, PageSection } from '@patternfly/react-core';
import { AppHeader, AppSidebar } from './components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Demos from './Demos';

class App extends React.Component {
  state = {
    activeItem: null
  };

  private onNavSelect = (selectedItem: { itemId: number }) => {
    this.setState({ activeItem: selectedItem.itemId });
  };

  private getNav = () => {
    const { activeItem } = this.state;
    return (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList variant={NavVariants.simple}>
          {Demos.map((demo, index) => {
            return (
              <NavItem itemId={index} isActive={activeItem === index}>
                <Link to={`/nav-link${index}`}>{demo.name}</Link>
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
    );
  };

  private getPages = () => {
    return (
      <React.Fragment>
        {Demos.map((demo, index) => {
          return (
            <Route
              path={`/nav-link${index}`}
              render={({ match }) => <PageSection>{React.createElement(demo.componentType)}</PageSection>}
            />
          );
        })}
      </React.Fragment>
    );
  };

  render() {
    return (
      <Router>
        <Page header={<AppHeader />} sidebar={<AppSidebar nav={this.getNav()} />} isManagedSidebar>
          {this.getPages()}
        </Page>
      </Router>
    );
  }
}

export default App;
