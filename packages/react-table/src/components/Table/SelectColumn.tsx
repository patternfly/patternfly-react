import { createRef, Fragment } from 'react';
import { Tooltip, TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';
import { Checkbox } from '@patternfly/react-core/dist/esm/components/Checkbox';
import { Radio } from '@patternfly/react-core/dist/esm/components/Radio';

export enum RowSelectVariant {
  radio = 'radio',
  checkbox = 'checkbox'
}

export interface SelectColumnProps {
  children?: React.ReactNode;
  className?: string;
  onSelect?: (event: React.FormEvent<HTMLInputElement>) => void;
  selectVariant?: RowSelectVariant;
  /** text to display on the tooltip */
  tooltip?: React.ReactNode;
  /** other props to pass to the tooltip */
  tooltipProps?: Omit<TooltipProps, 'content'>;
  /** id for the input element - required by Checkbox and Radio components */
  id?: string;
  /** name for the input element - required by Radio component */
  name?: string;
}

export const SelectColumn: React.FunctionComponent<SelectColumnProps> = ({
  children = null as React.ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  onSelect = null as (event: React.FormEvent<HTMLInputElement>) => void,
  selectVariant,
  tooltip,
  tooltipProps,
  id,
  name,
  ...props
}: SelectColumnProps) => {
  const inputRef = createRef<any>();

  const handleChange = (event: React.FormEvent<HTMLInputElement>, _checked: boolean) => {
    onSelect && onSelect(event);
  };

  const commonProps = {
    ...props,
    id,
    ref: inputRef,
    onChange: handleChange
  };

  const content = (
    <Fragment>
      {selectVariant === RowSelectVariant.checkbox ? (
        <Checkbox {...commonProps} />
      ) : (
        <Radio {...commonProps} name={name} />
      )}
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
