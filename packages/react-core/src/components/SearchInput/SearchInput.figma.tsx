import React from 'react';
import { SearchInput } from './SearchInput';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  SearchInput,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=8065-140137',
  {
    props: {
      searchedText: figma.string('✏️ Searched text'),
      showCloseButton: figma.boolean('Show close button'),
      showNavigableOptions: figma.boolean('Show navigable options'),
      placeholderText: figma.string('✏️ Placeholder text'),
      showCount: figma.boolean('Show count'),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Clicked: 'clicked',
        Filled: 'filled',
        'Filled - Hover': 'filled---hover',
        'Filled - Clicked': 'filled---clicked'
      }),
      showSubmitButton: figma.boolean('Show submit button')
    },
    example: (props) => <SearchInput />
  }
);

figma.connect(
  SearchInput,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=8065-140337',
  {
    props: {
      state: figma.enum('State', {
        Expanded: 'expanded',
        Default: 'default'
      })
    },
    example: (props) => <SearchInput />
  }
);

figma.connect(
  SearchInput,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=8065-140353',
  {
    props: {},
    example: (props) => <SearchInput />
  }
);

figma.connect(
  SearchInput,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=8065-140228',
  {
    props: {
      searchedText: figma.string('✏️ Searched text'),
      showCloseButton: figma.boolean('Show close button'),
      showNavigableOptions: figma.boolean('Show navigable options'),
      placeholderText: figma.string('✏️ Placeholder text'),
      showCount: figma.boolean('Show count'),
      state: figma.enum('State', {
        Default: 'default',
        Filled: 'filled',
        Hover: 'hover',
        Clicked: 'clicked',
        'Filled - Hover': 'filled---hover',
        'Filled - Clicked': 'filled---clicked'
      }),
      showSubmitButton: figma.boolean('Show submit button')
    },
    example: (props) => <SearchInput />
  }
);

figma.connect(
  SearchInput,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=8065-140343',
  {
    props: {},
    example: (props) => <SearchInput />
  }
);
