import React, { Component } from 'react';
import {
  Select,
  SelectOption,
  SelectVariant,
  SelectGroup,
  SelectOptionObject,
  StackItem,
  Title
} from '@patternfly/react-core';

/* eslint-disable no-console */
export interface SelectFavoritesDemoState {
  isOpen: boolean;
  isOpenGrouped: boolean;
  typeaheadisOpen: boolean;
  typeaheadMultiisOpen: boolean;
  selected: string[];
  selectedGrouped: string[];
  typeaheadSelected: string[];
  typeaheadMultiSelected: string[];
  favorites: string[];
  favoritesGrouped: string[];
  typeaheadFavorites: string[];
  typeaheadMultifavorites: string[];
}

export class SelectFavoritesDemo extends Component<SelectFavoritesDemoState> {
  state = {
    isOpen: false,
    isOpenGrouped: false,
    typeaheadisOpen: false,
    typeaheadMultiisOpen: false,
    selected: [] as string[],
    selectedGrouped: [] as string[],
    typeaheadSelected: [] as string[],
    typeaheadMultiSelected: [] as string[],
    favorites: [] as string[],
    favoritesGrouped: [] as string[],
    typeaheadfavorites: [] as string[],
    typeaheadMultifavorites: [] as string[]
  };

  options = [
    <SelectOption
      id={'option-1'}
      key={0}
      value="apples"
      ariaIsFavoriteLabel="custom starred"
      ariaIsNotFavoriteLabel="custom not starred"
    />,
    <SelectOption id={'option-2'} key={1} value="oranges" />,
    <SelectOption id={'option-3'} key={2} value="pears" />,
    <SelectOption id={'option-4'} key={3} value="grapes" />
  ];

  optionsGrouped = [
    <SelectGroup label="Status" key="group1">
      <SelectOption id={'option-grouped-1'} key={0} value="Running" />
      <SelectOption id={'option-grouped-2'} key={1} value="Stopped" />
      <SelectOption id={'option-grouped-3'} key={2} value="Down" />
      <SelectOption id={'option-grouped-4'} key={3} value="Degraded" />
      <SelectOption id={'option-grouped-5'} key={4} value="Needs Maintenance" />
    </SelectGroup>,
    <SelectGroup label="Vendor Names" key="group2">
      <SelectOption id={'option-grouped-6'} key={5} value="Dell" />
      <SelectOption id={'option-grouped-7'} key={6} value="Samsung" isDisabled />
      <SelectOption id={'option-grouped-8'} key={7} value="Hewlett-Packard" />
    </SelectGroup>
  ];

  typeaheadMultiOptions = [
    <SelectOption id={'apples-option'} key={0} value="apples" />,
    <SelectOption id={'oranges-option'} key={1} value="oranges" />,
    <SelectOption id={'pears-option'} key={2} value="pears" />,
    <SelectOption id={'peach-option'} key={3} value="peach" />,
    <SelectOption id={'grapes-option'} key={4} value="grapes" />
  ];

  typeaheadOptions = [
    <SelectOption id={'running-option'} key={0} value="Running" />,
    <SelectOption id={'stopped-option'} key={1} value="Stopped" />,
    <SelectOption id={'down-option'} key={2} value="Down" />,
    <SelectOption id={'degraded-option'} key={3} value="Degraded" />
  ];

  onToggle = (_event: any, isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onToggleGrouped = (_event: any, isOpenGrouped: boolean) => {
    this.setState({
      isOpenGrouped
    });
  };

  typeaheadOnToggle = (_event: any, typeaheadisOpen: boolean) => {
    this.setState({
      typeaheadisOpen
    });
  };

  typeaheadMultiOnToggle = (_event: any, typeaheadMultiisOpen: boolean) => {
    this.setState({
      typeaheadMultiisOpen
    });
  };

  onSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string) => {
    this.setState({
      selected: selection,
      isOpen: false
    });
  };

  onSelectGrouped = (event: React.MouseEvent | React.ChangeEvent, selection: string) => {
    this.setState({
      selectedGrouped: selection,
      isOpenGrouped: false
    });
  };

