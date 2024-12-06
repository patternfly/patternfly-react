import React from 'react';
import { Hint, HintTitle, HintBody, HintFooter } from './index';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(Hint, 'https://www.figma.com/design/YqvMyyV4G347jSOgfYXi29/test-code-connect?node-id=1118-3329&m=dev', {
  props: {
    showFooter: figma.boolean('Show Footer'),
    body: figma.string('✏️ Body'),
    title: figma.string('✏️ Title'),
    swapButton: figma.instance('Swap button'),
    showBody: figma.boolean('Show Body'),
    showTitle: figma.boolean('Show Title ')
  },
  example: ({ showTitle, title, showBody, body, showFooter, swapButton }) => (
    <Hint>
      {showTitle ? <HintTitle>{title}</HintTitle> : undefined}
      {showBody && <HintBody>{body}</HintBody>}
      {showFooter && <HintFooter>{swapButton}</HintFooter>}
    </Hint>
  )
});
