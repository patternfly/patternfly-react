import React from 'react';
import { Button } from './Button';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(Button, 'https://www.figma.com/design/YqvMyyV4G347jSOgfYXi29/test-code-connect?node-id=1291-2153&m=dev', {
  props: {
    text: figma.string('Text'),
    icon: figma.enum('Type', {
      'Inline link external': <ExternalLinkAltIcon />
    }),
    iconPosition: figma.enum('Type', {
      'Inline link external': 'end'
    }),
    isDisabled: figma.enum('State', {
      Disabled: true
    })
  },
  example: ({ text, ...props }) => (
    <Button variant="link" isInline {...props}>
      {text}
    </Button>
  )
});
