import { renderToString } from 'react-dom/server';
import { renderStatic } from '@patternfly/react-styles/server';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const { html } = renderStatic(() => renderToString(bodyComponent));

  replaceBodyHTMLString(html);
};
