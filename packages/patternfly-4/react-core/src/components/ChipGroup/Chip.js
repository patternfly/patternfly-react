import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ChipButton from './ChipButton';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { TimesCircleIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly/components/Chip/chip.css';
import GenerateId from '../../helpers/GenerateId/GenerateId';

const propTypes = {
  /** Content rendered inside the chip text */
  children: PropTypes.node,
  /** Aria Label for close button */
  'aria-label': PropTypes.string,
  /** Additional classes added to the chip item */
  className: PropTypes.string,
  /** Flag indicating if the chip has overflow */
  isOverflowChip: PropTypes.bool,
  /** Function that is called when clicking on the chip button */
  onClick: PropTypes.func,
  /** Position of the tooltip which is displayed if text is longer */
  tooltipPosition: PropTypes.oneOf(Object.values(TooltipPosition))
};

const defaultProps = {
  children: null,
  'aria-label': 'close',
  className: '',
  isOverflowChip: false,
  tooltipPosition: 'top',
  onClick: () => { }
};

class Chip extends React.Component {
  span = React.createRef();
  state = { isTooltipVisible: false };

  componentDidMount() {
    this.setState({
      isTooltipVisible: this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth
    });
  }

  renderOverflowChip = () => {
    const { children, className, onClick } = this.props;
    return (
      <div className={css(styles.chip, styles.modifiers.overflow, className)}>
        <ChipButton onClick={onClick}>
          <span className={css(styles.chipText)}>{children}</span>
        </ChipButton>
      </div>
    );
  };

  renderChip = randomId => {
    const { children, 'aria-label': ariaLabel, tooltipPosition, className, onClick } = this.props;
    if (this.state.isTooltipVisible) {
      return (
        <Tooltip position={tooltipPosition} content={children}>
          <li className={css(styles.chip, className)}>
            <span ref={this.span} className={css(styles.chipText)} id={randomId}>
              {children}
            </span>
            <ChipButton
              onClick={onClick}
              aria-label={ariaLabel}
              id={`remove_${randomId}`}
              aria-labelledby={`remove_${randomId} ${randomId}`}
            >
              <TimesCircleIcon aria-hidden="true" />
            </ChipButton>
          </li>
        </Tooltip>
      );
    }
    return (
      <li className={css(styles.chip, className)}>
        <span ref={this.span} className={css(styles.chipText)} id={randomId}>
          {children}
        </span>
        <ChipButton
          onClick={onClick}
          aria-label={ariaLabel}
          id={`remove_${randomId}`}
          aria-labelledby={`remove_${randomId} ${randomId}`}
        >
          <TimesCircleIcon aria-hidden="true" />
        </ChipButton>
      </li>
    );
  };

  render() {
    const { isOverflowChip } = this.props;
    return (
      <GenerateId>{randomId => (isOverflowChip ? this.renderOverflowChip() : this.renderChip(randomId))}</GenerateId>
    );
  }
}

Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;

export default Chip;
