import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
const pageData = {
  "id": "Page",
  "section": "components",
  "source": "react",
  "slug": "/components/page/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Page/examples/Page.md",
  "propComponents": [
    {
      "name": "Page",
      "description": "",
      "props": [
        {
          "name": "additionalGroupedContent",
          "type": "React.ReactNode",
          "description": "Additional content of the group"
        },
        {
          "name": "breadcrumb",
          "type": "React.ReactNode",
          "description": "Breadcrumb component for the page"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the main section of the page layout (e.g. <PageSection />)"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the page layout"
        },
        {
          "name": "defaultManagedSidebarIsOpen",
          "type": "boolean",
          "description": "If true, the managed sidebar is initially open for desktop view",
          "defaultValue": "true"
        },
        {
          "name": "getBreakpoint",
          "type": "(width: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
          "description": "The page resize observer uses the breakpoints returned from this function when adding the pf-m-breakpoint-[default|sm|md|lg|xl|2xl] class\nYou can override the default getBreakpoint function to return breakpoints at different sizes than the default\nYou can view the default getBreakpoint function here:\nhttps://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/util.ts",
          "defaultValue": "getBreakpoint"
        },
        {
          "name": "groupProps",
          "type": "PageGroupProps",
          "description": "Additional props of the group"
        },
        {
          "name": "header",
          "type": "React.ReactNode",
          "description": "Header component (e.g. <PageHeader />)"
        },
        {
          "name": "isBreadcrumbGrouped",
          "type": "boolean",
          "description": "Flag indicating if the breadcrumb should be in a group"
        },
        {
          "name": "isBreadcrumbWidthLimited",
          "type": "boolean",
          "description": "Flag indicating if breadcrumb width should be limited",
          "defaultValue": "false"
        },
        {
          "name": "isManagedSidebar",
          "type": "boolean",
          "description": "If true, manages the sidebar open/close state and there is no need to pass the isNavOpen boolean into\nthe sidebar component or add a callback onNavToggle function into the PageHeader component",
          "defaultValue": "false"
        },
        {
          "name": "isNotificationDrawerExpanded",
          "type": "boolean",
          "description": "Flag indicating Notification drawer in expanded",
          "defaultValue": "false"
        },
        {
          "name": "isTertiaryNavGrouped",
          "type": "boolean",
          "description": "Flag indicating if the tertiaryNav should be in a group"
        },
        {
          "name": "isTertiaryNavWidthLimited",
          "type": "boolean",
          "description": "Flag indicating if tertiary nav width should be limited"
        },
        {
          "name": "mainAriaLabel",
          "type": "string",
          "description": "Accessible label, can be used to name main section"
        },
        {
          "name": "mainContainerId",
          "type": "string",
          "description": "an id to use for the [role=\"main\"] element"
        },
        {
          "name": "mainTabIndex",
          "type": "number | null",
          "description": "tabIndex to use for the [role=\"main\"] element, null to unset it",
          "defaultValue": "-1"
        },
        {
          "name": "notificationDrawer",
          "type": "React.ReactNode",
          "description": "Notification drawer component for an optional notification drawer (e.g. <NotificationDrawer />)"
        },
        {
          "name": "onNotificationDrawerExpand",
          "type": "() => void",
          "description": "Callback when notification drawer panel is finished expanding.",
          "defaultValue": "() => null"
        },
        {
          "name": "onPageResize",
          "type": "(object: any) => void",
          "description": "Can add callback to be notified when resize occurs, for example to set the sidebar isNav prop to false for a width < 768px\nReturns object { mobileView: boolean, windowSize: number }",
          "defaultValue": "(): void => null"
        },
        {
          "name": "role",
          "type": "string",
          "description": "Sets the value for role on the <main> element"
        },
        {
          "name": "sidebar",
          "type": "React.ReactNode",
          "description": "Sidebar component for a side nav (e.g. <PageSidebar />)"
        },
        {
          "name": "skipToContent",
          "type": "React.ReactElement",
          "description": "Skip to content component for the page"
        },
        {
          "name": "tertiaryNav",
          "type": "React.ReactNode",
          "description": "Tertiary nav component for the page"
        }
      ]
    },
    {
      "name": "PageHeader",
      "description": "",
      "props": [
        {
          "name": "aria-controls",
          "type": "No type info",
          "defaultValue": "null"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria Label for the nav toggle button",
          "defaultValue": "'Global navigation'"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the page header",
          "defaultValue": "''"
        },
        {
          "name": "headerTools",
          "type": "React.ReactNode",
          "description": "Component to render the header tools, use <PageHeaderTools />",
          "defaultValue": "null"
        },
        {
          "name": "isManagedSidebar",
          "type": "boolean",
          "description": "This prop is no longer managed through PageHeader but in the Page component.",
          "defaultValue": "undefined"
        },
        {
          "name": "isNavOpen",
          "type": "boolean",
          "description": "True if the side nav is shown",
          "defaultValue": "true"
        },
        {
          "name": "logo",
          "type": "React.ReactNode",
          "description": "Component to render the logo/brand, use <Brand />",
          "defaultValue": "null"
        },
        {
          "name": "logoComponent",
          "type": "React.ReactNode",
          "description": "Component to use to wrap the passed <logo>",
          "defaultValue": "'a'"
        },
        {
          "name": "logoProps",
          "type": "object",
          "description": "Additional props passed to the logo anchor container",
          "defaultValue": "null"
        },
        {
          "name": "onNavToggle",
          "type": "() => void",
          "description": "Callback function to handle the side nav toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "role",
          "type": "string",
          "description": "Sets the value for role on the <main> element",
          "defaultValue": "undefined"
        },
        {
          "name": "showNavToggle",
          "type": "boolean",
          "description": "True to show the nav toggle button (toggles side nav)",
          "defaultValue": "false"
        },
        {
          "name": "topNav",
          "type": "React.ReactNode",
          "description": "Component to render navigation within the header, use <Nav />",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "PageHeaderTools",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered in page header tools",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the page header tools."
        }
      ]
    },
    {
      "name": "PageHeaderToolsGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered in the page header tools group",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the page header tools group."
        },
        {
          "name": "visibility",
          "type": "{\n  default?: 'hidden' | 'visible';\n  sm?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "Visibility at various breakpoints."
        }
      ]
    },
    {
      "name": "PageHeaderToolsItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered in page header tools item.",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the page header tools item."
        },
        {
          "name": "id",
          "type": "string",
          "description": "HTML id of the PageHeaderToolsItem"
        },
        {
          "name": "isSelected",
          "type": "boolean",
          "description": "True to make an icon button appear selected"
        },
        {
          "name": "visibility",
          "type": "{\n  default?: 'hidden' | 'visible';\n  sm?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "Visibility at various breakpoints."
        }
      ]
    },
    {
      "name": "PageSidebar",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the page sidebar",
          "defaultValue": "''"
        },
        {
          "name": "isManagedSidebar",
          "type": "boolean",
          "description": "If true, manages the sidebar open/close state and there is no need to pass the isNavOpen boolean into\nthe sidebar component or add a callback onNavToggle function into the PageHeader component"
        },
        {
          "name": "isNavOpen",
          "type": "boolean",
          "description": "Programmatically manage if the side nav is shown, if isManagedSidebar is set to true in the Page component, this prop is managed",
          "defaultValue": "true"
        },
        {
          "name": "nav",
          "type": "React.ReactNode",
          "description": "Component to render the side navigation (e.g. <Nav />"
        },
        {
          "name": "theme",
          "type": "'dark' | 'light'",
          "description": "Indicates the color scheme of the sidebar",
          "defaultValue": "'dark'"
        }
      ]
    },
    {
      "name": "PageSection",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the section"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the section",
          "defaultValue": "''"
        },
        {
          "name": "hasOverflowScroll",
          "type": "boolean",
          "description": "Flag indicating if the PageSection has a scrolling overflow",
          "defaultValue": "false"
        },
        {
          "name": "hasShadowBottom",
          "type": "boolean",
          "description": "Modifier indicating if PageSection should have a shadow at the bottom",
          "defaultValue": "false"
        },
        {
          "name": "hasShadowTop",
          "type": "boolean",
          "description": "Modifier indicating if PageSection should have a shadow at the top",
          "defaultValue": "false"
        },
        {
          "name": "isCenterAligned",
          "type": "boolean",
          "description": "Flag indicating if the section content is center aligned. isWidthLimited must be set for this to work",
          "defaultValue": "false"
        },
        {
          "name": "isFilled",
          "type": "boolean",
          "description": "Enables the page section to fill the available vertical space"
        },
        {
          "name": "isWidthLimited",
          "type": "boolean",
          "description": "Limits the width of the section",
          "defaultValue": "false"
        },
        {
          "name": "padding",
          "type": "{\n  default?: 'padding' | 'noPadding';\n  sm?: 'padding' | 'noPadding';\n  md?: 'padding' | 'noPadding';\n  lg?: 'padding' | 'noPadding';\n  xl?: 'padding' | 'noPadding';\n  '2xl'?: 'padding' | 'noPadding';\n}",
          "description": "Padding at various breakpoints."
        },
        {
          "name": "sticky",
          "type": "'top' | 'bottom'",
          "description": "Modifier indicating if PageSection is sticky to the top or bottom"
        },
        {
          "name": "type",
          "type": "'default' | 'nav' | 'subnav' | 'breadcrumb' | 'tabs' | 'wizard'",
          "description": "Section type variant",
          "defaultValue": "'default'"
        },
        {
          "name": "variant",
          "type": "'default' | 'light' | 'dark' | 'darker'",
          "description": "Section background color variant",
          "defaultValue": "'default'"
        }
      ]
    },
    {
      "name": "PageGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside of the PageGroup"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes to apply to the PageGroup",
          "defaultValue": "''"
        },
        {
          "name": "hasOverflowScroll",
          "type": "boolean",
          "description": "Flag indicating if the PageGroup has a scrolling overflow",
          "defaultValue": "false"
        },
        {
          "name": "hasShadowBottom",
          "type": "boolean",
          "description": "Modifier indicating if PageGroup should have a shadow at the bottom",
          "defaultValue": "false"
        },
        {
          "name": "hasShadowTop",
          "type": "boolean",
          "description": "Modifier indicating if PageGroup should have a shadow at the top",
          "defaultValue": "false"
        },
        {
          "name": "sticky",
          "type": "'top' | 'bottom'",
          "description": "Modifier indicating if PageGroup is sticky to the top or bottom"
        }
      ]
    },
    {
      "name": "PageBreadcrumb",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside of the PageBreadcrumb"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes to apply to the PageBreadcrumb",
          "defaultValue": "''"
        },
        {
          "name": "hasOverflowScroll",
          "type": "boolean",
          "description": "Flag indicating if the PageBreadcrumb has a scrolling overflow",
          "defaultValue": "false"
        },
        {
          "name": "hasShadowBottom",
          "type": "boolean",
          "description": "Flag indicating if PageBreadcrumb should have a shadow at the bottom",
          "defaultValue": "false"
        },
        {
          "name": "hasShadowTop",
          "type": "boolean",
          "description": "Flag indicating if PageBreadcrumb should have a shadow at the top",
          "defaultValue": "false"
        },
        {
          "name": "isWidthLimited",
          "type": "boolean",
          "description": "Limits the width of the breadcrumb"
        },
        {
          "name": "sticky",
          "type": "'top' | 'bottom'",
          "description": "Modifier indicating if the PageBreadcrumb is sticky to the top or bottom"
        }
      ]
    },
    {
      "name": "PageNavigation",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside of the PageNavigation"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes to apply to the PageNavigation",
          "defaultValue": "''"
        },
        {
          "name": "hasOverflowScroll",
          "type": "boolean",
          "description": "Flag indicating if the PageNavigation has a scrolling overflow",
          "defaultValue": "false"
        },
        {
          "name": "hasShadowBottom",
          "type": "boolean",
          "description": "Flag indicating if PageNavigation should have a shadow at the bottom",
          "defaultValue": "false"
        },
        {
          "name": "hasShadowTop",
          "type": "boolean",
          "description": "Flag indicating if PageNavigation should have a shadow at the top",
          "defaultValue": "false"
        },
        {
          "name": "isWidthLimited",
          "type": "boolean",
          "description": "Limits the width of the PageNavigation"
        },
        {
          "name": "sticky",
          "type": "'top' | 'bottom'",
          "description": "Modifier indicating if the PageNavigation is sticky to the top or bottom"
        }
      ]
    },
    {
      "name": "PageToggleButton",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content of the page toggle button"
        },
        {
          "name": "isNavOpen",
          "type": "boolean",
          "description": "True if the side nav is shown",
          "defaultValue": "true"
        },
        {
          "name": "onNavToggle",
          "type": "() => void",
          "description": "Callback function to handle the side nav toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true",
          "defaultValue": "() => undefined as any"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-page"
  ],
  "examples": [
    "Vertical nav",
    "Horizontal nav",
    "Tertiary nav",
    "With or without fill",
    "Main section padding",
    "Uncontrolled nav",
    "Group section",
    "Vertical nav using PageHeader component",
    "Centered section"
  ]
};
pageData.liveContext = {
  BarsIcon
};
pageData.examples = {
  'Vertical nav': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Page,\n  Masthead,\n  MastheadToggle,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants,\n  PageToggleButton,\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem\n} from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';\n\nclass VerticalPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isNavOpen: true\n    };\n    this.onNavToggle = () => {\n      this.setState({\n        isNavOpen: !this.state.isNavOpen\n      });\n    };\n  }\n\n  render() {\n    const { isNavOpen } = this.state;\n\n    const headerToolbar = (\n      <Toolbar id=\"toolbar\">\n        <ToolbarContent>\n          <ToolbarItem>header-tools</ToolbarItem>\n        </ToolbarContent>\n      </Toolbar>\n    );\n\n    const Header = (\n      <Masthead>\n        <MastheadToggle>\n          <PageToggleButton\n            variant=\"plain\"\n            aria-label=\"Global navigation\"\n            isNavOpen={isNavOpen}\n            onNavToggle={this.onNavToggle}\n          >\n            <BarsIcon />\n          </PageToggleButton>\n        </MastheadToggle>\n        <MastheadMain>\n          <MastheadBrand href=\"https://patternfly.org\" onClick={() => console.log('clicked logo')} target=\"_blank\">\n            Logo\n          </MastheadBrand>\n        </MastheadMain>\n        <MastheadContent>{headerToolbar}</MastheadContent>\n      </Masthead>\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" isNavOpen={isNavOpen} />;\n\n    return (\n      <Page header={Header} sidebar={Sidebar}>\n        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>\n        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>\n        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>\n      </Page>\n    );\n  }\n}","title":"Vertical nav","lang":"js"}}>
      
    </Example>,
  'Horizontal nav': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Page,\n  Masthead,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  PageSection,\n  PageSectionVariants,\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem\n} from '@patternfly/react-core';\n\nHorizontalPage = () => {\n  const headerToolbar = (\n    <Toolbar id=\"toolbar\">\n      <ToolbarContent>\n        <ToolbarItem>Navigation</ToolbarItem>\n        <ToolbarItem>header-tools</ToolbarItem>\n      </ToolbarContent>\n    </Toolbar>\n  );\n\n  const Header = (\n    <Masthead inset={{ default: 'insetXs' }}>\n      <MastheadMain>\n        <MastheadBrand href=\"https://patternfly.org\" onClick={() => console.log('clicked logo')} target=\"_blank\">\n          Logo\n        </MastheadBrand>\n      </MastheadMain>\n      <MastheadContent>{headerToolbar}</MastheadContent>\n    </Masthead>\n  );\n\n  return (\n    <Page header={Header}>\n      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>\n      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>\n      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>\n    </Page>\n  );\n};","title":"Horizontal nav","lang":"js"}}>
      
    </Example>,
  'Tertiary nav': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Page,\n  Masthead,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  PageSection,\n  PageSectionVariants,\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem\n} from '@patternfly/react-core';\n\nTertiaryPage = () => {\n  const headerToolbar = (\n    <Toolbar id=\"toolbar\">\n      <ToolbarContent>\n        <ToolbarItem>header-tools</ToolbarItem>\n      </ToolbarContent>\n    </Toolbar>\n  );\n\n  const Header = (\n    <Masthead display={{ default: 'stack' }} inset={{ default: 'insetXs' }}>\n      <MastheadMain>\n        <MastheadBrand href=\"https://patternfly.org\" onClick={() => console.log('clicked logo')} target=\"_blank\">\n          Logo\n        </MastheadBrand>\n      </MastheadMain>\n      <MastheadContent>{headerToolbar}</MastheadContent>\n    </Masthead>\n  );\n\n  return (\n    <Page header={Header} tertiaryNav=\"Navigation\">\n      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>\n      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>\n      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>\n    </Page>\n  );\n};","title":"Tertiary nav","lang":"js"}}>
      
    </Example>,
  'With or without fill': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Page,\n  Masthead,\n  MastheadToggle,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  PageSidebar,\n  PageSection,\n  PageToggleButton,\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem\n} from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';\n\nclass FillPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isNavOpen: true\n    };\n    this.onNavToggle = () => {\n      this.setState({\n        isNavOpen: !this.state.isNavOpen\n      });\n    };\n  }\n\n  render() {\n    const { isNavOpen } = this.state;\n\n    const headerToolbar = (\n      <Toolbar id=\"toolbar\">\n        <ToolbarContent>\n          <ToolbarItem>header-tools</ToolbarItem>\n        </ToolbarContent>\n      </Toolbar>\n    );\n\n    const Header = (\n      <Masthead>\n        <MastheadToggle>\n          <PageToggleButton\n            variant=\"plain\"\n            aria-label=\"Global navigation\"\n            isNavOpen={isNavOpen}\n            onNavToggle={this.onNavToggle}\n          >\n            <BarsIcon />\n          </PageToggleButton>\n        </MastheadToggle>\n        <MastheadMain>\n          <MastheadBrand href=\"https://patternfly.org\" onClick={() => console.log('clicked logo')} target=\"_blank\">\n            Logo\n          </MastheadBrand>\n        </MastheadMain>\n        <MastheadContent>{headerToolbar}</MastheadContent>\n      </Masthead>\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" isNavOpen={isNavOpen} />;\n\n    return (\n      <Page header={Header} sidebar={Sidebar}>\n        <PageSection>A default page section</PageSection>\n        <PageSection isFilled={true}>This section fills the available space.</PageSection>\n        <PageSection isFilled={false}>\n          This section is set to not fill the available space, since the last page section is set to fill the available\n          space by default.\n        </PageSection>\n      </Page>\n    );\n  }\n}","title":"With or without fill","lang":"js"}}>
      
    </Example>,
  'Main section padding': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Page,\n  Masthead,\n  MastheadToggle,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants,\n  PageToggleButton,\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem\n} from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';\n\nclass VerticalPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isNavOpen: true\n    };\n    this.onNavToggle = () => {\n      this.setState({\n        isNavOpen: !this.state.isNavOpen\n      });\n    };\n  }\n\n  render() {\n    const { isNavOpen } = this.state;\n\n    const headerToolbar = (\n      <Toolbar id=\"toolbar\">\n        <ToolbarContent>\n          <ToolbarItem>header-tools</ToolbarItem>\n        </ToolbarContent>\n      </Toolbar>\n    );\n\n    const Header = (\n      <Masthead>\n        <MastheadToggle>\n          <PageToggleButton\n            variant=\"plain\"\n            aria-label=\"Global navigation\"\n            isNavOpen={isNavOpen}\n            onNavToggle={this.onNavToggle}\n          >\n            <BarsIcon />\n          </PageToggleButton>\n        </MastheadToggle>\n        <MastheadMain>\n          <MastheadBrand href=\"https://patternfly.org\" onClick={() => console.log('clicked logo')} target=\"_blank\">\n            Logo\n          </MastheadBrand>\n        </MastheadMain>\n        <MastheadContent>{headerToolbar}</MastheadContent>\n      </Masthead>\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" isNavOpen={isNavOpen} />;\n\n    return (\n      <Page header={Header} sidebar={Sidebar}>\n        <PageSection>Section with default padding</PageSection>\n        <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding' }}>\n          Section with no padding\n        </PageSection>\n        <PageSection padding={{ default: 'noPadding', md: 'padding', lg: 'padding' }}>\n          Section with padding only on medium/large\n        </PageSection>\n        <PageSection variant={PageSectionVariants.light} padding={{ md: 'noPadding' }}>\n          Section with no padding on medium\n        </PageSection>\n      </Page>\n    );\n  }\n}","title":"Main section padding","lang":"js"}}>
      
    </Example>,
  'Uncontrolled nav': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Page,\n  Masthead,\n  MastheadToggle,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants,\n  PageToggleButton,\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem\n} from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';\n\nclass UncontrolledNavPage extends React.Component {\n  render() {\n    const headerToolbar = (\n      <Toolbar id=\"toolbar\">\n        <ToolbarContent>\n          <ToolbarItem>header-tools</ToolbarItem>\n        </ToolbarContent>\n      </Toolbar>\n    );\n\n    const Header = (\n      <Masthead>\n        <MastheadToggle>\n          <PageToggleButton variant=\"plain\" aria-label=\"Global navigation\">\n            <BarsIcon />\n          </PageToggleButton>\n        </MastheadToggle>\n        <MastheadMain>\n          <MastheadBrand href=\"https://patternfly.org\" onClick={() => console.log('clicked logo')} target=\"_blank\">\n            Logo\n          </MastheadBrand>\n        </MastheadMain>\n        <MastheadContent>{headerToolbar}</MastheadContent>\n      </Masthead>\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" />;\n\n    return (\n      <Page isManagedSidebar header={Header} sidebar={Sidebar}>\n        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>\n        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>\n        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>\n      </Page>\n    );\n  }\n}","title":"Uncontrolled nav","lang":"js"}}>
      
    </Example>,
  'Group section': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Page,\n  Masthead,\n  MastheadToggle,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  PageSidebar,\n  PageSection,\n  PageGroup,\n  PageBreadcrumb,\n  PageNavigation,\n  PageSectionVariants,\n  PageToggleButton,\n  Breadcrumb,\n  BreadcrumbItem,\n  Nav,\n  NavList,\n  NavItem,\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem\n} from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';\n\nclass GroupPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isNavOpen: true\n    };\n    this.onNavToggle = () => {\n      this.setState({\n        isNavOpen: !this.state.isNavOpen\n      });\n    };\n  }\n\n  render() {\n    const { isNavOpen } = this.state;\n\n    const headerToolbar = (\n      <Toolbar id=\"toolbar\">\n        <ToolbarContent>\n          <ToolbarItem>header-tools</ToolbarItem>\n        </ToolbarContent>\n      </Toolbar>\n    );\n\n    const Header = (\n      <Masthead>\n        <MastheadToggle>\n          <PageToggleButton\n            variant=\"plain\"\n            aria-label=\"Global navigation\"\n            isNavOpen={isNavOpen}\n            onNavToggle={this.onNavToggle}\n          >\n            <BarsIcon />\n          </PageToggleButton>\n        </MastheadToggle>\n        <MastheadMain>\n          <MastheadBrand href=\"https://patternfly.org\" onClick={() => console.log('clicked logo')} target=\"_blank\">\n            Logo\n          </MastheadBrand>\n        </MastheadMain>\n        <MastheadContent>{headerToolbar}</MastheadContent>\n      </Masthead>\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" isNavOpen={isNavOpen} />;\n\n    return (\n      <Page header={Header} sidebar={Sidebar}>\n        <PageGroup>\n          <PageNavigation>\n            <Nav aria-label=\"Nav\" variant=\"tertiary\">\n              <NavList>\n                <NavItem itemId={0} isActive>\n                  System panel\n                </NavItem>\n                <NavItem itemId={1}>Policy</NavItem>\n                <NavItem itemId={2}>Authentication</NavItem>\n                <NavItem itemId={3}>Network services</NavItem>\n                <NavItem itemId={4}>Server</NavItem>\n              </NavList>\n            </Nav>\n          </PageNavigation>\n          <PageBreadcrumb>\n            <Breadcrumb>\n              <BreadcrumbItem>Section home</BreadcrumbItem>\n              <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n              <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n              <BreadcrumbItem to=\"#\" isActive>\n                Section landing\n              </BreadcrumbItem>\n            </Breadcrumb>\n          </PageBreadcrumb>\n          <PageSection variant={PageSectionVariants.light}>Grouped section</PageSection>\n        </PageGroup>\n        <PageSection variant={PageSectionVariants.dark}>Section 1</PageSection>\n        <PageSection variant={PageSectionVariants.dark}>Section 2</PageSection>\n      </Page>\n    );\n  }\n}","title":"Group section","lang":"js"}}>
      
    </Example>,
  'Vertical nav using PageHeader component': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Page,\n  PageHeader,\n  PageHeaderTools,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants\n} from '@patternfly/react-core';\n\nclass VerticalPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isNavOpen: true\n    };\n    this.onNavToggle = () => {\n      this.setState({\n        isNavOpen: !this.state.isNavOpen\n      });\n    };\n  }\n\n  render() {\n    const { isNavOpen } = this.state;\n\n    const logoProps = {\n      href: 'https://patternfly.org',\n      onClick: () => console.log('clicked logo'),\n      target: '_blank'\n    };\n    const Header = (\n      <PageHeader\n        logo=\"Logo\"\n        logoProps={logoProps}\n        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}\n        showNavToggle\n        isNavOpen={isNavOpen}\n        onNavToggle={this.onNavToggle}\n      />\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" isNavOpen={isNavOpen} />;\n\n    return (\n      <Page header={Header} sidebar={Sidebar}>\n        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>\n        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>\n        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>\n      </Page>\n    );\n  }\n}","title":"Vertical nav using PageHeader component","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This example is provided becuase PageHeader and PageHeaderTools are still in use; however, going forward Masthead and Toolbar should be used to make headers rather than PageHeader and PageHeaderTools.`}
      </p>
    </Example>,
  'Centered section': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Page,\n  Masthead,\n  MastheadToggle,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants,\n  PageToggleButton,\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem,\n  Card,\n  CardBody\n} from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';\n\nCenterAlignedPageSection = () => {\n  const headerToolbar = (\n    <Toolbar id=\"toolbar\">\n      <ToolbarContent>\n        <ToolbarItem>header-tools</ToolbarItem>\n      </ToolbarContent>\n    </Toolbar>\n  );\n\n  const Header = (\n    <Masthead>\n      <MastheadToggle>\n        <PageToggleButton variant=\"plain\" aria-label=\"Global navigation\" onNavToggle={this.onNavToggle}>\n          <BarsIcon />\n        </PageToggleButton>\n      </MastheadToggle>\n      <MastheadMain>\n        <MastheadBrand href=\"https://patternfly.org\" onClick={() => console.log('clicked logo')} target=\"_blank\">\n          Logo\n        </MastheadBrand>\n      </MastheadMain>\n      <MastheadContent>{headerToolbar}</MastheadContent>\n    </Masthead>\n  );\n\n  return (\n    <Page header={Header}>\n      <PageSection isWidthLimited isCenterAligned>\n        <Card>\n          <CardBody>\n            When a width limited page section is wider than the value of\n            <code>--pf-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main section.\n            <br />\n            <br />\n            The content in this example is placed in a card to better illustrate how the section behaves when it is\n            centered. A card is not required to center a page section.\n          </CardBody>\n        </Card>\n      </PageSection>\n    </Page>\n  );\n};","title":"Centered section","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Vertical nav"])}
    {React.createElement(pageData.examples["Horizontal nav"])}
    {React.createElement(pageData.examples["Tertiary nav"])}
    {React.createElement(pageData.examples["With or without fill"])}
    {React.createElement(pageData.examples["Main section padding"])}
    {React.createElement(pageData.examples["Uncontrolled nav"])}
    {React.createElement(pageData.examples["Group section"])}
    {React.createElement(pageData.examples["Vertical nav using PageHeader component"])}
    {React.createElement(pageData.examples["Centered section"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsPageReactDocs';
Component.pageData = pageData;

export default Component;
