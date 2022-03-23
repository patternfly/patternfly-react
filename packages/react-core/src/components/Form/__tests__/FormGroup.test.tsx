import React from 'react';

import { render, screen } from '@testing-library/react';

import { ValidatedOptions } from '../../../helpers/constants';
import { FormGroup } from '../FormGroup';
import { Form } from '../Form';

describe('FormGroup', () => {
  const returnFunction = () => <div>label</div>;

  test('should render default form group variant', () => {
    render(
      <FormGroup label="label" fieldId="label-id" helperText="this is helper text" data-testid="form-group-test-id">
        <input id="label-id" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render inline form group variant', () => {
    render(
      <FormGroup isInline label="label" fieldId="label-id" helperText="this is helper text">
        <input id="label-id" />
      </FormGroup>
    );
    expect(screen.getByLabelText('label').parentElement.className).toContain('pf-m-inline');
  });

  test('should render no padding-top form group variant', () => {
    render(
      <FormGroup
        hasNoPaddingTop
        label="label"
        fieldId="label-id"
        helperText="this is helper text"
        data-testid="form-group-test-id"
      >
        <input id="label-id" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').firstElementChild.className).toContain('no-padding-top');
  });

  test('should render form group variant with required label', () => {
    render(
      <FormGroup label="label" isRequired fieldId="label-id" data-testid="form-group-test-id">
        <input id="label-id" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group variant with node label', () => {
    render(
      <FormGroup fieldId="id" label={<h1>Header</h1>} data-testid="form-group-test-id">
        <input aria-label="input" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group with additonal label info', () => {
    render(
      <FormGroup fieldId="id" label={<h1>Header</h1>} labelInfo="more info" data-testid="form-group-test-id">
        <input aria-label="input" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group variant with function label', () => {
    render(
      <FormGroup fieldId="id" label={returnFunction()} data-testid="form-group-test-id">
        <input aria-label="input" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group variant with node helperText', () => {
    render(
      <FormGroup label="Label" fieldId="label-id" helperText={<h1>Header</h1>} data-testid="form-group-test-id">
        <input id="label-id" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group variant with function helperText', () => {
    render(
      <FormGroup label="Label" fieldId="label-id" helperText={returnFunction()} data-testid="form-group-test-id">
        <input id="label-id" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render horizontal form group variant', () => {
    render(
      <Form isHorizontal data-testid="form-test-id">
        <FormGroup label="label" fieldId="label-id" helperText="this is helperText">
          <input id="label-id" />
        </FormGroup>
      </Form>
    );
    expect(screen.getByTestId('form-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render stacked horizontal form group variant', () => {
    render(
      <Form isHorizontal data-testid="form-test-id">
        <FormGroup label="label" fieldId="label-id" isStack helperText="this is helperText">
          <input id="label-id" />
        </FormGroup>
      </Form>
    );
    expect(screen.getByTestId('form-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render helper text above input', () => {
    render(
      <Form isHorizontal data-testid="form-test-id">
        <FormGroup label="label" fieldId="label-id" helperText="this is helperText" isHelperTextBeforeField>
          <input id="label-id" />
        </FormGroup>
      </Form>
    );
    expect(screen.getByTestId('form-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group variant without label', () => {
    render(
      <FormGroup fieldId="id" data-testid="form-group-test-id">
        <input aria-label="input" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group required variant', () => {
    render(
      <FormGroup isRequired label="label" fieldId="id" data-testid="form-group-test-id">
        <input id="id" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group invalid variant', () => {
    render(
      <FormGroup
        label="label"
        fieldId="label-id"
        validated={'error'}
        helperTextInvalid="Invalid FormGroup"
        data-testid="form-group-test-id"
      >
        <input id="id" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group validated success variant', () => {
    render(
      <FormGroup
        label="label"
        fieldId="label-id"
        validated={ValidatedOptions.success}
        helperText="Validated FormGroup"
        data-testid="form-group-test-id"
      >
        <input id="id" />
      </FormGroup>
    );

    const formGroupHtml = screen.getByTestId('form-group-test-id').outerHTML;

    expect(formGroupHtml).toContain('pf-m-success');
    expect(formGroupHtml).toMatchSnapshot();
  });

  test('should render form group validated error variant', () => {
    render(
      <FormGroup
        label="label"
        fieldId="label-id"
        validated={ValidatedOptions.error}
        helperText="Validated FormGroup"
        data-testid="form-group-test-id"
      >
        <input id="id" />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('should render form group validated warning variant', () => {
    render(
      <FormGroup
        label="label"
        fieldId="label-id"
        validated={ValidatedOptions.warning}
        helperText="Validated FormGroup"
        data-testid="form-group-test-id"
      >
        <input id="id" />
      </FormGroup>
    );

    const formGroupHtml = screen.getByTestId('form-group-test-id').outerHTML;

    expect(formGroupHtml).toContain('pf-m-warning');
    expect(formGroupHtml).toMatchSnapshot();
  });

  test('should render correctly when label is not a string with Children = Array', () => {
    render(
      <FormGroup fieldId="id" label={returnFunction()} data-testid="form-group-test-id">
        <input aria-label="label" />
        <input id="id" />
        <input />
      </FormGroup>
    );
    expect(screen.getByTestId('form-group-test-id').outerHTML).toMatchSnapshot();
  });
});