  typeaheadOnSelect = (
    _event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject | (string | SelectOptionObject)[],
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        typeaheadSelected: selection,
        typeaheadisOpen: false
      });
      console.log('selected:', selection.toString());
    }
  };
  typeaheadMultiOnSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { typeaheadMultiSelected } = this.state;
    if (typeaheadMultiSelected.includes(selection.toString())) {
      this.setState(
        (prevState: SelectFavoritesDemoState) => ({
          typeaheadMultiSelected: prevState.typeaheadMultiSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.typeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectFavoritesDemoState) => ({
          typeaheadMultiSelected: [...prevState.typeaheadMultiSelected, selection.toString()]
        }),
        () => console.log('selections: ', this.state.typeaheadMultiSelected)
      );
    }
  };

  onFavorite = (itemId: string, isFavorite: boolean) => {
    if (isFavorite) {
      this.setState({
        favorites: this.state.favorites.filter(id => id !== itemId)
      });
    } else {
      {
        this.setState({
          favorites: [...this.state.favorites, itemId]
        });
      }
    }
  };

  onFavoriteGrouped = (itemId: string, isFavorite: boolean) => {
    if (isFavorite) {
      this.setState({
        favoritesGrouped: this.state.favoritesGrouped.filter(id => id !== itemId)
      });
    } else {
      {
        this.setState({
          favoritesGrouped: [...this.state.favoritesGrouped, itemId]
        });
      }
    }
  };

  onFavoriteTypeahead = (itemId: string, isFavorite: boolean) => {
    if (isFavorite) {
      this.setState({
        typeaheadfavorites: this.state.typeaheadfavorites.filter(id => id !== itemId)
      });
    } else {
      {
        this.setState({
          typeaheadfavorites: [...this.state.typeaheadfavorites, itemId]
        });
      }
    }
  };

  onFavoriteTypeaheadMulti = (itemId: string, isFavorite: boolean) => {
    if (isFavorite) {
      this.setState({
        typeaheadMultifavorites: this.state.typeaheadMultifavorites.filter(id => id !== itemId)
      });
    } else {
      {
        this.setState({
          typeaheadMultifavorites: [...this.state.typeaheadMultifavorites, itemId]
        });
      }
    }
  };

  clearSelection = () => {
    this.setState({
      typeaheadSelected: [],
      typeaheadisOpen: false,
      typeaheadMultiSelected: [],
      typeaheadMultiisOpen: false
    });
  };

  render() {
    const {
      isOpen,
      isOpenGrouped,
      typeaheadisOpen,
      typeaheadMultiisOpen,
      selected,
      selectedGrouped,
      typeaheadSelected,
      typeaheadMultiSelected,
      favorites,
      favoritesGrouped,
      typeaheadfavorites,
      typeaheadMultifavorites
    } = this.state;
    const titleId = 'single-select-id';
    const titleIdGrouped = 'grouped-single-select-id';
    const titleIdTypeahead = 'typeahead-select-id';
    const titleIdTypeaheadMulti = 'multi-typeahead-select-id';

    return (
      <div>
        <StackItem isFilled={false}>
          <Title headingLevel="h2" size="2xl">
            Favorites Single Select
          </Title>
          <Select
            toggleId="favorites-select"
            variant={SelectVariant.single}
            onToggle={this.onToggle}
            onSelect={this.onSelect}
            selections={selected}
            isOpen={isOpen}
            placeholderText="Filter by fruit"
            aria-labelledby={titleId}
            onFavorite={this.onFavorite}
            favorites={favorites}
          >
            {this.options}
          </Select>
          <Title headingLevel="h2" size="2xl">
            Favorites Single Select Multi
          </Title>
          <Select
            toggleId="favorites-select-grouped"
            variant={SelectVariant.single}
            onToggle={this.onToggleGrouped}
            onSelect={this.onSelectGrouped}
            selections={selectedGrouped}
            isOpen={isOpenGrouped}
            placeholderText="Filter by status/vendor"
            aria-labelledby={titleIdGrouped}
            isGrouped
            onFavorite={this.onFavoriteGrouped}
            favorites={favoritesGrouped}
            favoritesLabel={'My Favorites'}
          >
            {this.optionsGrouped}
          </Select>
          <Title headingLevel="h2" size="2xl">
            Favorites type-ahead Select
          </Title>
          <Select
            toggleId="typeahead-select"
            variant={SelectVariant.typeahead}
            aria-label="Select item"
            onToggle={this.typeaheadOnToggle}
            onSelect={this.typeaheadOnSelect}
            onClear={this.clearSelection}
            selections={typeaheadSelected}
            isOpen={typeaheadisOpen}
            aria-labelledby={titleIdTypeahead}
            placeholderText="Select item"
            noResultsFoundText="Item not found"
            onFavorite={this.onFavoriteTypeahead}
            favorites={typeaheadfavorites}
          >
            {this.typeaheadOptions}
          </Select>
          <Title headingLevel="h2" size="2xl">
            Favorites type-ahead multi
          </Title>
          <Select
            toggleId="typeahead-multi-select"
            variant={SelectVariant.typeaheadMulti}
            aria-label="Select a fruit"
            onToggle={this.typeaheadMultiOnToggle}
            onSelect={this.typeaheadMultiOnSelect}
            onClear={this.clearSelection}
            selections={typeaheadMultiSelected}
            isOpen={typeaheadMultiisOpen}
            aria-labelledby={titleIdTypeaheadMulti}
            placeholderText="Select a fruit"
            onFavorite={this.onFavoriteTypeaheadMulti}
            favorites={typeaheadMultifavorites}
          >
            {this.typeaheadMultiOptions}
          </Select>
        </StackItem>
      </div>
    );
  }
}
