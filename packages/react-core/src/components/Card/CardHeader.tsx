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
  /** Additional classes added to the actions wrapper */
  className?: string;
  /** ID passed to the action element */
  selectableActionID: string;
  /** Aria label passed to the action element */
  selectableActionAriaLabel: string;
  /* Action to call when clickable card is clicked */
  onClickAction?: (event: React.FormEvent<HTMLInputElement>) => void;
  /* Link to navigate to when clickable card is clicked */
  to?: string;
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

        return (
          <div
            className={css(styles.cardHeader, isToggleRightAligned && styles.modifiers.toggleRight, className)}
            id={id}
            {...props}
          >
            {onExpand && !isToggleRightAligned && cardHeaderToggle}
            <CardActions hasNoOffset={actions?.hasNoOffset || selectableActions?.hasNoOffset}>
              {selectableActions && (
                <CardSelectableActions>
                  {isClickable && isSelectable && (
                    // todo add radio
                    <Checkbox
                      className={css(styles.checkInput, 'pf-screen-reader')}
                      id={selectableActions.selectableActionID}
                      name={selectableActions.selectableActionID}
                    />
                  )}
                  {isClickable && !isSelectable && (
                    <>
                      <Radio
                        className={css(styles.radioInput, 'pf-screen-reader')}
                        label={<span className={css(styles.radioLabel)}></span>}
                        aria-label={selectableActions.selectableActionAriaLabel}
                        onChange={(event, checked) => checked && selectableActions?.onClickAction?.(event)}
                        id={selectableActions.selectableActionID}
                        name={selectableActions.selectableActionID}
                      />
                    </>
                  )}
                  {isSelectable &&
                    !isClickable &&
                    (selectableActions?.variant && selectableActions.variant === 'single' ? (
                      <>
                        <Radio
                          label={<span className={css(styles.radioLabel)}></span>}
                          className={css(styles.radioInput)}
                          aria-label={selectableActions.selectableActionAriaLabel}
                          id={selectableActions.selectableActionID}
                          name={selectableActions.selectableActionID}
                        />
                        <label
                          className={css(styles.radioLabel)}
                          htmlFor={selectableActions.selectableActionID}
                        ></label>
                      </>
                    ) : (
                      <>
                        <Checkbox
                          className={css(styles.checkInput)}
                          id={selectableActions.selectableActionID}
                          name={selectableActions.selectableActionID}
                        />
                        <label
                          className={css(styles.checkLabel)}
                          htmlFor={selectableActions.selectableActionID}
                        ></label>
                      </>
                    ))}
                </CardSelectableActions>
              )}

              {actions && (
                <CardActions className={actions?.className} hasNoOffset={actions?.hasNoOffset}>
                  {actions.actions}
                </CardActions>
              )}
            </CardActions>

            {isClickable && isSelectable ? (
              <CardHeaderMain>
                <CardTitle>
                  <Button variant="link"></Button>
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
