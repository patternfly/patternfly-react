import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import EllipsisIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

// Icon Button
figma.connect(Button, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1259-736', {
  props: {
    isClicked: figma.enum('State', { Clicked: true }),
    isDisabled: figma.enum('State', { Disabled: true }),
    noPadding: figma.enum('Type', { 'No padding': true })
  },
  example: (props) => (
    <Button
      icon={<EllipsisIcon />}
      isClicked={props.isClicked}
      isDisabled={props.isDisabled}
      hasNoPadding={props.noPadding}
    />
  )
});
