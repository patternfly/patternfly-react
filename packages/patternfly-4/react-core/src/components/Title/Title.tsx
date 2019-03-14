import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import { Omit, OneOf } from '../../helpers/typeUtils';
import styles from '@patternfly/patternfly/components/Title/title.css';
import { BaseSizes } from '../../styles/sizes';

enum HeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
};

interface Levels {
  h1: 'h1';
  h2: 'h2';
  h3: 'h3';
  h4: 'h4';
  h5: 'h5';
  h6: 'h6';
}

export interface TitleProps
  extends Omit<React.HTMLProps<HTMLHeadingElement>, 'size'> {
  /** the size of the Title  */
  size: OneOf<typeof BaseSizes, keyof typeof BaseSizes>;
  /** content rendered inside the Title */
  children?: React.ReactNode;
  /** Additional classes added to the Title */
  className?: string;
  /** the heading level to use */
  headingLevel?: HeadingLevels | keyof Levels;
}

const Title: React.FunctionComponent<TitleProps> = ({
  size,
  className = '',
  children = '',
  headingLevel: HeadingLevel = HeadingLevels.h1,
  ...props
}) => {
  return (
    <HeadingLevel {...props} className={css(styles.title, getModifier(styles, size) as string, className)}>
      {children}
    </HeadingLevel>
  )
};

export default Title;
