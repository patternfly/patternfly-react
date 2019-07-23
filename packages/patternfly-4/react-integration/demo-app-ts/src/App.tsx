import React, { Component } from 'react';
import { Page, Nav, NavList, NavItem, NavVariants, PageSection, SkipToContent } from '@patternfly/react-core';
import { AppHeader, AppSidebar } from './components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Demos from './Demos';

class App extends React.Component {
  state = {
    activeItem: null
  };

  private onNavSelect = (selectedItem: { itemId: number | string }) => {
    this.setState({ activeItem: selectedItem.itemId });
  };

  private getNav = () => {
    const { activeItem } = this.state;
    return (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList variant={NavVariants.simple}>
          {Demos.map((demo, index) => {
            return (
              <NavItem itemId={index} isActive={activeItem === index} key={demo.id}>
                <Link id={`${demo.id}-nav-item-link`} to={`/${demo.id}-nav-link`}>{demo.name}</Link>
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
        {Demos.map((demo) => {
          return (
            <Route
              path={`/${demo.id}-nav-link`}
              render={({ match }) => <PageSection style={{zIndex: 2}} id={`/${demo.id}-page-section`}>{React.createElement(demo.componentType)}</PageSection>}
              key={demo.id}
            />
          );
        })}
      </React.Fragment>
    );
  };

  private pageId = 'ts-demo-app-page-id';
  private getSkipToContentLink = () => (
    <SkipToContent href={`#${this.pageId}`}>Skip to Content</SkipToContent>
  );

  render() {
    return (
      <Router>
        <Page
          header={<AppHeader />}
          sidebar={<AppSidebar nav={this.getNav()} />}
          skipToContent={this.getSkipToContentLink()}
          isManagedSidebar
          mainContainerId={this.pageId}>
          {this.getPages()}
        </Page>
      </Router>
    );
  }
}

export default App;
