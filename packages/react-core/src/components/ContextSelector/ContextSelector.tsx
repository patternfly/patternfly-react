import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ContextSelector/context-selector';
import { css } from '@patternfly/react-styles';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import { ContextSelectorToggle } from './ContextSelectorToggle';
import { ContextSelectorMenuList } from './ContextSelectorMenuList';
import { ContextSelectorContext } from './contextSelectorConstants';
import { Button, ButtonVariant } from '../Button';
import { TextInput } from '../TextInput';
import { InputGroup } from '../InputGroup';
import { KEY_CODES } from '../../helpers/constants';
import { FocusTrap } from '../../helpers';
import { ToggleMenuBaseProps } from '../../helpers/Popper/Popper';
import { Popper } from '../../helpers/Popper/Popper';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

// seed for the aria-labelledby ID
let currentId = 0;
const newId = currentId++;

export interface ContextSelectorProps extends ToggleMenuBaseProps, OUIAProps {
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
  /** Labels the Context Selector for Screen Readers */
  screenReaderLabel?: string;
  /** Text that appears in the Context Selector Toggle */
  toggleText?: string;
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
    footer: null as React.ReactNode
  };
  constructor(props: ContextSelectorProps) {
    super(props);
    this.state = {
      ouiaStateId: getDefaultOUIAId(ContextSelector.displayName)
    };
  }

  parentRef: React.RefObject<HTMLDivElement> = React.createRef();

  onEnterPressed = (event: any) => {
    if (event.charCode === KEY_CODES.ENTER) {
      this.props.onSearchButtonClick();
    }
  };

  render() {
    const toggleId = `pf-context-selector-toggle-id-${newId}`;
    const screenReaderLabelId = `pf-context-selector-label-id-${newId}`;
    const searchButtonId = `pf-context-selector-search-button-id-${newId}`;
    const {
      children,
      className,
      isOpen,
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
      footer,
      ...props
    } = this.props;
    const menuContainer = (
      <div className={css(styles.contextSelectorMenu)}>
        {isOpen && (
          <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
            <div className={css(styles.contextSelectorMenuSearch)}>
              <InputGroup>
                <TextInput
                  value={searchInputValue}
                  type="search"
                  placeholder={searchInputPlaceholder}
                  onChange={onSearchInputChange}
                  onKeyPress={this.onEnterPressed}
                  aria-labelledby={searchButtonId}
                />
                <Button
                  variant={ButtonVariant.control}
                  aria-label={searchButtonAriaLabel}
                  id={searchButtonId}
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
        ref={this.parentRef}
        {...props}
      >
        {isOpen && menuContainer}
      </div>
    );
    const mainContainer = (
      <div
        className={css(styles.contextSelector, isOpen && styles.modifiers.expanded, className)}
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
          parentRef={this.parentRef.current}
          aria-labelledby={`${screenReaderLabelId} ${toggleId}`}
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
      />
    );
  }
}
