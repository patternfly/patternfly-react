import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ChipGroup/chip-group';
import { ChipGroupContext } from './ChipGroup';
import { ChipButton } from './ChipButton';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import GenerateId from '../../helpers/GenerateId/GenerateId';

export interface ChipGroupToolbarItemProps extends React.HTMLProps<HTMLUListElement> {
  /**  Category name text */
  categoryName?: string;
  /** Content rendered inside the chip text */
  children: React.ReactNode;
  /** Additional classes added to the chip item */
  className?: string;
  /** Flag if chip group can be closed*/
  isClosable?: boolean;
  /** Function that is called when clicking on the chip group button */
  onClick?: (event: React.MouseEvent) => void;
  /** Aria label for close button */
  closeBtnAriaLabel?: string;
}

export const ChipGroupToolbarItem: React.FunctionComponent<ChipGroupToolbarItemProps> = ({
  categoryName = '',
  children = null,
  className = '',
  isClosable = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick = (_e: React.MouseEvent) => undefined as any,
  closeBtnAriaLabel = 'Close chip group',
  ...props
}: ChipGroupToolbarItemProps) => {
  if (React.Children.count(children)) {
    const renderChipGroup = (id: string, HeadingLevel: any) => (
      <ul className={css(styles.chipGroup, styles.modifiers.toolbar, className)} {...props}>
        <li>
          <HeadingLevel className={css(styles.chipGroupLabel)} id={id}>
            {categoryName}
          </HeadingLevel>
          <ul className={css(styles.chipGroup)}>{children}</ul>
          {isClosable && (
            <div className="pf-c-chip-group__close">
              <ChipButton
                aria-label={closeBtnAriaLabel}
                onClick={onClick}
                id={`remove_group_${id}`}
                aria-labelledby={`remove_group_${id} ${id}`}
              >
                <TimesIcon aria-hidden="true" />
              </ChipButton>
            </div>
          )}
        </li>
      </ul>
    );

    return (
      <ChipGroupContext.Consumer>
        {(HeadingLevel: any) => <GenerateId>{randomId => renderChipGroup(randomId, HeadingLevel)}</GenerateId>}
      </ChipGroupContext.Consumer>
    );
  }
  return null;
};
