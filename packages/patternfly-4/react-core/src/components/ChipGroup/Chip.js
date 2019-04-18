import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ChipButton from './ChipButton';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { TimesCircleIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly/components/Chip/chip.css';
import GenerateId from '../../helpers/GenerateId/GenerateId';
import { componentShape } from '../../helpers/componentShape';

class Chip extends React.Component {
  span = React.createRef();
  state = { isTooltipVisible: false };

  componentDidMount() {
    this.setState({
      isTooltipVisible: this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth
    });
  }

  renderOverflowChip = () => {
    const { children, className, onClick, component: Component } = this.props;
    return (
      <Component className={css(styles.chip, styles.modifiers.overflow, className)}>
        <ChipButton onClick={onClick}>
          <span className={css(styles.chipText)}>{children}</span>
        </ChipButton>
      </Component>
    );
  };

  renderChip = randomId => {
    const {
      children,
      closeBtnAriaLabel,
      tooltipPosition,
      className,
      component: Component,
      onClick,
      isReadOnly
    } = this.props;
    if (this.state.isTooltipVisible) {
      return (
        <Tooltip position={tooltipPosition} content={children}>
          <Component className={css(styles.chip, isReadOnly && styles.modifiers.readOnly, className)}>
            <span ref={this.span} className={css(styles.chipText)} id={randomId}>
              {children}
            </span>
            {!isReadOnly && (
              <ChipButton
                onClick={onClick}
                ariaLabel={closeBtnAriaLabel}
                id={`remove_${randomId}`}
                aria-labelledby={`remove_${randomId} ${randomId}`}
              >
                <TimesCircleIcon aria-hidden="true" />
              </ChipButton>
            )}
          </Component>
        </Tooltip>
      );
    }
    return (
      <Component className={css(styles.chip, isReadOnly && styles.modifiers.readOnly, className)}>
        <span ref={this.span} className={css(styles.chipText)} id={randomId}>
          {children}
        </span>
        {!isReadOnly && (
          <ChipButton
            onClick={onClick}
            ariaLabel={closeBtnAriaLabel}
            id={`remove_${randomId}`}
            aria-labelledby={`remove_${randomId} ${randomId}`}
          >
            <TimesCircleIcon aria-hidden="true" />
          </ChipButton>
        )}
      </Component>
    );
  };

  render() {
    const { isOverflowChip } = this.props;
    return (
      <GenerateId>{randomId => (isOverflowChip ? this.renderOverflowChip() : this.renderChip(randomId))}</GenerateId>
    );
  }
}
Chip.propTypes = {
  /** Content rendered inside the chip text */
  children: PropTypes.node,
  /** Aria Label for close button */
  closeBtnAriaLabel: PropTypes.string,
  /** Additional classes added to the chip item */
  className: PropTypes.string,
  /** Flag indicating if the chip has overflow */
  isOverflowChip: PropTypes.bool,
  /** Flag if chip is read only */
  isReadOnly: PropTypes.bool,
  /** Function that is called when clicking on the chip button */
  onClick: PropTypes.func,
  /** Interal flag for which component will be used for chip */
  component: componentShape,
  /** Position of the tooltip which is displayed if text is longer */
  tooltipPosition: PropTypes.oneOf(Object.values(TooltipPosition))
};

Chip.defaultProps = {
  children: null,
  closeBtnAriaLabel: 'close',
  className: '',
  isOverflowChip: false,
  isReadOnly: false,
  tooltipPosition: 'top',
  onClick: () => {},
  component: 'div'
};

export default Chip;
