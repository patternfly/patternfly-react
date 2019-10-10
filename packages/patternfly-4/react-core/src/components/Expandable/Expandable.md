---
title: 'Expandable'
cssPrefix: 'pf-c-expandable'
typescript: true
propComponents: ['Expandable']
---

import { Expandable } from '@patternfly/react-core';

## Simple expandable
```js
import React from 'react';
import { Expandable } from '@patternfly/react-core';

class SimpleExpandable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.onToggle = () => {
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <Expandable toggleText={isExpanded ? 'Show Less' : 'Show More'} onToggle={this.onToggle} isExpanded={isExpanded}>
        This content is visible only when the component is expanded.
      </Expandable>
    );
  }
}
```

## Simple uncontrolled expandable
```js
import React from 'react';
import { Expandable } from '@patternfly/react-core';


<Expandable toggleText="Show More">
  This content is visible only when the component is expanded.
</Expandable>
```

## Uncontrolled expandable with dynamic toggle text
```js
import React from 'react';
import { Expandable } from '@patternfly/react-core';


<Expandable toggleTextExpanded="Show Less" toggleTextCollapsed="Show More">
  This content is visible only when the component is expanded.
</Expandable>
```
