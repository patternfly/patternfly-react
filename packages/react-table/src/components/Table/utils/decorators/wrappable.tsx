import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IFormatterValueType, ITransform } from '../../Table';
import { Tooltip } from '@patternfly/react-core';

export const breakWord: ITransform = () => ({
  className: styles.modifiers.breakWord
});

export const fitContent: ITransform = () => ({
  className: styles.modifiers.fitContent
});

export const nowrap: ITransform = () => ({
  className: styles.modifiers.nowrap
});

export const truncate: ITransform = (label: IFormatterValueType) => {
  const result = label.title ? label.title : label;

  const wrappedTitle = (
    <Tooltip content={result}>
      <span>{result}</span>
    </Tooltip>
  );

  return {
    className: styles.modifiers.truncate,
    children: wrappedTitle
  };
};

export const wrappable: ITransform = () => ({
  className: styles.modifiers.wrap
});
