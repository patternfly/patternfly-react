import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ChipButton from './ChipButton';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { TimesCircleIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly-next/components/Chip/chip.css';
import GenerateId from '../../internal/GenerateId/GenerateId';
class Chip extends React.Component {
  span = React.createRef();
  state = { isTooltipVisible: false };

  componentDidMount() {
    this.setState({ isTooltipVisible: this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth });
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
  }

  renderChip = (randomId) => {
    const {
      children,
      closeBtnAriaLabel,
      tooltipPosition,
      className,
      onClick,
    } = this.props;
    if (this.state.isTooltipVisible) {
      return (
        <Tooltip position={tooltipPosition} content={children}>
          <div className={css(styles.chip, className)}>
            <span ref={this.span} className={css(styles.chipText)} id={randomId}>
              {children}
            </span>
            <ChipButton onClick={onClick} ariaLabel={closeBtnAriaLabel} id={`remove_${randomId}`} aria-labelledby={`remove_${randomId} ${randomId}`}>
              <TimesCircleIcon aria-hidden="true" />
            </ChipButton>
          </div>
        </Tooltip>
      )
    } else {
      return (
        <div className={css(styles.chip, className)}>
          <span ref={this.span} className={css(styles.chipText)} id={randomId}>
            {children}
          </span>
          <ChipButton onClick={onClick} ariaLabel={closeBtnAriaLabel} id={`remove_${randomId}`} aria-labelledby={`remove_${randomId} ${randomId}`}>
            <TimesCircleIcon aria-hidden="true" />
          </ChipButton>
        </div>
      )
    }
  }

  render() {
    const {
      isOverflowChip,
    } = this.props;
    return (
      <GenerateId>
        {(randomId) =>
          (
            <React.Fragment>
              {isOverflowChip ? this.renderOverflowChip() : this.renderChip(randomId)}
            </React.Fragment>
          )
        }
      </GenerateId>
    )
  }
}
Chip.propTypes = {
  /** Content rendered inside the chip text */
  children: PropTypes.string,
  /** Aria Label for close button */
  closeBtnAriaLabel: PropTypes.string,
  /** ID of the chip */
  id: PropTypes.string,
  /** Additional classes added to the chip item */
  className: PropTypes.string,
  /** Flag indicating if the chip has overflow*/
  isOverflowChip: PropTypes.bool,
  /** Position of the tooltip which is displayed if text is longer */
  tooltipPosition: PropTypes.oneOf(Object.values(TooltipPosition)),
  /** Function that is called when clicking on the chip button */
  onClick: PropTypes.func,
};

Chip.defaultProps = {
  id: undefined,
  closeBtnAriaLabel: 'close',
  className: '',
  tooltipPosition: 'top',
  isOverflowChip: false,
};

export default Chip;
