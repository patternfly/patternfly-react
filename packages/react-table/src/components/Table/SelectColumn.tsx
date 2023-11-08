import * as React from 'react';
import { Tooltip, TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';

export enum RowSelectVariant {
  radio = 'radio',
  checkbox = 'checkbox'
}

export interface SelectColumnProps {
  name?: string;
  children?: React.ReactNode;
  className?: string;
  onSelect?: (event: React.FormEvent<HTMLInputElement>) => void;
  selectVariant?: RowSelectVariant;
  /** text to display on the tooltip */
  tooltip?: React.ReactNode;
  /** other props to pass to the tooltip */
  tooltipProps?: Omit<TooltipProps, 'content'>;
}

export const SelectColumn: React.FunctionComponent<SelectColumnProps> = ({
  children = null as React.ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  onSelect = null as (event: React.FormEvent<HTMLInputElement>) => void,
  selectVariant,
  tooltip,
  tooltipProps,
  ...props
}: SelectColumnProps) => {
  const inputRef = React.createRef<HTMLInputElement>();

  const content = (
    <React.Fragment>
      <label>
        <input {...props} ref={inputRef} type={selectVariant} onChange={onSelect} />
      </label>
      {children}
    </React.Fragment>
  );

  return tooltip ? (
    <Tooltip triggerRef={inputRef} content={tooltip} {...tooltipProps}>
      {content}
    </Tooltip>
  ) : (
    content
  );
};
SelectColumn.displayName = 'SelectColumn';
