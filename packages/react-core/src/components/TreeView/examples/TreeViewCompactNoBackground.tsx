import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

export const TreeViewCompactNoBackground: React.FunctionComponent = () => {
  const options: TreeViewDataItem[] = [
    {
      name: 'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.',
      title: 'apiVersion',
      id: 'example10-apiVersion'
    },
    {
      name: 'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:',
      title: 'kind',
      id: 'example10-kind'
    },
    {
      name: 'Standard metadata object',
      title: 'metadata',
      id: 'example10-metadata'
    },
    {
      name: 'Standard metadata object',
      title: 'spec',
      id: 'example10-spec',
      children: [
        {
          name: 'Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).',
          title: 'minReadySeconds',
          id: 'example10-minReadySeconds'
        },
        {
          name: 'Indicates that the deployment is paused',
          title: 'paused',
          id: 'example10-paused'
        },
        {
          name: 'The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.',
          title: 'progressDeadlineSeconds',
          id: 'example10-progressDeadlineSeconds',
          children: [
            {
              name: 'The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.',
              title: 'revisionHistoryLimit',
              id: 'example10-revisionHistoryLimit',
              children: [
                {
                  name: 'Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.',
                  title: 'matchLabels',
                  id: 'example10-matchLabels'
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  return <TreeView aria-label="Tree View compact no background example" data={options} variant="compactNoBackground" />;
};
