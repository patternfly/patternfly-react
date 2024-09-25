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
  /** Custom ID passed to the selectable card's input or a clickable-only card's button/anchor.
   * If omitted, a random unique ID will be assigned to a selectable card's input. */
  selectableActionId?: string;
  /** Adds an accessible name to the input of a selectable card or clickable button/anchor of a clickable-only card.
   * This or selectableActionAriaLabelledby is required for clickable-only cards.
   */
  selectableActionAriaLabel?: string;
  /** A single or list of space-delimited ID's that provide an accessible name to the input of a selectable card
   * or clickable button/anchor of a clickable-only card. This or selectableActionAriaLabelledby is required
   * for clickable-only cards.
   */
  selectableActionAriaLabelledby?: string;
  /** Callback for when a selectable card input changes */
  onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
  /** Action to call when a clickable-only card is clicked. This cannot be combined with the to prop. */
  onClickAction?: (event: React.MouseEvent) => void;
  /** Link to navigate to when a clickable-only card is clicked. This cannot be combined with the onClickAction prop. */
  to?: string;
  /** Additional props spread to a selectable card input or clickable-only card's button/anchor. */
  selectableActionProps?: any;
  /** Flag to indicate whether a clickable-only card's link should open in a new tab/window. */
  isExternalLink?: boolean;
  /** Name for the input element of a selectable card. */
  name?: string;
  /** @deprecated Flag indicating whether the selectable card input is checked. We recommend using
   * the isSelected prop on the card component instead.
   */
  isChecked?: boolean;
  /** Flag indicating the action is hidden */
  isHidden?: boolean;
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
}: CardHeaderProps) => {
  const uniqueId = React.useId();

  return (
    <CardContext.Consumer>
      {({ cardId, isClickable, isSelectable, isSelected, isDisabled: isCardDisabled }) => {
        const cardHeaderToggle = (
          <div className={css(styles.cardHeaderToggle)}>
            <Button
              variant="plain"
              type="button"
              onClick={(evt) => {
                onExpand(evt, cardId);
              }}
              {...toggleButtonProps}
              icon={
                <span className={css(styles.cardHeaderToggleIcon)}>
                  <AngleRightIcon aria-hidden="true" />
                </span>
              }
            />
          </div>
        );

        const isClickableOrSelectableOnly = (isClickable && !isSelectable) || (isSelectable && !isClickable);
        if (actions?.actions && isClickableOrSelectableOnly) {
          // eslint-disable-next-line no-console
          console.error(
            `Card: ${
              isClickable ? 'Clickable' : 'Selectable'
            } only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.`
          );
        }

        const isClickableOnlyCard = isClickable && !isSelectable;
        if (
          (isClickableOnlyCard || isSelectable) &&
          !selectableActions?.selectableActionAriaLabel &&
          !selectableActions?.selectableActionAriaLabelledby
        ) {
          // eslint-disable-next-line no-console
          console.error(
            `Card: ${isClickableOnlyCard ? 'Clickable-only cards' : 'Cards with a selectable input'} must have either the selectableActions.selectableActionAriaLabel or selectableActions.selectableActionAriaLabelledby prop passed in order to provide an accessible name to the clickable element.`
          );
        }

        const SelectableCardInput = selectableActions?.variant === 'single' ? Radio : Checkbox;
        const getSelectableProps = () => ({
          className: css('pf-m-standalone'),
          inputClassName: css(selectableActions?.isHidden && 'pf-v6-screen-reader'),
          label: <></>,
          'aria-label': selectableActions.selectableActionAriaLabel,
          'aria-labelledby': selectableActions.selectableActionAriaLabelledby,
          id: selectableActions.selectableActionId ?? `card-selectable-${uniqueId}`,
          name: selectableActions.name,
          isDisabled: isCardDisabled,
          onChange: selectableActions.onChange,
          isChecked: selectableActions.isChecked ?? isSelected,
          ...selectableActions.selectableActionProps
        });

        const isClickableLinkCard = selectableActions?.to !== undefined;
        const ClickableCardComponent = isClickableLinkCard ? 'a' : 'button';
        const getClickableProps = () => {
          const isDisabledLinkCard = isCardDisabled && isClickableLinkCard;
          const baseProps = {
            className: css(
              'pf-v6-c-card__clickable-action',
              isDisabledLinkCard && styles.modifiers.disabled,
              selectableActions?.isHidden && 'pf-v6-screen-reader'
            ),
            id: selectableActions.selectableActionId,
            'aria-label': selectableActions.selectableActionAriaLabel,
            'aria-labelledby': selectableActions.selectableActionAriaLabelledby,
            ...selectableActions.selectableActionProps
          };

          if (isClickableLinkCard) {
            return {
              ...baseProps,
              href: selectableActions.to,
              ...(isCardDisabled && { tabIndex: -1, 'aria-disabled': true }),
              ...(selectableActions.isExternalLink && { target: '_blank' })
            };
          }

          return { ...baseProps, type: 'button', disabled: isCardDisabled, onClick: selectableActions.onClickAction };
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
                    {isSelectable && <SelectableCardInput {...getSelectableProps()} />}
                    {isClickableOnlyCard && <ClickableCardComponent {...getClickableProps()} />}
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
};
CardHeader.displayName = 'CardHeader';
