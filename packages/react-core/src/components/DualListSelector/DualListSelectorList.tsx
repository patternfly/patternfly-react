import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { getUniqueId, handleArrows } from '../../helpers';
import { DualListSelectorListItem } from './DualListSelectorListItem';
import { DualListSelectorContext, DualListSelectorListContext } from './DualListSelectorContext';

export interface DualListSelectorListProps extends React.HTMLProps<HTMLUListElement> {
  /** Additional classes applied to the dual list selector. */
  className?: string;
  /** Anything that can be rendered inside of the list */
  children?: React.ReactNode;
  /** Id of the dual list selector list */
  id?: string;
  /** Accessibly label for the list */
  'aria-labelledby': string;
  /** @hide forwarded ref */
  innerRef?: React.RefObject<HTMLDivElement>;
  /** @hide Options to list in the pane. */
  options?: React.ReactNode[];
  /** @hide Options currently selected in the pane. */
  selectedOptions?: string[] | number[];
  /** @hide Callback for when an option is selected. Optionally used only when options prop is provided. */
  onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent, index: number, id: string) => void;
  /** @hide Function to determine if an option should be displayed depending on a dynamically built filter value */
  displayOption?: (option: React.ReactNode) => boolean;
}

export const DualListSelectorListBase: React.FunctionComponent<DualListSelectorListProps> = ({
  className,
  children,
  'aria-labelledby': ariaLabelledBy,
  innerRef,
  options = [],
  selectedOptions = [],
  onOptionSelect,
  displayOption,
  id = getUniqueId('dual-list-selector-list'),
  ...props
}: DualListSelectorListProps) => {
  const [focusedOption, setFocusedOption] = React.useState('');
  const menuRef = innerRef || React.useRef(null);
  const { isTree } = React.useContext(DualListSelectorContext);

  // sets up keyboard focus handling for the dual list selector menu child of the pane. This keyboard
  // handling is applied whether the pane is dynamically built or passed via the children prop.
  const handleKeys = (event: KeyboardEvent) => {
    if (
      !menuRef.current ||
      (menuRef.current !== (event.target as HTMLElement).closest('.pf-c-dual-list-selector__menu') &&
        !Array.from(menuRef.current.getElementsByClassName('pf-c-dual-list-selector__menu')).includes(
          (event.target as HTMLElement).closest('.pf-c-dual-list-selector__menu')
        ))
    ) {
      return;
    }
    event.stopImmediatePropagation();
    const validOptions = isTree
      ? (Array.from(
          menuRef.current.querySelectorAll(
            '.pf-c-dual-list-selector__item-toggle, .pf-c-dual-list-selector__item-check > input'
          )
        ) as Element[])
      : (Array.from(menuRef.current.getElementsByTagName('LI')) as Element[]).filter(
          el => !el.classList.contains('pf-m-disabled')
        );
    const activeElement = document.activeElement;
    handleArrows(
      event,
      validOptions,
      (element: Element) => activeElement.contains(element),
      (element: Element) => {
        if (element.classList.contains('.pf-c-dual-list-selector__list-item')) {
          setFocusedOption(element.id);
        } else {
          setFocusedOption(element.closest('.pf-c-dual-list-selector__list-item').id);
        }
        return element;
      },
      ['.pf-c-dual-list-selector__item-toggle', '.pf-c-dual-list-selector__item-check > input'],
      undefined,
      false,
      false,
      false
    );
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeys);
    return () => {
      window.removeEventListener('keydown', handleKeys);
    };
  }, [menuRef.current]);

  // only called when options are passed via options prop
  const onOptionClick = (e: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent, index: number, id: string) => {
    setFocusedOption(id);
    onOptionSelect(e, index, id);
  };

  return (
    <div className={css(styles.dualListSelectorMenu, className)} ref={menuRef} tabIndex={0}>
      <ul
        className={css(styles.dualListSelectorList)}
        role={isTree ? 'tree' : 'listbox'}
        aria-multiselectable="true"
        aria-labelledby={ariaLabelledBy}
        aria-activedescendant={focusedOption}
        {...props}
      >
        <DualListSelectorListContext.Provider value={{ setFocusedOption }}>
          {options.length === 0
            ? children
            : options.map((option, index) => {
                if (displayOption(option)) {
                  return (
                    <DualListSelectorListItem
                      key={index}
                      isSelected={(selectedOptions as number[]).indexOf(index) !== -1}
                      id={`${id}-option-${index}`}
                      onOptionSelect={(e, id) => onOptionClick(e, index, id)}
                      orderIndex={index}
                    >
                      {option}
                    </DualListSelectorListItem>
                  );
                }
                return;
              })}
        </DualListSelectorListContext.Provider>
      </ul>
    </div>
  );
};
DualListSelectorListBase.displayName = 'DualListSelectorListBase';

export const DualListSelectorList = React.forwardRef(
  (props: DualListSelectorListProps, ref: React.Ref<HTMLDivElement>) => (
    <DualListSelectorListBase innerRef={ref as React.MutableRefObject<any>} {...props} />
  )
);

DualListSelectorList.displayName = 'DualListSelectorList';
