import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { Accordion } from '../Accordion';
import { AccordionToggle } from '../AccordionToggle';
import { AccordionContent } from '../AccordionContent';
import { AccordionItem } from '../AccordionItem';
import { AccordionExpandedContentBody } from '../AccordionExpandedContentBody';

describe('Accordion', () => {
  test('Accordion default', () => {
    const view = render(<Accordion aria-label="this is a simple accordion" />);
    expect(view.container).toMatchSnapshot();
  });

  test('Accordion with non-default headingLevel', () => {
    const view = render(
      <Accordion asDefinitionList={false} headingLevel="h2">
        <AccordionItem>
          <AccordionToggle id="item-1">Item One</AccordionToggle>
          <AccordionContent>Item One Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('It should pass optional aria props', () => {
    const view = mount(
      <Accordion asDefinitionList>
        <AccordionToggle aria-label="Toggle details for" aria-labelledby="ex-toggle2 ex-item2" id="ex-toggle2" />
      </Accordion>
    );
    const button = view.find('button[id="ex-toggle2"]').getElement();
    expect(button.props['aria-label']).toBe('Toggle details for');
    expect(button.props['aria-labelledby']).toBe('ex-toggle2 ex-item2');
    expect(button.props['aria-expanded']).toBe(false);
  });

  test('Toggle expanded', () => {
    const view = mount(
      <Accordion asDefinitionList>
        <AccordionToggle aria-label="Toggle details for" id="ex-toggle2" isExpanded />
      </Accordion>
    );
    const button = view.find('button[id="ex-toggle2"]').getElement();
    expect(button.props['aria-expanded']).toBe(true);
    expect(button.props.className).toContain('pf-m-expanded');
  });

  test('Custom containers', () => {
    const container = 'a';
    const view = mount(
      <Accordion headingLevel="h2">
        <AccordionItem>
          <AccordionToggle id="item-1" component={container}>
            Item One
          </AccordionToggle>
          <AccordionContent component={container}>Item One Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(view.find(AccordionToggle).getDOMNode().tagName).toBe(container.toLocaleUpperCase());
    expect(view.find(AccordionContent).getDOMNode().tagName).toBe(container.toLocaleUpperCase());
  });

  test('Accordion bordered', () => {
    const view = render(
      <Accordion isBordered>
        <AccordionItem>
          <AccordionToggle id="item-1">Item One</AccordionToggle>
          <AccordionContent>Item One Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('Accordion display large', () => {
    const view = render(
      <Accordion displaySize='large'>
        <AccordionItem>
          <AccordionToggle id="item-1">Item One</AccordionToggle>
          <AccordionContent>Item One Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('Accordion custom content', () => {
    const view = render(
      <Accordion>
        <AccordionItem>
          <AccordionToggle id="item-1">Item One</AccordionToggle>
          <AccordionContent isCustomContent>
            <AccordionExpandedContentBody>Item one content body 1</AccordionExpandedContentBody>
            <AccordionExpandedContentBody>Item one Content body 2</AccordionExpandedContentBody>
            </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(view.container).toMatchSnapshot();
  });
});
