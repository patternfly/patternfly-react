import React from 'react';
import {
  Avatar,
  Badge,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Card,
  CardHead,
  CardHeader,
  CardActions,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
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
import { BellIcon, CheckCircleIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';
import iconActiveMq from './icons/activemq.png';
import iconAvro from './icons/avro.png';
import iconAzure from './icons/azure.png';
import iconSaxon from './icons/camel-saxon.png';
import iconDataGrid from './icons/data-grid.png';
import iconDropbox from './icons/dropbox.png';
import iconFuseRest from './icons/fuse-rest.png';
import iconPfLogo from './icons/pf-logo-small.svg';
import iconSpark from './icons/spark.png';
import iconSwagger from './icons/swagger.png';

class BasicCardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
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
    const Sidebar = <PageSidebar nav={PageNav} />;
    const pageId = 'main-content-page-layout-default-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

    return (
      <React.Fragment>
        <Page
          header={Header}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
          className="pf-m-redhat-font"
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Projects</Text>
              <Text component="p">
                This is a demo that showcases PatternFly Cards.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconPfLogo} alt="PF Logo" />
                  <CardActions>
                    <Badge isRead>Community</Badge>
                  </CardActions>
                </CardHead>
                <CardHeader>
                  <p>PatternFly</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                  PatternFly is a community project that promotes design commonality and improves user experience.
                </CardBody>
              </Card>
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconActiveMq} alt="Active MQ" width="60" />
                  <CardActions>
                    <Badge isRead>Community</Badge>
                  </CardActions>
                </CardHead>
                <CardHeader>
                  <p>ActiveMQ</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be consumed from a JMS Queue or Topic using Apache ActiveMQ.
                </CardBody>
                <CardFooter style={{ display: 'flex', alignItems: 'center'}}>
                  <CheckCircleIcon style={{ fill: 'var(--pf-global--success-color--100)'}} /> &nbsp; Installed
                </CardFooter>
              </Card>
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconSpark} alt="Apache Spark" width="60" />
                  <CardActions>
                    <Badge isRead>Community</Badge>
                  </CardActions>
                </CardHead>
                <CardHeader>
                  <p>Apache Spark</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                This documentation page covers the Apache Spark component for the Apache Camel.
                </CardBody>
              </Card>
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconAvro} alt="Avro" width="60" />
                  <CardActions>
                    <Badge isRead>Community</Badge>
                  </CardActions>
                </CardHead>
                <CardHeader>
                  <p>Avro</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                This component provides a dataformat for avro, which allows serialization and deserialization of messages using Apache Avro’s binary dataformat. Moreover, it provides support for Apache Avro’s rpc, by providing producers and consumers endpoint for using avro over netty or http.
                </CardBody>
              </Card>
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconAzure} alt="Azure Services" width="60" />
                </CardHead>
                <CardHeader>
                  <p>Azure Services</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                The Camel Components for Windows Azure Services provide connectivity to Azure services from Camel.
                </CardBody>
                <CardFooter style={{ display: 'flex', alignItems: 'center'}}>
                  <CheckCircleIcon style={{ fill: 'var(--pf-global--success-color--100)'}} /> &nbsp; Installed
                </CardFooter>
              </Card>
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconSaxon} alt="Crypto" width="60" />
                </CardHead>
                <CardHeader>
                  <p>Crypto</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                For providing flexible endpoints to sign and verify exchanges using the Signature Service of the Java Cryptographic Extension.
                </CardBody>
                <CardFooter style={{ display: 'flex', alignItems: 'center'}}>
                  <CheckCircleIcon style={{ fill: 'var(--pf-global--success-color--100)'}} /> &nbsp; Installed
                </CardFooter>
              </Card>
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconDropbox} alt="Dropbox" width="60" />
                </CardHead>
                <CardHeader>
                  <p>DropBox</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                The dropbox: component allows you to treat Dropbox remote folders as a producer or consumer of messages.
                </CardBody>
              </Card>
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconDataGrid} alt="JBoss Data Grid" width="60" />
                </CardHead>
                <CardHeader>
                  <p>JBoss Data Grid</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                Read or write to a fully-supported distributed cache and data grid for faster integration services.
                </CardBody>
              </Card>
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconFuseRest} alt="Rest" width="60" />
                  <CardActions>
                    <Badge isRead>Community</Badge>
                  </CardActions>
                </CardHead>
                <CardHeader>
                  <p>REST</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                The rest component allows to define REST endpoints (consumer) using the Rest DSL and plugin to other Camel components as the REST transport. From Camel 2.18 onwards the rest component can also be used as a client (producer) to call REST services.
                </CardBody>
              </Card>
              <Card isHoverable isCompact>
                <CardHead>
                  <img src={iconSwagger} alt="Swagger" width="60" />
                  <CardActions>
                    <Badge isRead>Community</Badge>
                  </CardActions>
                </CardHead>
                <CardHeader>
                  <p>SWAGGER</p>
                  <div class="pf-c-content">
                    <small>Provided by Red Hat</small>
                  </div>
                </CardHeader>
                <CardBody>
                Expose REST services and their APIs using Swagger specification.
                </CardBody>
              </Card>
            </Gallery>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default BasicCardView;
