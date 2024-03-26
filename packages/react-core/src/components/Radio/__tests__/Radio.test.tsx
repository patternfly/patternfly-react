import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Radio } from '../Radio';

const props = {
  onChange: jest.fn()
};

describe('Radio', () => {
  test('controlled', () => {
    const { asFragment } = render(<Radio isChecked id="check" aria-label="check" name="check" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('uncontrolled', () => {
    const { asFragment } = render(<Radio id="check" aria-label="check" name="check" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('isDisabled', () => {
    const { asFragment } = render(<Radio id="check" isDisabled aria-label="check" name="check" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('labelPosition is "start"', () => {
    const { asFragment } = render(
      <Radio id="check" labelPosition="start" label="Radio label" aria-label="check" name="check" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('isLabelWrapped', () => {
    const { asFragment } = render(
      <Radio id="check" isLabelWrapped label="Radio label" aria-label="check" name="check" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('label is string', () => {
    const { asFragment } = render(<Radio label="Label" id="check" isChecked aria-label="check" name="check" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('label is function', () => {
    const functionLabel = () => <h1>Header</h1>;
    const { asFragment } = render(
      <Radio label={functionLabel()} id="check" isChecked aria-label="check" name="check" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('label is node', () => {
    const { asFragment } = render(
      <Radio label={<h1>Header</h1>} id="check" isChecked aria-label="check" name="check" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('passing class', () => {
    const { asFragment } = render(
      <Radio label="label" className="class-123" id="check" isChecked aria-label="check" name="check" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('passing HTML attribute', () => {
    const { asFragment } = render(
      <Radio label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" name="check" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Radio passes value and event to onChange handler', async () => {
    const user = userEvent.setup();

    render(<Radio id="check" {...props} aria-label="check" name="check" />);

    await user.click(screen.getByRole('radio'));
    expect(props.onChange).toHaveBeenCalledWith(expect.any(Object), true);
  });

  test('Radio description', () => {
    render(<Radio id="check" name="check" aria-label="check" description="Text description..." />);
    expect(screen.getByText('Text description...')).toBeInTheDocument();
  });

  test('Radio body', () => {
    render(<Radio id="check" name="check" aria-label="check" body="Text body..." />);
    expect(screen.getByText('Text body...')).toBeInTheDocument();
  });

  test('should throw console error when no id is given', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<Radio id={undefined} name="check" aria-label="check" description="Text description..." />);

    expect(myMock).toHaveBeenCalled();
  });

  test('Renders with the label wrapper if isLabelWrapped is provided', () => {
    render(<Radio id="test-id" name="check" isLabelWrapped />);

    expect(screen.getByRole('radio').parentElement?.tagName).toBe('LABEL');
  });

  test('Renders with span element around the inner label text if isLabelWrapped is provided', () => {
    const labelText = 'test radio label';
    render(<Radio id="test-id" name="check" isLabelWrapped label={labelText} />);

    expect(screen.getByText(labelText).tagName).toBe('SPAN');
  });

  test('Renders with the provided component although isLabelWrapped is provided', () => {
    render(<Radio id="test-id" name="check" isLabelWrapped component="h3" />);

    expect(screen.getByRole('radio').parentElement?.tagName).toBe('H3');
  });

  test('Renders with the label wrapper if component is set to label', () => {
    render(<Radio id="test-id" name="check" component="label" />);

    expect(screen.getByRole('radio').parentElement?.tagName).toBe('LABEL');
  });

  test('Renders with span element around the inner label text if component is set to label', () => {
    const labelText = 'test radio label';
    render(<Radio id="test-id" name="check" component="label" label={labelText} />);

    expect(screen.getByText(labelText).tagName).toBe('SPAN');
  });

  test('Renders label before radio input if labelPosition is "start"', () => {
    render(<Radio id="test-id" name="check" labelPosition="start" label={'test radio label'} />);

    const wrapper = screen.getByRole('radio').parentElement!;

    expect(wrapper.children[0].tagName).toBe('LABEL');
    expect(wrapper.children[1].tagName).toBe('INPUT');
  });
});
