import React from 'react';
import { shallow, mount } from 'enzyme';
import Accordion from './Accordion';
import AccordionToggle from './AccordionToggle';

describe('Accordion', () => {
  test('Accordion default', () => {
    const view = shallow(<Accordion aria-label="this is a simple accordion" />);
    expect(view.render()).toMatchSnapshot();
  });

  test('It should pass optional aria props', () => {
    const view = mount(
      <AccordionToggle aria-label="Toggle details for" aria-labelledby="ex-toggle2 ex-item2" id="ex-toggle2" />
    );
    const button = view.find('button[id="ex-toggle2"]').getElement();
    expect(button.props['aria-label']).toBe('Toggle details for');
    expect(button.props['aria-labelledby']).toBe('ex-toggle2 ex-item2');
    expect(button.props['aria-expanded']).toBe(false);
  });

  test('Toggle expanded', () => {
    const view = mount(<AccordionToggle aria-label="Toggle details for" id="ex-toggle2" isExpanded />);
    const button = view.find('button[id="ex-toggle2"]').getElement();
    expect(button.props['aria-expanded']).toBe(true);
    expect(button.props.className).toContain('pf-m-expanded');
  });
});
