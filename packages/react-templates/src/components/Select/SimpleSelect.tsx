import React from 'react';
import { Select, SelectList } from '@patternfly/react-core/dist/esm/components/Select';
import { MenuToggle, MenuToggleElement } from '@patternfly/react-core/dist/esm/components/MenuToggle';

export interface SimpleSelectProps {
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Initial options of the select. */
  initialOptions?: React.ReactElement[];
  /** Callback triggered on selection. */
  onSelect?: (_event: React.MouseEvent<Element, MouseEvent>, selection: string | number) => void;
  /** Callback triggered when the select opens or closes. */
  onToggle?: (nextIsOpen: boolean) => void;
  /** Flag indicating the select should be disabled. */
  isDisabled?: boolean;
  /** Content of the toggle. Defaults to the selected option. */
  toggleContent?: React.ReactNode;
}

const SimpleSelectBase: React.FunctionComponent<SimpleSelectProps> = ({
  innerRef,
  initialOptions,
  isDisabled,
  onSelect,
  onToggle,
  toggleContent,
  ...props
}: SimpleSelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('Select a value');

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
          width: '200px'
        } as React.CSSProperties
      }
    >
      {toggleContent ? toggleContent : selected}
    </MenuToggle>
  );

  return (
    <React.Fragment>
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
        <SelectList>{initialOptions}</SelectList>
      </Select>
    </React.Fragment>
  );
};

export const SimpleSelect = React.forwardRef((props: SimpleSelectProps, ref: React.Ref<any>) => (
  <SimpleSelectBase {...props} innerRef={ref} />
));

SimpleSelect.displayName = 'SelectOption';
