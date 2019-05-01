import React, { Component } from 'react';
import { Page, Nav, NavList, NavItem, NavVariants, PageSection } from '@patternfly/react-core';
import { AppHeader, AppSidebar } from './components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
        { Demos.map((demo, index) => {
           return (<NavItem to="#nav-link1" itemId={index} isActive={activeItem === index}>
            {demo.name}
          </NavItem>)
          })
        }
        </NavList>
      </Nav>
    );
  };

  private getPages = () => {
    return (<React.Fragment>
      { Demos.map(demo => {
         return (<PageSection>
          {React.createElement(demo.componentType)}
         </PageSection>)
      }) }
    </React.Fragment>)
  };

  render() {
    //const { isExpanded, selected, checkboxIsExpanded, checked } = this.state;
    return (
      <React.Fragment>
        <Page header={<AppHeader />} sidebar={<AppSidebar nav={this.getNav()} />} isManagedSidebar>
          {this.getPages()}
        </Page>
      </React.Fragment>
    );
  }
}

export default App;
