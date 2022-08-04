import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImportbasic from './react/basic.png';
const pageData = {
  "id": "Background image",
  "section": "components",
  "source": "react",
  "slug": "/components/background-image/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/BackgroundImage/examples/BackgroundImage.md",
  "propComponents": [
    {
      "name": "BackgroundImage",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the background."
        },
        {
          "name": "filter",
          "type": "React.ReactElement",
          "description": "Override svg filter to use",
          "defaultValue": "<filter>\n  <feColorMatrix type=\"matrix\" values=\"1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0\"></feColorMatrix>\n  <feComponentTransfer colorInterpolationFilters=\"sRGB\" result=\"duotone\">\n    <feFuncR type=\"table\" tableValues=\"0.086274509803922 0.43921568627451\"></feFuncR>\n    <feFuncG type=\"table\" tableValues=\"0.086274509803922 0.43921568627451\"></feFuncG>\n    <feFuncB type=\"table\" tableValues=\"0.086274509803922 0.43921568627451\"></feFuncB>\n    <feFuncA type=\"table\" tableValues=\"0 1\"></feFuncA>\n  </feComponentTransfer>\n</filter>"
        },
        {
          "name": "src",
          "type": "string | BackgroundImageSrcMap",
          "description": "Override image styles using a string or BackgroundImageSrc",
          "required": true
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-background-image"
  ],
  "fullscreenExamples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} thumbnail={srcImportbasic} {...{"code":"import React from 'react';\nimport { BackgroundImage } from '@patternfly/react-core';\n\n/**\n * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier\n */\nconst images = {\n  xs: '/assets/images/pfbg_576.jpg',\n  xs2x: '/assets/images/pfbg_576@2x.jpg',\n  sm: '/assets/images/pfbg_768.jpg',\n  sm2x: '/assets/images/pfbg_768@2x.jpg',\n  lg: '/assets/images/pfbg_1200.jpg'\n};\n\nexport const BackgroundImageBasic: React.FunctionComponent = () => <BackgroundImage src={images} />;\n","title":"Basic","lang":"ts","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsBackgroundImageReactDocs';
Component.pageData = pageData;

export default Component;
