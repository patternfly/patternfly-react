import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CaretDownIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css, getModifier } from '@patternfly/react-styles';
import { fillTemplate, KEY_CODES } from '../../helpers';
// import Toggle from '../Dropdown/Toggle';

// const OptionsToggle = ({
//   itemsTitle,
//   optionsToggle,
//   firstIndex,
//   lastIndex,
//   itemCount,
//   widgetId,
//   onToggle,
//   isOpen,
//   onEnter,
//   parentRef,
//   toggleTemplate: ToggleTemplate
// }) => (
//   <div className={css(styles.optionsMenuToggle, getModifier(styles, 'plain'), getModifier(styles, 'text'))}>
//     <span className={css(styles.optionsMenuToggleText)}>
//       {typeof ToggleTemplate === 'string' ? (
//         fillTemplate(ToggleTemplate, { firstIndex, lastIndex, itemCount, itemsTitle })
//       ) : (
//         <ToggleTemplate firstIndex={firstIndex} lastIndex={lastIndex} itemCount={itemCount} itemsTitle={itemsTitle} />
//       )}
//     </span>
//     <Toggle
//       className={css(styles.optionsMenuToggleButton)}
//       id={`${widgetId}-toggle`}
//       aria-haspopup="listbox"
//       aria-labelledby={`${widgetId}-toggle ${widgetId}-label`}
//       aria-label={optionsToggle}
//       aria-expanded={isOpen}
//       onClick={() => onToggle(!isOpen)}
//       type="button"
//     >
//       <CaretDownIcon />
//     </Toggle>
//   </div>
// );

testOptionsToggle.propTypes = {
  itemsTitle: PropTypes.string,
  optionsToggle: PropTypes.string,
  firstIndex: PropTypes.number,
  lastIndex: PropTypes.number,
  itemCount: PropTypes.number,
  widgetId: PropTypes.string,
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onEnter: PropTypes.func,
  parentRef: PropTypes.any
};

testOptionsToggle.defaultProps = {
  itemsTitle: 'items',
  optionsToggle: 'Select',
  firstIndex: 0,
  lastIndex: 0,
  itemCount: 0,
  widgetId: '',
  onToggle: Function.prototype,
  isOpen: false,
  toggleTemplate: '',
  onEnter: Function.prototype,
  parentRef: null
};

class testOptionsToggle extends Component {
  componentDidMount = () => {
    document.addEventListener('mousedown', this.onDocClick);
    document.addEventListener('touchstart', this.onDocClick);
    document.addEventListener('keydown', this.onEscPress);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.onDocClick);
    document.removeEventListener('touchstart', this.onDocClick);
    document.removeEventListener('keydown', this.onEscPress);
  };

  onDocClick = event => {
    // eslint-disable-next-line react/prop-types
    if (
      testOptionsToggle.isOpen &&
      testOptionsToggle.parentRef &&
      !testOptionsToggle.parentRef.contains(event.target)
    ) {
      testOptionsToggle.onToggle && testOptionsToggle.onToggle(false, event);
      testOptionsToggle.focus();
    }
  };

  onEscPress = event => {
    const { parentRef } = testOptionsToggle;
    const keyCode = event.keyCode || event.which;
    if (
      testOptionsToggle.isOpen &&
      (keyCode === KEY_CODES.ESCAPE_KEY || event.key === 'Tab') &&
      parentRef &&
      parentRef.contains(event.target)
    ) {
      testOptionsToggle.onToggle && testOptionsToggle.onToggle(false, event);
      testOptionsToggle.focus();
    }
  };

  onKeyDown = event => {
    if (event.key === 'Tab' && !testOptionsToggle.isOpen) return;
    event.preventDefault();
    if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && testOptionsToggle.isOpen) {
      testOptionsToggle.onToggle(!testOptionsToggle.isOpen, event);
    } else if ((event.key === 'Enter' || event.key === ' ') && !testOptionsToggle.isOpen) {
      testOptionsToggle.onToggle(!testOptionsToggle.isOpen, event);
      testOptionsToggle.onEnter();
    }
  };

  render() {
    const {
      itemsTitle,
      optionsToggle,
      firstIndex,
      lastIndex,
      itemCount,
      widgetId,
      onToggle,
      isOpen,
      onEnter,
      parentRef,
      toggleTemplate: ToggleTemplate,
      ...props
    } = this.props;

    return (
      <div className={css(styles.optionsMenuToggle, getModifier(styles, 'plain'), getModifier(styles, 'text'))}>
        <span className={css(styles.optionsMenuToggleText)}>
          {typeof ToggleTemplate === 'string' ? (
            fillTemplate(ToggleTemplate, { firstIndex, lastIndex, itemCount, itemsTitle })
          ) : (
            <ToggleTemplate
              firstIndex={firstIndex}
              lastIndex={lastIndex}
              itemCount={itemCount}
              itemsTitle={itemsTitle}
            />
          )}
        </span>
        <button
          className={css(styles.optionsMenuToggleButton)}
          id={`${widgetId}-toggle`}
          aria-haspopup="listbox"
          aria-labelledby={`${widgetId}-toggle ${widgetId}-label`}
          aria-label={optionsToggle}
          aria-expanded={isOpen}
          onClick={() => onToggle(!isOpen)}
          {...props}
          type="button"
        >
          <CaretDownIcon />
        </button>
      </div>
    );
  }
}

// testOptionsToggle.propTypes = propTypes;
// testOptionsToggle.defaultProps = defaultProps;

export default testOptionsToggle;
