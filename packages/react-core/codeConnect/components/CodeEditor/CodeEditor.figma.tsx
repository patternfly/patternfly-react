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
      isEditable: figma.enum('Type', { Editable: true }),
      isEmptyState: figma.enum('Type', { 'Empty state': true }),
      isMinimapVisible: figma.boolean('Mini Map'),
      hasRuler: figma.boolean('Ruler'),
      hasRulerErrors: figma.boolean('Rule'),
      hasShortcuts: figma.boolean('With Shortcuts', { true: 'View Shortcuts' }),
      showsLineNumbers: figma.boolean('Show Line Numbers'),
    },
    example: (props) => (
      <CodeEditor
        emptyState={props.isEmptyState}
        isEditable={props.isEditable}
        shortcutsPopoverButtonText={props.hasShortcuts}
        isLineNumbersVisible={props.showsLineNumbers}
        isMinimapVisible={props.isMinimapVisible}
        language={Language.typescript}
      />
    )
  }
);
