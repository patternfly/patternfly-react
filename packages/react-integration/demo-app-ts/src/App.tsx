import { Component, createElement } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {
  Avatar,
  Brand,
  Masthead,
  MastheadLogo,
  MastheadBrand,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavList,
  NavItem,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  Radio,
  SkipToContent,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import imgBrand from './assets/images/imgBrand.svg';
import imgAvatar from './assets/images/imgAvatar.svg';
import Demos from './Demos';
import './App.css';

interface AppState {
  activeItem: number | string;
  isNavOpen: boolean;
  isDarkTheme: boolean;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    activeItem: '',
    isNavOpen: true,
    isDarkTheme: false
  };

  private onNavSelect = (_event: React.FormEvent<HTMLInputElement>, selectedItem: { itemId: number | string }) => {
    this.setState({ activeItem: selectedItem.itemId });
  };

  private onNavToggle = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  private onThemeSelect = (isDarkTheme: boolean) => {
    this.setState({ isDarkTheme });
    const htmlElement = document.getElementsByTagName('html')[0];
    if (htmlElement) {
      if (isDarkTheme) {
        htmlElement.classList.add('pf-theme-dark');
      } else {
        htmlElement.classList.remove('pf-theme-dark');
      }
    }
  };

  private getPages = () => {
    const defaultDemo = Demos.find((demo) => demo.isDefault);
    return (
      <Routes>
        {Demos.map((demo) => (
          <Route
            path={`/${demo.id}-nav-link`}
            element={<PageSection id={`/${demo.id}-page-section`}>{createElement(demo.componentType)}</PageSection>}
            key={demo.id}
          />
        ))}
        {defaultDemo ? (
          <Route
            path="/"
            element={
              <PageSection id={`/${defaultDemo.id}-page-section`}>
                {createElement(defaultDemo.componentType)}
              </PageSection>
            }
            key={defaultDemo.id}
          />
        ) : null}
      </Routes>
    );
  };

  private pageId = 'ts-demo-app-page-id';
  private getSkipToContentLink = () => <SkipToContent href={`#${this.pageId}`}>Skip to Content</SkipToContent>;

  render() {
    const { isNavOpen, activeItem, isDarkTheme } = this.state;

    const AppToolbar = (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarItem style={{ marginRight: '10px' }}>
            <Radio
              id="light-theme"
              aria-label="Light theme"
              label={`Light theme`}
              name="light-theme"
              isChecked={!isDarkTheme}
              onChange={(_event: React.FormEvent<HTMLInputElement>, checked: boolean) =>
                checked && this.onThemeSelect(false)
              }
            />
          </ToolbarItem>
          <ToolbarItem>
            <Radio
              id="dark-theme"
              label="Dark theme"
              aria-label="Dark theme"
              name="dark-theme"
              isChecked={isDarkTheme}
              onChange={(_event: React.FormEvent<HTMLInputElement>, checked: boolean) =>
                checked && this.onThemeSelect(true)
              }
            />
          </ToolbarItem>
        </ToolbarGroup>
        <Avatar src={imgAvatar} alt="Avatar image" />
      </Toolbar>
    );

    const AppMasthead = (
      <Masthead>
        <MastheadMain>
          <MastheadToggle>
            <PageToggleButton onSidebarToggle={this.onNavToggle} isHamburgerButton aria-label="Global navigation" />
          </MastheadToggle>
          <MastheadBrand>
            <MastheadLogo>
              <Brand src={imgBrand} alt="PatternFly" heights={{ default: '36px' }} />
            </MastheadLogo>
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>{AppToolbar}</MastheadContent>
      </Masthead>
    );

    const nav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
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

    const AppSidebar = (
      <PageSidebar isSidebarOpen={isNavOpen}>
        <PageSidebarBody>{nav}</PageSidebarBody>
      </PageSidebar>
    );

    return (
      <Router>
        <Page
          masthead={AppMasthead}
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
