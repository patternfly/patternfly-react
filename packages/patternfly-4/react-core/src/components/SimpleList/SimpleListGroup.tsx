import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

export interface SimpleListGroupProps {
  /** Content rendered inside the SimpleList group */
  children?: React.ReactNode;
  /** Additional classes added to the SimpleList <ul> */
  className?: string;
  /** Additional classes added to the SimpleList group title */
  titleClassName?: string;
  /** Title of the SimpleList group */
  title?: string | React.ReactNode;
  /** ID of SimpleList group */
  id?: string;
}

export const SimpleListGroup: React.FunctionComponent<SimpleListGroupProps> = ({
  children = null,
  className = '',
  title = '',
  titleClassName = '',
  id = '',
  ...props
}: SimpleListGroupProps) => (
  <section className={css(styles.simpleListSection)} aria-labelledby={id} {...props}>
    <h2 id={id} className={css(styles.simpleListTitle, titleClassName)}>
      {title}
    </h2>
    <ul className={css(className)}>{children}</ul>
  </section>
);
