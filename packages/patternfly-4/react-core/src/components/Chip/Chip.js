import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ChipButton from './ChipButton';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { TimesCircleIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly-next/components/Chip/chip.css';
import { getUniqueId } from '../../internal/util';

export const ChipVariant = {
  overflow: 'overflow',
  closable: 'closable'
};

const Chip = ({ variant, onClick, children, id, position, className, ...props }) => {
  const idChip = id || getUniqueId()
  switch (variant) {
    case ChipVariant.overflow:
      return (
        <div className={css(styles.chip, styles.modifiers.overflow, className)} {...props}>
          <ChipButton onClick={onClick} aria-label="Expand chip">
            <span className={css(styles.chipText)}>{children}</span>
          </ChipButton>
        </div>
      );
    default:
      const ChipComponent = (
        <div className={css(styles.chip, className)} {...props}>
          <span className={css(styles.chipText)} id={idChip}>
            {children}
          </span>
          <ChipButton onClick={onClick} aria-label="Remove" id={`remove_${idChip}`} aria-labelledby={`remove_${idChip} ${idChip}`}>
            <TimesCircleIcon aria-hidden="true" />
          </ChipButton>
        </div>
      );
      return children.length < 16 ? (
        ChipComponent
      ) : (
        <Tooltip position={position} content={children}>
          {ChipComponent}
        </Tooltip>
      );
  }
};

Chip.propTypes = {
  /** Content rendered inside the chip text */
  children: PropTypes.string.isRequired,
  /** ID of the chip */
  id: PropTypes.string,
  /** Additional classes added to the chip item */
  className: PropTypes.string,
  /** Builds the chip structure according to variant */
  variant: PropTypes.oneOf(Object.values(ChipVariant)),
  /** Position of the tooltip which is displayed if text is longer */
  position: PropTypes.oneOf(Object.values(TooltipPosition)),
  /** Function that is called when clicking on the chip button */
  onClick: PropTypes.func
};

Chip.defaultProps = {
  id: undefined,
  className: '',
  position: 'top',
  variant: ChipVariant.closable
};

export default Chip;
