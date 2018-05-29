import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form } from 'patternfly-react';

const TagModifier = ({ header, children }) => (
  <React.Fragment>
    <Row><Col lg={12}><h2>{header}</h2></Col></Row>
    <Form horizontal>
      {children}
    </Form>

  </React.Fragment>
);

TagModifier.propTypes = {
  header: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

TagModifier.defaultProps = {
  header: 'Add/Modify tag',
};

export default TagModifier;
