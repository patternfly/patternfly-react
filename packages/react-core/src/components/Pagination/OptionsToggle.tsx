import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css } from '@patternfly/react-styles';

import { fillTemplate } from '../../helpers';
import { ToggleTemplateProps } from './ToggleTemplate';
import { DropdownToggle } from '../Dropdown';

export interface OptionsToggleProps extends React.HTMLProps<HTMLDivElement> {
  /** The type or title of the items being paginated */
  itemsTitle?: string;
  /** Accessible label for the Options Toggle */
  optionsToggle?: string;
  /** The Title of the Pagination Options Menu */
  itemsPerPageTitle?: string;
  /** The first index of the items being paginated */
  firstIndex?: number;
  /** The last index of the items being paginated */
  lastIndex?: number;
  /** The total number of items being paginated */
  itemCount?: number;
  /** Id added to the title of the Pagination Options Menu */
  widgetId?: string;
  /** showToggle */
  showToggle?: boolean;
  /** Event function that fires when user clicks the Options Menu toggle */
  onToggle?: (isOpen: boolean) => void;
  /** Flag indicating if the Options Menu dropdown is open or not */
  isOpen?: boolean;
  /** Flag indicating if the Options Menu is disabled */
  isDisabled?: boolean;
  /** */
  parentRef?: HTMLElement;
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle props. */
  toggleTemplate?: ((props: ToggleTemplateProps) => React.ReactElement) | string;
  /** Callback for toggle open on keyboard entry */
  onEnter?: () => void;
  /** Label for the English word "of" */
  ofWord?: string;
  /** Component to be used for wrapping the toggle contents. */
  component?: 'div' | 'button';
}

let toggleId = 0;
export const OptionsToggle: React.FunctionComponent<OptionsToggleProps> = ({
  itemsTitle = 'items',
  optionsToggle,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  itemsPerPageTitle = 'Items per page',
  ofWord = 'of',
  firstIndex = 0,
  lastIndex = 0,
  itemCount,
  widgetId = '',
  showToggle = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onToggle = (_isOpen: boolean) => undefined as any,
  isOpen = false,
  isDisabled = false,
  parentRef = null,
  toggleTemplate: ToggleTemplate,
  onEnter = null,
  component = 'div'
}: OptionsToggleProps) => {
  const isDiv = component === 'div';
  const toggleClasses = css(
    styles.optionsMenuToggle,
    isDisabled && styles.modifiers.disabled,
    styles.modifiers.plain,
    styles.modifiers.text
  );

  const template =
    typeof ToggleTemplate === 'string' ? (
      fillTemplate(ToggleTemplate, { firstIndex, lastIndex, ofWord, itemCount, itemsTitle })
    ) : (
      <ToggleTemplate
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        ofWord={ofWord}
        itemCount={itemCount}
        itemsTitle={itemsTitle}
      />
    );

  const dropdown = showToggle && (
    <React.Fragment>
      {isDiv && <span className={css(styles.optionsMenuToggleText)}>{template}</span>}
      <DropdownToggle
        onEnter={onEnter}
        aria-label={isDiv ? optionsToggle || 'Items per page' : optionsToggle}
        onToggle={onToggle}
        isDisabled={isDisabled || (itemCount && itemCount <= 0)}
        isOpen={isOpen}
        id={`${widgetId}-toggle-${toggleId++}`}
        className={isDiv ? styles.optionsMenuToggleButton : toggleClasses}
        parentRef={parentRef}
        aria-haspopup="listbox"
      >
        {!isDiv && template}
      </DropdownToggle>
    </React.Fragment>
  );

  return isDiv ? <div className={toggleClasses}>{dropdown}</div> : dropdown;
};
OptionsToggle.displayName = 'OptionsToggle';
