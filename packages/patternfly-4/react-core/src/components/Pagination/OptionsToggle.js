import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css, getModifier } from '@patternfly/react-styles';

import { fillTemplate } from '../../helpers';
import { DropdownToggle } from '../Dropdown';

function OptionsToggle(props) {
  const {
    itemsTitle,
    optionsToggle,
    firstIndex,
    lastIndex,
    itemCount,
    widgetId,
    onToggle,
    isOpen,
    showToggle,
    parentRef,
    toggleTemplate: ToggleTemplate
  } = props;

  return (
    <div className={css(styles.optionsMenuToggle, getModifier(styles, 'plain'), getModifier(styles, 'text'))}>
      <span className={css(styles.optionsMenuToggleText)}>
        {typeof ToggleTemplate === 'string' ? (
          fillTemplate(ToggleTemplate, { firstIndex, lastIndex, itemCount, itemsTitle })
        ) : (
          <ToggleTemplate firstIndex={firstIndex} lastIndex={lastIndex} itemCount={itemCount} itemsTitle={itemsTitle} />
        )}
      </span>
      {showToggle && (
        <DropdownToggle
          aria-label={optionsToggle}
          onToggle={onToggle}
          isOpen={isOpen}
          id={`${widgetId}-toggle`}
          isSplitButton
          className={styles.optionsMenuToggleButton}
          parentRef={parentRef}
        />
      )}
    </div>
  );
}

OptionsToggle.propTypes = {
  itemsTitle: PropTypes.string,
  optionsToggle: PropTypes.string,
  firstIndex: PropTypes.number,
  lastIndex: PropTypes.number,
  itemCount: PropTypes.number,
  widgetId: PropTypes.string,
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool,
  parentRef: PropTypes.any,
  showToggle: PropTypes.bool,
  toggleTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

OptionsToggle.defaultProps = {
  itemsTitle: 'items',
  optionsToggle: 'Select',
  firstIndex: 0,
  lastIndex: 0,
  itemCount: 0,
  widgetId: '',
  onToggle: () => undefined,
  isOpen: false,
  parentRef: null,
  showToggle: true,
  toggleTemplate: ''
};
export default OptionsToggle;
