import React from 'react';
import PropTypes from 'prop-types';

const patternflyDocumentationTemplate = documentationLink => {
  if (documentationLink) {
    return (
      <p>
        This is an existing PatternFly component. For more details, refer to the
        <a href={documentationLink}> design documentation on patternfly.org.</a>
      </p>
    );
  }
  return (
    <p>
      This pattern does not yet exist in <a href="http://www.patternfly.org/pattern-library/">PatternFly</a>.
    </p>
  );
};

const reactBootstrapDocumentationTemplate = (documentationLink, title) => (
  <p>
    This component is based on React Bootstrap {title} component. See{' '}
    <a href={documentationLink}>React Bootstrap Docs</a> for complete {title} component documentation.
  </p>
);

export const defaultTemplate = config => story => (
  <div style={{ padding: '0 20px' }}>
    <header className="page-header">
      <h2>{config.title}</h2>
    </header>
    {patternflyDocumentationTemplate(config.documentationLink)}
    {config.reactBootstrapDocumentationLink &&
      reactBootstrapDocumentationTemplate(config.reactBootstrapDocumentationLink, config.title)}
    {config.description && <div>{config.description}</div>}
    <br />
    <br />
    <div style={config.style}>{story()}</div>
  </div>
);

export const inlineTemplate = ({
  title,
  documentationLink,
  reactBootstrapDocumentationLink,
  description,
  style,
  story
}) => (
  <div style={{ padding: '0 20px' }}>
    <header className="page-header">
      <h2>{title}</h2>
    </header>
    {patternflyDocumentationTemplate(documentationLink)}
    {reactBootstrapDocumentationLink && reactBootstrapDocumentationTemplate(reactBootstrapDocumentationLink, title)}
    {description && <div>{description}</div>}
    <br />
    <br />
    <div style={style}>{story}</div>
  </div>
);
inlineTemplate.propTypes = {
  /** template title */
  title: PropTypes.string.isRequired,
  /** pf design documentation link */
  documentationLink: PropTypes.string,
  /** react bootstrap documentation link */
  reactBootstrapDocumentationLink: PropTypes.string,
  /** additional description */
  description: PropTypes.node,
  /** addition description styles */
  style: PropTypes.object,
  /** story content */
  story: PropTypes.node
};
inlineTemplate.defaultProps = {
  documentationLink: '',
  reactBootstrapDocumentationLink: '',
  description: null,
  style: {},
  story: null
};
