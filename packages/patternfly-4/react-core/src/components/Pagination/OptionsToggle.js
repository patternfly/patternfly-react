import React from 'react';
import PropTypes from 'prop-types';
import { CaretDownIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly/components/OptionsMenu/options-menu.css';
import { css, getModifier } from '@patternfly/react-styles';
import { fillTemplate } from '../../helpers';

const OptionsToggle = ({
  itemsTitle,
  optionsToggle,
  firstIndex,
  lastIndex,
  itemCount,
  widgetId,
  onToggle,
  isOpen,
  toggleTemplate: ToggleTemplate,
}) => (
  <div className={css(styles.optionsMenuToggle, getModifier(styles, 'plain'), getModifier(styles, 'text'))}>
    <span className={css(styles.optionsMenuToggleText)}>
      {
          typeof ToggleTemplate === 'string' ? 
            fillTemplate(ToggleTemplate, { firstIndex, lastIndex, itemCount, itemsTitle }) :
            <ToggleTemplate firstIndex={firstIndex} lastIndex={lastIndex} itemCount={itemCount} itemsTitle={itemsTitle} />
      }
    </span>
    <button
      className={css(styles.optionsMenuToggleButton)} id={`${widgetId}-toggle`}
      aria-haspopup="listbox"
      aria-labelledby={`${widgetId}-toggle ${widgetId}-label`}
      aria-label={optionsToggle}
      aria-expanded={isOpen}
      onClick={() => onToggle(!isOpen)}
      type="button"
    >
      <CaretDownIcon />
    </button>
  </div >
);

OptionsToggle.propTypes = {
  itemsTitle: PropTypes.string,
  firstIndex: PropTypes.number,
  lastIndex: PropTypes.number,
  itemCount: PropTypes.number,
  widgetId: PropTypes.string,
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

OptionsToggle.defaultProps = {
  itemsTitle: 'items',
  optionsToggle: 'Select',
  firstIndex: 0,
  lastIndex: 0,
  itemCount: 0,
  onToggle: () => undefined,
  isOpen: false
}

export default OptionsToggle;
