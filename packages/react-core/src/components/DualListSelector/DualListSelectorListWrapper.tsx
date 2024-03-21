import {
  type HTMLProps,
  type ReactNode,
  type RefObject,
  type MouseEvent as ReactMouseEvent,
  type ChangeEvent as ReactChangeEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type FunctionComponent,
  useState,
  useRef,
  useContext,
  useEffect,
  forwardRef,
  type Ref,
  type MutableRefObject
} from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { getUniqueId, handleArrows } from '../../helpers';
import { DualListSelectorList } from './DualListSelectorList';
import { DualListSelectorContext, DualListSelectorListContext } from './DualListSelectorContext';

export interface DualListSelectorListWrapperProps extends HTMLProps<HTMLDivElement> {
  /** Additional classes applied to the dual list selector. */
  className?: string;
  /** Anything that can be rendered inside of the list */
  children?: ReactNode;
  /** Id of the dual list selector list */
  id?: string;
  /** Accessibly label for the list */
  'aria-labelledby': string;
  /** @hide forwarded ref */
  innerRef?: RefObject<HTMLDivElement>;
  /** @hide Options to list in the pane. */
  options?: ReactNode[];
  /** @hide Options currently selected in the pane. */
  selectedOptions?: string[] | number[];
  /** @hide Callback for when an option is selected. Optionally used only when options prop is provided. */
  onOptionSelect?: (e: ReactMouseEvent | ReactChangeEvent | ReactKeyboardEvent, index: number, id: string) => void;
  /** @hide Function to determine if an option should be displayed depending on a dynamically built filter value */
  displayOption?: (option: ReactNode) => boolean;
  /** Flag indicating whether the component is disabled. */
  isDisabled?: boolean;
}

export const DualListSelectorListWrapperBase: FunctionComponent<DualListSelectorListWrapperProps> = ({
  className,
  children,
  'aria-labelledby': ariaLabelledBy,
  innerRef,
  options = [],
  selectedOptions = [],
  onOptionSelect,
  displayOption,
  id = getUniqueId('dual-list-selector-list'),
  isDisabled = false,
  ...props
}: DualListSelectorListWrapperProps) => {
  const [focusedOption, setFocusedOption] = useState('');
  const ref = useRef(null);
  const menuRef = innerRef || ref;
  const { isTree } = useContext(DualListSelectorContext);

  // sets up keyboard focus handling for the dual list selector menu child of the pane. This keyboard
  // handling is applied whether the pane is dynamically built or passed via the children prop.
  const handleKeys = (event: KeyboardEvent) => {
    if (
      !menuRef.current ||
      (menuRef.current !== (event.target as HTMLElement).closest(`.${styles.dualListSelectorMenu}`) &&
        !Array.from(menuRef.current.getElementsByClassName(styles.dualListSelectorMenu)).includes(
          (event.target as HTMLElement).closest(`.${styles.dualListSelectorMenu}`)
        ))
    ) {
      return;
    }
    event.stopImmediatePropagation();
    const validOptions = isTree
      ? (Array.from(
          menuRef.current.querySelectorAll(
            `.${styles.dualListSelectorItemToggle}, .${styles.dualListSelectorItemCheck} > input`
          )
        ) as Element[])
      : (Array.from(menuRef.current.getElementsByTagName('LI')) as Element[]).filter(
          (el) => !el.classList.contains('pf-m-disabled')
        );
    const activeElement = document.activeElement;
    handleArrows(
      event,
      validOptions,
      (element: Element) => activeElement.contains(element),
      (element: Element) => {
        if (element.classList.contains(`.${styles.dualListSelectorListItem}`)) {
          setFocusedOption(element.id);
        } else {
          setFocusedOption(element.closest(`.${styles.dualListSelectorListItem}`).id);
        }
        return element;
      },
      [`.${styles.dualListSelectorItemToggle}`, `.${styles.dualListSelectorItemCheck} > input`],
      undefined,
      false,
      false,
      false
    );
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeys);
    return () => {
      window.removeEventListener('keydown', handleKeys);
    };
  }, [menuRef.current]);

  return (
    <div className={css(styles.dualListSelectorMenu, className)} ref={menuRef} tabIndex={0} {...props}>
      <DualListSelectorListContext.Provider
        value={{
          setFocusedOption,
          isTree,
          focusedOption,
          ariaLabelledBy,
          displayOption,
          selectedOptions,
          id,
          options,
          onOptionSelect,
          isDisabled
        }}
      >
        {children ? children : <DualListSelectorList />}
      </DualListSelectorListContext.Provider>
    </div>
  );
};
DualListSelectorListWrapperBase.displayName = 'DualListSelectorListWrapperBase';

export const DualListSelectorListWrapper = forwardRef(
  (props: DualListSelectorListWrapperProps, ref: Ref<HTMLDivElement>) => (
    <DualListSelectorListWrapperBase innerRef={ref as MutableRefObject<any>} {...props} />
  )
);

DualListSelectorListWrapper.displayName = 'DualListSelectorListWrapper';
