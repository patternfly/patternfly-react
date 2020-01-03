---
title: 'Card View'
section: 'demos'
experimentalStage: 'early'
---

import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardHead,
  CardActions,
  CardHeader,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from '../../PageLayout/examples/imgBrand.svg';
import imgAvatar from '../../PageLayout/examples/imgAvatar.svg';
import activeMQIcon from './activemq-core_200x150.png';
import avroIcon from './camel-avro_200x150.png';
import dropBoxIcon from './camel-dropbox_200x150.png';
import infinispanIcon from './camel-infinispan_200x150.png';
import saxonIcon from './camel-saxon_200x150.png';
import sparkIcon from './camel-spark_200x150.png';
import swaggerIcon from './camel-swagger-java_200x150.png';
import azureIcon from './FuseConnector_Icons_AzureServices.png';
import restIcon from './FuseConnector_Icons_REST.png';

This is a demo that showcases Patternfly cards.

## Examples

```js title=Default-nav isFullscreen
import React from 'react';
import {
Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardHead,
  CardActions,
  CardHeader,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.svg';
import imgAvatar from './imgAvatar.svg';
import activeMQIcon from './activemq-core_200x150.png';
import avroIcon from './camel-avro_200x150.png';
import dropBoxIcon from './camel-dropbox_200x150.png';
import infinispanIcon from './camel-infinispan_200x150.png';
import saxonIcon from './camel-saxon_200x150.png';
import sparkIcon from './camel-spark_200x150.png';
import swaggerIcon from './camel-swagger-java_200x150.png';
import azureIcon from './FuseConnector_Icons_AzureServices.png';
import restIcon from './FuseConnector_Icons_REST.png';

class CardViewDefaultNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      check1: false,
      activeItem: 0
    };
    this.onDropdownToggle = isDropdownOpen => {
      this.setState({
        isDropdownOpen
      });
    };

    this.onDropdownSelect = event => {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen
      });
    };

    this.onKebabDropdownToggle = isKebabDropdownOpen => {
      this.setState({
        isKebabDropdownOpen
      });
    };

    this.onKebabDropdownSelect = event => {
      this.setState({
        isKebabDropdownOpen: !this.state.isKebabDropdownOpen
      });
    };

    this.onNavSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };

    this.onClick = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
    };
  }

  

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav" theme="dark">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="default-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="default-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Kyle Baker</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
        showNavToggle
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} theme="dark" />;
    const pageId = 'main-content-card-view-default-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

    /* const PageBreadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    ); */

    return (
      <React.Fragment>
        <Page
          header={Header}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main Title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
              {Array.apply(0, Array(1)).map((x, i) => (
               <React.Fragment>
                <GalleryItem key={0}>
                    <Card isHoverable>
                          <CardHead>
                                <img src={imgBrand} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                            </CardHead>
                          <CardHeader>Patternfly</CardHeader>
                        <CardBody>
                            PatternFly is a community project that promotes design commonality and improves user experience.
                        </CardBody>
                    </Card>
                    </GalleryItem>
                    <GalleryItem key={1}>
                    <Card isHoverable>
                    <CardHead>
                                <img src={activeMQIcon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                      isOpen={isKebabDropdownOpen}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                            </CardHead>
                          <CardHeader>ActiveMQ</CardHeader>
                        <CardBody>
                            The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be consumed from a JMS Queue or Topic using Apache ActiveMQ.
                        </CardBody>
                    </Card>
                </GalleryItem>
                <GalleryItem key={2}>
                    <Card isHoverable>
                      <CardHead>
                                <img src={sparkIcon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                      isOpen={isKebabDropdownOpen}
                                      dropdownItems={kebabDropdownItems}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                            </CardHead>
                          <CardHeader>Apache Spark</CardHeader>
                          <CardBody>
                            This documentation page covers the Apache Spark component for the Apache Camel.
                        </CardBody>
                    </Card>
                </GalleryItem>
                <GalleryItem key={3}>
                    <Card isHoverable>
                       <CardHead>
                                <img src={avroIcon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                      isOpen={isKebabDropdownOpen}
                                      dropdownItems={kebabDropdownItems}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                            </CardHead>
                        <CardHeader>Avro</CardHeader>
                        <CardBody>
                            This component provides a dataformat for avro, which allows serialization and deserialization of messages using Apache Avro’s binary dataformat. Moreover, it provides support for Apache Avro’s rpc, by providing producers and consumers endpoint for using avro over netty or http.
                        </CardBody>
                    </Card>
                </GalleryItem>
                <GalleryItem key={4}>
                    <Card isHoverable>
                        <CardHead>
                                <img src={azureIcon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                      isOpen={isKebabDropdownOpen}
                                      dropdownItems={kebabDropdownItems}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                          </CardHead>
                    <CardHeader>Azure Services</CardHeader>
                        <CardBody>
                            The Camel Components for Windows Azure Services provide connectivity to Azure services from Camel.
                        </CardBody>
                    </Card>
                </GalleryItem>
                <GalleryItem key={5}>
                    <Card isHoverable>
                        <CardHead>
                                <img src={saxonIcon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                      isOpen={isKebabDropdownOpen}
                                      dropdownItems={kebabDropdownItems}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                          </CardHead>
                    <CardHeader>Crypto</CardHeader>
                        <CardBody>
                            For providing flexible endpoints to sign and verify exchanges using the Signature Service of the Java Cryptographic Extension.
                        </CardBody>
                    </Card>
                </GalleryItem>
                <GalleryItem key={6}>
                    <Card isHoverable>
                        <CardHead>
                                <img src={dropBoxIcon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                      isOpen={isKebabDropdownOpen}
                                      dropdownItems={kebabDropdownItems}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                          </CardHead>
                     <CardHeader>DropBox</CardHeader>
                        <CardBody>
                            The dropbox: component allows you to treat Dropbox remote folders as a producer or consumer of messages.
                        </CardBody>
                    </Card>
                </GalleryItem>
                <GalleryItem key={7}>
                    <Card isHoverable style={{height: "1.5 rem"}}>
                        <CardHead>
                                <img src={infinispanIcon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                      isOpen={isKebabDropdownOpen}
                                      dropdownItems={kebabDropdownItems}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                          </CardHead>
                    <CardHeader>JBoss Data Grid</CardHeader>
                        <CardBody>
                            Read or write to a fully-supported distributed cache and data grid for faster integration services.
                        </CardBody>
                    </Card>
                </GalleryItem>
                <GalleryItem key={8}>
                    <Card isHoverable>
                        <CardHead>
                                <img src={restIcon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                      isOpen={isKebabDropdownOpen}
                                      dropdownItems={kebabDropdownItems}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                          </CardHead>
                    <CardHeader>REST</CardHeader>
                        <CardBody>
                            The rest component allows to define REST endpoints (consumer) using the Rest DSL and plugin to other Camel components as the REST transport. From Camel 2.18 onwards the rest component can also be used as a client (producer) to call REST services.
                        </CardBody>
                    </Card>
                </GalleryItem>
                <GalleryItem key={9}>
                    <Card isHoverable>
                        <CardHead>
                                <img src={swaggerIcon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={this.onKebabDropdownSelect}
                                      toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                                      isOpen={isKebabDropdownOpen}
                                      dropdownItems={kebabDropdownItems}
                                    />
                                    <input
                                    type="checkbox"
                                    isChecked={this.state.check1}
                                    onChange={this.onClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                          </CardHead>
                    <CardHeader>SWAGGER</CardHeader>
                        <CardBody>
                            Expose REST services and their APIs using Swagger specification.
                        </CardBody>
                    </Card>
                </GalleryItem>
               </React.Fragment>
              ))}
            </Gallery>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
```
