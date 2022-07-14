import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import {
Brand,
Breadcrumb,
BreadcrumbItem,
Modal,
ModalVariant,
Nav,
NavItem,
NavList,
Page,
PageToggleButton,
PageSection,
PageSectionTypes,
PageSectionVariants,
PageSidebar,
Progress,
SkipToContent,
Text,
TextContent,
Title,
Wizard
} from '@patternfly/react-core';
import imgBrand from '../../../../../react-core/src/demos/Wizard/./imgBrand.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import srcImportinmodal from './react-demos/in-modal.png';
import srcImportinpage from './react-demos/in-page.png';
const pageData = {
  "id": "Wizard",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/wizard/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/Wizard/WizardDemo.md",
  "fullscreenExamples": [
    "In Modal",
    "In Page"
  ]
};
pageData.liveContext = {
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalVariant,
  Nav,
  NavItem,
  NavList,
  Page,
  PageToggleButton,
  PageSection,
  PageSectionTypes,
  PageSectionVariants,
  PageSidebar,
  Progress,
  SkipToContent,
  Text,
  TextContent,
  Title,
  Wizard,
  imgBrand,
  BarsIcon
};
pageData.examples = {
  'In Modal': props => 
    <Example {...pageData} {...props} thumbnail={srcImportinmodal} {...{"code":"import React from 'react';\nimport { Modal, ModalVariant, Wizard } from '@patternfly/react-core';\n\nclass BasicWizardDemo extends React.Component {\n  render() {\n    const steps = [\n      { id: 0, name: 'Information', component: <p>Step 1 content</p> },\n      {\n        id: 1,\n        name: 'Configuration',\n        steps: [\n          {\n            id: 2,\n            name: 'Substep A',\n            component: <p>Configuration substep A</p>\n          },\n          {\n            id: 3,\n            name: 'Substep B',\n            component: <p>Configuration substep B</p>\n          }\n        ],\n        component: <p>Step 2 content</p>\n      },\n      { id: 4, name: 'Additional', component: <p>Step 3 content</p> },\n      { id: 5, name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }\n    ];\n    const title = 'Basic wizard';\n    return (\n      <Modal\n        isOpen\n        variant={ModalVariant.large}\n        showClose={false}\n        hasNoBodyWrapper\n        aria-describedby=\"wiz-modal-demo-description\"\n        aria-labelledby=\"wiz-modal-demo-title\"\n      >\n        <Wizard\n          navAriaLabel={`${title} steps`}\n          mainAriaLabel={`${title} content`}\n          titleId=\"wiz-modal-demo-title\"\n          descriptionId=\"wiz-modal-demo-description\"\n          title=\"Simple wizard in modal\"\n          description=\"Simple wizard description\"\n          steps={steps}\n          height={400}\n        />\n      </Modal>\n    );\n  }\n}","title":"In Modal","lang":"js","isFullscreen":true}}>
      
    </Example>,
  'In Page': props => 
    <Example {...pageData} {...props} thumbnail={srcImportinpage} {...{"code":"import React from 'react';\nimport {\n  Brand,\n  Breadcrumb,\n  BreadcrumbItem,\n  Nav,\n  NavItem,\n  NavList,\n  Page,\n  PageSection,\n  PageSectionTypes,\n  PageSectionVariants,\n  PageSidebar,\n  Progress,\n  SkipToContent,\n  Text,\n  TextContent,\n  Title,\n  Wizard,\n  Masthead,\n  PageToggleButton,\n  MastheadToggle,\n  MastheadMain,\n  MastheadBrand\n} from '@patternfly/react-core';\nimport imgBrand from './imgBrand.svg';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\n\nclass FullPageWizard extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onNavSelect = result => {\n      this.setState({\n        activeItem: result.itemId\n      });\n    };\n  }\n  render() {\n    const { activeItem } = this.state;\n    const PageNav = (\n      <Nav onSelect={this.onNavSelect} aria-label=\"Nav\">\n        <NavList>\n          <NavItem itemId={0} isActive={activeItem === 0}>\n            System Panel\n          </NavItem>\n          <NavItem itemId={1} isActive={activeItem === 1}>\n            Policy\n          </NavItem>\n          <NavItem itemId={2} isActive={activeItem === 2}>\n            Authentication\n          </NavItem>\n          <NavItem itemId={3} isActive={activeItem === 3}>\n            Network Services\n          </NavItem>\n          <NavItem itemId={4} isActive={activeItem === 4}>\n            Server\n          </NavItem>\n        </NavList>\n      </Nav>\n    );\n    const Header = (\n      <Masthead id=\"basic\">\n        <MastheadToggle>\n          <PageToggleButton variant=\"plain\" aria-label=\"Global navigation\">\n            <BarsIcon />\n          </PageToggleButton>\n        </MastheadToggle>\n        <MastheadMain>\n          <MastheadBrand>\n            <Brand src={imgBrand} alt=\"Patternfly logo\" />\n          </MastheadBrand>\n        </MastheadMain>\n      </Masthead>\n    );\n    const Sidebar = <PageSidebar nav={PageNav} />;\n    const pageId = 'main-content-page-layout-default-nav';\n    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;\n    const PageBreadcrumb = (\n      <Breadcrumb>\n        <BreadcrumbItem>Section home</BreadcrumbItem>\n        <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n        <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n        <BreadcrumbItem to=\"#\" isActive>\n          Section landing\n        </BreadcrumbItem>\n      </Breadcrumb>\n    );\n\n    const steps = [\n      { id: 0, name: 'Information', component: <p>Step 1 content</p> },\n      {\n        id: 1,\n        name: 'Configuration',\n        steps: [\n          {\n            id: 2,\n            name: 'Substep A',\n            component: <p>Configuration substep A</p>\n          },\n          {\n            id: 3,\n            name: 'Substep B',\n            component: <p>Configuration substep B</p>\n          }\n        ],\n        component: <p>Step 2 content</p>\n      },\n      { id: 4, name: 'Additional', component: <p>Step 3 content</p> },\n      { id: 5, name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }\n    ];\n    const title = 'Basic wizard';\n\n    return (\n      <React.Fragment>\n        <Page\n          header={Header}\n          sidebar={Sidebar}\n          isManagedSidebar\n          skipToContent={PageSkipToContent}\n          breadcrumb={PageBreadcrumb}\n          mainContainerId={pageId}\n        >\n          <PageSection variant={PageSectionVariants.light}>\n            <TextContent>\n              <Text component=\"h1\">Main title</Text>\n              <Text component=\"p\">A demo of a wizard in a page.</Text>\n            </TextContent>\n          </PageSection>\n          <PageSection type={PageSectionTypes.wizard} variant={PageSectionVariants.light}>\n            <Wizard navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} />\n          </PageSection>\n        </Page>\n      </React.Fragment>\n    );\n  }\n}","title":"In Page","lang":"js","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["In Modal"])}
    {React.createElement(pageData.examples["In Page"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsWizardReactDemosDocs';
Component.pageData = pageData;

export default Component;
