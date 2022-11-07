import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ContextSelector/context-selector';
import { css } from '@patternfly/react-styles';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import { ContextSelectorToggle } from './ContextSelectorToggle';
import { ContextSelectorMenuList } from './ContextSelectorMenuList';
import { ContextSelectorContext } from './contextSelectorConstants';
import { Button, ButtonVariant } from '../Button';
import { TextInput } from '../TextInput';
import { InputGroup } from '../InputGroup';
import { KeyTypes } from '../../helpers/constants';
import { FocusTrap, getUniqueId } from '../../helpers';
import { ToggleMenuBaseProps } from '../../helpers/Popper/Popper';
import { Popper } from '../../helpers/Popper/Popper';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface ContextSelectorProps extends Omit<ToggleMenuBaseProps, 'menuAppendTo'>, OUIAProps {
  /** content rendered inside the Context Selector */
  children?: React.ReactNode;
  /** Classes applied to root element of Context Selector */
  className?: string;
  /** Flag to indicate if Context Selector is opened */
  isOpen?: boolean;
  /** Function callback called when user clicks toggle button */
  onToggle?: (event: any, value: boolean) => void;
  /** Function callback called when user selects item */
  onSelect?: (event: any, value: React.ReactNode) => void;
  /** The container to append the menu to. Defaults to 'inline'.
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * menuAppendTo="parent"
   * menuAppendTo={() => document.body}
   * menuAppendTo={document.getElementById('target')}
   */
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline' | 'parent';
  /** Flag indicating that the context selector should expand to full height */
  isFullHeight?: boolean;
  /** Labels the Context Selector for Screen Readers */
  screenReaderLabel?: string;
  /** Component or string that will be used in the context selector.
   * This prop is placed in a button, and cannot contain any interactive elements
   */
  toggleText?: React.ReactNode;
  /** Aria-label for the Context Selector Search Button */
  searchButtonAriaLabel?: string;
  /** Value in the Search field */
  searchInputValue?: string;
  /** Function callback called when user changes the Search Input */
  onSearchInputChange?: (value: string) => void;
  /** Search Input placeholder */
  searchInputPlaceholder?: string;
  /** Function callback for when Search Button is clicked */
  onSearchButtonClick?: (event?: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** Footer of the context selector */
  footer?: React.ReactNode;
  /** Flag to indicate the toggle has no border or background */
  isPlain?: boolean;
  /** Flag to indicate if toggle is textual toggle */
  isText?: boolean;
  /** Flag to disable focus trap */
  disableFocusTrap?: boolean;
  /** Flag for indicating that the context selector menu should automatically flip vertically when
   * it reaches the boundary. This prop can only be used when the context selector component is not
   * appended inline, e.g. `menuAppendTo="parent"`
   */
  isFlipEnabled?: boolean;
  /** Id of the context selector */
  id?: string;
  /** @beta Opt-in for updated popper that does not use findDOMNode. */
  removeFindDomNode?: boolean;
  /** z-index of the context selector when menuAppendTo is not inline. */
  zIndex?: number;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export class ContextSelector extends React.Component<ContextSelectorProps, { ouiaStateId: string }> {
  static displayName = 'ContextSelector';
  static defaultProps: ContextSelectorProps = {
    children: null as React.ReactNode,
    className: '',
    isOpen: false,
    onToggle: () => undefined as any,
    onSelect: () => undefined as any,
    screenReaderLabel: '',
    toggleText: '',
    searchButtonAriaLabel: 'Search menu items',
    searchInputValue: '',
    onSearchInputChange: () => undefined as any,
    searchInputPlaceholder: 'Search',
    onSearchButtonClick: () => undefined as any,
    menuAppendTo: 'inline',
    ouiaSafe: true,
    disableFocusTrap: false,
    footer: null as React.ReactNode,
    isPlain: false,
    isText: false,
    isFlipEnabled: true,
    removeFindDomNode: false,
    zIndex: 9999
  };
  constructor(props: ContextSelectorProps) {
    super(props);
    this.state = {
      ouiaStateId: getDefaultOUIAId(ContextSelector.displayName)
    };
  }

  parentRef: React.RefObject<HTMLDivElement> = React.createRef();
  popperRef: React.RefObject<HTMLDivElement> = React.createRef();

  onEnterPressed = (event: any) => {
    if (event.key === KeyTypes.Enter) {
      this.props.onSearchButtonClick();
    }
  };

  render() {
    const {
      children,
      className,
      isOpen,
      isFullHeight,
      onToggle,
      onSelect,
      screenReaderLabel,
      toggleText,
      searchButtonAriaLabel,
      searchInputValue,
      onSearchInputChange,
      searchInputPlaceholder,
      onSearchButtonClick,
      menuAppendTo,
      ouiaId,
      ouiaSafe,
      isPlain,
      isText,
      footer,
      disableFocusTrap,
      isFlipEnabled,
      id,
      removeFindDomNode,
      zIndex,
      ...props
    } = this.props;

    const uniqueId = id || getUniqueId();
    const toggleId = `pf-context-selector-toggle-id-${uniqueId}`;
    const screenReaderLabelId = `pf-context-selector-label-id-${uniqueId}`;
    const isStatic = isFlipEnabled && menuAppendTo !== 'inline';

    const menuContainer = (
      <div className={css(styles.contextSelectorMenu, isStatic && styles.modifiers.static)} id={uniqueId}>
        {isOpen && (
          <FocusTrap
            active={!disableFocusTrap}
            focusTrapOptions={{ clickOutsideDeactivates: true, tabbableOptions: { displayCheck: 'none' } }}
          >
            <div className={css(styles.contextSelectorMenuSearch)}>
              <InputGroup>
                <TextInput
                  value={searchInputValue}
                  type="search"
                  placeholder={searchInputPlaceholder}
                  onChange={onSearchInputChange}
                  onKeyPress={this.onEnterPressed}
                  aria-label={searchButtonAriaLabel}
                />
                <Button
                  variant={ButtonVariant.control}
                  aria-label={searchButtonAriaLabel}
                  onClick={onSearchButtonClick}
                >
                  <SearchIcon aria-hidden="true" />
                </Button>
              </InputGroup>
            </div>
            <ContextSelectorContext.Provider value={{ onSelect }}>
              <ContextSelectorMenuList isOpen={isOpen}>{children}</ContextSelectorMenuList>
            </ContextSelectorContext.Provider>
            {footer}
          </FocusTrap>
        )}
      </div>
    );
    const popperContainer = (
      <div
        className={css(styles.contextSelector, isOpen && styles.modifiers.expanded, className)}
        ref={this.popperRef}
        {...props}
      >
        {isOpen && menuContainer}
      </div>
    );
    const mainContainer = (
      <div
        className={css(
          styles.contextSelector,
          isOpen && styles.modifiers.expanded,
          isFullHeight && styles.modifiers.fullHeight,
          className
        )}
        ref={this.parentRef}
        {...getOUIAProps(ContextSelector.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
        {...props}
      >
        {screenReaderLabel && (
          <span id={screenReaderLabelId} hidden>
            {screenReaderLabel}
          </span>
        )}
        <ContextSelectorToggle
          onToggle={onToggle}
          isOpen={isOpen}
          toggleText={toggleText}
          id={toggleId}
          parentRef={menuAppendTo === 'inline' ? this.parentRef : this.popperRef}
          aria-labelledby={`${screenReaderLabelId} ${toggleId}`}
          isPlain={isPlain}
          isText={isText}
        />
        {isOpen && menuAppendTo === 'inline' && menuContainer}
      </div>
    );
    const getParentElement = () => {
      if (this.parentRef && this.parentRef.current) {
        return this.parentRef.current.parentElement;
      }
      return null;
    };
    return menuAppendTo === 'inline' ? (
      mainContainer
    ) : (
      <Popper
        trigger={mainContainer}
        popper={popperContainer}
        appendTo={menuAppendTo === 'parent' ? getParentElement() : menuAppendTo}
        isVisible={isOpen}
        removeFindDomNode={removeFindDomNode}
        zIndex={zIndex}
      />
    );
  }
}
