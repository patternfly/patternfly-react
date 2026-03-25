import { Label, LabelGroup } from '@patternfly/react-core';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';

export const LabelGroupOverflow: React.FunctionComponent = () => (
  <LabelGroup>
    <Label icon={<RhUiInformationFillIcon />}>Label 1</Label>
    <Label icon={<RhUiInformationFillIcon />} color="blue">
      Label 2
    </Label>
    <Label icon={<RhUiInformationFillIcon />} color="green">
      Label 3
    </Label>
    <Label icon={<RhUiInformationFillIcon />} color="orange">
      Label 4
    </Label>
    <Label icon={<RhUiInformationFillIcon />} color="red">
      Label 5
    </Label>
    <Label icon={<RhUiInformationFillIcon />} color="purple">
      Label 6
    </Label>
  </LabelGroup>
);
