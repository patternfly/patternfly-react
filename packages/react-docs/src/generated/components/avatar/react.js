import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import avatarImg from '../../../../../react-core/src/components/Avatar/examples/./avatarImg.svg';
import avatarImgDark from '../../../../../react-core/src/components/Avatar/examples/./avatarImgDark.svg';
import '../../../../../react-core/src/components/Avatar/examples/./example.css';
const pageData = {
  "id": "Avatar",
  "section": "components",
  "source": "react",
  "slug": "/components/avatar/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Avatar/examples/Avatar.md",
  "propComponents": [
    {
      "name": "Avatar",
      "description": "",
      "props": [
        {
          "name": "alt",
          "type": "string",
          "description": "Attribute that specifies the alternate text of the image for the Avatar.",
          "required": true
        },
        {
          "name": "border",
          "type": "'light' | 'dark'",
          "description": "Border to add"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Avatar.",
          "defaultValue": "''"
        },
        {
          "name": "size",
          "type": "'sm' | 'md' | 'lg' | 'xl'",
          "description": "Size variant of avatar."
        },
        {
          "name": "src",
          "type": "string",
          "description": "Attribute that specifies the URL of the image for the Avatar.",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-avatar"
  ],
  "examples": [
    "Basic",
    "Size variations",
    "Bordered - light",
    "Bordered - dark"
  ]
};
pageData.liveContext = {
  avatarImg,
  avatarImgDark
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Avatar } from '@patternfly/react-core';\nimport avatarImg from './avatarImg.svg';\n\nconst Basic = () => <Avatar src={avatarImg} alt=\"avatar\" />;","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Size variations': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Avatar } from '@patternfly/react-core';\nimport avatarImg from './avatarImg.svg';\n\nconst SizeVariations = () => (\n  <React.Fragment>\n    Small\n    <br />\n    <Avatar src={avatarImg} alt=\"avatar\" size=\"sm\" />\n    <br />\n    Medium\n    <br />\n    <Avatar src={avatarImg} alt=\"avatar\" size=\"md\" />\n    <br />\n    Large\n    <br />\n    <Avatar src={avatarImg} alt=\"avatar\" size=\"lg\" />\n    <br />\n    Extra Large\n    <br />\n    <Avatar src={avatarImg} alt=\"avatar\" size=\"xl\" />\n  </React.Fragment>\n)","title":"Size variations","lang":"ts"}}>
      
    </Example>,
  'Bordered - light': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Avatar } from '@patternfly/react-core';\nimport avatarImg from './img_avatar.svg';\n\nconst BorderedLight = () => <Avatar src={avatarImg} alt=\"avatar\" border=\"light\" />;","title":"Bordered - light","lang":"ts"}}>
      
    </Example>,
  'Bordered - dark': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Avatar } from '@patternfly/react-core';\nimport avatarImgDark from './img_avatar-dark.svg';\n\nconst BorderedDark = () => <Avatar src={avatarImgDark} alt=\"avatar\" border=\"dark\" />;","title":"Bordered - dark","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Size variations"])}
    {React.createElement(pageData.examples["Bordered - light"])}
    {React.createElement(pageData.examples["Bordered - dark"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsAvatarReactDocs';
Component.pageData = pageData;

export default Component;
