import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import imgBrand from '../../../../../react-core/src/demos/Wizard/./imgBrand.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import DashboardWrapper from '../../../../../react-core/src/demos/Wizard/../examples/DashboardWrapper';
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
  imgBrand,
  BarsIcon,
  DashboardWrapper
};
pageData.examples = {
  'In Modal': props => 
    <Example {...pageData} {...props} thumbnail={srcImportinmodal} {...{"code":"import React from 'react';\nimport {\n  Card,\n  CardBody,\n  Gallery,\n  GalleryItem,\n  Nav,\n  NavItem,\n  NavList,\n  PageSection,\n  Wizard,\n  Modal,\n  ModalVariant\n} from '@patternfly/react-core';\nimport DashboardWrapper from '../examples/DashboardWrapper';\n\nclass BasicWizardDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onNavSelect = result => {\n      this.setState({\n        activeItem: result.itemId\n      });\n    };\n  }\n  render() {\n    const { activeItem } = this.state;\n\n    const steps = [\n      { id: 0, name: 'Information', component: <p>Step 1 content</p> },\n      {\n        id: 1,\n        name: 'Configuration',\n        steps: [\n          {\n            id: 2,\n            name: 'Substep A',\n            component: <p>Configuration substep A</p>\n          },\n          {\n            id: 3,\n            name: 'Substep B',\n            component: <p>Configuration substep B</p>\n          }\n        ],\n        component: <p>Step 2 content</p>\n      },\n      { id: 4, name: 'Additional', component: <p>Step 3 content</p> },\n      { id: 5, name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }\n    ];\n    const title = 'Basic wizard';\n    return (\n      <React.Fragment>\n        <DashboardWrapper hasPageTemplateTitle>\n          <PageSection isWidthLimited>\n            <Gallery hasGutter>\n              {Array.apply(0, Array(10)).map((x, i) => (\n                <GalleryItem key={i}>\n                  <Card>\n                    <CardBody>This is a card</CardBody>\n                  </Card>\n                </GalleryItem>\n              ))}\n            </Gallery>\n          </PageSection>\n        </DashboardWrapper>\n        <Modal\n          isOpen\n          variant={ModalVariant.large}\n          showClose={false}\n          hasNoBodyWrapper\n          aria-describedby=\"wiz-modal-demo-description\"\n          aria-labelledby=\"wiz-modal-demo-title\"\n        >\n          <Wizard\n            navAriaLabel={`${title} steps`}\n            mainAriaLabel={`${title} content`}\n            titleId=\"wiz-modal-demo-title\"\n            descriptionId=\"wiz-modal-demo-description\"\n            title=\"Simple wizard in modal\"\n            description=\"Simple wizard description\"\n            steps={steps}\n            height={400}\n          />\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"In Modal","lang":"js","isFullscreen":true}}>
      
    </Example>,
  'In Page': props => 
    <Example {...pageData} {...props} thumbnail={srcImportinpage} {...{"code":"import React from 'react';\nimport {\n  Nav,\n  NavItem,\n  NavList,\n  PageSection,\n  PageSectionTypes,\n  PageSectionVariants,\n  Wizard\n} from '@patternfly/react-core';\nimport imgBrand from './imgBrand.svg';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\nimport DashboardWrapper from '../examples/DashboardWrapper';\n\nclass FullPageWizard extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onNavSelect = result => {\n      this.setState({\n        activeItem: result.itemId\n      });\n    };\n  }\n  render() {\n    const { activeItem } = this.state;\n\n    const steps = [\n      { id: 0, name: 'Information', component: <p>Step 1 content</p> },\n      {\n        id: 1,\n        name: 'Configuration',\n        steps: [\n          {\n            id: 2,\n            name: 'Substep A',\n            component: <p>Configuration substep A</p>\n          },\n          {\n            id: 3,\n            name: 'Substep B',\n            component: <p>Configuration substep B</p>\n          }\n        ],\n        component: <p>Step 2 content</p>\n      },\n      { id: 4, name: 'Additional', component: <p>Step 3 content</p> },\n      { id: 5, name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }\n    ];\n    const title = 'Basic wizard';\n\n    return (\n      <React.Fragment>\n        <DashboardWrapper hasPageTemplateTitle>\n          <PageSection type={PageSectionTypes.wizard} variant={PageSectionVariants.light}>\n            <Wizard navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} />\n          </PageSection>\n        </DashboardWrapper>\n      </React.Fragment>\n    );\n  }\n}","title":"In Page","lang":"js","isFullscreen":true}}>
      
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
