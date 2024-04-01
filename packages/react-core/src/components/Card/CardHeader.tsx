import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';
import { CardContext } from './Card';
import { CardHeaderMain } from './CardHeaderMain';
import { CardActions } from './CardActions';
import { CardSelectableActions } from './CardSelectableActions';
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
  /** Determines the type of input to be used for a selectable card. */
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
  /** Callback for when a selectable card input changes */
  onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
  /** Action to call when clickable card is clicked */
  onClickAction?: (event: React.FormEvent<HTMLInputElement> | React.MouseEvent) => void;
  /** Link to navigate to when clickable card is clicked */
  to?: string;
  /** Flag to indicate whether a clickable card's link should open in a new tab/window. */
  isExternalLink?: boolean;
  /** Name for the input element of a clickable or selectable card. */
  name?: string;
  /** @deprecated Flag indicating whether the selectable card input is checked. We recommend using
   * the isSelected prop on the card component instead.
   */
  isChecked?: boolean;
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
    {/* TODO: Remove hasSelectableInput when deprecated props are removed */}
    {({ cardId, isClickable, isSelectable, isSelected, isClicked, isDisabled: isCardDisabled, hasSelectableInput }) => {
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

      const isClickableOrSelectableOnly = (isClickable && !isSelectable) || (isSelectable && !isClickable);
      // TODO: Remove following variable and update if block when deprecated prop is removed
      // We don't want to throw a warning for the deprecated card
      const isDeprecatedSelectableCard = hasSelectableInput;
      if (actions?.actions && isClickableOrSelectableOnly && !isDeprecatedSelectableCard) {
        // eslint-disable-next-line no-console
        console.warn(
          `${
            isClickable ? 'Clickable' : 'Selectable'
          } only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.`
        );
      }

      const handleActionClick = (event: React.FormEvent<HTMLInputElement> | React.MouseEvent) => {
        if (selectableActions?.onClickAction) {
          selectableActions.onClickAction(event);
        } else if (selectableActions?.to) {
          window.open(selectableActions.to, selectableActions.isExternalLink ? '_blank' : '_self');
        }
      };

      const getClickableSelectableProps = () => {
        const baseProps = {
          className: 'pf-m-standalone',
          inputClassName: isClickable && !isSelectable && 'pf-v5-screen-reader',
          label: <></>,
          'aria-label': selectableActions.selectableActionAriaLabel,
          'aria-labelledby': selectableActions.selectableActionAriaLabelledby,
          id: selectableActions.selectableActionId,
          name: selectableActions.name,
          isDisabled: isCardDisabled
        };
        const isSelectableInputChecked = selectableActions.isChecked ?? isSelected;

        if (isClickable && !isSelectable) {
          return { ...baseProps, onClick: handleActionClick, isChecked: isClicked };
        }
        if (isSelectable) {
          return { ...baseProps, onChange: selectableActions.onChange, isChecked: isSelectableInputChecked };
        }

        return baseProps;
      };

      return (
        <div
          className={css(styles.cardHeader, isToggleRightAligned && styles.modifiers.toggleRight, className)}
          id={id}
          {...props}
        >
          {onExpand && !isToggleRightAligned && cardHeaderToggle}
          {(actions || (selectableActions && (isClickable || isSelectable))) && (
            <CardActions
              className={actions?.className}
              hasNoOffset={actions?.hasNoOffset || selectableActions?.hasNoOffset}
            >
              {actions?.actions}
              {selectableActions && (isClickable || isSelectable) && (
                <CardSelectableActions className={selectableActions?.className}>
                  {selectableActions?.variant === 'single' || (isClickable && !isSelectable) ? (
                    <Radio {...getClickableSelectableProps()} />
                  ) : (
                    <Checkbox {...getClickableSelectableProps()} />
                  )}
                </CardSelectableActions>
              )}
            </CardActions>
          )}
          {children && <CardHeaderMain>{children}</CardHeaderMain>}
          {onExpand && isToggleRightAligned && cardHeaderToggle}
        </div>
      );
    }}
  </CardContext.Consumer>
);
CardHeader.displayName = 'CardHeader';
