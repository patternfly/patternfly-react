import React from 'react';
import { Skeleton } from '@patternfly/react-core';
/* eslint-disable camelcase */
import global_FontSize_4xl from '@patternfly/react-tokens/dist/esm/global_FontSize_4xl';
import global_FontSize_3xl from '@patternfly/react-tokens/dist/esm/global_FontSize_3xl';
import global_FontSize_2xl from '@patternfly/react-tokens/dist/esm/global_FontSize_2xl';
import global_FontSize_xl from '@patternfly/react-tokens/dist/esm/global_FontSize_xl';
import global_FontSize_lg from '@patternfly/react-tokens/dist/esm/global_FontSize_lg';
import global_FontSize_md from '@patternfly/react-tokens/dist/esm/global_FontSize_md';
import global_FontSize_sm from '@patternfly/react-tokens/dist/esm/global_FontSize_sm';

export const SkeletonText: React.FunctionComponent = () => (
  <React.Fragment>
    {global_FontSize_4xl.name}
    <Skeleton fontSize="4xl" screenreaderText="Loading font size 4xl" />
    <br />
    {global_FontSize_3xl.name}
    <Skeleton fontSize="3xl" screenreaderText="Loading font size 3xl" />
    <br />
    {global_FontSize_2xl.name}
    <Skeleton fontSize="2xl" screenreaderText="Loading font size 2xl" />
    <br />
    {global_FontSize_xl.name}
    <Skeleton fontSize="xl" screenreaderText="Loading font size xl" />
    <br />
    {global_FontSize_lg.name}
    <Skeleton fontSize="lg" screenreaderText="Loading font size lg" />
    <br />
    {global_FontSize_md.name}
    <Skeleton fontSize="md" screenreaderText="Loading font size md" />
    <br />
    {global_FontSize_sm.name}
    <Skeleton fontSize="sm" screenreaderText="Loading font size sm" />
  </React.Fragment>
);
