import React from 'react';
import PropTypes from 'prop-types';
import { multipPick, singlePick, disclosureCount } from './helpers';
import { Form } from '../../index';

class ProgressiveDisclosure extends React.Component {
  state = {
    selected: []
  };

  render() {
    const isRadio = disclosureCount(this.props.children) > 1;
    const Controller = isRadio ? Form.Radio : Form.Checkbox;
    const picker = isRadio ? singlePick : multipPick;
    const newChildren = React.Children.map(this.props.children, (child, ix) =>
      React.cloneElement(child, {
        show: this.state.selected.includes(ix),
        controlButton: (
          <Controller
            onChange={() =>
              this.setState(() => {
                this.props.onChange({
                  name: this.props.name,
                  text: child.props.text,
                  value: ix,
                  selected: picker(this.state.selected, ix)
                });
                return { selected: picker(this.state.selected, ix) };
              })
            }
            checked={this.state.selected.includes(ix)}
            name={child.props.name}
            value={ix}
          >
            {child.props.text}
          </Controller>
        )
      })
    );
    return newChildren;
  }
}

ProgressiveDisclosure.propTypes = {
  /** progressive disclosure children: at least one progressive disclosure items */
  children: PropTypes.node,
  /** progressive disclosure name */
  name: PropTypes.string.isRequired,
  /** progressive disclosure function that will be called when progressive disclosure state changed.
      passing an object with:
      - name: the name of the progressive disclosure
      - text: the progressive disclosure item name
      - value: the value that was changed
      - selected: selected item(s)
   */
  onChange: PropTypes.func.isRequired
};

ProgressiveDisclosure.defaultProps = {
  children: []
};
export default ProgressiveDisclosure;
