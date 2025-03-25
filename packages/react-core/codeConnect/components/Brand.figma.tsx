import React from 'react';
import { Brand, BrandProps } from 'src/components/Brand';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Brand,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?node-id=2104-3689&t=7hKW0DzmfHGhNQnn-11',
  {
    props: {},
    example: (props) => <Brand />
  }
);

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Brand,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?node-id=2104-3644&t=7hKW0DzmfHGhNQnn-11',
  {
    props: {
      type: figma.enum('Type', {
        'Logo only': 'logo-only',
        'Logo + Text': 'logo---text'
      })
    },
    example: (props) => <Brand />
  }
);
