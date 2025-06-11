import figma from '@figma/code-connect';
import { CodeEditor } from '@patternfly/react-code-editor';

figma.connect(
  CodeEditor,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=16994-184502',
  {
    props: {
      // TODO: FIGMA: configure options for actions
      actions: `action1, action2, action3, action4, action5`,

      // boolean
      showsLineNumbers: figma.boolean('Show Line Numbers'),

      // enum
      isEmptyState: figma.enum('Type', { 'Empty state': true }),
      isMinimapVisible: figma.enum('Type', { 'Mini Map': true })
    },
    example: (props) => (
      // Documentation for CodeEditor can be found at https://www.patternfly.org/components/code-editor
      <CodeEditor
        actions={props.actions}
        emptyState={props.isEmptyState}
        isLineNumbersVisible={props.showsLineNumbers}
        isMinimapVisible={props.isMinimapVisible}
      />
    )
  }
);
