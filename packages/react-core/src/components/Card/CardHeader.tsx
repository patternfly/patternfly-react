import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';
import { CardContext } from './Card';
import { CardHeaderMain } from './CardHeaderMain';
import { CardActions } from './CardActions';
import { CardSelectableActions } from './CardSelectableActions';
import { CardTitle } from './CardTitle';
import { Button } from '../Button';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { Radio } from '../Radio';
import { Checkbox } from '../Checkbox';

export interface CardHeaderActionsObject {
  /** Actions of the card header */
  actions: React.ReactNode;
  /** Flag indicating that the actions have no offset */
  hasNoOffset?: boolean;
  /** Additional classes added to the actions wrapper */
  className?: string;
}

export interface CardHeaderSelectableActionsObject {
  /** Selectable actions of the card header */
  variant?: 'single' | 'multiple';
  /** Flag indicating that the actions have no offset */
  hasNoOffset?: boolean;
  /** Additional classes added to the selectable actions wrapper */
  className?: string;
  /** ID passed to the selectable or clickable input */
  selectableActionId: string;
  /** Adds an accessible label to the selectable or clickable input */
  selectableActionAriaLabel?: string;
  /** Adds an accessible label to the selectable or clickable input by passing in a
   * space separated list of id's.
   */
  selectableActionAriaLabelledby?: string;
  /** Action to call when clickable card is clicked */
  onClickAction?: (event: React.FormEvent<HTMLInputElement> | React.MouseEvent) => void;
  /** Link to navigate to when clickable card is clicked */
  to?: string;
  /** Name for a group of clickable or selectable cards */
  name?: string;
}

export interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the card header */
  children?: React.ReactNode;
  /** Additional classes added to the card header */
  className?: string;
  /** Actions of the card header */
  actions?: CardHeaderActionsObject;
  /** Selectable actions of the card header */
  selectableActions?: CardHeaderSelectableActionsObject;
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
  selectableActions,
  id,
  onExpand,
  toggleButtonProps,
  isToggleRightAligned,
  ...props
}: CardHeaderProps) => (
  <CardContext.Consumer>
    {({ cardId, isClickable, isSelectable }) => {
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

      if (actions && !(isClickable && isSelectable)) {
        if (isClickable) {
          // eslint-disable-next-line no-console
          console.warn('Clickable only cards should not use actions');
        }
        if (isSelectable) {
          // eslint-disable-next-line no-console
          console.warn('Selectable only cards should not use actions');
        }
      }

      const handleActionClick = (event: React.FormEvent<HTMLInputElement> | React.MouseEvent) => {
        if (selectableActions?.onClickAction) {
          selectableActions?.onClickAction(event);
        } else if (selectableActions?.to) {
          window.open(selectableActions?.to, '_blank');
        }
      };

      const selectableInputProps = {
        className: 'pf-m-standalone',
        inputClassName: isClickable && !isSelectable && 'pf-v5-screen-reader',
        label: <></>,
        'aria-label': selectableActions?.selectableActionAriaLabel,
        'aria-labelledby': selectableActions?.selectableActionAriaLabelledby,
        id: selectableActions?.selectableActionId,
        name: selectableActions?.name,
        onClick: handleActionClick
      };

      const selectableInput =
        selectableActions?.variant === 'single' || (isClickable && !isSelectable) ? (
          <Radio {...selectableInputProps} />
        ) : (
          <Checkbox {...selectableInputProps} />
        );

      return (
        <div
          className={css(styles.cardHeader, isToggleRightAligned && styles.modifiers.toggleRight, className)}
          id={id}
          {...props}
        >
          {onExpand && !isToggleRightAligned && cardHeaderToggle}
          <CardActions
            className={actions?.className}
            hasNoOffset={actions?.hasNoOffset || selectableActions?.hasNoOffset}
          >
            {actions?.actions}
            {selectableActions && (isClickable || isSelectable) && (
              <CardSelectableActions className={selectableActions?.className}>{selectableInput}</CardSelectableActions>
            )}
          </CardActions>

          {isClickable && isSelectable ? (
            <CardHeaderMain>
              <CardTitle>
                <Button
                  variant="link"
                  isInline
                  {...(selectableActions?.onClickAction && { onClick: selectableActions?.onClickAction })}
                  {...(selectableActions?.to && { component: 'a', href: selectableActions?.to, target: '_blank' })}
                ></Button>
              </CardTitle>
            </CardHeaderMain>
          ) : (
            children && <CardHeaderMain>{children}</CardHeaderMain>
          )}
          {onExpand && isToggleRightAligned && cardHeaderToggle}
        </div>
      );
    }}
  </CardContext.Consumer>
);
CardHeader.displayName = 'CardHeader';
