import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { DualListSelectorListItem } from './DualListSelectorListItem';
import { PickOptional } from '../../helpers';

export interface DualListSelectorPaneProps {
  /** Additional classes applied to the dual list selector. */
  className?: string;
  /** Flag indicating if this pane is the chosen pane. */
  isChosen?: boolean;
  /** Status to display above the pane. */
  status?: string;
  /** Title of the pane. */
  title?: React.ReactNode;
  /** Options to list in the pane. */
  options?: React.ReactNode[];
  /** Options currently selected in the pane. */
  selectedOptions?: number[];
  /** Callback for search input. */
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback for when an option is selected. */
  onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent, index: number, isChosen: boolean) => void;
  /** Actions to place above the pane. */
  actions?: React.ReactNode[];
  /** Filter function for custom filtering based on search string. */
  filterOption?: (option: React.ReactNode, input: string) => boolean;
  /** Flag indicating a search bar should be included above the pane. */
  isSearchable?: boolean;
}

interface DualListSelectorPaneState {
  input: string;
}

export class DualListSelectorPane extends React.Component<DualListSelectorPaneProps, DualListSelectorPaneState> {
  static displayName = 'DualListSelectorPane';
  static defaultProps: PickOptional<DualListSelectorPaneProps> = {
    isChosen: false,
    status: '',
    title: '',
    options: [] as React.ReactNode[],
    selectedOptions: [],
    isSearchable: false
  };
  private menuEl = React.createRef<HTMLDivElement>();
  private optionsRefs = [] as HTMLElement[];

  constructor(props: DualListSelectorPaneProps) {
    super(props);
    this.state = {
      input: ''
    };
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  sendRef = (optionRef: React.ReactNode, index: number) => {
    this.optionsRefs[index] = optionRef as HTMLElement;
  };

  handleKeys = (event: KeyboardEvent) => {
    const key = event.key;
    let moveFocus = false;
    let currentIndex = -1;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      if (document.activeElement === this.menuEl.current) {
        currentIndex = 0;
        moveFocus = true;
      } else {
        this.optionsRefs.forEach((option, index) => {
          if (document.activeElement === option) {
            currentIndex = key === 'ArrowUp' || key === 'ArrowLeft' ? index - 1 : index + 1;
            moveFocus = true;
          }
        });
      }
      event.preventDefault();
    }
    if (moveFocus && this.optionsRefs[currentIndex]) {
      this.optionsRefs[currentIndex].focus();
    }
  };

  displayOption = (option: React.ReactNode, input: string) => {
    if (this.props.filterOption) {
      return this.props.filterOption(option, input);
    } else {
      return option
        .toString()
        .toLowerCase()
        .includes(input.toLowerCase());
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeys);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeys);
  }

  render() {
    const {
      isChosen,
      title,
      actions,
      isSearchable,
      className,
      status,
      selectedOptions,
      onOptionSelect,
      options,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      filterOption,
      ...props
    } = this.props;
    const { input } = this.state;

    return (
      <div
        className={css(styles.dualListSelectorPane, isChosen ? styles.modifiers.chosen : 'pf-m-available', className)}
        {...props}
      >
        {title && (
          <div className={css(styles.dualListSelectorHeader)}>
            <div className="pf-c-dual-list-selector__title">
              <div className={css(styles.dualListSelectorTitleText)}>{title}</div>
            </div>
          </div>
        )}
        {(actions || isSearchable) && (
          <div className={css(styles.dualListSelectorTools)}>
            {isSearchable && (
              <div className={css(styles.dualListSelectorToolsFilter)}>
                <input
                  className={css(formStyles.formControl, formStyles.modifiers.search)}
                  type="search"
                  onChange={this.onChange}
                />
              </div>
            )}
            {actions && <div className={css(styles.dualListSelectorToolsActions)}>{actions}</div>}
          </div>
        )}
        {status && (
          <div className={css(styles.dualListSelectorStatus)}>
            <div className={css(styles.dualListSelectorStatusText)}>{status}</div>
          </div>
        )}
        {options && (
          <div
            className={css(styles.dualListSelectorMenu)}
            ref={this.menuEl}
            tabIndex={0}
            role="listbox"
            aria-multiselectable="true"
            aria-label={`List of ${isChosen ? 'chosen' : 'available'} options`}
          >
            <ul className={css(styles.dualListSelectorList)}>
              {options.map((option, index) => {
                if (this.displayOption(option, input)) {
                  return (
                    <DualListSelectorListItem
                      key={index}
                      isSelected={selectedOptions.indexOf(index) !== -1}
                      onOptionSelect={onOptionSelect}
                      isChosen={isChosen}
                      index={index}
                      sendRef={this.sendRef}
                      role="option"
                    >
                      {option}
                    </DualListSelectorListItem>
                  );
                }
                return;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
