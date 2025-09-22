import figma from '@figma/code-connect';
import { Badge, ExpandableSection } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

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
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/Em2QWrHDxDS4LUxo58Hust/PatternFly-6--Components?node-id=2810-80',
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
          displaySize="lg"
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
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/Em2QWrHDxDS4LUxo58Hust/PatternFly-6--Components?node-id=2810-80',
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
          displaySize="lg"
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
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/Em2QWrHDxDS4LUxo58Hust/PatternFly-6--Components?node-id=2810-80',
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
          displaySize="lg"
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
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/Em2QWrHDxDS4LUxo58Hust/PatternFly-6--Components?node-id=2810-80',
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
          displaySize="lg"
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
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/Em2QWrHDxDS4LUxo58Hust/PatternFly-6--Components?node-id=2810-80',
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
          displaySize="lg"
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
