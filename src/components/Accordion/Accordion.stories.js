import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Accordion, AccordionContent } from './index';

const stories = storiesOf('Accordion', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Accordion',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#accordion'
  })
);
const fixedBool = true;
stories.add(
  'Accordion',
  withInfo({
    source: true,
    propTables: [],
    propTablesExclude: []
  })(() => (
    <div className="row">
      <div className="col-md-4 col-lg-2 col-xl-2">
        <Accordion
          height={number('Accordion height', 200)}
          accordionId="test"
          expandedKey="2"
        >
          <AccordionContent
            title="First Panel title"
            eventKey="1"
            fixed={fixedBool}
          >
            <div>
              Sample panel content. Praesent sagittis est et arcu fringilla
              placerat. Cras erat ante, dapibus non mauris ac, volutpat
              sollicitudin ligula. Morbi gravida nisl vel risus tempor, sit amet
              luctus erat tempus. Curabitur blandit sem non pretium bibendum.
              Donec eleifend non turpis vitae vestibulum.Vestibulum ut sem ac
              nunc posuere blandit sed porta lorem.Cras rutrum velit vel leo
              iaculis imperdiet.
            </div>
          </AccordionContent>
          <AccordionContent
            title="Second Panel title"
            eventKey="2"
            fixed={fixedBool}
          >
            <div>Sample panel that has some simple content.</div>
          </AccordionContent>
          <AccordionContent
            title="Panel with selector element"
            eventKey="3"
            fixed={fixedBool}
            scrollSelector="scrollableContent"
          >
            <div>
              This is a non scrollable element, the scroll element is below this
              one
            </div>
            <div className="scrollableContent">
              Here is a bunch of scrollable content lets make sure the content
              is overflow hidden. Praesent sagittis est et arcu fringilla
              placerat. Cras erat ante, dapibus non mauris ac, volutpat
              sollicitudin ligula. Morbi gravida nisl vel risus tempor, sit amet
              luctus erat tempus. Curabitur blandit sem non pretium bibendum.
              Donec eleifend non turpis vitae vestibulum.Vestibulum ut sem ac
              nunc posuere blandit sed porta lorem.Cras rutrum velit vel leo
              iaculis imperdiet.
            </div>
          </AccordionContent>
        </Accordion>
      </div>
    </div>
  ))
);
