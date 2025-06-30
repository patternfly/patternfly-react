import figma from '@figma/code-connect';
import { CodeEditor } from '@patternfly/react-code-editor';

// TODO: DESIGN: Add support for actions, wrap each action in the appropriate compnent
// TODO: DESIGN: When shortcuts is removed, presentation breaks
// Documentation for CodeEditor can be found at https://www.patternfly.org/components/code-editor

figma.connect(
  CodeEditor,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=16994-184502',
  {
    props: {
      // TODO: DESIGN: configure options for actions
      actions: 'action1, action2, action3, action4, action5',

      // boolean
      showsLineNumbers: figma.boolean('Show Line Numbers'),

      // enum
      isMinimapVisible: figma.enum('Type', { 'Mini Map': true }),

      children: figma.children('*')

      // Add viewshortcuts
      // ifshortcuts is true
    },
    example: (props) => (
      <CodeEditor
        isLineNumbersVisible={props.showsLineNumbers}
        isMinimapVisible={props.isMinimapVisible}
        /* if no content is passed to code and isUploadEnabled is true, the editor will be display EmptyState */
        code="code editor contents"
        height="400px"
      />
    )
  }
);
