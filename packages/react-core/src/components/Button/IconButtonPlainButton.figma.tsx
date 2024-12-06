import React from 'react';
import { Button } from './Button';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(Button, 'https://www.figma.com/design/YqvMyyV4G347jSOgfYXi29/test-code-connect?node-id=1259-736&m=dev', {
  props: {
    noPadding: figma.enum('Type', {
      'No padding': true
    }),
    isDisabled: figma.enum('State', {
      Disabled: true
    })
  },
  example: (props) => <Button variant="plain" aria-label="Action" icon={<EllipsisVIcon />} {...props} />
});
