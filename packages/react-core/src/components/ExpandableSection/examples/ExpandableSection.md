---
id: Expandable section
section: components
cssPrefix: pf-c-expandable-section
propComponents: ['ExpandableSection']
---

## Examples
### Basic
```js
import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';

class SimpleExpandableSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.onToggle = (isExpanded) => {
      this.setState({
        isExpanded
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

### Uncontrolled
```js
import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';


<ExpandableSection toggleText="Show More">
  This content is visible only when the component is expanded.
</ExpandableSection>
```

### Uncontrolled with dynamic toggle text
```js
import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';


<ExpandableSection toggleTextExpanded="Show Less" toggleTextCollapsed="Show More">
  This content is visible only when the component is expanded.
</ExpandableSection>
```
