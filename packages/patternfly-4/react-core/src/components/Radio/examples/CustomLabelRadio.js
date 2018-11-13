import React from 'react';
import { Radio, Badge } from '@patternfly/react-core';

class CustomLabelRadio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Radio label={<Badge>Badge here!</Badge>} id="radio-6" name="radios-custom" aria-label="custom-label-1" />
        <Radio
          label={<Badge isRead>Different badge!</Badge>}
          id="radio-7"
          name="radios-custom"
          aria-label="custom-label-2"
        />
      </React.Fragment>
    );
  }
}

export default CustomLabelRadio;
