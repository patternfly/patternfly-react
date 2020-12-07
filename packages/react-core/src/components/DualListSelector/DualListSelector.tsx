import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/js/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/js/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { DualListSelectorPane } from './DualListSelectorPane';
import { getUniqueId, PickOptional } from '../../helpers';

export interface DualListSelectorProps {
  /** Additional classes applied to the dual list selector. */
  className?: string;
  /** Title applied to the available options pane. */
  availableOptionsTitle?: string;
  /** Options to display in the available options pane. */
  availableOptions?: React.ReactNode[];
  /** Status message to display above the available options pane. */
  availableOptionsStatus?: string;
  /** Actions to be displayed above the available options pane. */
  availableOptionsActions?: React.ReactNode[];
  /** Title applied to the chosen options pane. */
  chosenOptionsTitle?: string;
  /** Options to display in the chosen options pane. */
  chosenOptions?: React.ReactNode[];
  /** Status message to display above the chosen options pane.*/
  chosenOptionsStatus?: string;
  /** Actions to be displayed above the chosen options pane. */
  chosenOptionsActions?: React.ReactNode[];
  /** Accessible label for the controls between the two panes. */
  controlsAriaLabel?: string;
  /** Optional callback for the add selected button */
  addSelected?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  /** Accessible label for the add selected button */
  addSelectedAriaLabel?: string;
  /** Callback fired every time options are chosen or removed */
  onListChange?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  /** Optional callback for the add all button */
  addAll?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  /** Accessible label for the add all button */
  addAllAriaLabel?: string;
  /** Optional callback for the remove selected button */
  removeSelected?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  /** Accessible label for the remove selected button */
  removeSelectedAriaLabel?: string;
  /** Optional callback for the remove all button */
  removeAll?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  /** Accessible label for the remove all button */
  removeAllAriaLabel?: string;
  /** Optional callback fired when an option is selected */
  onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent) => void;
  /** Flag indicating a search bar should be included above both the available and chosen panes. */
  isSearchable?: boolean;
  /** Accessible label for the search input on the available options pane. */
  availableOptionsSearchAriaLabel?: string;
  /** Accessible label for the search input on the chosen options pane. */
  chosenOptionsSearchAriaLabel?: string;
  /** Optional filter function for custom filtering based on search string. */
  filterOption?: (option: React.ReactNode, input: string) => boolean;
  /** Id of the dual list selector. */
  id?: string;
}

interface DualListSelectorState {
  availableOptions: React.ReactNode[];
  availableOptionsSelected: number[];
  chosenOptions: React.ReactNode[];
  chosenOptionsSelected: number[];
}

export class DualListSelector extends React.Component<DualListSelectorProps, DualListSelectorState> {
  static displayName = 'DualListSelector';
  private controlsEl = React.createRef<HTMLDivElement>();
  static defaultProps: PickOptional<DualListSelectorProps> = {
    availableOptions: [] as React.ReactNode[],
    availableOptionsTitle: 'Available options',
    availableOptionsSearchAriaLabel: 'Available search input',
    chosenOptions: [] as React.ReactNode[],
    chosenOptionsTitle: 'Chosen options',
    chosenOptionsSearchAriaLabel: 'Chosen search input',
    id: getUniqueId('dual-list-selector'),
    controlsAriaLabel: 'Selector controls',
    addAllAriaLabel: 'Add all',
    addSelectedAriaLabel: 'Add selected',
    removeSelectedAriaLabel: 'Remove selected',
    removeAllAriaLabel: 'Remove all'
  };

  constructor(props: DualListSelectorProps) {
    super(props);
    this.state = {
      availableOptions: [...this.props.availableOptions],
      availableOptionsSelected: [],
      chosenOptions: [...this.props.chosenOptions],
      chosenOptionsSelected: []
    };
  }

  componentDidUpdate() {
    if (
      JSON.stringify(this.props.availableOptions) !== JSON.stringify(this.state.availableOptions) ||
      JSON.stringify(this.props.chosenOptions) !== JSON.stringify(this.state.chosenOptions)
    ) {
      this.setState({
        availableOptions: [...this.props.availableOptions],
        chosenOptions: [...this.props.chosenOptions]
      });
    }
  }

