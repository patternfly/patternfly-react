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
import { BellIcon, CogIcon, FilterIcon, TrashIcon } from '@patternfly/react-icons';
import imgBrand from '@patternfly/react-core/src/demos/PageLayout/examples/imgBrand.svg';
import imgAvatar from '@patternfly/react-core/src/demos/PageLayout/examples/imgAvatar.svg';
import pfIcon from './pf-logo-small.svg';
import activeMQIcon from './activemq-core_200x150.png';
import avroIcon from './camel-avro_200x150.png';
import dropBoxIcon from './camel-dropbox_200x150.png';
import infinispanIcon from './camel-infinispan_200x150.png';
import saxonIcon from './camel-saxon_200x150.png';
import sparkIcon from './camel-spark_200x150.png';
import swaggerIcon from './camel-swagger-java_200x150.png';
import azureIcon from './FuseConnector_Icons_AzureServices.png';
import restIcon from './FuseConnector_Icons_REST.png';

export class CardViewDefaultNavDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpperToolbarDropdownOpen: false,
      isUpperToolbarKebabDropdownOpen: false,
      isLowerToolbarDropdownOpen: false,
      isLowerToolbarKebabDropdownOpen: false,
      isCardKebabDropdownOpen0: false,
      isCardKebabDropdownOpen1: false,
      isCardKebabDropdownOpen2: false,
      isCardKebabDropdownOpen3: false,
      isCardKebabDropdownOpen4: false,
      isCardKebabDropdownOpen5: false,
      isCardKebabDropdownOpen6: false,
      isCardKebabDropdownOpen7: false,
      isCardKebabDropdownOpen8: false,
      isCardKebabDropdownOpen9: false,
      check1: false,
      activeItem: 0,
      splitButtonDropdownIsOpen: false,
      page: 1,
      perPage: 20
    };
    this.onPageDropdownToggle = isUpperToolbarDropdownOpen => {
      this.setState({
        isUpperToolbarDropdownOpen
      });
    };

    this.onPageDropdownSelect = event => {
      this.setState({
        isUpperToolbarDropdownOpen: !this.state.isUpperToolbarDropdownOpen
      });
    };

    this.onPageToolbarDropdownToggle = isPageToolbarDropdownOpen => {
      this.setState({
        isPageToolbarDropdownOpen
      });
    };

    this.onPageToolbarKebabDropdownToggle = isUpperToolbarKebabDropdownOpen => {
      this.setState({
        isUpperToolbarKebabDropdownOpen
      });
    };

    this.onToolbarDropdownToggle = isLowerToolbarDropdownOpen => {
      this.setState({
        isLowerToolbarDropdownOpen
      });
    };

    this.onToolbarDropdownSelect = event => {
      this.setState({
        isLowerToolbarDropdownOpen: !this.state.isLowerToolbarDropdownOpen
      });
    };

    this.onToolbarKebabDropdownToggle = isLowerToolbarKebabDropdownOpen => {
      this.setState({
        isLowerToolbarKebabDropdownOpen
      });
    };

    this.onToolbarKebabDropdownSelect = event => {
      this.setState({
        isLowerToolbarKebabDropdownOpen: !this.state.isLowerToolbarKebabDropdownOpen
      });
      this.onFocus();
    };

    this.onFocus = () => {
      const element = document.getElementById('toggle-id-6');
      element.focus();
    };

    this.onCardKebabDropdownToggle0 = isCardKebabDropdownOpen0 => {
      this.setState({
        isCardKebabDropdownOpen0
      });
    };

    this.onCardKebabDropdownSelect0 = event => {
      this.setState({
        isCardKebabDropdownOpen0: !this.state.isCardKebabDropdownOpen0
      });
    };

    this.onCardKebabDropdownToggle1 = isCardKebabDropdownOpen1 => {
      this.setState({
        isCardKebabDropdownOpen1
      });
    };

    this.onCardKebabDropdownSelect1 = event => {
      this.setState({
        isCardKebabDropdownOpen1: !this.state.isCardKebabDropdownOpen1
      });
    };

    this.onCardKebabDropdownToggle2 = isCardKebabDropdownOpen2 => {
      this.setState({
        isCardKebabDropdownOpen2
      });
    };

    this.onCardKebabDropdownSelect2 = event => {
      this.setState({
        isCardKebabDropdownOpen2: !this.state.isCardKebabDropdownOpen2
      });
    };

    this.onCardKebabDropdownToggle3 = isCardKebabDropdownOpen3 => {
      /* console.log("hskd"); */
      this.setState({
        isCardKebabDropdownOpen3
      });
    };

    this.onCardKebabDropdownSelect3 = event => {
      this.setState({
        isCardKebabDropdownOpen3: !this.state.isCardKebabDropdownOpen3
      });
    };

    this.onCardKebabDropdownToggle4 = isCardKebabDropdownOpen4 => {
      this.setState({
        isCardKebabDropdownOpen4
      });
    };

    this.onCardKebabDropdownSelect4 = event => {
      this.setState({
        isCardKebabDropdownOpen4: !this.state.isCardKebabDropdownOpen4
      });
    };

    this.onCardKebabDropdownToggle5 = isCardKebabDropdownOpen5 => {
      this.setState({
        isCardKebabDropdownOpen5
      });
    };

    this.onCardKebabDropdownSelect5 = event => {
      this.setState({
        isCardKebabDropdownOpen5: !this.state.isCardKebabDropdownOpen5
      });
    };

    this.onCardKebabDropdownToggle6 = isCardKebabDropdownOpen6 => {
      this.setState({
        isCardKebabDropdownOpen6
      });
    };

    this.onCardKebabDropdownSelect6 = event => {
      this.setState({
        isCardKebabDropdownOpen6: !this.state.isCardKebabDropdownOpen6
      });
    };

    this.onCardKebabDropdownToggle7 = isCardKebabDropdownOpen7 => {
      /* console.log("hskd"); */
      this.setState({
        isCardKebabDropdownOpen7
      });
    };

    this.onCardKebabDropdownSelect7 = event => {
      this.setState({
        isCardKebabDropdownOpen7: !this.state.isCardKebabDropdownOpen7
      });
    };

    this.onCardKebabDropdownToggle8 = isCardKebabDropdownOpen8 => {
      /* console.log("hskd"); */
      this.setState({
        isCardKebabDropdownOpen8
      });
    };

    this.onCardKebabDropdownSelect8 = event => {
      this.setState({
        isCardKebabDropdownOpen8: !this.state.isCardKebabDropdownOpen8
      });
    };

    this.onCardKebabDropdownToggle9 = isCardKebabDropdownOpen9 => {
      /* console.log("hskd"); */
      this.setState({
        isCardKebabDropdownOpen9
      });
    };

    this.onCardKebabDropdownSelect8 = event => {
      this.setState({
        isCardKebabDropdownOpen9: !this.state.isCardKebabDropdownOpen9
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

    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };

    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };

    this.onSplitButtonToggle = isOpen => {
      console.log('hm');
      this.setState({
        splitButtonDropdownIsOpen: isOpen
      });
    };

    this.onSplitButtonSelect = event => {
      this.setState({
        splitButtonDropdownIsOpen: !this.state.splitButtonDropdownIsOpen
      });
    };
  }

  render() {
    const {
      isUpperToolbarDropdownOpen,
      isLowerToolbarDropdownOpen,
      isUpperToolbarKebabDropdownOpen,
      isLowerToolbarKebabDropdownOpen,
      isCardKebabDropdownOpen0,
      isCardKebabDropdownOpen1,
      isCardKebabDropdownOpen2,
      isCardKebabDropdownOpen3,
      isCardKebabDropdownOpen4,
      isCardKebabDropdownOpen5,
      isCardKebabDropdownOpen6,
      isCardKebabDropdownOpen7,
      isCardKebabDropdownOpen8,
      isCardKebabDropdownOpen9,
      splitButtonDropdownIsOpen,
      activeItem
    } = this.state;

    const splitButtonDropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>
    ];

    const filterDropdownItems = [
      <DropdownItem key="item-1">Item 1</DropdownItem>,
      <DropdownItem key="item-2">Item 2</DropdownItem>,
      <DropdownItem key="item-3">Item 3</DropdownItem>,
      <DropdownItem isDisabled key="all">
        All
      </DropdownItem>
    ];

    const toolbarKebabDropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];

    const cardKebabDropdownItems = [
      <DropdownItem>
        <TrashIcon /> Delete
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];

    const toolbarItems = (
      <React.Fragment>
        <DataToolbarItem variant="bulk-select">
          <Dropdown
            onSelect={this.onSplitButtonSelect}
            toggle={
              <DropdownToggle
                splitButtonItems={[
                  <DropdownToggleCheckbox id="example-checkbox-1" key="split-checkbox" aria-label="Select all" />
                ]}
                onToggle={this.onSplitButtonToggle}
              />
            }
            isOpen={splitButtonDropdownIsOpen}
            dropdownItems={splitButtonDropdownItems}
          />
        </DataToolbarItem>
        <DataToolbarItem>
          <Dropdown
            onSelect={this.onToolbarDropdownSelect}
            position={DropdownPosition.right}
            toggle={<DropdownToggle onToggle={this.onToolbarDropdownToggle}>Creator</DropdownToggle>}
            isOpen={isLowerToolbarDropdownOpen}
            dropdownItems={filterDropdownItems}
          />
        </DataToolbarItem>
        <DataToolbarItem>
          <Button variant="primary">Create a Project</Button>
        </DataToolbarItem>
        <DataToolbarItem>
          <Dropdown
            onSelect={this.onToolbarKebabDropdownSelect}
            toggle={<KebabToggle onToggle={this.onToolbarKebabDropdownToggle} id="toggle-id-6" />}
            isOpen={isLowerToolbarKebabDropdownOpen}
            isPlain
            dropdownItems={toolbarKebabDropdownItems}
          />
        </DataToolbarItem>
        <DataToolbarItem variant="pagination" breakpointMods={[{ modifier: 'align-right' }]}>
          <Pagination
            itemCount={37}
            perPage={this.state.perPage}
            page={this.state.page}
            onSetPage={this.onSetPage}
            widgetId="pagination-options-menu-top"
            onPerPageSelect={this.onPerPageSelect}
          />
        </DataToolbarItem>
      </React.Fragment>
    );

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
              toggle={<KebabToggle onToggle={this.onPageToolbarKebabDropdownToggle} />}
              isOpen={isUpperToolbarKebabDropdownOpen}
              dropdownItems={toolbarKebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onPageDropdownSelect}
              isOpen={isUpperToolbarDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onPageDropdownToggle}>Kyle Baker</DropdownToggle>}
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
              <Text component="h1">Projects</Text>
              <Text component="p">This is a demo that showcases Patternfly Cards.</Text>
            </TextContent>
            <DataToolbar id="data-toolbar-group-types">
              <DataToolbarContent>{toolbarItems}</DataToolbarContent>
            </DataToolbar>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
              {Array.apply(0, Array(1)).map((x, i) => (
                <React.Fragment>
                  <Card isHoverable key={0}>
                    <CardHead>
                      <img src={pfIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onCardKebabDropdownSelect0}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle0} />}
                          isOpen={isCardKebabDropdownOpen0}
                          dropdownItems={cardKebabDropdownItems}
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
                  <Card isHoverable key={1}>
                    <CardHead>
                      <img src={activeMQIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onCardKebabDropdownSelect1}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle1} />}
                          isOpen={isCardKebabDropdownOpen1}
                          dropdownItems={cardKebabDropdownItems}
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
                      The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be
                      consumed from a JMS Queue or Topic using Apache ActiveMQ.
                    </CardBody>
                  </Card>
                  <Card isHoverable key={2}>
                    <CardHead>
                      <img src={sparkIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onCardKebabDropdownSelect2}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle2} />}
                          isOpen={isCardKebabDropdownOpen2}
                          dropdownItems={cardKebabDropdownItems}
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
                    <CardBody>This documentation page covers the Apache Spark component for the Apache Camel.</CardBody>
                  </Card>
                  <Card isHoverable key={3}>
                    <CardHead>
                      <img src={avroIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onCardKebabDropdownSelect3}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle3} />}
                          isOpen={isCardKebabDropdownOpen3}
                          dropdownItems={cardKebabDropdownItems}
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
                      This component provides a dataformat for avro, which allows serialization and deserialization of
                      messages using Apache Avro’s binary dataformat. Moreover, it provides support for Apache Avro’s
                      rpc, by providing producers and consumers endpoint for using avro over netty or http.
                    </CardBody>
                  </Card>
                  <Card isHoverable key={4}>
                    <CardHead>
                      <img src={azureIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onCardKebabDropdownSelect4}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle4} />}
                          isOpen={isCardKebabDropdownOpen4}
                          dropdownItems={cardKebabDropdownItems}
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
                  <Card isHoverable key={5}>
                    <CardHead>
                      <img src={saxonIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onCardKebabDropdownSelect5}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle5} />}
                          isOpen={isCardKebabDropdownOpen5}
                          dropdownItems={cardKebabDropdownItems}
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
                      For providing flexible endpoints to sign and verify exchanges using the Signature Service of the
                      Java Cryptographic Extension.
                    </CardBody>
                  </Card>
                  <Card isHoverable key={6}>
                    <CardHead>
                      <img src={dropBoxIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onCardKebabDropdownSelect6}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle6} />}
                          isOpen={isCardKebabDropdownOpen6}
                          dropdownItems={cardKebabDropdownItems}
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
                      The dropbox: component allows you to treat Dropbox remote folders as a producer or consumer of
                      messages.
                    </CardBody>
                  </Card>
                  <Card isHoverable key={7} style={{ height: '1.5 rem' }}>
                    <CardHead>
                      <img src={infinispanIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onCardKebabDropdownSelect7}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle7} />}
                          isOpen={isCardKebabDropdownOpen7}
                          dropdownItems={cardKebabDropdownItems}
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
                      Read or write to a fully-supported distributed cache and data grid for faster integration
                      services.
                    </CardBody>
                  </Card>
                  <Card isHoverable key={8}>
                    <CardHead>
                      <img src={restIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onCardKebabDropdownSelect8}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle8} />}
                          isOpen={isCardKebabDropdownOpen8}
                          dropdownItems={cardKebabDropdownItems}
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
                      The rest component allows to define REST endpoints (consumer) using the Rest DSL and plugin to
                      other Camel components as the REST transport. From Camel 2.18 onwards the rest component can also
                      be used as a client (producer) to call REST services.
                    </CardBody>
                  </Card>
                  <Card isHoverable key={9}>
                    <CardHead>
                      <img src={swaggerIcon} style={{ height: '50px' }} />
                      <CardActions>
                        <Dropdown
                          isPlain
                          position="right"
                          onSelect={this.onKebabDropdownSelect9}
                          toggle={<KebabToggle onToggle={this.onCardKebabDropdownToggle9} />}
                          isOpen={isCardKebabDropdownOpen9}
                          dropdownItems={cardKebabDropdownItems}
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
                    <CardBody>Expose REST services and their APIs using Swagger specification.</CardBody>
                  </Card>
                </React.Fragment>
              ))}
            </Gallery>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
