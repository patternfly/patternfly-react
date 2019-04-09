import React from 'react';
import styles from '@patternfly/patternfly/components/ContextSelector/context-selector.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import ContextSelectorToggle from './ContextSelectorToggle';
import ContextSelectorMenuList from './ContextSelectorMenuList';
import { ContextSelectorContext } from './contextSelectorConstants';
import { Button, ButtonVariant } from '../Button';
import { TextInput } from '../TextInput';
import { SearchIcon } from '@patternfly/react-icons';
import { InputGroup } from '../InputGroup';
import { KEY_CODES } from '../../helpers/constants';

// seed for the aria-labelledby ID
let currentId = 0;
const newId = currentId++;

const propTypes = {
  /** content rendered inside the Context Selector */
  children: PropTypes.node,
  /** Classes applied to root element of Context Selector */
  className: PropTypes.string,
  /** Flag to indicate if Context Selector is opened */
  isOpen: PropTypes.bool,
  /** Function callback called when user clicks toggle button */
  onToggle: PropTypes.func,
  /** Function callback called when user selects item */
  onSelect: PropTypes.func,
  /** Labels the Context Selector for Screen Readers */
  screenReaderLabel: PropTypes.string,
  /** Text that appears in the Context Selector Toggle */
  toggleText: PropTypes.string,
  /** aria-label for the Context Selector Search Button */
  'aria-label': PropTypes.string,
  /** Value in the Search field */
  searchInputValue: PropTypes.string,
  /** Function callback called when user changes the Search Input */
  onSearchInputChange: PropTypes.func,
  /** Search Input placeholder */
  searchInputPlaceholder: PropTypes.string,
  /** Function callback for when Search Button is clicked */
  onSearchButtonClick: PropTypes.func
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: false,
  onToggle: () => { },
  onSelect: () => { },
  screenReaderLabel: '',
  toggleText: '',
  'aria-label': 'Search menu items',
  searchInputValue: '',
  onSearchInputChange: () => { },
  searchInputPlaceholder: 'Search',
  onSearchButtonClick: () => { }
};

class ContextSelector extends React.Component {
  parentRef = React.createRef();

  onEnterPressed = event => {
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
      'aria-label': ariaLabel,
      searchInputValue,
      onSearchInputChange,
      searchInputPlaceholder,
      onSearchButtonClick,
      ...props
    } = this.props;
    return (
      <div
        className={css(styles.contextSelector, isOpen && styles.modifiers.expanded, className)}
        ref={this.parentRef}
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
        {isOpen && (
          <div className={css(styles.contextSelectorMenu)}>
            {isOpen && (
              <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
                <div className={css(styles.contextSelectorMenuInput)}>
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
                      variant={ButtonVariant.tertiary}
                      aria-label={ariaLabel}
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
              </FocusTrap>
            )}
          </div>
        )}
      </div>
    );
  }
}

ContextSelector.propTypes = propTypes;
ContextSelector.defaultProps = defaultProps;

export default ContextSelector;
