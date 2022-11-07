import React from 'react';
import { Progress, ProgressProps, HelperText, HelperTextItem, Radio } from '@patternfly/react-core';

export const ProgressHelperText: React.FunctionComponent = () => {
  type ProgressVariant = ProgressProps['variant'];

  const [selectedVariant, setSelectedVariant] = React.useState<ProgressVariant>(undefined);

  const progressVariants: ProgressVariant[] = [undefined, 'success', 'warning', 'danger'];

  const capitalize = (input: string) => input[0].toUpperCase() + input.substring(1);
  const formatVariantName = (variant: ProgressVariant) => (variant ? capitalize(variant) : 'Default');

  const variantOptions = progressVariants.map(variant => (
    <Radio
      id={`progress-helper-text-${variant}-selector`}
      label={`${formatVariantName(variant)} variant`}
      isChecked={variant === selectedVariant}
      onChange={() => setSelectedVariant(variant)}
      key={formatVariantName(variant)}
      name="Progress variant options"
    />
  ));

  const helperTextVariant = selectedVariant === 'danger' ? 'error' : selectedVariant;

  const helperText = (
    <HelperText>
      <HelperTextItem variant={helperTextVariant}>
        {`${formatVariantName(selectedVariant)} variant is being displayed`}
      </HelperTextItem>
    </HelperText>
  );

  return (
    <>
      {variantOptions}
      <br />
      <Progress value={33} title="Title" helperText={helperText} variant={selectedVariant} />
    </>
  );
};
