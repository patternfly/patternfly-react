import React from 'react';
import {
  Button,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerSection,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerProps
} from '@patternfly/react-core';

type fild = 'isExpanded1' | 'isExpanded2' | 'isExpanded3' | 'isExpanded4';

type DrawerDemoState = {
  [x in fild]?: boolean;
};

export class DrawerInDrawerDemo extends React.Component<DrawerProps, DrawerDemoState> {
  static displayName = 'DrawerInDrawerDemo';
  constructor(props: DrawerProps) {
    super(props);
    this.state = {
      isExpanded1: false,
      isExpanded2: false,
      isExpanded3: false,
      isExpanded4: false
    };
  }
  drawerRef1 = React.createRef<HTMLButtonElement>();
  drawerRef2 = React.createRef<HTMLButtonElement>();
  drawerRef3 = React.createRef<HTMLButtonElement>();
  drawerRef4 = React.createRef<HTMLButtonElement>();

  onExpand = (ref: React.RefObject<HTMLButtonElement>) => () => {
    ref.current && ref.current.focus();
  };

  onClick = (field: fild) => () => {
    const isExpanded = !this.state[field];
    this.setState({ [field]: isExpanded });
  };

  onCloseClick = (field: fild) => () => {
    this.setState({
      [field]: false
    });
  };

  render() {
    const panelContent = (
      widths: any,
      drawerRef: React.RefObject<HTMLButtonElement>,
      isExpandedProp: fild,
      toggleProp: fild,
      drawerContent: React.ReactNode
    ) => (
      <DrawerPanelContent widths={widths} isResizable increment={50}>
        <DrawerHead>
          <span ref={drawerRef} tabIndex={this.state[isExpandedProp] ? 0 : -1}>
            {isExpandedProp}
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick(isExpandedProp)} />
          </DrawerActions>
        </DrawerHead>
        <Button id="toggleButton" onClick={this.onClick(toggleProp)}>
          Toggle Drawer
        </Button>
        {drawerContent}
      </DrawerPanelContent>
    );

    const panelContent4 = <>panel-conentent4</>;
    const panelContent4w = panelContent(
      {
        default: 'width_50'
      },
      this.drawerRef4,
      'isExpanded4',
      'isExpanded4',
      panelContent4
    );

    const panelContent3 = (
      <>
        <Drawer
          id="drawer4"
          isExpanded={this.state.isExpanded4}
          onExpand={this.onExpand(this.drawerRef4)}
          position="left"
        >
          <DrawerSection id="drawerSection3">drawer-section4</DrawerSection>
          <DrawerContent panelContent={panelContent4w}>
            <DrawerContentBody>content3</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </>
    );

    const panelContent3w = panelContent(
      {
        default: 'width_50'
      },
      this.drawerRef3,
      'isExpanded3',
      'isExpanded4',
      panelContent3
    );

    const panelContent2 = (
      <>
        <Drawer
          id="drawer3"
          isExpanded={this.state.isExpanded3}
          onExpand={this.onExpand(this.drawerRef3)}
          position="bottom"
        >
          <DrawerSection id="drawerSection3">drawer-section3</DrawerSection>
          <DrawerContent panelContent={panelContent3w}>
            <DrawerContentBody>content3</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </>
    );

    const panelContent2w = panelContent(
      {
        default: 'width_50'
      },
      this.drawerRef2,
      'isExpanded2',
      'isExpanded3',
      panelContent2
    );

    const panelContent1 = (
      <>
        <Drawer
          id="drawer2"
          isExpanded={this.state.isExpanded2}
          onExpand={this.onExpand(this.drawerRef2)}
          position="bottom"
        >
          <DrawerSection id="drawerSection2">drawer-section2</DrawerSection>
          <DrawerContent panelContent={panelContent2w}>
            <DrawerContentBody>content2</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </>
    );

    const panelContent1w = panelContent(
      {
        default: 'width_100',
        lg: 'width_50',
        xl: 'width_33',
        '2xl': 'width_25'
      },
      this.drawerRef1,
      'isExpanded1',
      'isExpanded2',
      panelContent1
    );

    return (
      <React.Fragment>
        <Button id="toggleButton" onClick={this.onClick('isExpanded1')}>
          Toggle Drawer
        </Button>
        <Drawer
          id="drawer1"
          isExpanded={this.state.isExpanded1}
          onExpand={this.onExpand(this.drawerRef1)}
          position="bottom"
        >
          <DrawerSection id="drawerSection1">drawer-section1</DrawerSection>
          <DrawerContent panelContent={panelContent1w}>
            <DrawerContentBody>content1</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </React.Fragment>
    );
  }
}
