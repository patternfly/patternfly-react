import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';

export interface CardDescriptionProps {
  /** Content rendered inside the description. */
  children?: React.ReactNode;
  /** Additional classes added to the description. */
  className?: string;
  /** Id of the description. */
  id?: string;
}

export const CardDescription: React.FunctionComponent<CardDescriptionProps> = ({
  children = null,
  className = '',
  id = '',
  ...props
}: ModalBoxDescriptionProps) => (
  <div {...props} id={id} className={css(styles.cardDescription, className)}>
    {children}
  </div>
);
CardDescription.displayName = 'CardDescription';