  addAll = () => {
    this.setState(prevState => {
      const newChosen = [...prevState.chosenOptions, ...prevState.availableOptions];
      if (this.props.addAll) {
        this.props.addAll([], newChosen);
      }
      if (this.props.onListChange) {
        this.props.onListChange([], newChosen);
      }
      return {
        availableOptions: [],
        availableOptionsSelected: [],
        chosenOptions: newChosen,
        chosenOptionsSelected: []
      };
    });
  };

  removeAll = () => {
    this.setState(prevState => {
      const newAvailable = [...prevState.chosenOptions, ...prevState.availableOptions];
      if (this.props.removeAll) {
        this.props.removeAll(newAvailable, []);
      }
      if (this.props.onListChange) {
        this.props.onListChange(newAvailable, []);
      }
      return {
        availableOptions: newAvailable,
        availableOptionsSelected: [],
        chosenOptions: [],
        chosenOptionsSelected: []
      };
    });
  };

  addSelected = () => {
    this.setState(prevState => {
      const itemsToRemove = [] as React.ReactNode[];
      const newAvailable = [] as React.ReactNode[];
      prevState.availableOptions.forEach((value, index) => {
        if (prevState.availableOptionsSelected.indexOf(index) !== -1) {
          itemsToRemove.push(value);
        } else {
          newAvailable.push(value);
        }
      });

      const newChosen = [...prevState.chosenOptions, ...itemsToRemove];
      if (this.props.addSelected) {
        this.props.addSelected(newAvailable, newChosen);
      }
      if (this.props.onListChange) {
        this.props.onListChange(newAvailable, newChosen);
      }
      return {
        chosenOptionsSelected: [],
        availableOptionsSelected: [],
        chosenOptions: newChosen,
        availableOptions: newAvailable
      };
    });
  };

  removeSelected = () => {
    this.setState(prevState => {
      const itemsToRemove = [] as React.ReactNode[];
      const newChosen = [] as React.ReactNode[];
      prevState.chosenOptions.forEach((value, index) => {
        if (prevState.chosenOptionsSelected.indexOf(index) !== -1) {
          itemsToRemove.push(value);
        } else {
          newChosen.push(value);
        }
      });

      const newAvailable = [...prevState.availableOptions, ...itemsToRemove];
      if (this.props.removeSelected) {
        this.props.removeSelected(newAvailable, newChosen);
      }
      if (this.props.onListChange) {
        this.props.onListChange(newAvailable, newChosen);
      }
      return {
        chosenOptionsSelected: [],
        availableOptionsSelected: [],
        chosenOptions: newChosen,
        availableOptions: newAvailable
      };
    });
  };

  onOptionSelect = (e: React.MouseEvent | React.ChangeEvent, index: number, isChosen: boolean) => {
    this.setState(prevState => {
      const originalArray = isChosen ? prevState.chosenOptionsSelected : prevState.availableOptionsSelected;

      let updatedArray = null;
      if (originalArray.indexOf(index) !== -1) {
        updatedArray = originalArray.filter(value => value !== index);
      } else {
        updatedArray = [...originalArray, index];
      }

      return {
        chosenOptionsSelected: isChosen ? updatedArray : prevState.chosenOptionsSelected,
        availableOptionsSelected: isChosen ? prevState.availableOptionsSelected : updatedArray
      };
    });

    const onOptionSelect = this.props.onOptionSelect;
    if (onOptionSelect) {
      onOptionSelect(e);
    }
  };

