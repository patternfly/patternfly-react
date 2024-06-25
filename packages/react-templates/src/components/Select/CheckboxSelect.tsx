import React from 'react';
import {
  Badge,
  MenuToggle,
  MenuToggleElement,
  MenuToggleProps,
  Select,
  SelectList,
  SelectOption,
  SelectOptionProps,
  SelectProps
} from '@patternfly/react-core';

export interface CheckboxSelectOption extends Omit<SelectOptionProps, 'content'> {
  /** Content of the select option. */
  content: React.ReactNode;
  /** Value of the select option. */
  value: string | number;
}

export interface CheckboxSelectProps extends Omit<SelectProps, 'toggle'> {
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Initial options of the select. */
  initialOptions?: CheckboxSelectOption[];
  /** Callback triggered on selection. */
  onSelect?: (_event: React.MouseEvent<Element, MouseEvent>, value?: string | number) => void;
  /** Callback triggered when the select opens or closes. */
  onToggle?: (nextIsOpen: boolean) => void;
  /** Flag indicating the select should be disabled. */
  isDisabled?: boolean;
  /** Content of the toggle. Defaults to a string with badge count of selected options. */
  toggleContent?: React.ReactNode;
  /** Width of the toggle. */
  toggleWidth?: string;
  /** Additional props passed to the toggle. */
  toggleProps?: MenuToggleProps;
}

const CheckboxSelectBase: React.FunctionComponent<CheckboxSelectProps> = ({
  innerRef,
  initialOptions,
  isDisabled,
  onSelect: passedOnSelect,
  onToggle,
  toggleContent,
  toggleWidth = '200px',
  toggleProps,
  ...props
}: CheckboxSelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>([]);

  const checkboxSelectOptions = initialOptions?.map((option) => {
    const { content, value, ...props } = option;
    const isSelected = selected.includes(`${value}`);
    return (
      <SelectOption value={value} key={value} hasCheckbox isSelected={isSelected} {...props}>
        {content}
      </SelectOption>
    );
  });

  const onToggleClick = () => {
    onToggle && onToggle(!isOpen);
    setIsOpen(!isOpen);
  };

  const onSelect = (event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    const valueString = `${value}`;
    if (selected.includes(valueString)) {
      setSelected((prevSelected) => prevSelected.filter((item) => item !== valueString));
    } else {
      setSelected((prevSelected) => [...prevSelected, valueString]);
    }
    passedOnSelect && passedOnSelect(event, value);
  };

  const defaultToggleContent = (
    <>
      Filter by status
      {selected.length > 0 && <Badge isRead>{selected.length}</Badge>}
    </>
  );

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
      {...toggleProps}
    >
      {toggleContent || defaultToggleContent}
    </MenuToggle>
  );

  return (
    <Select
      isOpen={isOpen}
      selected={selected}
      onSelect={onSelect}
      onOpenChange={(isOpen) => {
        onToggle && onToggle(isOpen);
        setIsOpen(isOpen);
      }}
      toggle={toggle}
      ref={innerRef}
      role="menu"
      {...props}
    >
      <SelectList>{checkboxSelectOptions}</SelectList>
    </Select>
  );
};

export const CheckboxSelect = React.forwardRef((props: CheckboxSelectProps, ref: React.Ref<any>) => (
  <CheckboxSelectBase {...props} innerRef={ref} />
));
