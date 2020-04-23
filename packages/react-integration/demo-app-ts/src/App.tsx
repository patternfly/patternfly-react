import React from 'react';
import {
  Page,
  Nav,
  NavList,
  NavItem,
  NavVariants,
  PageSection,
  SkipToContent,
  PageSidebar,
  Avatar,
  Brand,
  PageHeader,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownToggle,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import imgBrand from './assets/images/imgBrand.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import imgAvatar from './assets/images/imgAvatar.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Demos from './Demos';

interface AppState {
  activeItem: number | string;
  isNavOpen: boolean;
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    activeItem: '',
    isNavOpen: true
  };

  private onNavSelect = (selectedItem: { itemId: number | string }) => {
    this.setState({ activeItem: selectedItem.itemId });
  };

  private getNav = () => {
    const { activeItem } = this.state;
    return (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList variant={NavVariants.simple}>
          {Demos.map((demo, index) => (
            <NavItem itemId={index} isActive={activeItem === index} key={demo.id}>
              <Link id={`${demo.id}-nav-item-link`} to={`/${demo.id}-nav-link`}>
                {demo.name}
              </Link>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    );
  };

  private getPages = () => (
    <React.Fragment>
      {Demos.map(demo => (
        <Route
          path={`/${demo.id}-nav-link`}
          render={() => (
            <PageSection style={{ zIndex: 2 }} id={`/${demo.id}-page-section`}>
              {React.createElement(demo.componentType)}
            </PageSection>
          )}
          key={demo.id}
        />
      ))}
    </React.Fragment>
  );

  private pageId = 'ts-demo-app-page-id';
  private getSkipToContentLink = () => <SkipToContent href={`#${this.pageId}`}>Skip to Content</SkipToContent>;

  render() {
    const { isNavOpen } = this.state;

    const AppToolbar = (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarItem>
            <Button id="simple-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem>
            <Dropdown
              isPlain
              position="right"
              isOpen={false}
              toggle={<DropdownToggle onToggle={() => {}}>User</DropdownToggle>}
              dropdownItems={[]}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    const AppHeader = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        toolbar={AppToolbar}
        avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={() => this.setState({ isNavOpen: !isNavOpen })}
      />
    );

    const AppSidebar = <PageSidebar isNavOpen={isNavOpen} nav={this.getNav()} />;

    return (
      <Router>
        <Page
          header={AppHeader}
          sidebar={AppSidebar}
          skipToContent={this.getSkipToContentLink()}
          isManagedSidebar
          mainContainerId={this.pageId}
        >
          {this.getPages()}
        </Page>
      </Router>
    );
  }
}

export default App;
