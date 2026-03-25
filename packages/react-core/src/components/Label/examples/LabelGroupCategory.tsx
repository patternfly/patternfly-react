import { Label, LabelGroup } from '@patternfly/react-core';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';

export const LabelGroupCategory: React.FunctionComponent = () => (
  <LabelGroup categoryName="Group label">
    <Label icon={<RhUiInformationFillIcon />}>Label 1</Label>
    <Label icon={<RhUiInformationFillIcon />} color="blue">
      Label 2
    </Label>
    <Label icon={<RhUiInformationFillIcon />} color="green">
      Label 3
    </Label>
  </LabelGroup>
);
