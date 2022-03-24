import React from 'react';
import { FormGroup } from '../FormGroup';
import { Form } from '../Form';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { ValidatedOptions } from '../../../helpers/constants';

describe('FormGroup component', () => {
  const returnFunction = () => <div>label</div>;

  test('should render default form group variant', () => {
    const view = render(
      <FormGroup label="label" fieldId="label-id" helperText="this is helper text">
        <input id="label-id" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render inline form group variant', () => {
    const view = mount(
      <FormGroup isInline label="label" fieldId="label-id" helperText="this is helper text">
        <input id="label-id" />
      </FormGroup>
    );
    expect(view).toMatchSnapshot();
    expect(view.find('.pf-c-form__group-control').prop('className')).toMatch(/pf-m-inline/);
  });

  test('should render no padding-top form group variant', () => {
    const view = mount(
      <FormGroup hasNoPaddingTop label="label" fieldId="label-id" helperText="this is helper text">
        <input id="label-id" />
      </FormGroup>
    );
    expect(view.find('.pf-c-form__group-label').prop('className')).toMatch(/no-padding-top/);
  });

  test('should render form group variant with required label', () => {
    const view = render(
      <FormGroup label="label" isRequired fieldId="label-id">
        <input id="label-id" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group variant with node label', () => {
    const view = render(
      <FormGroup fieldId="id" label={<h1>Header</h1>}>
        <input aria-label="input" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group with additonal label info', () => {
    const view = render(
      <FormGroup fieldId="id" label={<h1>Header</h1>} labelInfo="more info">
        <input aria-label="input" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group variant with function label', () => {
    const view = render(
      <FormGroup fieldId="id" label={returnFunction()}>
        <input aria-label="input" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group variant with node helperText', () => {
    const view = render(
      <FormGroup label="Label" fieldId="label-id" helperText={<h1>Header</h1>}>
        <input id="label-id" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group variant with function helperText', () => {
    const view = render(
      <FormGroup label="Label" fieldId="label-id" helperText={returnFunction()}>
        <input id="label-id" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render horizontal form group variant', () => {
    const view = render(
      <Form isHorizontal>
        <FormGroup label="label" fieldId="label-id" helperText="this is helperText">
          <input id="label-id" />
        </FormGroup>
      </Form>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render stacked horizontal form group variant', () => {
    const view = render(
      <Form isHorizontal>
        <FormGroup label="label" fieldId="label-id" isStack helperText="this is helperText">
          <input id="label-id" />
        </FormGroup>
      </Form>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render helper text above input', () => {
    const view = render(
      <Form isHorizontal>
        <FormGroup label="label" fieldId="label-id" helperText="this is helperText" isHelperTextBeforeField>
          <input id="label-id" />
        </FormGroup>
      </Form>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group variant without label', () => {
    const view = render(
      <FormGroup fieldId="id">
        <input aria-label="input" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group required variant', () => {
    const view = render(
      <FormGroup isRequired label="label" fieldId="id">
        <input id="id" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group invalid variant', () => {
    const view = render(
      <FormGroup label="label" fieldId="label-id" validated={'error'} helperTextInvalid="Invalid FormGroup">
        <input id="id" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group validated success variant', () => {
    const view = mount(
      <FormGroup label="label" fieldId="label-id" validated={ValidatedOptions.success} helperText="Validated FormGroup">
        <input id="id" />
      </FormGroup>
    );
    expect(view.find('.pf-c-form__helper-text.pf-m-success').length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('should render form group validated error variant', () => {
    const view = render(
      <FormGroup label="label" fieldId="label-id" validated={ValidatedOptions.error} helperText="Validated FormGroup">
        <input id="id" />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should render form group validated warning variant', () => {
    const view = mount(
      <FormGroup label="label" fieldId="label-id" validated={ValidatedOptions.warning} helperText="Validated FormGroup">
        <input id="id" />
      </FormGroup>
    );
    expect(view.find('.pf-c-form__helper-text.pf-m-warning').length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('should render correctly when label is not a string with Children = Array', () => {
    const view = render(
      <FormGroup fieldId="id" label={returnFunction()}>
        <input aria-label="label" />
        <input id="id" />
        <input />
      </FormGroup>
    );
    expect(view.container).toMatchSnapshot();
  });
});
