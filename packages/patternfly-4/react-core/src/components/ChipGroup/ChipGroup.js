import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/ChipGroup/chip-group.css';
import { Chip } from '@patternfly/react-core';
import { fillTemplate } from '../../helpers';

const propTypes = {
  /** Content rendered inside the chip text */
  children: PropTypes.node,
  /** Additional classes added to the chip item */
  className: PropTypes.string,
  /** Customizable "Show Less" text string */
  expandedText: PropTypes.string,
  /**
   * Customizeable template string. Use variable "${remaining}" for the overflow chip count.
   */
  collapsedText: PropTypes.string,
  /** Flag for grouping with a toolbar & category name */
  withToolbar: PropTypes.bool
};

const defaultProps = {
  children: null,
  className: '',
  expandedText: 'Show Less',
  collapsedText: '${remaining} more',
  withToolbar: false
};

class ChipGroup extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  renderToolbarGroup() {
    const { isOpen } = this.state;
    return <InnerChipGroup {...this.props} isOpen={isOpen} onToggleCollapse={this.toggleCollapse} />;
  }

  renderChipGroup() {
    const { className } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={css(styles.chipGroup, className)}>
        <InnerChipGroup {...this.props} isOpen={isOpen} onToggleCollapse={this.toggleCollapse} />
      </div>
    );
  }

  render() {
    const { withToolbar, children } = this.props;
    if (React.Children.count(children)) {
      return withToolbar ? this.renderToolbarGroup() : this.renderChipGroup();
    }
    return null;
  }
}

const InnerChipGroup = props => {
  const { children, expandedText, isOpen, onToggleCollapse, collapsedText } = props;

  const collapsedTextResult = fillTemplate(collapsedText, { remaining: React.Children.count(children) - 1 });
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>{children}</React.Fragment>
      ) : (
        <React.Fragment>
          {React.Children.map(children, (child, i) => {
            if (i === 0) return child;
          })}
        </React.Fragment>
      )}
      {React.Children.count(children) > 1 && (
        <Chip isOverflowChip onClick={onToggleCollapse}>
          {isOpen ? expandedText : collapsedTextResult}
        </Chip>
      )}
    </React.Fragment>
  );
};

ChipGroup.propTypes = propTypes;
ChipGroup.defaultProps = defaultProps;

export default ChipGroup;
