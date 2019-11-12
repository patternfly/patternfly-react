---
title: 'Filter side panel'
section: 'catalog view'
typescript: true
propComponents: ['FilterSidePanel', 'FilterSidePanelCategory', 'FilterSidePanelCategoryItem']
---

import { FilterSidePanel, FilterSidePanelCategory, FilterSidePanelCategoryItem } from '@patternfly/react-catalog-view-extension';
import { StarIcon, CcPaypalIcon, CcAmexIcon, CcDiscoverIcon, CcVisaIcon, CcMastercardIcon, CcDinersClubIcon } from '@patternfly/react-icons';
import { TextInput } from '@patternfly/react-core';

import './filterSidePanel.css';

## Introduction
Note: FilterSidePanel lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!

Note: the width, border, and top padding styling are not part of the FilterSidePanel.

This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.


## Examples

```js title=Basic
import React from 'react';
import { FilterSidePanel, FilterSidePanelCategory, FilterSidePanelCategoryItem } from '@patternfly/react-catalog-view-extension';
import { StarIcon, CcPaypalIcon, CcAmexIcon, CcDiscoverIcon, CcVisaIcon, CcMastercardIcon, CcDinersClubIcon } from '@patternfly/react-icons';
import { TextInput } from '@patternfly/react-core';

class MockFilterSidePanelExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: {
        typeSUV: false,
        typeSedan: false,
        typePickup: false,
        typeSports: false,
        makeChevy: false,
        makeFord: false,
        makeDodge: false,
        makeVolkswagen: false,
        makeHyundai: false,
        makeHonda: false,
        makeToyota: false,
        makeMercedes: false,
        makeBMW: false,
        makeInfiniti: false,
        makeLexus: false,
        makeAcura: false,
        paymentPaypal: false,
        paymentDiscover: false,
        paymentVisa: false,
        paymentMastercard: false,
        paymentAmex: false,
        paymentDinersClub: false,
        mileage50: false,
        mileage40: false,
        mileage30: false,
        mileage20: false,
        mileage10: false,
        rating5: false,
        rating4: false,
        rating3: false,
        rating2: false,
        rating1: false
      },
      showAllCategories: {
        type: false,
        make: false,
        paymentOptions: false,
        mileage: false,
        rating: false
      }
    };
    
    this.onShowAllToggle = id => {
      const showAllCategories = { ...this.state.showAllCategories };
      showAllCategories[id] = !showAllCategories[id];
      this.setState({ showAllCategories });
    };
  
    this.onFilterChange = (id, value) => {
      const activeFilters = { ...this.state.activeFilters };
      activeFilters[id] = value;
      this.setState({ activeFilters });
    };
  
    this.getStars = count => {
      const stars = [];
  
      for (let i = 0; i < count; i++) {
        stars.push(<StarIcon key={i} />);
      }
  
      return (
        <span>
          <span className="sr-only">{`${count} stars`}</span>
          {stars}
        </span>
      );
    };
  }
  
  render() {
    const { activeFilters, showAllCategories } = this.state;
    const maxShowCount = 5;
    const leeway = 2;
    return (
     <div style={{ width: '205px', border: '1px solid grey', paddingTop: '20px' }}>   
      <FilterSidePanel id="filter-panel">
        <FilterSidePanelCategory key="cat1"> 
          <TextInput type="text" id="filter-text-input" placeholder="Filter by name" />
        </FilterSidePanelCategory>
        <FilterSidePanelCategory
          key="cat2"
          title="Type"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.type}
          onShowAllToggle={() => this.onShowAllToggle('type')}
        >
          <FilterSidePanelCategoryItem
            key="suv"
            count={23}
            checked={activeFilters.typeSUV}
            onClick={e => this.onFilterChange('typeSUV', e.target.checked)}
          >
            SUV
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="sedan"
            count={11}
            checked={activeFilters.typeSedan}
            onClick={e => this.onFilterChange('typeSedan', e.target.checked)}
          >
            Sedan
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="pickup"
            count={5}
            checked={activeFilters.typePickup}
            onClick={e => this.onFilterChange('typePickup', e.target.checked)}
          >
            Pickup Truck
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="sports"
            count={3}
            checked={activeFilters.typeSports}
            onClick={e => this.onFilterChange('typeSports', e.target.checked)}
          >
            Sports Car
          </FilterSidePanelCategoryItem>
        </FilterSidePanelCategory>
        <FilterSidePanelCategory
          key="cat3"
          title="Manufacturer"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.manufacturer}
          onShowAllToggle={() => this.onShowAllToggle('manufacturer')}
        >
          <FilterSidePanelCategoryItem
            key="chevy"
            count={6}
            checked={activeFilters.makeChevy}
            onClick={e => this.onFilterChange('makeChevy', e.target.checked)}
          >
            Chevrolet
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="ford"
            count={5}
            checked={activeFilters.makeFord}
            onClick={e => this.onFilterChange('makeFord', e.target.checked)}
          >
            Ford
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="dodge"
            count={7}
            checked={activeFilters.makeDodge}
            onClick={e => this.onFilterChange('makeDodge', e.target.checked)}
          >
            Dodge
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="volks"
            count={4}
            checked={activeFilters.makeVolkswagen}
            onClick={e => this.onFilterChange('makeVolkswagen', e.target.checked)}
          >
            Volkswagen
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="hyundai"
            count={2}
            checked={activeFilters.makeHyundai}
            onClick={e => this.onFilterChange('makeHyundai', e.target.checked)}
          >
            Hyundai
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="honda"
            count={3}
            checked={activeFilters.makeHonda}
            onClick={e => this.onFilterChange('makeHonda', e.target.checked)}
          >
            Honda
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="toyota"
            count={6}
            checked={activeFilters.makeToyota}
            onClick={e => this.onFilterChange('makeToyota', e.target.checked)}
          >
            Toyota
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="mercedes"
            count={2}
            checked={activeFilters.makeMercedes}
            onClick={e => this.onFilterChange('makeMercedes', e.target.checked)}
          >
            Mercedes
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="bmw"
            count={2}
            checked={activeFilters.makeBMW}
            onClick={e => this.onFilterChange('makeBMW', e.target.checked)}
          >
            BMW
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="infiniti"
            count={1}
            checked={activeFilters.makeInfiniti}
            onClick={e => this.onFilterChange('makeInfiniti', e.target.checked)}
          >
            Infiniti
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="lexus"
            count={1}
            checked={activeFilters.makeLexus}
            onClick={e => this.onFilterChange('makeLexus', e.target.checked)}
          >
            Lexus
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="acura"
            count={0}
            checked={activeFilters.makeAcura}
            onClick={e => this.onFilterChange('makeAcura', e.target.checked)}
          >
            Acura
          </FilterSidePanelCategoryItem>
        </FilterSidePanelCategory>
        <FilterSidePanelCategory
          key="cat4"
          title="Payment Options"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.payment}
          onShowAllToggle={() => this.onShowAllToggle('payment')}
        >
          <FilterSidePanelCategoryItem
            key="pp"
            icon={<CcPaypalIcon />}
            checked={activeFilters.paymentPaypal}
            onClick={e => this.onFilterChange('paymentPaypal', e.target.checked)}
          >
            PayPal
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="discover"
            icon={<CcDiscoverIcon />}
            checked={activeFilters.paymentDiscover}
            onClick={e => this.onFilterChange('paymentDiscover', e.target.checked)}
          >
            Discover
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="visa"
            icon={<CcVisaIcon />}
            checked={activeFilters.paymentVisa}
            onClick={e => this.onFilterChange('paymentVisa', e.target.checked)}
          >
            Visa
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="mc"
            icon={<CcMastercardIcon />}
            checked={activeFilters.paymentMastercard}
            onClick={e => this.onFilterChange('paymentMastercard', e.target.checked)}
          >
            Mastercard
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="amex"
            icon={<CcAmexIcon />}
            checked={activeFilters.paymentAmex}
            onClick={e => this.onFilterChange('paymentAmex', e.target.checked)}
          >
            American Express
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="dc"
            icon={<CcDinersClubIcon />}
            checked={activeFilters.paymentDinersClub}
            onClick={e => this.onFilterChange('paymentDinersClub', e.target.checked)}
          >
            {"Diner's Club"}
          </FilterSidePanelCategoryItem>
        </FilterSidePanelCategory>
        <FilterSidePanelCategory
          key="cat5"
          title="Fuel Mileage"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.mileage}
          onShowAllToggle={() => this.onShowAllToggle('mileage')}
        >
          <FilterSidePanelCategoryItem
            key="gt50"
            count={3}
            checked={activeFilters.mileage50}
            onClick={e => this.onFilterChange('mileage50', e.target.checked)}
          >
            50+
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="4050"
            count={7}
            checked={activeFilters.mileage40}
            onClick={e => this.onFilterChange('mileage40', e.target.checked)}
          >
            40-50
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="3040"
            count={9}
            checked={activeFilters.mileage30}
            onClick={e => this.onFilterChange('mileage30', e.target.checked)}
          >
            30-40
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="2030"
            count={12}
            checked={activeFilters.mileage20}
            onClick={e => this.onFilterChange('mileage20', e.target.checked)}
          >
            20-30
          </FilterSidePanelCategoryItem>
          <FilterSidePanelCategoryItem
            key="gt20"
            count={8}
            checked={activeFilters.mileage10}
            onClick={e => this.onFilterChange('mileage10', e.target.checked)}
          >
            {'< 20'}
          </FilterSidePanelCategoryItem>
        </FilterSidePanelCategory>
        <FilterSidePanelCategory
          key="cat6"
          title="Rating"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.rating}
          onShowAllToggle={() => this.onShowAllToggle('rating')}
        >
          <FilterSidePanelCategoryItem
            key="5star"
            count={2}
            icon={this.getStars(5)}
            checked={activeFilters.rating5}
            onClick={e => this.onFilterChange('rating5', e.target.checked)}
          />
          <FilterSidePanelCategoryItem
            key="4star"
            count={12}
            icon={this.getStars(4)}
            checked={activeFilters.rating4}
            onClick={e => this.onFilterChange('rating4', e.target.checked)}
          />
          <FilterSidePanelCategoryItem
            key="3star"
            count={8}
            icon={this.getStars(3)}
            checked={activeFilters.rating3}
            onClick={e => this.onFilterChange('rating3', e.target.checked)}
          />
          <FilterSidePanelCategoryItem
            key="2star"
            count={5}
            icon={this.getStars(2)}
            checked={activeFilters.rating2}
            onClick={e => this.onFilterChange('rating2', e.target.checked)}
          />
          <FilterSidePanelCategoryItem
            key="1star"
            count={3}
            icon={this.getStars(1)}
            checked={activeFilters.rating1}
            onClick={e => this.onFilterChange('rating1', e.target.checked)}
          />
        </FilterSidePanelCategory>
      </FilterSidePanel>
    </div>
    );
  }
}
```
