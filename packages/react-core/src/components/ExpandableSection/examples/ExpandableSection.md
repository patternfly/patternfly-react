---
id: Expandable section
section: components
cssPrefix: pf-c-expandable-section
propComponents: ['ExpandableSection', 'ExpandableSectionToggle']
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
    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <ExpandableSection
        toggleText={isExpanded ? 'Show less' : 'Show more'}
        onToggle={this.onToggle}
        isExpanded={isExpanded}
      >
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

<ExpandableSection toggleText="Show more">
  This content is visible only when the component is expanded.
</ExpandableSection>;
```

### Uncontrolled with dynamic toggle text

```js
import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';

<ExpandableSection toggleTextExpanded="Show less" toggleTextCollapsed="Show more">
  This content is visible only when the component is expanded.
</ExpandableSection>;
```

### Detached

```js
import React from 'react';
import { ExpandableSection, ExpandableSectionToggle, Stack, StackItem } from '@patternfly/react-core';

class DetachedExpandableSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const contentId = 'detached-toggle-content';
    return (
      <Stack hasGutter>
        <StackItem>
          <ExpandableSection isExpanded={isExpanded} isDetached contentId={contentId}>
            This content is visible only when the component is expanded.
          </ExpandableSection>
        </StackItem>
        <StackItem>
          <ExpandableSectionToggle
            isExpanded={isExpanded}
            onToggle={this.onToggle}
            contentId={contentId}
            direction="up"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </ExpandableSectionToggle>
        </StackItem>
      </Stack>
    );
  }
}
```

### Disclosure variation

```js
import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';

class DisclosureExpandableSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <ExpandableSection
        toggleText={isExpanded ? 'Show less' : 'Show more'}
        onToggle={this.onToggle}
        isExpanded={isExpanded}
        displaySize="large"
        isWidthLimited
      >
        This content is visible only when the component is expanded.
      </ExpandableSection>
    );
  }
}
```

### Indented

```js
import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';

class SimpleExpandableSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <ExpandableSection
        toggleText={isExpanded ? 'Show less' : 'Show more'}
        onToggle={this.onToggle}
        isExpanded={isExpanded}
        isIndented={true}
      >
        This content is visible only when the component is expanded.
      </ExpandableSection>
    );
  }
}
```