import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStatic } from '@patternfly/react-styles/server';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const { html, styleTags, renderedClassNames } = renderStatic(() => renderToString(bodyComponent));

  replaceBodyHTMLString(html);

  setHeadComponents([
    ...styleTags.map((tag, i) => (
      <style key={i} {...tag.attributes} dangerouslySetInnerHTML={{ __html: tag.content }} />
    )),
    <script
      id="patternfly-style-ids"
      key="patternfly-style-ids"
      dangerouslySetInnerHTML={{
        __html: `
        // <![CDATA[
        window._pf_styles = ${JSON.stringify(renderedClassNames)}
        // ]]>
        `
      }}
    />
  ]);
};
