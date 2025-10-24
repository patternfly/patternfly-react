import { useState } from 'react';
import {
  Progress,
  ProgressMeasureLocation,
  ProgressVariant,
  Radio,
  Checkbox,
  Form,
  FormGroup
} from '@patternfly/react-core';

export const ProgressInteractiveFailure: React.FunctionComponent = () => {
  const [measureLocation, setMeasureLocation] = useState<ProgressMeasureLocation>(ProgressMeasureLocation.inside);
  const [hideStatusIcon, setHideStatusIcon] = useState<boolean>(false);

  const measureLocationOptions = [
    { value: ProgressMeasureLocation.inside, label: 'Inside' },
    { value: ProgressMeasureLocation.outside, label: 'Outside' },
    { value: ProgressMeasureLocation.top, label: 'Top' },
    { value: ProgressMeasureLocation.none, label: 'None' }
  ];

  return (
    <Form>
      <FormGroup fieldId="measure-location" label="Measure location">
        {measureLocationOptions.map((option) => (
          <Radio
            key={option.value}
            id={`measure-location-${option.value}`}
            name="measure-location"
            label={option.label}
            value={option.value}
            isChecked={measureLocation === option.value}
            onChange={() => setMeasureLocation(option.value)}
          />
        ))}
      </FormGroup>
      <FormGroup fieldId="hide-status-icon">
        <Checkbox
          id="hide-status-icon"
          label="Hide status icon"
          isChecked={hideStatusIcon}
          onChange={(_, checked) => setHideStatusIcon(checked)}
        />
      </FormGroup>
      <Progress
        value={33}
        title="Title"
        measureLocation={measureLocation}
        variant={ProgressVariant.danger}
        hideStatusIcon={hideStatusIcon}
      />
    </Form>
  );
};
