import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, FormControl, FormGroup, Row } from '../../../index';

const CardBody = props => {
  const inputs =
    props.cardInputs &&
    props.cardInputs.map(item => (
      <FormGroup controlId={item.id}>
        <FormControl
          type={item.type}
          placeholder={item.placeholder}
          bsSize={item.size || 'lg'}
        />
      </FormGroup>
    ));

  const button = props.submitButton && (
    <Button
      type="submit"
      bsStyle={props.submitButton.bsStyle}
      bsSize={props.submitButton.bsSize}
      block={props.submitButton.isBlock}
    >
      {props.submitButton.text}
    </Button>
  );

  return (
    <div className="card-body">
      <Form>
        <Row>
          <Col>
            {inputs}
            {props.cardLowerBody}
            {button}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

CardBody.propTypes = {
  cardInputs: PropTypes.array,
  submitButton: PropTypes.object,
  cardLowerBody: PropTypes.array
};

CardBody.defaultProps = {
  cardInputs: [],
  submitButton: {},
  cardLowerBody: []
};

export default CardBody;
