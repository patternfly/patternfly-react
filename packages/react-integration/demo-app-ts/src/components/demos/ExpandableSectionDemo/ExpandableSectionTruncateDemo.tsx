import React from 'react';
import { ExpandableSection, ExpandableSectionVariant } from '@patternfly/react-core';

export const ExpandableSectionTruncateDemo: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isResizableExpanded, setIsResizableExpanded] = React.useState(false);

  const onToggle = (isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  const onResizableToggle = (isResizableExpanded: boolean) => {
    setIsResizableExpanded(isResizableExpanded);
  };

  return (
    <>
      <ExpandableSection
        id="expandable-section-truncate"
        variant={ExpandableSectionVariant.truncate}
        toggleText={isExpanded ? 'Show less' : 'Show more'}
        onToggle={onToggle}
        isExpanded={isExpanded}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim turpis, et tristique purus.
        Phasellus efficitur ante quis dolor viverra imperdiet. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Pellentesque laoreet, sem ac elementum semper, lectus mauris vestibulum nulla,
        eget volutpat massa neque vel turpis. Donec finibus enim eu leo accumsan consectetur. Praesent massa diam,
        tincidunt eu dui ac, ullamcorper elementum est. Phasellus metus felis, venenatis vitae semper nec, porta a
        metus. Vestibulum justo nisi, imperdiet id eleifend at, varius nec lorem. Fusce porttitor mollis nibh, ut
        elementum ante commodo tincidunt. Integer tincidunt at ipsum non aliquet.
      </ExpandableSection>
      <br />
      <ExpandableSection
        id="expandable-section-truncate-resizable"
        variant={ExpandableSectionVariant.truncate}
        toggleText={isResizableExpanded ? 'Show less' : 'Show more'}
        onToggle={onResizableToggle}
        isExpanded={isResizableExpanded}
      >
        This content will not cause the toggle button to render on larger window widths. Once the window width has been
        shrunk enough, the toggle button will render.
      </ExpandableSection>
    </>
  );
};
ExpandableSectionTruncateDemo.displayName = 'ExpandableSectionTruncateDemo';
