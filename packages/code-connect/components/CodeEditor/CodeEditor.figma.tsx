import figma from '@figma/code-connect';
import { CodeEditor } from '@patternfly/react-code-editor';

// TODO: DESIGN: Add support for actions, wrap each action in the appropriate compnent
// TODO: DESIGN: When shortcuts is removed, presentation breaks
// TODO: DESIGN: configure options for actions
// TODO: DESIGN: Add viewshortcuts
// TODO: DESIGN: ifshortcuts is true
// Documentation for CodeEditor can be found at https://www.patternfly.org/components/code-editor

figma.connect(
  CodeEditor,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=16994-184502',
  {
    props: {
      // boolean
      hasCustomControls: '<your-actions-here>',
      isUploadEnabled: figma.boolean('Action 1'),
      isCopyEnabled: figma.boolean('Action 2'),
      isDownloadEnabled: figma.boolean('Action 3'),
      showsLineNumbers: figma.boolean('Show Line Numbers'),

      // enum
      isMinimapVisible: figma.enum('Type', { 'Mini Map': true })
    },
    example: (props) => (
      <>
        <CodeEditor
          code="code editor contents"
          height="400px"
          isCopyEnabled={props.isCopyEnabled}
          isDownloadEnabled={props.isDownloadEnabled}
          isLineNumbersVisible={props.showsLineNumbers}
          isMinimapVisible={props.isMinimapVisible}
          isUploadEnabled={props.isUploadEnabled}
          customControls={props.customControls}
          /* if no content is passed to code and isUploadEnabled is true, the editor will be display EmptyState */
        />
      </>
    )
  }
);
