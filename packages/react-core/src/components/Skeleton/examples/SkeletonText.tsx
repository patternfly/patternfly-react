import React from 'react';
import { Skeleton } from '@patternfly/react-core';

export const SkeletonText: React.FunctionComponent = () => (
  <React.Fragment>
    --pf-v5-global--FontSize--4xl
    <Skeleton fontSize="4xl" screenreaderText="Loading font size 4xl" />
    <br />
    --pf-v5-global--FontSize--3xl
    <Skeleton fontSize="3xl" screenreaderText="Loading font size 3xl" />
    <br />
    --pf-v5-global--FontSize--2xl
    <Skeleton fontSize="2xl" screenreaderText="Loading font size 2xl" />
    <br />
    --pf-v5-global--FontSize--xl
    <Skeleton fontSize="xl" screenreaderText="Loading font size xl" />
    <br />
    --pf-v5-global--FontSize--lg
    <Skeleton fontSize="lg" screenreaderText="Loading font size lg" />
    <br />
    --pf-v5-global--FontSize--md
    <Skeleton fontSize="md" screenreaderText="Loading font size md" />
    <br />
    --pf-v5-global--FontSize--sm
    <Skeleton fontSize="sm" screenreaderText="Loading font size sm" />
  </React.Fragment>
);
