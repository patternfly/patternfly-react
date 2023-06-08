import React from 'react';
import { Skeleton } from '@patternfly/react-core';
import globalFontSize4xl from '@patternfly/react-tokens/dist/esm/global_FontSize_4xl';
import globalFontSize3xl from '@patternfly/react-tokens/dist/esm/global_FontSize_3xl';
import globalFontSize2xl from '@patternfly/react-tokens/dist/esm/global_FontSize_2xl';
import globalFontSizeXl from '@patternfly/react-tokens/dist/esm/global_FontSize_xl';
import globalFontSizeLg from '@patternfly/react-tokens/dist/esm/global_FontSize_lg';
import globalFontSizeMd from '@patternfly/react-tokens/dist/esm/global_FontSize_md';
import globalFontSizeSm from '@patternfly/react-tokens/dist/esm/global_FontSize_sm';

export const SkeletonText: React.FunctionComponent = () => (
  <React.Fragment>
    {globalFontSize4xl.name}
    <Skeleton fontSize="4xl" screenreaderText="Loading font size 4xl" />
    <br />
    {globalFontSize3xl.name}
    <Skeleton fontSize="3xl" screenreaderText="Loading font size 3xl" />
    <br />
    {globalFontSize2xl.name}
    <Skeleton fontSize="2xl" screenreaderText="Loading font size 2xl" />
    <br />
    {globalFontSizeXl.name}
    <Skeleton fontSize="xl" screenreaderText="Loading font size xl" />
    <br />
    {globalFontSizeLg.name}
    <Skeleton fontSize="lg" screenreaderText="Loading font size lg" />
    <br />
    {globalFontSizeMd.name}
    <Skeleton fontSize="md" screenreaderText="Loading font size md" />
    <br />
    {globalFontSizeSm.name}
    <Skeleton fontSize="sm" screenreaderText="Loading font size sm" />
  </React.Fragment>
);
