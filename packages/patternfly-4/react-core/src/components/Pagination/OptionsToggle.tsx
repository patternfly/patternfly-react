import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css, getModifier } from '@patternfly/react-styles';

import { fillTemplate } from '../../helpers';
import { ToggleTemplateProps } from './ToggleTemplate';
import { DropdownToggle } from '../Dropdown';

export interface OptionsToggleProps extends React.HTMLProps<HTMLDivElement> {
  /** The type or title of the items being paginated */
  itemsTitle?: string,
  /** The text to be displayed on the Options Toggle */
  optionsToggle?: string,
  /** The first index of the items being paginated */
  firstIndex?: number,
  /** The last index of the items being paginated */
  lastIndex?: number,
  /** The total number of items being paginated */
  itemCount?: number,
  /** Id added to the title of the Pagination Options Menu */
  widgetId?: string,
  /** showToggle */
  showToggle?: boolean,
  /** Event function that fires when user clicks the Options Menu toggle */
  onToggle?: (isOpen: boolean) => void,
  /** Flag indicating if the Options Menu dropdown is open or not */
  isOpen?: boolean,
  /** */
  parentRef?: HTMLElement;
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle props. */
  toggleTemplate?: ((props: ToggleTemplateProps) => React.ReactElement) | string;
}

export const OptionsToggle: React.FunctionComponent<OptionsToggleProps> = ({
  itemsTitle = 'items',
  optionsToggle = 'Select',
  firstIndex = 0,
  lastIndex = 0,
  itemCount = 0,
  widgetId = '',
  showToggle = true,
  onToggle = (_isOpen: boolean) => undefined as any,
  isOpen = false,
  parentRef = null,
  toggleTemplate: ToggleTemplate = '',
}:OptionsToggleProps ) => {
  return (
    <div className={css(styles.optionsMenuToggle, getModifier(styles, 'plain'), getModifier(styles, 'text'))} >
      {showToggle && (
        <DropdownToggle
          aria-label={optionsToggle}
          onToggle={onToggle}
          isDisabled={itemCount <= 0}
          isOpen={isOpen}
          id={`${widgetId}-toggle`}
          className={styles.optionsMenuToggleButton}
          parentRef={parentRef}
        >
          <span className={css(styles.optionsMenuToggleText)}>
            {typeof ToggleTemplate === 'string' ? (
              fillTemplate(ToggleTemplate, { firstIndex, lastIndex, itemCount, itemsTitle })
            ) : (
              <ToggleTemplate firstIndex={firstIndex} lastIndex={lastIndex} itemCount={itemCount} itemsTitle={itemsTitle}/>
            )}
          </span>
        </DropdownToggle>
      )}
    </div>);
};
