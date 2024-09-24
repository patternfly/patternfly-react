import React from 'react';
import { Skeleton } from '@patternfly/react-core';
/* eslint-disable camelcase */
import t_global_font_size_4xl from '@patternfly/react-tokens/dist/esm/t_global_font_size_4xl';
import t_global_font_size_3xl from '@patternfly/react-tokens/dist/esm/t_global_font_size_3xl';
import t_global_font_size_2xl from '@patternfly/react-tokens/dist/esm/t_global_font_size_2xl';
import t_global_font_size_xl from '@patternfly/react-tokens/dist/esm/t_global_font_size_xl';
import t_global_font_size_lg from '@patternfly/react-tokens/dist/esm/t_global_font_size_lg';
import t_global_font_size_md from '@patternfly/react-tokens/dist/esm/t_global_font_size_md';
import t_global_font_size_sm from '@patternfly/react-tokens/dist/esm/t_global_font_size_sm';

export const SkeletonText: React.FunctionComponent = () => (
  <React.Fragment>
    {t_global_font_size_4xl.name}
    <Skeleton fontSize="4xl" screenreaderText="Loading font size 4xl" />
    <br />
    {t_global_font_size_3xl.name}
    <Skeleton fontSize="3xl" screenreaderText="Loading font size 3xl" />
    <br />
    {t_global_font_size_2xl.name}
    <Skeleton fontSize="2xl" screenreaderText="Loading font size 2xl" />
    <br />
    {t_global_font_size_xl.name}
    <Skeleton fontSize="xl" screenreaderText="Loading font size xl" />
    <br />
    {t_global_font_size_lg.name}
    <Skeleton fontSize="lg" screenreaderText="Loading font size lg" />
    <br />
    {t_global_font_size_md.name}
    <Skeleton fontSize="md" screenreaderText="Loading font size md" />
    <br />
    {t_global_font_size_sm.name}
    <Skeleton fontSize="sm" screenreaderText="Loading font size sm" />
  </React.Fragment>
);
