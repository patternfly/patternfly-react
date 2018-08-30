import React from 'react';
import PropTypes from 'prop-types';
import FilterSidePanel from '../FilterSidePanel';
import { Icon, FormControl } from 'patternfly-react';

class MockFilterSidePanelExample extends React.Component {
  state = {
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

  onShowAllToggle = id => {
    const showAllCategories = { ...this.state.showAllCategories };
    showAllCategories[id] = !showAllCategories[id];
    this.setState({ showAllCategories });
  };

  onFilterChange = (id, value) => {
    const activeFilters = { ...this.state.activeFilters };
    activeFilters[id] = value;
    this.setState({ activeFilters });
  };

  getStars = count => {
    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<Icon key={`star_${i}`} type="fa" name="star" />);
    }

    return (
      <span>
        <span className="sr-only">{`${count} stars`}</span>
        {stars}
      </span>
    );
  };

  render() {
    const { activeFilters, showAllCategories } = this.state;
    const { maxShowCount, leeway } = this.props;

    return (
      <FilterSidePanel id="filter-panel">
        <FilterSidePanel.Category>
          <FormControl type="text" placeholder="Filter by name" bsClass="form-control" />
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Type"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.type}
          onShowAllToggle={() => this.onShowAllToggle('type')}
        >
          <FilterSidePanel.CategoryItem
            count={23}
            checked={activeFilters.typeSUV}
            onChange={e => this.onFilterChange('typeSUV', e.target.checked)}
          >
            SUV
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={11}
            checked={activeFilters.typeSedan}
            onChange={e => this.onFilterChange('typeSedan', e.target.checked)}
          >
            Sedan
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={5}
            checked={activeFilters.typePickup}
            onChange={e => this.onFilterChange('typePickup', e.target.checked)}
          >
            Pickup Truck
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.typeSports}
            onChange={e => this.onFilterChange('typeSports', e.target.checked)}
          >
            Sports Car
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Manufacturer"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.manufacturer}
          onShowAllToggle={() => this.onShowAllToggle('manufacturer')}
        >
          <FilterSidePanel.CategoryItem
            count={6}
            checked={activeFilters.makeChevy}
            onChange={e => this.onFilterChange('makeChevy', e.target.checked)}
          >
            Chevrolet
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={5}
            checked={activeFilters.makeFord}
            onChange={e => this.onFilterChange('makeFord', e.target.checked)}
          >
            Ford
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={7}
            checked={activeFilters.makeDodge}
            onChange={e => this.onFilterChange('makeDodge', e.target.checked)}
          >
            Dodge
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={4}
            checked={activeFilters.makeVolkswagen}
            onChange={e => this.onFilterChange('makeVolkswagen', e.target.checked)}
          >
            Volkswagen
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={2}
            checked={activeFilters.makeHyundai}
            onChange={e => this.onFilterChange('makeHyundai', e.target.checked)}
          >
            Hyundai
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.makeHonda}
            onChange={e => this.onFilterChange('makeHonda', e.target.checked)}
          >
            Honda
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={6}
            checked={activeFilters.makeToyota}
            onChange={e => this.onFilterChange('makeToyota', e.target.checked)}
          >
            Toyota
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={2}
            checked={activeFilters.makeMercedes}
            onChange={e => this.onFilterChange('makeMercedes', e.target.checked)}
          >
            Mercedes
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={2}
            checked={activeFilters.makeBMW}
            onChange={e => this.onFilterChange('makeBMW', e.target.checked)}
          >
            BMW
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={1}
            checked={activeFilters.makeInfiniti}
            onChange={e => this.onFilterChange('makeInfiniti', e.target.checked)}
          >
            Infiniti
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={1}
            checked={activeFilters.makeLexus}
            onChange={e => this.onFilterChange('makeLexus', e.target.checked)}
          >
            Lexus
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={0}
            checked={activeFilters.makeAcura}
            onChange={e => this.onFilterChange('makeAcura', e.target.checked)}
          >
            Acura
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Payment Options"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.payment}
          onShowAllToggle={() => this.onShowAllToggle('payment')}
        >
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-paypal" />}
            checked={activeFilters.paymentPaypal}
            onChange={e => this.onFilterChange('paymentPaypal', e.target.checked)}
          >
            PayPal
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-discover" />}
            checked={activeFilters.paymentDiscover}
            onChange={e => this.onFilterChange('paymentDiscover', e.target.checked)}
          >
            Discover
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-visa" />}
            checked={activeFilters.paymentVisa}
            onChange={e => this.onFilterChange('paymentVisa', e.target.checked)}
          >
            Visa
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-mastercard" />}
            checked={activeFilters.paymentMastercard}
            onChange={e => this.onFilterChange('paymentMastercard', e.target.checked)}
          >
            Mastercard
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-amex" />}
            checked={activeFilters.paymentAmex}
            onChange={e => this.onFilterChange('paymentAmex', e.target.checked)}
          >
            American Express
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-diners-club" />}
            checked={activeFilters.paymentDinersClub}
            onChange={e => this.onFilterChange('paymentDinersClub', e.target.checked)}
          >
            {`Diner's Club`}
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Fuel Mileage"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.mileage}
          onShowAllToggle={() => this.onShowAllToggle('mileage')}
        >
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.mileage50}
            onChange={e => this.onFilterChange('mileage50', e.target.checked)}
          >
            50+
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={7}
            checked={activeFilters.mileage40}
            onChange={e => this.onFilterChange('mileage40', e.target.checked)}
          >
            40-50
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={9}
            checked={activeFilters.mileage30}
            onChange={e => this.onFilterChange('mileage30', e.target.checked)}
          >
            30-40
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={12}
            checked={activeFilters.mileage20}
            onChange={e => this.onFilterChange('mileage20', e.target.checked)}
          >
            20-30
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={8}
            checked={activeFilters.mileage10}
            onChange={e => this.onFilterChange('mileage10', e.target.checked)}
          >{`< 20`}</FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Rating"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.rating}
          onShowAllToggle={() => this.onShowAllToggle('rating')}
        >
          <FilterSidePanel.CategoryItem
            count={2}
            icon={this.getStars(5)}
            checked={activeFilters.rating5}
            onChange={e => this.onFilterChange('rating5', e.target.checked)}
          />
          <FilterSidePanel.CategoryItem
            count={12}
            icon={this.getStars(4)}
            checked={activeFilters.rating4}
            onChange={e => this.onFilterChange('rating4', e.target.checked)}
          />
          <FilterSidePanel.CategoryItem
            count={8}
            icon={this.getStars(3)}
            checked={activeFilters.rating3}
            onChange={e => this.onFilterChange('rating3', e.target.checked)}
          />
          <FilterSidePanel.CategoryItem
            count={5}
            icon={this.getStars(2)}
            checked={activeFilters.rating2}
            onChange={e => this.onFilterChange('rating2', e.target.checked)}
          />
          <FilterSidePanel.CategoryItem
            count={3}
            icon={this.getStars(1)}
            checked={activeFilters.rating1}
            onChange={e => this.onFilterChange('rating1', e.target.checked)}
          />
        </FilterSidePanel.Category>
      </FilterSidePanel>
    );
  }
}
MockFilterSidePanelExample.propTypes = {
  maxShowCount: PropTypes.number,
  leeway: PropTypes.number
};
MockFilterSidePanelExample.defaultProps = {
  maxShowCount: 5,
  leeway: 2
};

