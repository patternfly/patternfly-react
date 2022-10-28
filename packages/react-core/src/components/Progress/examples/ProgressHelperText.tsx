import React from 'react';
import { Progress, ProgressProps, Radio } from '@patternfly/react-core';

export const ProgressHelperText: React.FunctionComponent = () => {
  type ProgressVariant = ProgressProps['variant'];

  const [selectedVariant, setSelectedVariant] = React.useState<ProgressVariant>(undefined);

  const variants: ProgressVariant[] = [undefined, 'success', 'warning', 'danger'];

  const isChecked = (variant: ProgressVariant) => variant === selectedVariant;

  const handleChange = (variant: ProgressVariant) => {
    setSelectedVariant(variant);
  };

  const variantOptions = variants.map(variant => (
    <Radio
      id={`progress-helper-text-${variant}-selector`}
      label={`${variant ? variant : 'default'} variant`}
      isChecked={isChecked(variant)}
      onChange={() => handleChange(variant)}
      key={variant || 'default'}
      name="Progress variant options"
    />
  ));

  return (
    <>
      {variantOptions}
      <br />
      <Progress
        value={33}
        title="Title"
        helperText={`${selectedVariant ? selectedVariant : 'default'} variant is being displayed`}
        variant={selectedVariant}
      />
    </>
  );
};
