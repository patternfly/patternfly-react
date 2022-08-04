import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionToggle,
  AccordionExpandedContentBody,
  Button,
  Checkbox
} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

export const AccordionBordered: React.FunctionComponent = () => {
  const [expanded, setExpanded] = React.useState('bordered-toggle4');
  const [isDisplayLarge, setIsDisplayLarge] = React.useState(false);

  const displaySize = isDisplayLarge ? 'large' : 'default';
  const onToggle = (id: string) => {
    if (id === expanded) {
      setExpanded('');
    } else {
      setExpanded(id);
    }
  };

  return (
    <>
      <Accordion isBordered displaySize={displaySize}>
        <AccordionItem>
          <AccordionToggle
            onClick={() => {
              onToggle('bordered-toggle1');
            }}
            isExpanded={expanded === 'bordered-toggle1'}
            id="bordered-toggle1"
          >
            Item one
          </AccordionToggle>
          <AccordionContent id="bordered-expand1" isHidden={expanded !== 'bordered-toggle1'}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => {
              onToggle('bordered-toggle2');
            }}
            isExpanded={expanded === 'bordered-toggle2'}
            id="bordered-toggle2"
          >
            Item two
          </AccordionToggle>
          <AccordionContent id="bordered-expand2" isHidden={expanded !== 'bordered-toggle2'}>
            <p>
              Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
              ultrices, faucibus erat id, maximus nunc.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => {
              onToggle('bordered-toggle3');
            }}
            isExpanded={expanded === 'bordered-toggle3'}
            id="bordered-toggle3"
          >
            Item three
          </AccordionToggle>
          <AccordionContent id="bordered-expand3" isHidden={expanded !== 'bordered-toggle3'}>
            <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => {
              onToggle('bordered-toggle4');
            }}
            isExpanded={expanded === 'bordered-toggle4'}
            id="bordered-toggle4"
          >
            Item four
          </AccordionToggle>
          <AccordionContent id="bordered-expand4" isHidden={expanded !== 'bordered-toggle4'} isCustomContent>
            <AccordionExpandedContentBody>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </AccordionExpandedContentBody>
            <AccordionExpandedContentBody>
              <Button variant="link" isLarge isInline>
                Call to action <ArrowRightIcon />
              </Button>
            </AccordionExpandedContentBody>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle
            onClick={() => {
              onToggle('bordered-toggle5');
            }}
            isExpanded={expanded === 'bordered-toggle5'}
            id="bordered-toggle5"
          >
            Item five
          </AccordionToggle>
          <AccordionContent id="bordered-expand5" isHidden={expanded !== 'bordered-toggle5'}>
            <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div style={{ marginTop: '30px' }}>
        <Checkbox
          label="Display size large"
          isChecked={isDisplayLarge}
          onChange={setIsDisplayLarge}
          aria-label="show displlay large variation checkbox"
          id="toggle-display-lg"
          name="toggle-display-lg"
        />
      </div>
    </>
  );
};
