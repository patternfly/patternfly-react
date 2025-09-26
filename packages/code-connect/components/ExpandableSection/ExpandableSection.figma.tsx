import figma from '@figma/code-connect';
import { Badge, ExpandableSection, ExpandableSectionToggle, Stack, StackItem } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

// TODO: DESIGN: This component needs to be overhauled. Using the base component approach present in
// other components would significantly reduce complexity.
// TODO: DESIGN: Create toggle component
// onToggle={() => {}} // only required if the user wants to be able to have other side effects when opening/closing
// isExpanded={() => {}} // only required if the user wants to be able to have other side effects when opening/closing

// Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section

const sharedProps = {
  customToggleContent: (
    <div>
      <span>You can also use icons </span>
      <CheckCircleIcon />
      <span> or badges </span>
      <Badge isRead={true}>4</Badge>
      <span> !</span>
    </div>
  )
};

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2404-21',
  {
    props: {
      toggleText: 'Button'
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection
          isExpanded={isExpanded}
          onToggle={setIsExpanded(isExpanded)}
          toggleText={isExpanded ? 'Show less basic example content' : `${props.toggleText}`}
        >
          This content is visible only when the component is expanded.
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2404-21',
  {
    variant: { State: 'Expanded basic' },
    props: {
      // enum
      expandedContentSectionText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      toggleText: 'Button'
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection
          isExpanded={isExpanded}
          onToggle={setIsExpanded(isExpanded)}
          toggleText={isExpanded ? 'Show less basic example content' : `${props.toggleText}`}
        >
          {props.expandedContentSectionText}
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2404-21',
  {
    variant: { State: 'Expand detached' },
    props: {
      // enum
      contentId: 'content-id',
      expandedContentSectionText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      toggleText: 'Button',
      toggleId: 'toggle-id'
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = useState(false);
      /* eslint-enable */

      return (
        <Stack hasGutter>
          <StackItem>
            <ExpandableSection isExpanded={isExpanded} isDetached toggleId={props.toggleId} contentId={props.contentId}>
              {props.expandedContentSectionText}
            </ExpandableSection>
          </StackItem>
          <StackItem>
            <ExpandableSectionToggle
              onToggle={setIsExpanded(isExpanded)}
              toggleId={props.toggleId}
              contentId={props.contentId}
              direction="up"
            >
              {isExpanded ? `${props.toggleText}` : 'Show less basic example content'}
            </ExpandableSectionToggle>
          </StackItem>
        </Stack>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2404-21',
  {
    variant: { State: 'Expanded indent' },
    props: {
      // enum
      expandedContentSectionText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      toggleText: 'Button'
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection
          isExpanded={isExpanded}
          isIndented
          onToggle={setIsExpanded(isExpanded)}
          toggleText={isExpanded ? `${props.toggleText}` : 'Show less indented example content'}
        >
          {props.expandedContentSectionText}
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2404-21',
  {
    variant: { State: 'Default custom content' },
    props: {
      ...sharedProps,
      toggleText: 'Button'
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection
          isExpanded={isExpanded}
          isIndented
          onToggle={setIsExpanded(isExpanded)}
          toggleText={isExpanded ? `${props.toggleText}` : 'Show less indented example content'}
        >
          {props.customToggleContent}
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2404-21',
  {
    variant: { State: 'Expanded indent' },
    props: {
      expandedContentSectionText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      toggleText: 'Button'
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = useState(true);
      /* eslint-enable */

      return (
        <ExpandableSection
          isExpanded={isExpanded}
          isIndented
          onToggle={setIsExpanded(isExpanded)}
          toggleText={isExpanded ? `${props.toggleText}` : 'Show less indented example content'}
        >
          {props.expandedContentSectionText}
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2404-21',
  {
    variant: { State: 'Expanded indent' },
    props: {
      expandedContentSectionText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      toggleText: 'Button'
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = useState(true);
      /* eslint-enable */

      return (
        <ExpandableSection
          isExpanded={isExpanded}
          isIndented
          onToggle={setIsExpanded(isExpanded)}
          toggleText={isExpanded ? `${props.toggleText}` : 'Show less indented example content'}
        >
          {props.expandedContentSectionText}
        </ExpandableSection>
      );
    }
  }
);
