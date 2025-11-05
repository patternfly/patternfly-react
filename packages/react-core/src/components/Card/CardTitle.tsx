import { useContext } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';
import { CardContext } from './Card';
import { CardSubtitle } from './CardSubtitle';

export interface CardTitleProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the CardTitle */
  children?: React.ReactNode;
  /** Additional classes added to the CardTitle */
  className?: string;
  /** Sets the base component to render. defaults to div */
  component?: keyof React.JSX.IntrinsicElements;
  /** @beta Subtitle of the card title */
  subtitle?: React.ReactNode;
}

export const CardTitle: React.FunctionComponent<CardTitleProps> = ({
  children,
  className,
  component = 'div',
  subtitle,
  ...props
}: CardTitleProps) => {
  const { cardId } = useContext(CardContext);
  const Component = component as any;
  const titleId = cardId ? `${cardId}-title` : '';
  const subtitleId = cardId ? `${cardId}-subtitle` : '';

  return (
    <div className={css(styles.cardTitle)}>
      <Component className={css(styles.cardTitleText, className)} id={titleId || undefined} {...props}>
        {children}
      </Component>
      {subtitle && <CardSubtitle id={subtitleId}>{subtitle}</CardSubtitle>}
    </div>
  );
};
CardTitle.displayName = 'CardTitle';
