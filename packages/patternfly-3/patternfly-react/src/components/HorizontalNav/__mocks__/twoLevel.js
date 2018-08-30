import React from 'react';
import { HorizontalNavMenu, HorizontalNavMenuItem } from '../index';

export const twoLevel = (
  <HorizontalNavMenu twoLevels>
    <HorizontalNavMenuItem id="first" title="First Link" />
    <HorizontalNavMenuItem id="another" title="Another Link" active>
      <HorizontalNavMenuItem id="link" title="Link" />
      <HorizontalNavMenuItem id="another-link" title="Another Link" active />
      <HorizontalNavMenuItem id="something-else" title="Something Else Here" />
      <HorizontalNavMenuItem id="remember" title="Remembering to keep" />
      <HorizontalNavMenuItem id="between-5-7" title="It between five and seven" />
      <HorizontalNavMenuItem id="more" title="More options" />
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem id="and-another" title="And Another" />
    <HorizontalNavMenuItem id="general-rule" title="As a General Rule" />
    <HorizontalNavMenuItem id="five-to-seven" title="Five to Seven Links" />
    <HorizontalNavMenuItem id="is-good" title="Is Good" />
  </HorizontalNavMenu>
);
