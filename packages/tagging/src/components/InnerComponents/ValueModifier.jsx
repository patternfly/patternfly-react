import React from 'react';
import PropTypes from 'prop-types';
import { Col, ControlLabel, FormGroup } from 'patternfly-react';
import ValueSelector from './ValueSelector';

const ValueModifier = ({
  tagValues, onTagValueChange, selectedTagValue, multiValue, valueLabel,
}) => (
  <FormGroup>
    <Col xs={12} md={4} lg={6}>
      <ControlLabel>{valueLabel}</ControlLabel>
    </Col>
    <Col xs={12} md={8} lg={6}>
      <ValueSelector tagValues={tagValues} onTagValueChange={onTagValueChange} selectedOption={selectedTagValue} multiValue={multiValue} />
    </Col>
  </FormGroup>
);

ValueModifier.propTypes = {
  selectedTagValue: PropTypes.object.isRequired,
  onTagValueChange: PropTypes.func.isRequired,
  valueLabel: PropTypes.string,
  multiValue: PropTypes.bool,
  tagValues: PropTypes.arrayOf(PropTypes.object),
};

ValueModifier.defaultProps = {
  valueLabel: 'Value',
  multiValue: true,
};

export default ValueModifier;
