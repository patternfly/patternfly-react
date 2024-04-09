import React from 'react';
import { Select, SelectList, SelectOption, SelectOptionProps } from '@patternfly/react-core/dist/esm/components/Select';
import { MenuToggle, MenuToggleElement } from '@patternfly/react-core/dist/esm/components/MenuToggle';

export interface SelectSimpleOption extends Omit<SelectOptionProps, 'content'> {
  /** Content of the select option. */
  content: React.ReactNode;
  /** Value of the select option. */
  value: string | number;
}

export interface SelectSimpleProps {
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Initial options of the select. */
  initialOptions?: SelectSimpleOption[];
  /** Callback triggered on selection. */
  onSelect?: (_event: React.MouseEvent<Element, MouseEvent>, selection: string | number) => void;
  /** Callback triggered when the select opens or closes. */
  onToggle?: (nextIsOpen: boolean) => void;
  /** Flag indicating the select should be disabled. */
  isDisabled?: boolean;
  /** Content of the toggle. Defaults to the selected option. */
  toggleContent?: React.ReactNode;
  /** Width of the toggle */
  toggleWidth?: string;
}

const SelectSimpleBase: React.FunctionComponent<SelectSimpleProps> = ({
  innerRef,
  initialOptions,
  isDisabled,
  onSelect,
  onToggle,
  toggleContent,
  toggleWidth = '200px',
  ...props
}: SelectSimpleProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('Select a value');

  const simpleSelectOptions = initialOptions?.map((option) => {
    const { content, value, ...props } = option;
    const isSelected = selected.includes(`${value}`);
    return (
      <SelectOption {...props} value={value} key={value} isSelected={isSelected}>
        {content}
      </SelectOption>
    );
  });

  const onToggleClick = () => {
    onToggle && onToggle(!isOpen);
    setIsOpen(!isOpen);
  };

  const _onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    onSelect && onSelect(_event, value);
    setSelected(value as string);
    setIsOpen(false);
  };

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      isDisabled={isDisabled}
      style={
        {
          width: toggleWidth
        } as React.CSSProperties
      }
    >
      {toggleContent ? toggleContent : selected}
    </MenuToggle>
  );

  return (
    <Select
      id="single-select"
      isOpen={isOpen}
      selected={selected}
      onSelect={_onSelect}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      toggle={toggle}
      shouldFocusToggleOnSelect
      ref={innerRef}
      {...props}
    >
      <SelectList>{simpleSelectOptions}</SelectList>
    </Select>
  );
};

export const SelectSimple = React.forwardRef((props: SelectSimpleProps, ref: React.Ref<any>) => (
  <SelectSimpleBase {...props} innerRef={ref} />
));

SelectSimple.displayName = 'SelectSimple';
