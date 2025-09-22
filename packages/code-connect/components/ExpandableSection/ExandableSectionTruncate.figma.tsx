import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

// TODO: DESIGN: Create toggle component
// onToggle={() => {}} // only required if the user wants to be able to have other side effects when opening/closing
// isExpanded={() => {}} // only required if the user wants to be able to have other side effects when opening/closing

// Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2769-146',
  {
    props: {
      truncateText: figma.string('Default truncate text')
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection
          isExpanded={isExpanded}
          onToggle={setIsExpanded(isExpanded)}
          toggleText={isExpanded ? 'Show less' : 'Show more'}
        >
          {props.truncateText}
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2769-146',
  {
    variant: { State: 'Expanded' },
    props: {
      truncateText: figma.string('Expanded truncate text')
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection
          isExpanded={isExpanded}
          onToggle={setIsExpanded(isExpanded)}
          toggleText={isExpanded ? 'Show less' : 'Show more'}
        >
          {props.truncateText}
        </ExpandableSection>
      );
    }
  }
);
