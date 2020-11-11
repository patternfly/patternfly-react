import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/js/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/js/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { DualListSelectorPane } from './DualListSelectorPane';
import { PickOptional } from '../../helpers';

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
  /** Actions to be displayed above the available options pane. */
  chosenOptionsActions?: React.ReactNode[];
  /** Optional callback for the add selected button */
  addSelected?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  /** Optional callback for the add all button */
  addAll?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  /** Optional callback for the remove selected button */
  removeSelected?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  /** Optional callback for the remove all button */
  removeAll?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  /** Optional callback fired when an option is selected */
  onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent) => void;
  /** Flag indicating a search bar should be included above both the available and chosen panes. */
  isSearchable?: boolean;
  /** Optional filter function for custom filtering based on search string. */
  filterOption?: (option: React.ReactNode, input: string) => boolean;
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
    chosenOptions: [] as React.ReactNode[],
    chosenOptionsTitle: 'Chosen Options'
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

  addAll = () => {
    this.setState(prevState => {
      const newChosen = [...prevState.chosenOptions, ...prevState.availableOptions];
      if (this.props.addAll) {
        this.props.addAll([], newChosen);
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
        moveFocus = true;
      } else {
        controls.forEach((control, index) => {
          if (document.activeElement === control) {
            currentIndex = key === 'ArrowUp' || key === 'ArrowLeft' ? index - 1 : index + 1;
            moveFocus = true;
          }
        });
      }
      event.preventDefault();
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
      className,
      chosenOptionsTitle,
      chosenOptionsActions,
      filterOption,
      isSearchable,
      chosenOptionsStatus,
      availableOptionsStatus,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      availableOptions: consumerPassedAvailableOptions,
      chosenOptions: consumerPassedChosenOptions,
      removeSelected,
      addAll,
      removeAll,
      addSelected,
      ...props
    } = this.props;
    const { availableOptions, chosenOptions, chosenOptionsSelected, availableOptionsSelected } = this.state;
    const availableOptionsStatusToDisplay =
      availableOptionsStatus || `${availableOptionsSelected.length} of ${availableOptions.length} items selected`;
    const chosenOptionsStatusToDisplay =
      chosenOptionsStatus || `${chosenOptionsSelected.length} of ${chosenOptions.length} items selected`;

    return (
      <div className={css(styles.dualListSelector, className)} {...props}>
        <DualListSelectorPane
          isSearchable={isSearchable}
          filterOption={filterOption}
          status={availableOptionsStatusToDisplay}
          title={availableOptionsTitle}
          options={availableOptions}
          selectedOptions={availableOptionsSelected}
          onOptionSelect={this.onOptionSelect}
          actions={availableOptionsActions}
        />
        <div
          className={css(styles.dualListSelectorControls)}
          tabIndex={0}
          ref={this.controlsEl}
          role="listbox"
          aria-label="Selector controls"
        >
          <div className={css('pf-c-dual-list-selector__controls-item')} role="option">
            <Button
              isDisabled={availableOptions.length === 0}
              variant={ButtonVariant.plain}
              onClick={this.addAll}
              aria-label="Add all"
              tabIndex={-1}
            >
              <AngleDoubleRightIcon />
            </Button>
          </div>
          <div className={css('pf-c-dual-list-selector__controls-item')} role="option">
            <Button
              isDisabled={availableOptionsSelected.length === 0}
              variant={ButtonVariant.plain}
              onClick={this.addSelected}
              aria-label="Add selected"
              tabIndex={-1}
            >
              <AngleRightIcon />
            </Button>
          </div>
          <div className={css('pf-c-dual-list-selector__controls-item')} role="option">
            <Button
              variant={ButtonVariant.plain}
              onClick={this.removeSelected}
              aria-label="remove selected"
              tabIndex={-1}
              isDisabled={chosenOptionsSelected.length === 0}
            >
              <AngleLeftIcon />
            </Button>
          </div>
          <div className={css('pf-c-dual-list-selector__controls-item')} role="option">
            <Button
              isDisabled={chosenOptions.length === 0}
              variant={ButtonVariant.plain}
              onClick={this.removeAll}
              aria-label="Remove all"
              tabIndex={-1}
            >
              <AngleDoubleLeftIcon />
            </Button>
          </div>
        </div>
        <DualListSelectorPane
          isChosen
          isSearchable={isSearchable}
          filterOption={filterOption}
          title={chosenOptionsTitle}
          status={chosenOptionsStatusToDisplay}
          options={chosenOptions}
          selectedOptions={chosenOptionsSelected}
          onOptionSelect={this.onOptionSelect}
          actions={chosenOptionsActions}
        />
      </div>
    );
  }
}
