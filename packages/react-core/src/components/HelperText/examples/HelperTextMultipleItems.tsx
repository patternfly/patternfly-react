import React from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';

export const HelperTextMultipleItems: React.FunctionComponent = () => (
  <HelperText component="ul">
    <HelperTextItem component="li">This is default helper text</HelperTextItem>
    <HelperTextItem component="li">This is another default helper text in the same HelperText block</HelperTextItem>
    <HelperTextItem component="li">And this is more default text in the same HelperText block</HelperTextItem>
  </HelperText>
);
