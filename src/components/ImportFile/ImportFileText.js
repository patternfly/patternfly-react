import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';

const ImportFileText = props => {
  if (props.hideButton) {
    return (
      <div className="import-file-drop-pf">
        <h1>{props.text}</h1>
      </div>
    );
  }
  return (
    <div className="import-file-text-pf">
      <h1>
        <Icon type="fa" name="upload" size="2x" />
      </h1>
      <div style={{ clear: 'both' }}>
        <Button bsStyle="link">
          <h1>Browse</h1>
        </Button>
        {props.text}
      </div>
    </div>
  );
};

ImportFileText.propTypes = {
  text: PropTypes.string.isRequired,
  hideButton: PropTypes.bool.isRequired
};

export default ImportFileText;
