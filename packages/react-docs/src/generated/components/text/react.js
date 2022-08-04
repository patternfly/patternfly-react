import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Text",
  "section": "components",
  "source": "react",
  "slug": "/components/text/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Text/examples/Text.md",
  "propComponents": [
    {
      "name": "TextContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered within the TextContent",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the TextContent",
          "defaultValue": "''"
        },
        {
          "name": "isVisited",
          "type": "boolean",
          "description": "Flag to indicate the all links in a the content block have visited styles applied if the browser determines the link has been visited",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "Text",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered within the Text",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Text",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'small' | 'blockquote' | 'pre'",
          "description": "The text component",
          "defaultValue": "TextVariants.p"
        },
        {
          "name": "isVisitedLink",
          "type": "boolean",
          "description": "Flag to indicate the link has visited styles applied if the browser determines the link has been visited",
          "defaultValue": "false"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        }
      ]
    },
    {
      "name": "TextList",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered within the TextList",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the TextList",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "'ul' | 'ol' | 'dl'",
          "description": "The text list component",
          "defaultValue": "TextListVariants.ul"
        }
      ]
    },
    {
      "name": "TextListItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered within the TextListItem",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the TextListItem",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "'li' | 'dt' | 'dd'",
          "description": "The text list item component",
          "defaultValue": "TextListItemVariants.li"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-content"
  ],
  "examples": [
    "Headings",
    "Body",
    "Unordered list",
    "Ordered list",
    "Data list",
    "Visited"
  ]
};
pageData.examples = {
  'Headings': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TextContent,\n  Text,\n  TextVariants,\n  TextList,\n  TextListVariants,\n  TextListItem,\n  TextListItemVariants\n} from '@patternfly/react-core';\n\nconst Headings = () => (\n  <TextContent>\n    <Text component={TextVariants.h1}>Hello World</Text>\n    <Text component={TextVariants.h2}>Second level</Text>\n    <Text component={TextVariants.h3}>Third level</Text>\n    <Text component={TextVariants.h4}>Fourth level</Text>\n    <Text component={TextVariants.h5}>Fifth level</Text>\n    <Text component={TextVariants.h6}>Sixth level</Text>\n  </TextContent>\n)","title":"Headings","lang":"js"}}>
      
    </Example>,
  'Body': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TextContent,\n  Text,\n  TextVariants,\n  TextList,\n  TextListVariants,\n  TextListItem,\n  TextListItemVariants\n} from '@patternfly/react-core';\n\nconst Body = () => (\n  <TextContent>\n    <Text component={TextVariants.p}>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc\n      varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,\n      interdum mattis neque. Sub works as well!\n    </Text>\n    <Text component={TextVariants.p}>\n      Quisque ante lacus, malesuada ac auctor vitae, congue{' '}\n      <Text component={TextVariants.a} href=\"#\">\n        non ante\n      </Text>\n      . Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.\n    </Text>\n    <Text component={TextVariants.blockquote}>\n      Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet\n      turpis.\n    </Text>\n    <Text component={TextVariants.small}>Sometimes you need small text to display things like date created</Text>\n  </TextContent>\n)","title":"Body","lang":"js"}}>
      
    </Example>,
  'Unordered list': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TextContent,\n  Text,\n  TextVariants,\n  TextList,\n  TextListVariants,\n  TextListItem,\n  TextListItemVariants\n} from '@patternfly/react-core';\n\nconst UnorderedList = () => (\n  <TextContent>\n    <TextList>\n      <TextListItem>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</TextListItem>\n      <TextListItem>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</TextListItem>\n      <TextListItem>\n        Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n        <TextList>\n          <TextListItem>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</TextListItem>\n          <TextListItem>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</TextListItem>\n        </TextList>\n      </TextListItem>\n      <TextListItem>Ut non enim metus.</TextListItem>\n    </TextList>\n  </TextContent>\n)","title":"Unordered list","lang":"js"}}>
      
    </Example>,
  'Ordered list': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TextContent,\n  Text,\n  TextVariants,\n  TextList,\n  TextListVariants,\n  TextListItem,\n  TextListItemVariants\n} from '@patternfly/react-core';\n\nconst OrderedList = () => (\n  <TextContent>\n    <TextList component={TextListVariants.ol}>\n      <TextListItem>Donec blandit a lorem id convallis.</TextListItem>\n      <TextListItem>Cras gravida arcu at diam gravida gravida.</TextListItem>\n      <TextListItem>Integer in volutpat libero.</TextListItem>\n      <TextListItem>Donec a diam tellus.</TextListItem>\n      <TextListItem>Aenean nec tortor orci.</TextListItem>\n      <TextListItem>Quisque aliquam cursus urna, non bibendum massa viverra eget.</TextListItem>\n      <TextListItem>Vivamus maximus ultricies pulvinar.</TextListItem>\n    </TextList>\n  </TextContent>\n)","title":"Ordered list","lang":"js"}}>
      
    </Example>,
  'Data list': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TextContent,\n  Text,\n  TextVariants,\n  TextList,\n  TextListVariants,\n  TextListItem,\n  TextListItemVariants\n} from '@patternfly/react-core';\n\nconst DataList = () => (\n  <TextContent>\n    <TextList component={TextListVariants.dl}>\n      <TextListItem component={TextListItemVariants.dt}>Web</TextListItem>\n      <TextListItem component={TextListItemVariants.dd}>\n        The part of the Internet that contains websites and web pages\n      </TextListItem>\n      <TextListItem component={TextListItemVariants.dt}>HTML</TextListItem>\n      <TextListItem component={TextListItemVariants.dd}>A markup language for creating web pages</TextListItem>\n      <TextListItem component={TextListItemVariants.dt}>CSS</TextListItem>\n      <TextListItem component={TextListItemVariants.dd}>A technology to make HTML look better</TextListItem>\n    </TextList>\n  </TextContent>\n)","title":"Data list","lang":"js"}}>
      
    </Example>,
  'Visited': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TextContent,\n  Text,\n  TextVariants\n} from '@patternfly/react-core';\n\nTextVisited = () => {\n  return (\n    <>\n      <TextContent>\n        <Text component={TextVariants.h3}>Visited link example</Text>\n        <Text component={TextVariants.p}>\n          <Text \n            component={TextVariants.a} \n            isVisitedLink\n            href=\"#\">\n            Visited link\n          </Text>\n        </Text>\n      </TextContent>\n      <br />\n      <TextContent isVisited>\n        <Text component={TextVariants.h3}>Visited content example</Text>\n        <Text component={TextVariants.p}>\n          <Text \n            component={TextVariants.a} \n            href=\"#\">\n            content link 1\n          </Text>\n        </Text>\n        <Text component={TextVariants.p}>\n          <Text \n            component={TextVariants.a} \n            href=\"#\">\n            content link 2\n          </Text>\n        </Text>\n        <Text component={TextVariants.p}>\n          <Text \n            component={TextVariants.a} \n            href=\"#\">\n            content link 3\n          </Text>\n        </Text>\n      </TextContent>\n    </>\n  );\n\n};","title":"Visited","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Headings"])}
    {React.createElement(pageData.examples["Body"])}
    <p {...{"className":"ws-p"}}>
      {`Text components such as Text, TextList, TextListItem need to be placed within a TextContent`}
    </p>
    {React.createElement(pageData.examples["Unordered list"])}
    {React.createElement(pageData.examples["Ordered list"])}
    {React.createElement(pageData.examples["Data list"])}
    {React.createElement(pageData.examples["Visited"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTextReactDocs';
Component.pageData = pageData;

export default Component;
