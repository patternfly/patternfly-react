---
title: "Select"
cssPrefix: "pf-c-select"
---
## Single Select Input
```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class SingleSelectInput extends React.Component {
  constructor(props) {
    this.options = [
      { value: 'Choose...', disabled: false, isPlaceholder: true },
      { value: 'Mr', disabled: false },
      { value: 'Miss', disabled: false },
      { value: 'Mrs', disabled: false },
      { value: 'Ms', disabled: false },
      { value: 'Dr', disabled: false },
      { value: 'Other', disabled: false }
    ];

    this.state = {
      isExpanded: false,
      selected: null
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isExpanded: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'title-id';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isExpanded={isExpanded}
          ariaLabelledBy={titleId}
        >
          {this.options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              isPlaceholder={option.isPlaceholder}
            />
          ))}
        </Select>
      </div>
    );
  }
}
```