import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Sidebar",
  "section": "components",
  "source": "react",
  "slug": "/components/sidebar/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Sidebar/examples/Sidebar.md",
  "propComponents": [
    {
      "name": "Sidebar",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": ""
        },
        {
          "name": "hasGutter",
          "type": "boolean",
          "description": "Adds space between the panel and content."
        },
        {
          "name": "hasNoBackground",
          "type": "boolean",
          "description": "Removes the background color."
        },
        {
          "name": "isPanelRight",
          "type": "boolean",
          "description": "Indicates that the panel is displayed to the right of the content when the oritentation is split.",
          "defaultValue": "false"
        },
        {
          "name": "orientation",
          "type": "'stack' | 'split'",
          "description": "Indicates the direction of the layout. Default orientation is stack on small screens, and split on medium screens and above."
        }
      ]
    },
    {
      "name": "SidebarContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "",
          "required": true
        },
        {
          "name": "hasNoBackground",
          "type": "boolean",
          "description": "Removes the background color."
        }
      ]
    },
    {
      "name": "SidebarPanel",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "",
          "required": true
        },
        {
          "name": "hasNoBackground",
          "type": "boolean",
          "description": "Removes the background color."
        },
        {
          "name": "variant",
          "type": "'default' | 'sticky' | 'static'",
          "description": "Indicates whether the panel is positioned statically or sticky to the top. Default is sticky on small screens when the orientation is stack, and static on medium and above screens when the orientation is split.",
          "defaultValue": "'default'"
        },
        {
          "name": "width",
          "type": "{\n  default?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n  sm?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n  md?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n  lg?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n  xl?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n  '2xl'?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n}",
          "description": "Sets the panel width at various breakpoints. Default is 250px when the orientation is split."
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-sidebar"
  ],
  "examples": [
    "Basic",
    "Stack",
    "Panel right with gutter",
    "Sticky panel",
    "Static panel",
    "Responsive panel width"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Sidebar, SidebarContent, SidebarPanel } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <Sidebar>\n    <SidebarPanel>\n      Sidebar panel\n    </SidebarPanel>\n    <SidebarContent>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n      <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n    </SidebarContent>\n  </Sidebar>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Stack': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Sidebar, SidebarContent, SidebarPanel } from '@patternfly/react-core';\n\nconst Stack = () => (\n  <Sidebar orientation=\"stack\">\n    <SidebarPanel>\n      Sidebar panel stacked on top\n    </SidebarPanel>\n    <SidebarContent>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n      <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n    </SidebarContent>\n  </Sidebar>\n)","title":"Stack","lang":"js"}}>
      
    </Example>,
  'Panel right with gutter': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Sidebar, SidebarContent, SidebarPanel } from '@patternfly/react-core';\n\nconst PanelRightWithGutter = () => (\n  <Sidebar isPanelRight hasGutter>\n    <SidebarPanel>\n      Sidebar panel on the right\n    </SidebarPanel>\n    <SidebarContent>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n      <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n    </SidebarContent>\n  </Sidebar>\n)","title":"Panel right with gutter","lang":"js"}}>
      
    </Example>,
  'Sticky panel': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Sidebar, SidebarContent, SidebarPanel } from '@patternfly/react-core';\n\nconst StickyPanel = () => (\n  <Sidebar style={{ height: '200px', overflow: 'auto' }} tabIndex={0}>\n    <SidebarPanel variant=\"sticky\">\n      Sticky sidebar panel\n    </SidebarPanel>\n    <SidebarContent>\n      <p>Scroll me!</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n      <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n    </SidebarContent>\n  </Sidebar>\n)","title":"Sticky panel","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`A `}
        
        <code {...{"className":"ws-code"}}>
          {`tabIndex`}
        </code>
        {` should be added to the `}
        
        <code {...{"className":"ws-code"}}>
          {`Sidebar`}
        </code>
        {` when there is scrollable content in order for the  overflow content to be accessible by keyboard.`}
      </p>
    </Example>,
  'Static panel': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Sidebar, SidebarContent, SidebarPanel } from '@patternfly/react-core';\n\nconst StaticPanel = () => (\n  <Sidebar style={{ height: '200px', overflow: 'auto' }} tabIndex={0}>\n    <SidebarPanel variant=\"static\">\n      Static sidebar panel\n    </SidebarPanel>\n    <SidebarContent>\n      <p>Scroll me!</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n      <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n    </SidebarContent>\n  </Sidebar>\n)","title":"Static panel","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`A `}
        
        <code {...{"className":"ws-code"}}>
          {`tabIndex`}
        </code>
        {` should be added to the `}
        
        <code {...{"className":"ws-code"}}>
          {`Sidebar`}
        </code>
        {` when there is scrollable content in order for the  overflow content to be accessible by keyboard.`}
      </p>
    </Example>,
  'Responsive panel width': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Sidebar, SidebarContent, SidebarPanel } from '@patternfly/react-core';\n\nconst ResponsivePanelWidth = () => (\n  <Sidebar style={{ height: '200px', overflow: 'auto' }} tabIndex={0}>\n    <SidebarPanel width={{ default: 'width_50', lg: 'width_33', xl: 'width_75' }}>\n      Sidebar panel\n    </SidebarPanel>\n    <SidebarContent>\n      <p>Resize me!</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n      <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n    </SidebarContent>\n  </Sidebar>\n)","title":"Responsive panel width","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`A `}
        
        <code {...{"className":"ws-code"}}>
          {`tabIndex`}
        </code>
        {` should be added to the `}
        
        <code {...{"className":"ws-code"}}>
          {`Sidebar`}
        </code>
        {` when there is scrollable content in order for the  overflow content to be accessible by keyboard.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Stack"])}
    {React.createElement(pageData.examples["Panel right with gutter"])}
    {React.createElement(pageData.examples["Sticky panel"])}
    {React.createElement(pageData.examples["Static panel"])}
    {React.createElement(pageData.examples["Responsive panel width"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsSidebarReactDocs';
Component.pageData = pageData;

export default Component;
