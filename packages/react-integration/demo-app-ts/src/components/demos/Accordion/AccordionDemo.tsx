import React from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';

export const AccordionDemo = () => {
  const [expanded, setExpanded] = React.useState('');

  const onToggle = (id: string) => {
    if (id === expanded) {
      setExpanded('');
    } else {
      setExpanded(id);
    }
  };

  return (
    <>
      <Accordion asDefinitionList={false}>
        <AccordionItem>
          <AccordionToggle
            id={`divAccordion-item1-toggle`}
            onClick={() => onToggle('divAccordion-item1-toggle')}
            isExpanded={expanded === 'divAccordion-item1-toggle'}
          >
            Div item one
          </AccordionToggle>
          <AccordionContent id={`divAccordion-item1-content`} isHidden={expanded !== 'divAccordion-item1-toggle'}>
            <p>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </p>
            <p>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle
            id={`divAccordion-item2-toggle`}
            onClick={() => onToggle('divAccordion-item2-toggle')}
            isExpanded={expanded === 'divAccordion-item2-toggle'}
          >
            Div item two
          </AccordionToggle>
          <AccordionContent
            id={`divAccordion-item2-content`}
            isFixed
            isHidden={expanded !== 'divAccordion-item2-toggle'}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle
            id={`divAccordion-item3-toggle`}
            onClick={() => onToggle('divAccordion-item3-toggle')}
            isExpanded={expanded === 'divAccordion-item3-toggle'}
          >
            Div item three
          </AccordionToggle>
          <AccordionContent
            id={`divAccordion-item3-content`}
            isFixed
            isHidden={expanded !== 'divAccordion-item3-toggle'}
          >
            <p>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </p>
            <p>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion>
        <AccordionItem>
          <AccordionToggle id={`definitionListAccordion-item1-toggle`} isExpanded={true}>
            Definition list item one
          </AccordionToggle>
          <AccordionContent id={`definitionListAccordion-item1-content`} isFixed isHidden={false}>
            <p>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </p>
            <p>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
