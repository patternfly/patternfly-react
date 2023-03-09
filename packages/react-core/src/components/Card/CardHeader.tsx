import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';
import { CardContext } from './Card';
import { CardHeaderMain } from './CardHeaderMain';
import { CardActions } from './CardActions';
import { Button } from '../Button';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

export interface CardHeaderActionsObject {
  /** Actions of the card header */
  actions: React.ReactNode;
  /** Flag indicating that the actions have no offset */
  hasNoOffset?: boolean;
  /** Additional classes added to the actions wrapper */
  className?: string;
}

export interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the card header */
  children?: React.ReactNode;
  /** Additional classes added to the card header */
  className?: string;
  /** Actions of the card header */
  actions?: CardHeaderActionsObject;
  /** ID of the card header. */
  id?: string;
  /** Callback expandable card */
  onExpand?: (event: React.MouseEvent, id: string) => void;
  /** Additional props for expandable toggle button */
  toggleButtonProps?: any;
  /** Whether to right-align expandable toggle button */
  isToggleRightAligned?: boolean;
}

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({
  children,
  className,
  actions,
  id,
  onExpand,
  toggleButtonProps,
  isToggleRightAligned,
  ...props
}: CardHeaderProps) => (
  <CardContext.Consumer>
    {({ cardId }) => {
      const cardHeaderToggle = (
        <div className={css(styles.cardHeaderToggle)}>
          <Button
            variant="plain"
            type="button"
            onClick={(evt) => {
              onExpand(evt, cardId);
            }}
            {...toggleButtonProps}
          >
            <span className={css(styles.cardHeaderToggleIcon)}>
              <AngleRightIcon aria-hidden="true" />
            </span>
          </Button>
        </div>
      );

      return (
        <div
          className={css(styles.cardHeader, isToggleRightAligned && styles.modifiers.toggleRight, className)}
          id={id}
          {...props}
        >
          {onExpand && !isToggleRightAligned && cardHeaderToggle}
          {actions && <CardActions className={actions?.className} hasNoOffset={actions?.hasNoOffset}> {actions.actions} </CardActions>}
          {children && <CardHeaderMain>{children}</CardHeaderMain>}
          {onExpand && isToggleRightAligned && cardHeaderToggle}
        </div>
      );
    }}
  </CardContext.Consumer>
);
CardHeader.displayName = 'CardHeader';
