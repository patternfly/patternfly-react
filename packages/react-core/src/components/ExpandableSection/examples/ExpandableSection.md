---
title: 'Expandable section'
section: components
cssPrefix: 'pf-c-expandable-section'
typescript: true
propComponents: ['ExpandableSection']
---

import { ExpandableSection } from '@patternfly/react-core';

## Examples
```js title=Basic
import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';

class SimpleExpandableSection extends React.Component {
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
      <ExpandableSection toggleText={isExpanded ? 'Show Less' : 'Show More'} onToggle={this.onToggle} isExpanded={isExpanded}>
        This content is visible only when the component is expanded.
      </ExpandableSection>
    );
  }
}
```

```js title=Uncontrolled
import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';


UncontrolledExpandable = () => (
  <ExpandableSection toggleText="Show More">
    This content is visible only when the component is expanded.
</ExpandableSection>
)
```

```js title=Uncontrolled-with-dynamic-toggle-text
import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';


UncontrolledWithToggleExpandable = () => (
  <ExpandableSection toggleTextExpanded="Show Less" toggleTextCollapsed="Show More">
    This content is visible only when the component is expanded.
  </ExpandableSection>
)
```
