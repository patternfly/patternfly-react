import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css, getModifier } from '@patternfly/react-styles';

import { fillTemplate } from '../../helpers';
import { DropdownToggle } from '../Dropdown';

class OptionsToggle extends Component {
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
      showToggle,
      toggleTemplate: ToggleTemplate
    } = this.props;

    return (
      <div
        className={css(styles.optionsMenuToggle, getModifier(styles, 'plain'), getModifier(styles, 'text'))}
        ref={ref => {
          this.parentRef = ref;
        }}
      >
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

        {showToggle && (
          <DropdownToggle
            aria-label={optionsToggle}
            onClick={() => onToggle(!isOpen)}
            onToggle={onToggle}
            isOpen={isOpen}
            id={`${widgetId}-toggle`}
            isSplitButton
            className={styles.optionsMenuToggleButton}
            parentRef={this.parentRef}
          />
        )}
      </div>
    );
  }
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
  showToggle: true,
  toggleTemplate: ''
};
export default OptionsToggle;
