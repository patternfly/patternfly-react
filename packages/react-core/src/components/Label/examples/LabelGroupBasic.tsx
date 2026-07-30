import { Label, LabelColor, LabelGroup } from '@patternfly/react-core';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';

export const LabelGroupBasic: React.FunctionComponent = () => (
  <LabelGroup>
    <Label icon={<RhUiInformationFillIcon />}>Label 1</Label>
    <Label icon={<RhUiInformationFillIcon />} color={LabelColor.blue}>
      Label 2
    </Label>
    <Label icon={<RhUiInformationFillIcon />} color={LabelColor.green}>
      Label 3
    </Label>
  </LabelGroup>
);
