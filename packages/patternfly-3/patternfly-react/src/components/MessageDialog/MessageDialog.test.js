import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../index';

import MessageDialog from './MessageDialog';

let onHide;
let primaryAction;
let primaryActionButtonContent;
let baseProps;
beforeEach(() => {
  onHide = jest.fn();
  primaryAction = jest.fn();
  primaryActionButtonContent = 'Ok';
  baseProps = { show: true, primaryActionButtonContent };
});

describe('rendering with options', () => {
  test('renders secondary action button', () => {
    const secondaryActionButtonContent = 'Cancel';
    const wrapper = shallow(
      <MessageDialog
        {...baseProps}
        onHide={onHide}
        primaryAction={primaryAction}
        secondaryActionButtonContent={secondaryActionButtonContent}
      />
    );

    expect(wrapper.find('Button')).toHaveLength(2);
    expect(
      wrapper
        .find('Button')
        .at(0)
        .html()
        .match(secondaryActionButtonContent)
    ).toBeTruthy();
  });

  test('renders with the provided title', () => {
    const title = 'Modal Title';
    const wrapper = shallow(
      <MessageDialog {...baseProps} onHide={onHide} primaryAction={primaryAction} title={title} />
    );

    expect(
      wrapper
        .find('ModalTitle')
        .html()
        .match(title)
    ).toBeTruthy();
  });

  test('renders with the provided primary text', () => {
    const primaryContent = <h1>Modal Heading</h1>;
    const wrapper = shallow(
      <MessageDialog {...baseProps} onHide={onHide} primaryAction={primaryAction} primaryContent={primaryContent} />
    );

    expect(wrapper.contains(primaryContent)).toBe(true);
  });

  test('renders with the provided secondary text', () => {
    const secondaryContent = <div>Modal Body</div>;
    const wrapper = shallow(
      <MessageDialog {...baseProps} onHide={onHide} primaryAction={primaryAction} secondaryContent={secondaryContent} />
    );

    expect(wrapper.contains(secondaryContent)).toBe(true);
  });

  test('renders with a custom footer', () => {
    const footer = (
      <React.Fragment>
        <Button>Close</Button>
      </React.Fragment>
    );
    const wrapper = shallow(
      <MessageDialog {...baseProps} onHide={onHide} primaryAction={primaryAction} footer={footer} />
    );

    expect(wrapper.contains(footer)).toBe(true);
  });
});

describe('button interactions', () => {
  let wrapper;
  let secondaryAction;
  beforeEach(() => {
    secondaryAction = jest.fn();
    wrapper = shallow(
      <MessageDialog
        {...baseProps}
        onHide={onHide}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        secondaryActionButtonContent="Cancel"
      />
    );
  });

  test('clicking the cancel icon invokes onHide', () => {
    wrapper.find('ModalCloseButton').simulate('click');
    expect(onHide).toHaveBeenCalled();
  });

  test('clicking the secondary action button invokes secondaryAction', () => {
    wrapper
      .find('Button')
      .at(0)
      .simulate('click');
    expect(secondaryAction).toHaveBeenCalled();
  });

  test('clicking the primary action button invokes primaryAction', () => {
    wrapper
      .find('Button')
      .at(1)
      .simulate('click');
    expect(primaryAction).toHaveBeenCalled();
  });
});
