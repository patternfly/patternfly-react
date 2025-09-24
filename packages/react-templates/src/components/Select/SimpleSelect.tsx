import { forwardRef, useEffect, useState } from 'react';
import {
  Select,
  SelectList,
  SelectOption,
  SelectOptionProps,
  SelectProps
} from '@patternfly/react-core/dist/esm/components/Select';
import { MenuToggle, MenuToggleElement, MenuToggleProps } from '@patternfly/react-core/dist/esm/components/MenuToggle';

export interface SimpleSelectOption extends Omit<SelectOptionProps, 'content'> {
  /** Content of the select option. */
  content: React.ReactNode;
  /** Value of the select option. */
  value: string | number;
}

export interface SimpleSelectProps extends Omit<SelectProps, 'toggle' | 'onToggle'> {
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Initial options of the select. */
  initialOptions?: SimpleSelectOption[];
  /** Callback triggered on selection. */
  onSelect?: (_event: React.MouseEvent<Element, MouseEvent>, selection: SimpleSelectOption['value']) => void;
  /** Callback triggered when the select opens or closes. */
  onToggle?: (nextIsOpen: boolean) => void;
  /** Flag indicating the select should be disabled. */
  isDisabled?: boolean;
  /** Content of the toggle. Defaults to the selected option. */
  toggleContent?: React.ReactNode;
  /** Placeholder text for the select input. */
  placeholder?: string;
  /** Width of the toggle. */
  toggleWidth?: string;
  /** Additional props passed to the toggle. */
  toggleProps?: MenuToggleProps;
}

const SimpleSelectBase: React.FunctionComponent<SimpleSelectProps> = ({
  innerRef,
  initialOptions,
  isDisabled,
  onSelect,
  onToggle,
  toggleContent,
  toggleWidth = '200px',
  toggleProps,
  placeholder = 'Select a value',
  ...props
}: SimpleSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SimpleSelectOption | undefined>();

  useEffect(() => {
    const selectedOption = initialOptions?.find((option) => option.selected);
    setSelected(selectedOption);
  }, [initialOptions]);

  const simpleSelectOptions = initialOptions?.map((option) => {
    const { content, value, ...props } = option;
    const isSelected = selected?.value === value;
    return (
      <SelectOption value={value} key={value} isSelected={isSelected} {...props}>
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
    setSelected(initialOptions.find((o) => o.value === value));
    onToggle && onToggle(true);
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
      {...toggleProps}
    >
      {toggleContent ? toggleContent : selected?.content || placeholder}
    </MenuToggle>
  );

  return (
    <Select
      isOpen={isOpen}
      selected={selected}
      onSelect={_onSelect}
      onOpenChange={(isOpen) => {
        onToggle && onToggle(isOpen);
        setIsOpen(isOpen);
      }}
      toggle={toggle}
      shouldFocusToggleOnSelect
      ref={innerRef}
      {...props}
    >
      <SelectList>{simpleSelectOptions}</SelectList>
    </Select>
  );
};

export const SimpleSelect = forwardRef((props: SimpleSelectProps, ref: React.Ref<any>) => (
  <SimpleSelectBase {...props} innerRef={ref} />
));

SimpleSelect.displayName = 'SimpleSelect';
