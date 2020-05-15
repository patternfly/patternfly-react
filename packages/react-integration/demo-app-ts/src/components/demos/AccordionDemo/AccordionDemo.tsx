import React from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';

interface AccordionDemoState {
  expanded: string;
}

export class AccordionDemo extends React.Component<null, AccordionDemoState> {
  state: AccordionDemoState = {
    expanded: ''
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onToggle = (id: string) => {
    const { expanded } = this.state;
    this.setState({ expanded: id !== expanded ? id : '' });
  };

  render() {
    const { expanded } = this.state;
    return (
      <React.Fragment>
        <Accordion id="accordion-example">
          <AccordionItem>
            <AccordionToggle onClick={() => this.onToggle('item-1')} isExpanded={expanded === 'item-1'} id="item-1">
              Item One
            </AccordionToggle>
            <AccordionContent isHidden={expanded !== 'item-1'} id="item-1-content">
              <p>
                Item One Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionToggle onClick={() => this.onToggle('item-2')} isExpanded={expanded === 'item-2'} id="item-2">
              Item Two
            </AccordionToggle>
            <AccordionContent isHidden={expanded !== 'item-2'} id="item-2-content">
              <p>
                Item Two Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionToggle onClick={() => this.onToggle('item-3')} isExpanded={expanded === 'item-3'} id="item-3">
              Item Three
            </AccordionToggle>
            <AccordionContent isHidden={expanded !== 'item-3'} id="item-3-content">
              <p>
                Item Three Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion id="accordion-example-no-box-shadow">
          <AccordionItem>
            <AccordionToggle onClick={() => this.onToggle('item-1')} isExpanded={expanded === 'item-1'} id="item-1">
              Item One
            </AccordionToggle>
            <AccordionContent isHidden={expanded !== 'item-1'} id="item-1-content">
              <p>
                Item One Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionToggle onClick={() => this.onToggle('item-2')} isExpanded={expanded === 'item-2'} id="item-2">
              Item Two
            </AccordionToggle>
            <AccordionContent isHidden={expanded !== 'item-2'} id="item-2-content">
              <p>
                Item Two Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionToggle onClick={() => this.onToggle('item-3')} isExpanded={expanded === 'item-3'} id="item-3">
              Item Three
            </AccordionToggle>
            <AccordionContent isHidden={expanded !== 'item-3'} id="item-3-content">
              <p>
                Item Three Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </React.Fragment>
    );
  }
}
