import React from 'react';
import { Checkbox, Badge } from '@patternfly/react-core';

class CustomLabelCheckbox extends React.Component {
  render() {
    return <Checkbox label={<Badge>Badge here!</Badge>} aria-label="uncontrolled checkbox example" id="check-5" />;
  }
}

export default CustomLabelCheckbox;
