import React from 'react';
import {
  Select,
  SelectOption,
  SelectList,
  MenuToggle,
  MenuToggleElement,
  MenuToggleStatus,
  HelperText,
  HelperTextItem
} from '@patternfly/react-core';

export const SelectValidated: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('Select a value');
  const [status, setStatus] = React.useState<MenuToggleStatus>();

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);

    setSelected(value as string);
    setStatus((value as string).toLowerCase() as MenuToggleStatus);
    setIsOpen(false);
  };

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: '200px'
        } as React.CSSProperties
      }
      status={status}
    >
      {selected}
    </MenuToggle>
  );

  return (
    <React.Fragment>
      <Select
        id="single-select"
        isOpen={isOpen}
        selected={selected}
        onSelect={onSelect}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
        toggle={toggle}
        shouldFocusToggleOnSelect
      >
        <SelectList>
          <SelectOption value="Success">Success</SelectOption>
          <SelectOption value="Warning">Warning</SelectOption>
          <SelectOption value="Danger">Danger</SelectOption>
        </SelectList>
      </Select>
      {(status === MenuToggleStatus.warning || status === MenuToggleStatus.danger) && (
        <HelperText isLiveRegion>
          <HelperTextItem variant={status === MenuToggleStatus.warning ? 'warning' : 'error'}>
            {status === MenuToggleStatus.warning && 'Warning text that explains the issue.'}
            {status === MenuToggleStatus.danger && 'Danger text that explains the issue.'}
          </HelperTextItem>
        </HelperText>
      )}
    </React.Fragment>
  );
};
