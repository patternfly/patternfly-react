import React from 'react'

export const defaultTemplate = config => story =>
  <div style={{ padding: '0 20px' }}>
    <header className="page-header">
      <h2>{config.title}</h2>
    </header>
    {!config.documentationLink &&
      <p>
        This pattern does not yet exist in
        {' '}
        <a href="http://www.patternfly.org/pattern-library/">PatternFly</a>
        .
      </p>}
    {/* Do not describe the pattern if a design is already documented
      on patternfly.org */}
    {config.documentationLink &&
      <p>
        This is an existing PatternFly component. For more details, refer to the
        <a href={config.documentationLink}>
          {' '}design documentation on patternfly.org
        </a>
        .
      </p>}
    {config.description &&
      <div>
        {config.description}
      </div>}
    <br />
    <br />
    <div style={config.style}>
      {story()}
    </div>
  </div>
