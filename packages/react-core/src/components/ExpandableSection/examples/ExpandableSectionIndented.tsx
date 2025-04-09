import { FormEvent, useState } from 'react';
import { ExpandableSection, Checkbox } from '@patternfly/react-core';

export const ExpandableSectionIndented: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDisplayLgChecked, setIsDisplayLgChecked] = useState(false);

  const onToggle = (_event: React.MouseEvent, isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  const onDisplaySizeCheck = (_event: FormEvent<HTMLInputElement>, checked: boolean) => setIsDisplayLgChecked(checked);

  return (
    <>
      <Checkbox
        id="displaySize-checkbox"
        isChecked={isDisplayLgChecked}
        label='displaySize="lg"'
        onChange={onDisplaySizeCheck}
      />
      <br />
      <ExpandableSection
        toggleText={isExpanded ? 'Show less indented example content' : 'Show more indented example content'}
        onToggle={onToggle}
        isExpanded={isExpanded}
        isIndented
        displaySize={isDisplayLgChecked ? 'lg' : 'default'}
      >
        This content is visible only when the component is expanded.
      </ExpandableSection>
    </>
  );
};
