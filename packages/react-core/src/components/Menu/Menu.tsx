import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';
import { SearchInput } from '../SearchInput';
import { Divider, SelectOptionObject } from '..';
import { MenuContext } from './MenuContext';

export type MenuSelectClickHandler = (
  e: React.FormEvent<HTMLInputElement>,
  itemId: number | string,
  groupId: number | string,
  to: string,
  isSelected: boolean
) => void;

export interface MenuProps
  extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref' | 'onSelect'>,
    OUIAProps {
  /** Anything that can be rendered inside of the Menu */
  children?: React.ReactNode;
  /** Additional classes added to the container */
  className?: string;
  /** Callback for updating when item selection changes */
  onSelect?: (event: React.MouseEvent, itemId: any) => void;
  /** Callback called when an MenuItems's favorite button is clicked */
  onFavorite?: (event: React.MouseEvent, itemId: any) => void;
  /** A callback for when the input value changes. */
  onSearchInputChange?: (
    event: React.FormEvent<HTMLInputElement> | React.SyntheticEvent<HTMLButtonElement>,
    value: string
  ) => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Indicates menu type */
  variant?: 'default' | 'flyout' | 'singleSelect' | 'multiSelect';
  /** Search input of menu */
  hasSearchInput?: React.ReactNode;
  /** Array of selected items for multi select variants. */
  selections?: (string | SelectOptionObject)[];
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

export interface MenuState {
  typeaheadInputValue: string | null;
  ouiaStateId: string;
}

class MenuBase extends React.Component<MenuProps, MenuState> {
  static defaultProps: MenuProps = {
    selections: [],
    ouiaSafe: true
  };

  state: MenuState = {
    ouiaStateId: getDefaultOUIAId(Menu.displayName, this.props.variant),
    typeaheadInputValue: ''
  };

  render() {
    const {
      'aria-label': ariaLabel,
      children,
      className,
      onSelect,
      onFavorite,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onSearchInputChange,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ouiaId,
      ouiaSafe,
      variant,
      hasSearchInput,
      // selections,
      innerRef,
      ...props
    } = this.props;

    return (
      <MenuContext.Provider value={{ onSelect, onFavorite }}>
        <div
          className={css(styles.menu, variant === 'flyout' && styles.modifiers.flyout, className)}
          aria-label={ariaLabel || variant === 'flyout' ? 'Local' : 'Global'}
          ref={innerRef}
          {...getOUIAProps(Menu.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
          {...props}
        >
          {hasSearchInput && (
            <React.Fragment>
              <div className="pf-c-menu__search">
                <SearchInput
                  value={this.state.typeaheadInputValue}
                  onChange={(value, event) => {
                    this.setState({ typeaheadInputValue: value });
                    this.props.onSearchInputChange(event, value);
                  }}
                  onClear={event => {
                    this.setState({ typeaheadInputValue: '' });
                    this.props.onSearchInputChange(event, '');
                  }}
                />
              </div>
              <Divider />
            </React.Fragment>
          )}
          <div className={css(styles.menuContent)}>{children}</div>
        </div>
      </MenuContext.Provider>
    );
  }
}

export const Menu = React.forwardRef((props: MenuProps, ref: React.Ref<HTMLDivElement>) => (
  <MenuBase {...props} innerRef={ref} />
));
Menu.displayName = 'Menu';
