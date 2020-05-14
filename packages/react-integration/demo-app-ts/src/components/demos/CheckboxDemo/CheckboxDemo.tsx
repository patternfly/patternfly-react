import React from 'react';
import { Checkbox } from '@patternfly/react-core';

interface CheckboxState {
  check1: boolean;
  check2: boolean;
}

export class CheckboxDemo extends React.Component<{}, CheckboxState> {
  handleChange: (check: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  constructor(props: {}) {
    super(props);
    this.state = {
      check1: false,
      check2: false
    };
    this.handleChange = (checked: boolean, event: any) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      if (name === 'check1') {
        this.setState({ ['check1']: value });
      } else if (name === 'check2') {
        this.setState({ ['check2']: value });
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Checkbox
          label="Controlled CheckBox"
          isChecked={this.state.check1}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-1"
          name="check1"
          description="This is the description of checkbox #1"
        />
        <Checkbox
          label="Controlled CheckBox"
          isChecked={this.state.check2}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-2"
          name="check2"
        />
      </React.Fragment>
    );
  }
}
