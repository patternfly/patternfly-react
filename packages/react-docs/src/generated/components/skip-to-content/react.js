import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImportbasic from './react/basic.png';
const pageData = {
  "id": "Skip to content",
  "section": "components",
  "source": "react",
  "slug": "/components/skip-to-content/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/SkipToContent/examples/SkipToContent.md",
  "propComponents": [
    {
      "name": "SkipToContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to display within the skip to content component, typically a string."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional styles to apply to the skip to content component."
        },
        {
          "name": "href",
          "type": "string",
          "description": "The skip to content link.",
          "required": true
        },
        {
          "name": "show",
          "type": "boolean",
          "description": "Forces the skip to content to display. This is primarily for demonstration purposes and would not normally be used.",
          "defaultValue": "false"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-skip-to-content"
  ],
  "fullscreenExamples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} thumbnail={srcImportbasic} {...{"code":"import React from 'react';\nimport { SkipToContent } from '@patternfly/react-core';\n\nclass SimpleSkipToContent extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <SkipToContent href=\"#main-content\">Skip to content</SkipToContent>\n        <p>Press tab to skip to content at the bottom of the page.</p>\n        <div style={{ height: '2000px' }}></div>\n        <h1 id=\"main-content\">Main content</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius\n          lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum\n          mattis neque. Sub works as well!</p>\n        <h2>Second level</h2>\n        <p>Curabitur accumsan turpis pharetra\n          <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel\n          cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et\n          neque nisl.</p>\n        <ul>\n          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n            <ul>\n              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n              <li>Ut venenatis, nisl scelerisque.\n                <ol>\n                  <li>Donec blandit a lorem id convallis.</li>\n                  <li>Cras gravida arcu at diam gravida gravida.</li>\n                  <li>Integer in volutpat libero.</li>\n                </ol>\n              </li>\n            </ul>\n          </li>\n          <li>Ut non enim metus.</li>\n        </ul>\n        <h3>Third level</h3>\n        <p>Quisque ante lacus, malesuada ac auctor vitae, congue\n          <a href=\"#\">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>\n        <ol>\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n          <li>Integer in volutpat libero.</li>\n          <li>Donec a diam tellus.</li>\n          <li>Etiam auctor nisl et.\n            <ul>\n              <li>Donec blandit a lorem id convallis.</li>\n              <li>Cras gravida arcu at diam gravida gravida.</li>\n              <li>Integer in volutpat libero.\n                <ol>\n                  <li>Donec blandit a lorem id convallis.</li>\n                  <li>Cras gravida arcu at diam gravida gravida.</li>\n                </ol>\n              </li>\n            </ul>\n          </li>\n          <li>Aenean nec tortor orci.</li>\n          <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>\n          <li>Vivamus maximus ultricies pulvinar.</li>\n        </ol>\n        <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>\n        <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et\n          <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>\n        <hr />\n        <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum\n          commodo.\n        </p>\n        <dl>\n          <dt>Web</dt>\n          <dd>The part of the internet that contains websites and web pages</dd>\n          <dt>HTML</dt>\n          <dd>A markup language for creating web pages</dd>\n          <dt>CSS</dt>\n          <dd>A technology to make HTML look better</dd>\n        </dl>\n        <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.\n          Nulla facilisi. Nullam ac erat ante.</p>\n        <h4>Fourth level</h4>\n        <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum\n          ex efficitur.</p>\n        <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris\n          eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>\n        <small>Sometimes you need small text to display things like date created</small>\n        <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis\n          lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,\n          mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex\n          sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum.\n          Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>\n        <h5>Fifth level</h5>\n        <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet\n          ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend\n          justo. Nam et sollicitudin odio.</p>\n        <h6>Sixth level</h6>\n        <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.\n          Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis.\n          Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui,\n          sed varius sapien odio vitae est. Etiam at cursus metus.</p>\n      </React.Fragment>\n    );\n  }\n}","title":"Basic","lang":"js","isFullscreen":true}}>
      
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
Component.displayName = 'ComponentsSkipToContentReactDocs';
Component.pageData = pageData;

export default Component;
