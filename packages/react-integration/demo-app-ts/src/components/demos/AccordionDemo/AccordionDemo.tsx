import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionToggle,
  AccordionExpandedContentBody,
  Stack,
  StackItem,
  Button
} from '@patternfly/react-core';

interface AccordionDemoState {
  expanded: string;
}

export class AccordionDemo extends React.Component<null, AccordionDemoState> {
  static displayName = 'AccordionDemo';
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
      <Stack hasGutter>
        <StackItem>
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
        </StackItem>
        <StackItem>
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
        </StackItem>
        <StackItem>
          <Accordion id="accordion-bordered" isBordered displaySize="large">
            <AccordionItem>
              <AccordionToggle
                onClick={() => {
                  this.onToggle('ex-toggle1');
                }}
                isExpanded={expanded === 'ex-toggle1'}
                id="ex-toggle1"
              >
                Item One
              </AccordionToggle>
              <AccordionContent id="ex-expand1" isHidden={expanded !== 'ex-toggle1'}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionToggle
                onClick={() => {
                  this.onToggle('ex-toggle2');
                }}
                isExpanded={expanded === 'ex-toggle2'}
                id="ex-toggle2"
              >
                Item Two
              </AccordionToggle>
              <AccordionContent id="ex-expand2" isHidden={expanded !== 'ex-toggle2'}>
                <p>
                  Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
                  ultrices, faucibus erat id, maximus nunc.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionToggle
                onClick={() => {
                  this.onToggle('ex-toggle3');
                }}
                isExpanded={expanded === 'ex-toggle3'}
                id="ex-toggle3"
              >
                Item Three
              </AccordionToggle>
              <AccordionContent id="ex-expand3" isHidden={expanded !== 'ex-toggle3'}>
                <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionToggle
                onClick={() => {
                  this.onToggle('ex-toggle4');
                }}
                isExpanded={expanded === 'ex-toggle4'}
                id="ex-toggle4"
              >
                Item Four
              </AccordionToggle>
              <AccordionContent id="ex-expand4" isHidden={expanded !== 'ex-toggle4'} isCustomContent>
                <AccordionExpandedContentBody>
                  Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula
                  pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula
                  ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies
                  condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec
                  rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus,
                  sit amet auctor eros.
                </AccordionExpandedContentBody>
                <AccordionExpandedContentBody>
                  <Button variant="link" isLarge isInline>
                    Call to action
                  </Button>
                </AccordionExpandedContentBody>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionToggle
                onClick={() => {
                  this.onToggle('ex-toggle5');
                }}
                isExpanded={expanded === 'ex-toggle5'}
                id="ex-toggle5"
              >
                Item Five
              </AccordionToggle>
              <AccordionContent id="ex-expand5" isHidden={expanded !== 'ex-toggle5'}>
                <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </StackItem>
      </Stack>
    );
  }
}
