import React from 'react';
export const defaultTemplate = (config) => (
  (story) => (
    <div style={{padding: '0 20px'}}>
      <header className="page-header">
        <h2>{config.title}</h2>
      </header>
      <p>
        {config.description}
      </p>
      <a href={config.link}>{config.linkText}</a>
      <br/>
      <br/>
      <div style={config.style}>
        {story()}
      </div>
    </div>
  )
);