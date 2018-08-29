import React from 'react';
import { HorizontalNavMenu, HorizontalNavMenuItem } from '../index';

export const twoLevel = (
  <HorizontalNavMenu twoLevels>
    <HorizontalNavMenuItem title="First Link" />
    <HorizontalNavMenuItem title="Another Link" active>
      <HorizontalNavMenuItem title="Link" />
      <HorizontalNavMenuItem title="Another Link" active />
      <HorizontalNavMenuItem title="Something Else Here" />
      <HorizontalNavMenuItem title="Remembering to keep" />
      <HorizontalNavMenuItem title="It between five and seven" />
      <HorizontalNavMenuItem title="More options" />
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem title="And Another" />
    <HorizontalNavMenuItem title="As a General Rule" />
    <HorizontalNavMenuItem title="Five to Seven Links" />
    <HorizontalNavMenuItem title="Is Good" />
  </HorizontalNavMenu>
);