  handleKeys = (event: KeyboardEvent) => {
    const key = event.key;
    let moveFocus = false;
    let currentIndex = -1;
    const controls = Array.from(this.controlsEl.current.getElementsByClassName('pf-c-button'));
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      if (document.activeElement === this.controlsEl.current) {
        currentIndex = 0;
        while (
          currentIndex < controls.length &&
          currentIndex >= 0 &&
          controls[currentIndex].classList.contains('pf-m-disabled')
        ) {
          currentIndex = currentIndex + 1;
        }
        moveFocus = true;
        event.preventDefault();
      } else {
        controls.forEach((control, index) => {
          if (document.activeElement === control) {
            const increment = key === 'ArrowUp' || key === 'ArrowLeft' ? -1 : 1;
            currentIndex = index + increment;
            while (
              currentIndex < controls.length &&
              currentIndex >= 0 &&
              controls[currentIndex].classList.contains('pf-m-disabled')
            ) {
              currentIndex = currentIndex + increment;
            }
            moveFocus = true;
            event.preventDefault();
          }
        });
      }
    }
    if (moveFocus && controls[currentIndex]) {
      (controls[currentIndex] as HTMLElement).focus();
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
      availableOptionsTitle,
      availableOptionsActions,
      availableOptionsSearchAriaLabel,
      className,
      chosenOptionsTitle,
      chosenOptionsActions,
      chosenOptionsSearchAriaLabel,
      filterOption,
      isSearchable,
      chosenOptionsStatus,
      availableOptionsStatus,
      controlsAriaLabel,
      addAllAriaLabel,
      addSelectedAriaLabel,
      removeSelectedAriaLabel,
      removeAllAriaLabel,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      availableOptions: consumerPassedAvailableOptions,
      chosenOptions: consumerPassedChosenOptions,
      removeSelected,
      addAll,
      removeAll,
      addSelected,
      onListChange,
      id,
      ...props
    } = this.props;
    const { availableOptions, chosenOptions, chosenOptionsSelected, availableOptionsSelected } = this.state;
    const availableOptionsStatusToDisplay =
      availableOptionsStatus || `${availableOptionsSelected.length} of ${availableOptions.length} items selected`;
    const chosenOptionsStatusToDisplay =
      chosenOptionsStatus || `${chosenOptionsSelected.length} of ${chosenOptions.length} items selected`;

    return (
      <div className={css(styles.dualListSelector, className)} id={id} {...props}>
        <DualListSelectorPane
          isSearchable={isSearchable}
          searchInputAriaLabel={availableOptionsSearchAriaLabel}
          filterOption={filterOption}
          status={availableOptionsStatusToDisplay}
          title={availableOptionsTitle}
          options={availableOptions}
          selectedOptions={availableOptionsSelected}
          onOptionSelect={this.onOptionSelect}
          actions={availableOptionsActions}
          id={`${id}-available-pane`}
        />
        <div
          className={css(styles.dualListSelectorControls)}
          tabIndex={0}
          ref={this.controlsEl}
          aria-label={controlsAriaLabel}
        >
          <div className={css('pf-c-dual-list-selector__controls-item')}>
            <Button
              isDisabled={availableOptions.length === 0}
              aria-disabled={availableOptions.length === 0}
              variant={ButtonVariant.plain}
              onClick={this.addAll}
              aria-label={addAllAriaLabel}
              tabIndex={-1}
            >
              <AngleDoubleRightIcon />
            </Button>
          </div>
          <div className={css('pf-c-dual-list-selector__controls-item')}>
            <Button
              isDisabled={availableOptionsSelected.length === 0}
              aria-disabled={availableOptionsSelected.length === 0}
              variant={ButtonVariant.plain}
              onClick={this.addSelected}
              aria-label={addSelectedAriaLabel}
              tabIndex={-1}
            >
              <AngleRightIcon />
            </Button>
          </div>
          <div className={css('pf-c-dual-list-selector__controls-item')}>
            <Button
              variant={ButtonVariant.plain}
              onClick={this.removeSelected}
              aria-label={removeSelectedAriaLabel}
              tabIndex={-1}
              isDisabled={chosenOptionsSelected.length === 0}
              aria-disabled={chosenOptionsSelected.length === 0}
            >
              <AngleLeftIcon />
            </Button>
          </div>
          <div className={css('pf-c-dual-list-selector__controls-item')}>
            <Button
              isDisabled={chosenOptions.length === 0}
              aria-disabled={chosenOptions.length === 0}
              variant={ButtonVariant.plain}
              onClick={this.removeAll}
              aria-label={removeAllAriaLabel}
              tabIndex={-1}
            >
              <AngleDoubleLeftIcon />
            </Button>
          </div>
        </div>
        <DualListSelectorPane
          isChosen
          isSearchable={isSearchable}
          searchInputAriaLabel={chosenOptionsSearchAriaLabel}
          filterOption={filterOption}
          title={chosenOptionsTitle}
          status={chosenOptionsStatusToDisplay}
          options={chosenOptions}
          selectedOptions={chosenOptionsSelected}
          onOptionSelect={this.onOptionSelect}
          actions={chosenOptionsActions}
          id={`${id}-chosen-pane`}
        />
      </div>
    );
  }
}
