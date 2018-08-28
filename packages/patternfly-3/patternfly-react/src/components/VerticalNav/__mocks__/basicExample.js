import React from 'react';
import { VerticalNav } from '../../../index';

export const basicExample = (props, firstItemClass) => (
  <VerticalNav {...props} showBadges>
    <VerticalNav.Masthead title="Patternfly React" />
    <VerticalNav.Item
      title="Item 1"
      iconClass="fa fa-home"
      initialActive
      onClick={() => alert('Item 1!')}
      className={firstItemClass}
    >
      <VerticalNav.Badge count={42} />
    </VerticalNav.Item>
    <VerticalNav.Item title="Item 2" iconClass="fa fa-star">
      <VerticalNav.SecondaryItem title="Item 2-A" onClick={() => alert('Item 2-A!')}>
        <VerticalNav.Badge count={9999} tooltip="Whoa, that's a lot" />
      </VerticalNav.SecondaryItem>
      <VerticalNav.SecondaryItem title="Item 2-B (external link)" href="http://www.patternfly.org" />
      <VerticalNav.SecondaryItem title="Divider" isDivider />
      <VerticalNav.SecondaryItem title="Item 2-C" />
    </VerticalNav.Item>
    <VerticalNav.Item title="Item 3" iconClass="fa fa-info-circle">
      <VerticalNav.SecondaryItem title="Item 3-A" />
      <VerticalNav.SecondaryItem title="Divider" isDivider />
      <VerticalNav.SecondaryItem title="Item 3-B">
        <VerticalNav.TertiaryItem title="Item 3-B-i" />
        <VerticalNav.TertiaryItem title="Item 3-B-ii" />
        <VerticalNav.TertiaryItem title="Item 3-B-iii" />
      </VerticalNav.SecondaryItem>
      <VerticalNav.SecondaryItem title="Item 3-C" />
    </VerticalNav.Item>
  </VerticalNav>
);
