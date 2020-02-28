import React from 'react';
import { render } from 'enzyme';
import { InlineEdit } from './index';

describe('InlineEdit', () => {
  const inlineEdit = label => (value, additionalData) => (
    <div>
      {label}: {value}
      <br />
      additionalData: {JSON.stringify(additionalData)}
    </div>
  );

  const baseProps = {
    value: 'VALUE',
    additionalData: { some: 'data' },
    renderValue: inlineEdit('value'),
    renderEdit: inlineEdit('edit')
  };

  test('it renders value', () => {
    const component = render(<InlineEdit {...baseProps} isEditing={() => false} />);
    expect(component).toMatchSnapshot();
  });

  test('it renders edit input', () => {
    const component = render(<InlineEdit {...baseProps} isEditing={() => true} />);
    expect(component).toMatchSnapshot();
  });
});
