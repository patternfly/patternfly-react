import figma from '@figma/code-connect';
import { DualListSelector } from '@patternfly/react-core';

/**
 * PatternFly DualListSelector component integration for Figma Code Connect
 */

figma.connect(
  DualListSelector,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=29667-231683&t=IzSunfrnw18ti37Y-11",
  {
    props: { children: figma.children('*') },
    example: (props) => <DualListSelector>{props.children}</DualListSelector>
  }
);
