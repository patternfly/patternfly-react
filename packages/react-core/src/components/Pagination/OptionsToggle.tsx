import * as React from 'react';
import { fillTemplate } from '../../helpers';
import { PaginationToggleTemplateProps } from './ToggleTemplate';
import { MenuToggle } from '../MenuToggle';

export interface OptionsToggleProps extends React.HTMLProps<HTMLDivElement> {
  /** The first index of the items being paginated. */
  firstIndex?: number;
  /** Flag indicating if the options menu is disabled. */
  isDisabled?: boolean;
  /** Flag indicating if the options menu dropdown is open or not. */
  isExpanded?: boolean;
  /** The total number of items being paginated. */
  itemCount?: number;
  /** The title of the pagination options menu. */
  itemsPerPageTitle?: string;
  /** The type or title of the items being paginated. */
  itemsTitle?: string;
  /** The last index of the items being paginated. */
  lastIndex?: number;
  /** Label for the English word "of". */
  ofWord?: string;
  /** Event function that fires when user clicks the options menu toggle. */
  onToggle?: () => void;
  /** Accessible name for the options toggle. */
  optionsToggleAriaLabel?: string;
  /** Flag for indicating whether the toggle should be shown. */
  showToggle?: boolean;
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex,
   * itemCount, and/or itemsTitle props. */
  toggleTemplate?: ((props: PaginationToggleTemplateProps) => React.ReactElement) | string;
  /** Id added to the title of the pagination options menu. */
  widgetId?: string;
}

export const OptionsToggle: React.FunctionComponent<OptionsToggleProps> = ({
  itemsTitle = 'items',
  optionsToggleAriaLabel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  itemsPerPageTitle = 'Items per page',
  ofWord = 'of',
  firstIndex = 0,
  lastIndex = 0,
  itemCount,
  widgetId = '',
  showToggle = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onToggle = () => undefined as any,
  isExpanded = false,
  isDisabled = false,
  toggleTemplate: ToggleTemplate
}: OptionsToggleProps) => (
  <React.Fragment>
    {showToggle && (
      <MenuToggle
        onClick={onToggle}
        aria-label={optionsToggleAriaLabel}
        isDisabled={isDisabled || (itemCount && itemCount <= 0)}
        isExpanded={isExpanded}
        {...(widgetId && { id: `${widgetId}-toggle` })}
        variant="plainText"
        aria-haspopup="listbox"
      >
        {typeof ToggleTemplate === 'string' ? (
          fillTemplate(ToggleTemplate, { firstIndex, lastIndex, ofWord, itemCount, itemsTitle })
        ) : (
          <ToggleTemplate
            firstIndex={firstIndex}
            lastIndex={lastIndex}
            ofWord={ofWord}
            itemCount={itemCount}
            itemsTitle={itemsTitle}
          />
        )}
      </MenuToggle>
    )}
  </React.Fragment>
);
OptionsToggle.displayName = 'OptionsToggle';
