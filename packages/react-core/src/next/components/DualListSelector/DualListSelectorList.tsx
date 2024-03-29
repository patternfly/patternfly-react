import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { DualListSelectorListItem } from './DualListSelectorListItem';
import * as React from 'react';
import { DualListSelectorListContext } from './DualListSelectorContext';

/** Acts as the container for DualListSelectorListItem sub-components. */

export interface DualListSelectorListProps extends React.HTMLProps<HTMLUListElement> {
  /** Content rendered inside the dual list selector list. */
  children?: React.ReactNode;
}

export const DualListSelectorList: React.FunctionComponent<DualListSelectorListProps> = ({
  children,
  ...props
}: DualListSelectorListProps) => {
  const { isTree, ariaLabelledBy, focusedOption, displayOption, selectedOptions, id, options, isDisabled } =
    React.useContext(DualListSelectorListContext);

  const hasOptions = () =>
    options.length !== 0 || (children !== undefined && (children as React.ReactNode[]).length !== 0);

  return (
    <ul
      className={css(styles.dualListSelectorList)}
      {...(hasOptions() && {
        role: isTree ? 'tree' : 'listbox',
        'aria-multiselectable': true,
        'aria-labelledby': ariaLabelledBy,
        'aria-activedescendant': focusedOption
      })}
      aria-disabled={isDisabled ? 'true' : undefined}
      {...props}
    >
      {options.length === 0
        ? children
        : options.map((option, index) => {
            if (displayOption(option)) {
              return (
                <DualListSelectorListItem
                  key={index}
                  isSelected={(selectedOptions as number[]).indexOf(index) !== -1}
                  id={`${id}-option-${index}`}
                  orderIndex={index}
                  isDisabled={isDisabled}
                >
                  {option}
                </DualListSelectorListItem>
              );
            }
            return;
          })}
    </ul>
  );
};
DualListSelectorList.displayName = 'DualListSelectorList';
