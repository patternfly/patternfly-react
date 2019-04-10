import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';
import styles from '@patternfly/patternfly/components/Title/title.css';
import { BaseSizes } from '../../styles/sizes';

export enum TitleLevel {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export interface TitleProps extends Omit<React.HTMLProps<HTMLHeadingElement>, 'size' | 'className'> {
  /** the size of the Title  */
  size: keyof typeof BaseSizes;
  /** content rendered inside the Title */
  children?: React.ReactNode;
  /** Additional classes added to the Title */
  className?: string;
  /** the heading level to use */
  headingLevel?: TitleLevel;
}

const Title: React.FunctionComponent<TitleProps> = ({
  size,
  className = '',
  children = '',
  headingLevel: HeadingLevel = TitleLevel.h1,
  ...props
}: TitleProps) => (
  <HeadingLevel {...props} className={css(styles.title, getModifier(styles, size) as string, className)}>
    {children}
  </HeadingLevel>
);

export { Title };
