import * as React from 'react';
import { ThInfoType } from '../../base/types';
import { HeaderCellInfoWrapper } from '../../HeaderCellInfoWrapper';
import { IFormatterValueType, ITransform } from '../../TableTypes';
import styles from '@patternfly/react-styles/css/components/Table/table';

export const info = ({ tooltip, tooltipProps, popover, popoverProps, className, ariaLabel }: ThInfoType) => {
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
        {value as React.ReactNode}
      </HeaderCellInfoWrapper>
    ) : (
      <HeaderCellInfoWrapper
        variant="popover"
        info={popover}
        popoverProps={popoverProps}
        ariaLabel={ariaLabel}
        className={className}
      >
        {value as React.ReactNode}
      </HeaderCellInfoWrapper>
    )
  });

  return infoObj;
};
