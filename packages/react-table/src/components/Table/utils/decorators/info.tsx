import * as React from 'react';
import { InfoType } from '../../base/types';
import { HeaderCellInfoWrapper } from '../../HeaderCellInfoWrapper';
import { IFormatterValueType, ITransform } from '../../TableTypes';
import styles from '@patternfly/react-styles/css/components/Table/table';

export const info = ({ tooltip, tooltipProps, popover, popoverProps, className, ariaLabel }: InfoType) => {
  const infoObj: ITransform = (value: IFormatterValueType) => ({
    className: styles.modifiers.help,
    children: tooltip ? (
      <HeaderCellInfoWrapper
        variant="tooltip"
        info={tooltip}
        tooltipProps={tooltipProps}
        ariaLabel={ariaLabel}
        className={className}
      >
        {value}
      </HeaderCellInfoWrapper>
    ) : (
      <HeaderCellInfoWrapper
        variant="popover"
        info={popover}
        popoverProps={popoverProps}
        ariaLabel={ariaLabel}
        className={className}
      >
        {value}
      </HeaderCellInfoWrapper>
    )
  });

  return infoObj;
};
