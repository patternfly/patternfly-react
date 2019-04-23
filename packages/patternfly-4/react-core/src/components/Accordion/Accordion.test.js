import React from 'react';
import { shallow, mount } from 'enzyme';
import Accordion from './Accordion';
import AccordionToggle from './AccordionToggle';
import { Button } from '@patternfly/react-core';

describe('Accordion', () => {
  test('Accordion default', () => {
    const view = shallow(<Accordion aria-label="this is a simple accordion" />);
    expect(view).toMatchSnapshot();
  });

  test('Toggle default with aria label', () => {
    const view = mount(
      <AccordionToggle aria-label="Toggle details for" aria-labelledby="ex-toggle2 ex-item2" id="ex-toggle2" />
    );

    expect(view.find(Button).props()['aria-label']).toBe('Toggle details for');
    expect(view.find(Button).props()['aria-labelledby']).toBe(null);
    expect(view.find(Button).props()['aria-expanded']).toBe(false);
    expect(view.find(Button).props().id).toBe('ex-toggle2');
    expect(view.find(Button).props().id).toBe('ex-toggle2');
  });

  test('Toggle expanded', () => {
    const view = mount(<AccordionToggle aria-label="Toggle details for" id="ex-toggle2" isExpanded />);
    expect(view.find(Button).props()['aria-expanded']).toBe(true);
  });
});
