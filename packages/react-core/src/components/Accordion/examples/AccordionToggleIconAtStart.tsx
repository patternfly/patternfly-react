import React from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';

export const AccordionToggleIconAtStart: React.FunctionComponent = () => {
  const [expanded, setExpanded] = React.useState('start-toggle-toggle2');

  const onToggle = (id: string) => {
    if (id === expanded) {
      setExpanded('');
    } else {
      setExpanded(id);
    }
  };

  return (
    <Accordion togglePosition="start">
      <AccordionItem isExpanded={expanded === 'start-toggle-toggle1'}>
        <AccordionToggle
          onClick={() => {
            onToggle('start-toggle-toggle1');
          }}
          id="start-toggle-toggle1"
        >
          Item one
        </AccordionToggle>
        <AccordionContent id="start-toggle-expand1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem isExpanded={expanded === 'start-toggle-toggle2'}>
        <AccordionToggle
          onClick={() => {
            onToggle('start-toggle-toggle2');
          }}
          id="start-toggle-toggle2"
        >
          Item two
        </AccordionToggle>
        <AccordionContent id="start-toggle-expand2">
          <p>
            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
            ultrices, faucibus erat id, maximus nunc.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem isExpanded={expanded === 'start-toggle-toggle3'}>
        <AccordionToggle
          onClick={() => {
            onToggle('start-toggle-toggle3');
          }}
          id="start-toggle-toggle3"
        >
          Item three
        </AccordionToggle>
        <AccordionContent id="start-toggle-expand3">
          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem isExpanded={expanded === 'start-toggle-toggle4'}>
        <AccordionToggle
          onClick={() => {
            onToggle('start-toggle-toggle4');
          }}
          id="start-toggle-toggle4"
        >
          Item four
        </AccordionToggle>
        <AccordionContent id="start-toggle-expand4">
          <p>
            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
            tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
            convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
            dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem isExpanded={expanded === 'start-toggle-toggle5'}>
        <AccordionToggle
          onClick={() => {
            onToggle('start-toggle-toggle5');
          }}
          id="start-toggle-toggle5"
        >
          Item five
        </AccordionToggle>
        <AccordionContent id="start-toggle-expand5">
          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
