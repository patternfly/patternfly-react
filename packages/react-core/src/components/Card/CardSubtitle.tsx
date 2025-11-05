import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';

export interface CardSubtitleProps {
  /** Content rendered inside the description. */
  children?: React.ReactNode;
  /** Id of the description. */
  id?: string;
}

export const CardSubtitle: React.FunctionComponent<CardSubtitleProps> = ({
  children = null,
  id = '',
  ...props
}: CardSubtitleProps) => (
  <div {...props} id={id} className={css(styles.cardSubtitle)}>
    {children}
  </div>
);
CardSubtitle.displayName = 'CardSubtitle';
