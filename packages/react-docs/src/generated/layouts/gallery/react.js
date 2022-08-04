import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/layouts/Gallery/examples/./gallery.css';
const pageData = {
  "id": "Gallery",
  "section": "layouts",
  "source": "react",
  "slug": "/layouts/gallery/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/layouts/Gallery/examples/Gallery.md",
  "propComponents": [
    {
      "name": "Gallery",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Gallery layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Gallery layout",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        },
        {
          "name": "hasGutter",
          "type": "boolean",
          "description": "Adds space between children.",
          "defaultValue": "false"
        },
        {
          "name": "maxWidths",
          "type": "{\n  default?: string;\n  sm?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Maximum widths at various breakpoints."
        },
        {
          "name": "minWidths",
          "type": "{\n  default?: string;\n  sm?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Minimum widths at various breakpoints."
        }
      ]
    },
    {
      "name": "GalleryItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Gallery Item",
          "defaultValue": "null"
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-l-gallery"
  ],
  "examples": [
    "Basic",
    "With gutters",
    "Adjusting min widths",
    "Adjusting max widths",
    "Adjusting min and max widths",
    "Alternative components"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Gallery, GalleryItem } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <Gallery>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n  </Gallery>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With gutters': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Gallery, GalleryItem } from '@patternfly/react-core';\n\nconst WithGutters = () => (\n  <Gallery hasGutter>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n  </Gallery>\n)","title":"With gutters","lang":"js"}}>
      
    </Example>,
  'Adjusting min widths': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Gallery, GalleryItem } from '@patternfly/react-core';\n\nconst AdjustingMinWidths = () => (\n  <Gallery\n    hasGutter\n    minWidths={{\n      md: '100px',\n      lg: '150px',\n      xl: '200px',\n      '2xl': '300px'\n    }}\n  >\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n  </Gallery>\n)","title":"Adjusting min widths","lang":"js"}}>
      
    </Example>,
  'Adjusting max widths': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Gallery, GalleryItem } from '@patternfly/react-core';\n\nconst AdjustingMaxWidths = () => (\n  <Gallery\n    hasGutter\n    maxWidths={{\n      md: '280px',\n      lg: '320px',\n      '2xl': '400px'\n    }}\n  >\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n  </Gallery>\n)","title":"Adjusting max widths","lang":"js"}}>
      
    </Example>,
  'Adjusting min and max widths': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Gallery, GalleryItem } from '@patternfly/react-core';\n\nconst AdjustingMinAndMaxWidths = () => (\n  <Gallery\n    hasGutter\n    minWidths={{\n      default: '100%',\n      md: '100px',\n      xl: '300px'\n    }}\n    maxWidths={{\n      md: '200px',\n      xl: '1fr'\n    }}\n  >\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n  </Gallery>\n)","title":"Adjusting min and max widths","lang":"js"}}>
      
    </Example>,
  'Alternative components': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Gallery, GalleryItem } from '@patternfly/react-core';\n\nconst AlternativeComponents = () => (\n  <Gallery component='ul'>\n    <GalleryItem component='li'>Gallery item</GalleryItem>\n    <GalleryItem component='li'>Gallery item</GalleryItem>\n    <GalleryItem component='li'>Gallery item</GalleryItem>\n    <GalleryItem component='li'>Gallery item</GalleryItem>\n    <GalleryItem component='li'>Gallery item</GalleryItem>\n  </Gallery>\n)","title":"Alternative components","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With gutters"])}
    {React.createElement(pageData.examples["Adjusting min widths"])}
    {React.createElement(pageData.examples["Adjusting max widths"])}
    {React.createElement(pageData.examples["Adjusting min and max widths"])}
    {React.createElement(pageData.examples["Alternative components"])}
  </React.Fragment>
);
Component.displayName = 'LayoutsGalleryReactDocs';
Component.pageData = pageData;

export default Component;
