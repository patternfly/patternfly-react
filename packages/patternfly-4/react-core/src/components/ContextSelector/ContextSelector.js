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
import { getUniqueId } from '../../helpers/util';

// seed for the aria-labelledby ID
let currentId = getUniqueId();

const propTypes = {
  /** content rendered inside the Context Selector  * */
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
  searchButtonAriaLabel: PropTypes.string,
  /* Value in the Search field */
  searchInputValue: PropTypes.string,
  /** Function callback called when user changes the Search Input */
  onSearchInputChange: PropTypes.func,
  /** Search Input placeholder */
  searchInputPlaceholder: PropTypes.string
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: false,
  onToggle: () => {},
  onSelect: () => {},
  screenReaderLabel: '',
  toggleText: '',
  searchButtonAriaLabel: 'Search menu items',
  searchInputValue: '',
  onSearchInputChange: () => {},
  searchInputPlaceholder: 'Search'
};

class ContextSelector extends React.Component {
  parentRef = React.createRef();
  state = { openedOnEnter: false };

  onEnter = () => {
    this.setState({ openedOnEnter: true });
  };

  onClose = () => {
    this.setState({ openedOnEnter: false });
  };

  render() {
    const { openedOnEnter } = this.state;
    const toggleId = `pf-context-selector-toggle-id-${currentId++}`;
    const screenReaderLabelId = `pf-context-selector-label-id-${currentId++}`;
    const searchButtonId = `pf-context-selector-search-button-id-${currentId++}`;
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
      ...props
    } = this.props;
    return (
      <div className={css(styles.contextSelector, props.className)} ref={this.parentRef} {...props}>
        {screenReaderLabel && (
          <span id={screenReaderLabelId} hidden>
            {screenReaderLabel}
          </span>
        )}
        <ContextSelectorToggle
          onToggle={onToggle}
          isOpen={isOpen}
          onEnter={this.onEnter}
          onClose={this.onClose}
          toggleText={toggleText}
          id={toggleId}
          parentRef={this.parentRef.current}
          aria-labelledby={`${toggleId} ${screenReaderLabelId}`}
        />
        {isOpen && (
          <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
            <div className={css(styles.contextSelectorMenu)}>
              <div className={css(styles.contextSelectorMenuInput)}>
                <InputGroup>
                  <TextInput
                    value={searchInputValue}
                    type="search"
                    placeholder={searchInputPlaceholder}
                    onChange={onSearchInputChange}
                    aria-labelledby={searchButtonId}
                  />
                  <Button variant={ButtonVariant.tertiary} aria-label={searchButtonAriaLabel} id={searchButtonId}>
                    <SearchIcon aria-hidden="true" />
                  </Button>
                </InputGroup>
              </div>
              <ContextSelectorContext.Provider value={{ onSelect }}>
                <ContextSelectorMenuList isOpen={isOpen} openedOnEnter={openedOnEnter}>
                  {children}
                </ContextSelectorMenuList>
              </ContextSelectorContext.Provider>
            </div>
          </FocusTrap>
        )}
      </div>
    );
  }
}

ContextSelector.propTypes = propTypes;
ContextSelector.defaultProps = defaultProps;

export default ContextSelector;
