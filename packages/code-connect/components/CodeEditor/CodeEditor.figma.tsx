import figma from '@figma/code-connect';
import { CodeEditor } from '@patternfly/react-code-editor';

/**
 * PatternFly CodeEditor component integration for Figma Code Connect
 */

figma.connect(
  CodeEditor,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=16994-184502&m=dev',
  {
    props: {
      // boolean
      showsLineNumbers: figma.boolean('Show Line Numbers'),

      // enum
      isEditable: figma.enum('Type', { Editable: true }),
      isEmptyState: figma.enum('Type', { 'Empty state': true }),
      isMinimapVisible: figma.enum('Type', { 'Mini Map': true })
    },
    example: (props) => (
      <CodeEditor
        emptyState={props.isEmptyState}
        isEditable={props.isEditable}
        isLineNumbersVisible={props.showsLineNumbers}
        isMinimapVisible={props.isMinimapVisible}
      />
    )
  }
);