export { MockFilterSidePanelExample };

export const MockFilterSidePanelExampleSource = `
import React from 'react';
import PropTypes from 'prop-types';
import FilterSidePanel from '../FilterSidePanel';
import { Icon, FormControl } from 'patternfly-react';

class MockFilterSidePanelExample extends React.Component {
  state = {
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

  onShowAllToggle = id => {
    const showAllCategories = { ...this.state.showAllCategories };
    showAllCategories[id] = !showAllCategories[id];
    this.setState({ showAllCategories });
  };

  onFilterChange = (id, value) => {
    const activeFilters = { ...this.state.activeFilters };
    activeFilters[id] = value;
    this.setState({ activeFilters });
  };

  getStars = count => {
    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<Icon key={\`star_\${i}\`} type="fa" name="star" />);
    }

    return <span>{stars}</span>;
  };

  render() {
    const { activeFilters, showAllCategories } = this.state;
    const { maxShowCount, leeway } = this.props;

    return (
      <FilterSidePanel id="filter-panel">
        <FilterSidePanel.Category>
          <FormControl type="text" placeholder="Filter by name" bsClass="form-control" />
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Type"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.type}
          onShowAllToggle={() => this.onShowAllToggle('type')}
        >
          <FilterSidePanel.CategoryItem
            count={23}
            checked={activeFilters.typeSUV}
            onChange={e => this.onFilterChange('typeSUV', e.target.checked)}
          >
            SUV
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={11}
            checked={activeFilters.typeSedan}
            onChange={e => this.onFilterChange('typeSedan', e.target.checked)}
          >
            Sedan
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={5}
            checked={activeFilters.typePickup}
            onChange={e => this.onFilterChange('typePickup', e.target.checked)}
          >
            Pickup Truck
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.typeSports}
            onChange={e => this.onFilterChange('typeSports', e.target.checked)}
          >
            Sports Car
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Manufacturer"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.manufacturer}
          onShowAllToggle={() => this.onShowAllToggle('manufacturer')}
        >
          <FilterSidePanel.CategoryItem
            count={6}
            checked={activeFilters.makeChevy}
            onChange={e => this.onFilterChange('makeChevy', e.target.checked)}
          >
            Chevrolet
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={5}
            checked={activeFilters.makeFord}
            onChange={e => this.onFilterChange('makeFord', e.target.checked)}
          >
            Ford
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={7}
            checked={activeFilters.makeDodge}
            onChange={e => this.onFilterChange('makeDodge', e.target.checked)}
          >
            Dodge
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={4}
            checked={activeFilters.makeVolkswagen}
            onChange={e => this.onFilterChange('makeVolkswagen', e.target.checked)}
          >
            Volkswagen
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={2}
            checked={activeFilters.makeHyundai}
            onChange={e => this.onFilterChange('makeHyundai', e.target.checked)}
          >
            Hyundai
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.makeHonda}
            onChange={e => this.onFilterChange('makeHonda', e.target.checked)}
          >
            Honda
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={6}
            checked={activeFilters.makeToyota}
            onChange={e => this.onFilterChange('makeToyota', e.target.checked)}
          >
            Toyota
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={2}
            checked={activeFilters.makeMercedes}
            onChange={e => this.onFilterChange('makeMercedes', e.target.checked)}
          >
            Mercedes
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={2}
            checked={activeFilters.makeBMW}
            onChange={e => this.onFilterChange('makeBMW', e.target.checked)}
          >
            BMW
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={1}
            checked={activeFilters.makeInfiniti}
            onChange={e => this.onFilterChange('makeInfiniti', e.target.checked)}
          >
            Infiniti
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={1}
            checked={activeFilters.makeLexus}
            onChange={e => this.onFilterChange('makeLexus', e.target.checked)}
          >
            Lexus
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={0}
            checked={activeFilters.makeAcura}
            onChange={e => this.onFilterChange('makeAcura', e.target.checked)}
          >
            Acura
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Payment Options"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.payment}
          onShowAllToggle={() => this.onShowAllToggle('payment')}
        >
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-paypal" />}
            checked={activeFilters.paymentPaypal}
            onChange={e => this.onFilterChange('paymentPaypal', e.target.checked)}
          >
            PayPal
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-discover" />}
            checked={activeFilters.paymentDiscover}
            onChange={e => this.onFilterChange('paymentDiscover', e.target.checked)}
          >
            Discover
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-visa" />}
            checked={activeFilters.paymentVisa}
            onChange={e => this.onFilterChange('paymentVisa', e.target.checked)}
          >
            Visa
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-mastercard" />}
            checked={activeFilters.paymentMastercard}
            onChange={e => this.onFilterChange('paymentMastercard', e.target.checked)}
          >
            Mastercard
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-amex" />}
            checked={activeFilters.paymentAmex}
            onChange={e => this.onFilterChange('paymentAmex', e.target.checked)}
          >
            American Express
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            icon={<Icon type="fa" name="cc-diners-club" />}
            checked={activeFilters.paymentDinersClub}
            onChange={e => this.onFilterChange('paymentDinersClub', e.target.checked)}
          >
            {\`Diner's Club\`}
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Fuel Mileage"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.mileage}
          onShowAllToggle={() => this.onShowAllToggle('mileage')}
        >
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.mileage50}
            onChange={e => this.onFilterChange('mileage50', e.target.checked)}
          >
            50+
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={7}
            checked={activeFilters.mileage40}
            onChange={e => this.onFilterChange('mileage40', e.target.checked)}
          >
            40-50
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={9}
            checked={activeFilters.mileage30}
            onChange={e => this.onFilterChange('mileage30', e.target.checked)}
          >
            30-40
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={12}
            checked={activeFilters.mileage20}
            onChange={e => this.onFilterChange('mileage20', e.target.checked)}
          >
            20-30
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={8}
            checked={activeFilters.mileage10}
            onChange={e => this.onFilterChange('mileage10', e.target.checked)}
          >{\`< 20\`}</FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Rating"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.rating}
          onShowAllToggle={() => this.onShowAllToggle('rating')}
        >
          <FilterSidePanel.CategoryItem
            count={2}
            icon={this.getStars(5)}
            checked={activeFilters.rating5}
            onChange={e => this.onFilterChange('rating5', e.target.checked)}
          />
          <FilterSidePanel.CategoryItem
            count={12}
            icon={this.getStars(4)}
            checked={activeFilters.rating4}
            onChange={e => this.onFilterChange('rating4', e.target.checked)}
          />
          <FilterSidePanel.CategoryItem
            count={8}
            icon={this.getStars(3)}
            checked={activeFilters.rating3}
            onChange={e => this.onFilterChange('rating3', e.target.checked)}
          />
          <FilterSidePanel.CategoryItem
            count={5}
            icon={this.getStars(2)}
            checked={activeFilters.rating2}
            onChange={e => this.onFilterChange('rating2', e.target.checked)}
          />
          <FilterSidePanel.CategoryItem
            count={3}
            icon={this.getStars(1)}
            checked={activeFilters.rating1}
            onChange={e => this.onFilterChange('rating1', e.target.checked)}
          />
        </FilterSidePanel.Category>
      </FilterSidePanel>
    );
  }
}
MockFilterSidePanelExample.propTypes = {
  maxShowCount: PropTypes.number,
  leeway: PropTypes.number
};
MockFilterSidePanelExample.defaultProps = {
  maxShowCount: 5,
  leeway: 2
};

export { MockFilterSidePanelExample };
`;
