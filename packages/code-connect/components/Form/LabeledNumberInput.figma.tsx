import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=176-4200&m=dev', {
  props: {
    children: figma.children('*')
  },
  example: (props) => <>{props.children}</>
});
