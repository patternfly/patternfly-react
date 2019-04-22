---
title: 'Accordion'
cssPrefix: 'pf-c-{IAN_FILL_IN_THE_BLANK}'
---

import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';

# Haahaaa

<Accordion>
  <AccordionItem>
    I'm an item!
  </AccordionItem>
</Accordion>

## Simple Accordion
```js
import React from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';

class SimpleAccordion extends React.Component {
  render() {
    return (
      <Accordion>
        <AccordionItem>
          I'm an item!
        </AccordionItem>
      </Accordion>
    );
  }
}
```
