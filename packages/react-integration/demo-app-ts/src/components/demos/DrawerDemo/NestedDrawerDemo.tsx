import React from 'react';
import {
  Button,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerProps,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar
} from '@patternfly/react-core';

interface DrawerDemoState {
  isResizing: boolean;
  isExpanded: boolean;
  isNavOpen: boolean;
}

export class NestedDrawerDemo extends React.Component<DrawerProps, DrawerDemoState> {
  static displayName = 'DrawerInDrawerDemo';
  drawerRef: React.RefObject<HTMLButtonElement>;
  onExpand: () => void;
  onClick: () => void;
  onCloseClick: () => void;
  onNavToggle: () => void;

  constructor(props: DrawerProps) {
    super(props);
    this.state = {
      isExpanded: false,
      isResizing: false,
      isNavOpen: true
    };
    this.drawerRef = React.createRef<HTMLButtonElement>();

    this.onExpand = () => {
      this.drawerRef.current && this.drawerRef.current.focus();
    };

    this.onClick = () => {
      const isExpanded = !this.state.isExpanded;
      this.setState({
        isExpanded
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false
      });
    };

    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  render() {
    const { isNavOpen, isExpanded } = this.state;

    const logoProps = {
      href: 'https://patternfly.org',
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={logoProps}
        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

    const panelContent = (
      <DrawerPanelContent isResizable>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>
            drawer-panel1
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const panelContent2 = (
      <DrawerPanelContent isResizable>
        <DrawerHead>
          <span tabIndex={isExpanded ? 0 : -1} ref={this.drawerRef}>
            drawer-panel2
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    return (
      <React.Fragment>
        <Button aria-expanded={isExpanded} onClick={this.onClick}>
          Toggle Drawer
        </Button>
        <Drawer isExpanded={isExpanded} onExpand={this.onExpand}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>
              <Page header={Header} sidebar={Sidebar}>
                <Drawer isExpanded={isExpanded} onExpand={this.onExpand}>
                  <DrawerContent panelContent={panelContent2}>
                    <DrawerContentBody>Page contents.</DrawerContentBody>
                  </DrawerContent>
                </Drawer>
              </Page>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
