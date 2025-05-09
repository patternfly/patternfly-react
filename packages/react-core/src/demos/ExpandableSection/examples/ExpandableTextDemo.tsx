import { useState } from 'react';
import { ExpandableSection, ExpandableSectionVariant, Truncate } from '@patternfly/react-core';

export const ExpandableTextDemo: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = (_event: React.MouseEvent, isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim turpis, et tristique purus. Phasellus efficitur ante quis dolor viverra imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque laoreet, sem ac elementum semper, lectus mauris vestibulum nulla, eget volutpat massa neque vel turpis. Donec finibus enim eu leo accumsan consectetur. Praesent massa diam, tincidunt eu dui ac, ullamcorper elementum est. Phasellus metus felis, venenatis vitae semper nec, porta a metus. Vestibulum justo nisi, imperdiet id eleifend at, varius nec lorem. Fusce porttitor mollis nibh, ut elementum ante commodo tincidunt. Integer tincidunt at ipsum non aliquet.`;

  return (
    <ExpandableSection
      variant={ExpandableSectionVariant.truncate}
      toggleText={isExpanded ? 'Show less truncated content' : 'Show more truncated content'}
      onToggle={onToggle}
      isExpanded={isExpanded}
      truncateMaxLines={-1}
    >
      {isExpanded ? content : <Truncate content={content} style={{ maxWidth: '10ch' }} />}
    </ExpandableSection>
  );
};
