import React from 'react';
import { ExpandableSection, ExpandableSectionVariant } from '@patternfly/react-core';

export const ExpandableSectionTruncateExpansion: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const onToggle = (isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  return (
    <ExpandableSection
      variant={ExpandableSectionVariant.truncate}
      toggleText={isExpanded ? 'Show less' : 'Show more'}
      onToggle={onToggle}
      isExpanded={isExpanded}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim turpis, et tristique purus.
      Phasellus efficitur ante quis dolor viverra imperdiet. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Pellentesque laoreet, sem ac elementum semper, lectus mauris vestibulum nulla,
      eget volutpat massa neque vel turpis. Donec finibus enim eu leo accumsan consectetur. Praesent massa diam,
      tincidunt eu dui ac, ullamcorper elementum est. Phasellus metus felis, venenatis vitae semper nec, porta a metus.
      Vestibulum justo nisi, imperdiet id eleifend at, varius nec lorem. Fusce porttitor mollis nibh, ut elementum ante
      commodo tincidunt. Integer tincidunt at ipsum non aliquet.
    </ExpandableSection>
  );
};
