import { ReactNode, FormEvent, FunctionComponent, createRef, Fragment } from 'react';
import { Tooltip, TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';

export enum RowSelectVariant {
  radio = 'radio',
  checkbox = 'checkbox'
}

export interface SelectColumnProps {
  name?: string;
  children?: ReactNode;
  className?: string;
  onSelect?: (event: FormEvent<HTMLInputElement>) => void;
  selectVariant?: RowSelectVariant;
  /** text to display on the tooltip */
  tooltip?: ReactNode;
  /** other props to pass to the tooltip */
  tooltipProps?: Omit<TooltipProps, 'content'>;
}

export const SelectColumn: FunctionComponent<SelectColumnProps> = ({
  children = null as ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  onSelect = null as (event: FormEvent<HTMLInputElement>) => void,
  selectVariant,
  tooltip,
  tooltipProps,
  ...props
}: SelectColumnProps) => {
  const inputRef = createRef<HTMLInputElement>();

  const content = (
    <Fragment>
      <label>
        <input {...props} ref={inputRef} type={selectVariant} onChange={onSelect} />
      </label>
      {children}
    </Fragment>
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
