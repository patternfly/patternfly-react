import { useState } from 'react';
import { Label, LabelGroup, LabelProps } from '@patternfly/react-core';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';

export const LabelGroupVerticalCategoryOverflowRemovable: React.FunctionComponent = () => {
  const [labels, setLabels] = useState([
    ['Label 1', 'grey'],
    ['Label 2', 'blue'],
    ['Label 3', 'green'],
    ['Label 4', 'orange'],
    ['Label 5', 'red']
  ]);
  const deleteCategory = () => setLabels([]);

  return (
    <LabelGroup categoryName="Group label with a very long name" isVertical isClosable onClick={deleteCategory}>
      {labels.map(([labelText, labelColor]) => (
        <Label icon={<RhUiInformationFillIcon />} color={labelColor as LabelProps['color']} key={labelText}>
          {labelText}
        </Label>
      ))}
    </LabelGroup>
  );
};
