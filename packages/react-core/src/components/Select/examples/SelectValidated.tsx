import React from 'react';
import { Select, SelectOption, SelectList, MenuToggle, MenuToggleElement, HelperText } from '@patternfly/react-core';

export const SelectValidated: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('Select a value');
  const [status, setStatus] = React.useState<'success' | 'warning' | 'danger'>();

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);

    setSelected(value as string);
    setStatus((value as string).toLowerCase() as 'success' | 'warning' | 'danger');
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
      {(status === 'warning' || status === 'danger') && (
        <HelperText isLiveRegion>
          Helper text may be used to convery additional information to the user about the status, and to inform
          screenreaders a {status} status occured.
        </HelperText>
      )}
    </React.Fragment>
  );
};
