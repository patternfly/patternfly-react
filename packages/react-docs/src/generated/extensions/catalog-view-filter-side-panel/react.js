import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { FilterSidePanel, FilterSidePanelCategory, FilterSidePanelCategoryItem } from '@patternfly/react-catalog-view-extension';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';
import CcPaypalIcon from '@patternfly/react-icons/dist/esm/icons/cc-paypal-icon';
import CcAmexIcon from '@patternfly/react-icons/dist/esm/icons/cc-amex-icon';
import CcDiscoverIcon from '@patternfly/react-icons/dist/esm/icons/cc-discover-icon';
import CcVisaIcon from '@patternfly/react-icons/dist/esm/icons/cc-visa-icon';
import CcMastercardIcon from '@patternfly/react-icons/dist/esm/icons/cc-mastercard-icon';
import CcDinersClubIcon from '@patternfly/react-icons/dist/esm/icons/cc-diners-club-icon';
import '../../../../../react-catalog-view-extension/src/components/FilterSidePanel/examples/./filterSidePanel.css';
const pageData = {
  "id": "Catalog view filter side panel",
  "section": "extensions",
  "source": "react",
  "slug": "/extensions/catalog-view-filter-side-panel/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-catalog-view-extension/src/components/FilterSidePanel/examples/FilterSidePanel.md",
  "propComponents": [
    {
      "name": "FilterSidePanel",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children nodes",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes for the Filter Side Panel",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "FilterSidePanelCategory",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children nodes",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes for the Filter Side Panel Category",
          "defaultValue": "''"
        },
        {
          "name": "hideText",
          "type": "string",
          "description": "Text for the link to hide overflow items, default 'Show less'",
          "defaultValue": "null"
        },
        {
          "name": "leeway",
          "type": "number",
          "description": "Leeway to add to maxShowCount, minimum X for the 'Show X more'",
          "defaultValue": "2"
        },
        {
          "name": "maxShowCount",
          "type": "number",
          "description": "Number of items (max) to show before adding Show More link button",
          "defaultValue": "5"
        },
        {
          "name": "onShowAllToggle",
          "type": "(event: React.SyntheticEvent<HTMLElement>) => void",
          "description": "Callback function when the Show/Hide link button is clicked",
          "defaultValue": "() => null"
        },
        {
          "name": "showAll",
          "type": "boolean",
          "description": "Flag to show all items (ie. set to true after Show X more link is clicked)",
          "defaultValue": "false"
        },
        {
          "name": "showText",
          "type": "string",
          "description": "Text for the link to show all items, default 'Show <x> more'",
          "defaultValue": "null"
        },
        {
          "name": "title",
          "type": "string | React.ReactNode",
          "description": "Title for the category",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "FilterSidePanelCategoryItem",
      "description": "",
      "props": [
        {
          "name": "checked",
          "type": "boolean",
          "description": "Flag to show if the Filter Item Checkbox is checked.",
          "defaultValue": "false"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children nodes",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes for the Filter Panel Property Item",
          "defaultValue": "''"
        },
        {
          "name": "count",
          "type": "number",
          "description": "Optional count of the items matching the filter",
          "defaultValue": "null"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Optional icon (or other) to show before the children",
          "defaultValue": "null"
        },
        {
          "name": "onClick",
          "type": "(event: React.SyntheticEvent<HTMLElement>) => void",
          "description": "Callback for a click on the Filter Item Checkbox",
          "defaultValue": "null"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Title of the checkbox",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "examples": [
    "Basic"
  ]
};
pageData.liveContext = {
  FilterSidePanel,
  FilterSidePanelCategory,
  FilterSidePanelCategoryItem,
  StarIcon,
  CcPaypalIcon,
  CcAmexIcon,
  CcDiscoverIcon,
  CcVisaIcon,
  CcMastercardIcon,
  CcDinersClubIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FilterSidePanel, FilterSidePanelCategory, FilterSidePanelCategoryItem } from '@patternfly/react-catalog-view-extension';\nimport StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';\nimport CcPaypalIcon from '@patternfly/react-icons/dist/esm/icons/cc-paypal-icon';\nimport CcAmexIcon from '@patternfly/react-icons/dist/esm/icons/cc-amex-icon';\nimport CcDiscoverIcon from '@patternfly/react-icons/dist/esm/icons/cc-discover-icon';\nimport CcVisaIcon from '@patternfly/react-icons/dist/esm/icons/cc-visa-icon';\nimport CcMastercardIcon from '@patternfly/react-icons/dist/esm/icons/cc-mastercard-icon';\nimport CcDinersClubIcon from '@patternfly/react-icons/dist/esm/icons/cc-diners-club-icon';\nimport { TextInput } from '@patternfly/react-core';\n\nclass MockFilterSidePanelExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeFilters: {\n        typeSUV: false,\n        typeSedan: false,\n        typePickup: false,\n        typeSports: false,\n        makeChevy: false,\n        makeFord: false,\n        makeDodge: false,\n        makeVolkswagen: false,\n        makeHyundai: false,\n        makeHonda: false,\n        makeToyota: false,\n        makeMercedes: false,\n        makeBMW: false,\n        makeInfiniti: false,\n        makeLexus: false,\n        makeAcura: false,\n        paymentPaypal: false,\n        paymentDiscover: false,\n        paymentVisa: false,\n        paymentMastercard: false,\n        paymentAmex: false,\n        paymentDinersClub: false,\n        mileage50: false,\n        mileage40: false,\n        mileage30: false,\n        mileage20: false,\n        mileage10: false,\n        rating5: false,\n        rating4: false,\n        rating3: false,\n        rating2: false,\n        rating1: false\n      },\n      showAllCategories: {\n        type: false,\n        make: false,\n        paymentOptions: false,\n        mileage: false,\n        rating: false\n      }\n    };\n    \n    this.onShowAllToggle = id => {\n      const showAllCategories = { ...this.state.showAllCategories };\n      showAllCategories[id] = !showAllCategories[id];\n      this.setState({ showAllCategories });\n    };\n  \n    this.onFilterChange = (id, value) => {\n      const activeFilters = { ...this.state.activeFilters };\n      activeFilters[id] = value;\n      this.setState({ activeFilters });\n    };\n  \n    this.getStars = count => {\n      const stars = [];\n  \n      for (let i = 0; i < count; i++) {\n        stars.push(<StarIcon key={i} />);\n      }\n  \n      return (\n        <span>\n          <span className=\"pf-u-screen-reader\">{`${count} stars`}</span>\n          {stars}\n        </span>\n      );\n    };\n  }\n  \n  render() {\n    const { activeFilters, showAllCategories } = this.state;\n    const maxShowCount = 5;\n    const leeway = 2;\n    return (\n     <div style={{ width: '205px', border: '1px solid grey', paddingTop: '20px' }}>   \n      <FilterSidePanel id=\"filter-panel\">\n        <FilterSidePanelCategory key=\"cat1\"> \n          <TextInput type=\"text\" id=\"filter-text-input\" placeholder=\"Filter by name\" aria-label=\"filter text input\" />\n        </FilterSidePanelCategory>\n        <FilterSidePanelCategory\n          key=\"cat2\"\n          title=\"Type\"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.type}\n          onShowAllToggle={() => this.onShowAllToggle('type')}\n        >\n          <FilterSidePanelCategoryItem\n            key=\"suv\"\n            count={23}\n            checked={activeFilters.typeSUV}\n            onClick={e => this.onFilterChange('typeSUV', e.target.checked)}\n          >\n            SUV\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"sedan\"\n            count={11}\n            checked={activeFilters.typeSedan}\n            onClick={e => this.onFilterChange('typeSedan', e.target.checked)}\n          >\n            Sedan\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"pickup\"\n            count={5}\n            checked={activeFilters.typePickup}\n            onClick={e => this.onFilterChange('typePickup', e.target.checked)}\n          >\n            Pickup Truck\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"sports\"\n            count={3}\n            checked={activeFilters.typeSports}\n            onClick={e => this.onFilterChange('typeSports', e.target.checked)}\n          >\n            Sports Car\n          </FilterSidePanelCategoryItem>\n        </FilterSidePanelCategory>\n        <FilterSidePanelCategory\n          key=\"cat3\"\n          title=\"Manufacturer\"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.manufacturer}\n          onShowAllToggle={() => this.onShowAllToggle('manufacturer')}\n        >\n          <FilterSidePanelCategoryItem\n            key=\"chevy\"\n            count={6}\n            checked={activeFilters.makeChevy}\n            onClick={e => this.onFilterChange('makeChevy', e.target.checked)}\n          >\n            Chevrolet\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"ford\"\n            count={5}\n            checked={activeFilters.makeFord}\n            onClick={e => this.onFilterChange('makeFord', e.target.checked)}\n          >\n            Ford\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"dodge\"\n            count={7}\n            checked={activeFilters.makeDodge}\n            onClick={e => this.onFilterChange('makeDodge', e.target.checked)}\n          >\n            Dodge\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"volks\"\n            count={4}\n            checked={activeFilters.makeVolkswagen}\n            onClick={e => this.onFilterChange('makeVolkswagen', e.target.checked)}\n          >\n            Volkswagen\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"hyundai\"\n            count={2}\n            checked={activeFilters.makeHyundai}\n            onClick={e => this.onFilterChange('makeHyundai', e.target.checked)}\n          >\n            Hyundai\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"honda\"\n            count={3}\n            checked={activeFilters.makeHonda}\n            onClick={e => this.onFilterChange('makeHonda', e.target.checked)}\n          >\n            Honda\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"toyota\"\n            count={6}\n            checked={activeFilters.makeToyota}\n            onClick={e => this.onFilterChange('makeToyota', e.target.checked)}\n          >\n            Toyota\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"mercedes\"\n            count={2}\n            checked={activeFilters.makeMercedes}\n            onClick={e => this.onFilterChange('makeMercedes', e.target.checked)}\n          >\n            Mercedes\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"bmw\"\n            count={2}\n            checked={activeFilters.makeBMW}\n            onClick={e => this.onFilterChange('makeBMW', e.target.checked)}\n          >\n            BMW\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"infiniti\"\n            count={1}\n            checked={activeFilters.makeInfiniti}\n            onClick={e => this.onFilterChange('makeInfiniti', e.target.checked)}\n          >\n            Infiniti\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"lexus\"\n            count={1}\n            checked={activeFilters.makeLexus}\n            onClick={e => this.onFilterChange('makeLexus', e.target.checked)}\n          >\n            Lexus\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"acura\"\n            count={0}\n            checked={activeFilters.makeAcura}\n            onClick={e => this.onFilterChange('makeAcura', e.target.checked)}\n          >\n            Acura\n          </FilterSidePanelCategoryItem>\n        </FilterSidePanelCategory>\n        <FilterSidePanelCategory\n          key=\"cat4\"\n          title=\"Payment Options\"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.payment}\n          onShowAllToggle={() => this.onShowAllToggle('payment')}\n        >\n          <FilterSidePanelCategoryItem\n            key=\"pp\"\n            icon={<CcPaypalIcon />}\n            checked={activeFilters.paymentPaypal}\n            onClick={e => this.onFilterChange('paymentPaypal', e.target.checked)}\n          >\n            PayPal\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"discover\"\n            icon={<CcDiscoverIcon />}\n            checked={activeFilters.paymentDiscover}\n            onClick={e => this.onFilterChange('paymentDiscover', e.target.checked)}\n          >\n            Discover\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"visa\"\n            icon={<CcVisaIcon />}\n            checked={activeFilters.paymentVisa}\n            onClick={e => this.onFilterChange('paymentVisa', e.target.checked)}\n          >\n            Visa\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"mc\"\n            icon={<CcMastercardIcon />}\n            checked={activeFilters.paymentMastercard}\n            onClick={e => this.onFilterChange('paymentMastercard', e.target.checked)}\n          >\n            Mastercard\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"amex\"\n            icon={<CcAmexIcon />}\n            checked={activeFilters.paymentAmex}\n            onClick={e => this.onFilterChange('paymentAmex', e.target.checked)}\n          >\n            American Express\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"dc\"\n            icon={<CcDinersClubIcon />}\n            checked={activeFilters.paymentDinersClub}\n            onClick={e => this.onFilterChange('paymentDinersClub', e.target.checked)}\n          >\n            {\"Diner's Club\"}\n          </FilterSidePanelCategoryItem>\n        </FilterSidePanelCategory>\n        <FilterSidePanelCategory\n          key=\"cat5\"\n          title=\"Fuel Mileage\"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.mileage}\n          onShowAllToggle={() => this.onShowAllToggle('mileage')}\n        >\n          <FilterSidePanelCategoryItem\n            key=\"gt50\"\n            count={3}\n            checked={activeFilters.mileage50}\n            onClick={e => this.onFilterChange('mileage50', e.target.checked)}\n          >\n            50+\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"4050\"\n            count={7}\n            checked={activeFilters.mileage40}\n            onClick={e => this.onFilterChange('mileage40', e.target.checked)}\n          >\n            40-50\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"3040\"\n            count={9}\n            checked={activeFilters.mileage30}\n            onClick={e => this.onFilterChange('mileage30', e.target.checked)}\n          >\n            30-40\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"2030\"\n            count={12}\n            checked={activeFilters.mileage20}\n            onClick={e => this.onFilterChange('mileage20', e.target.checked)}\n          >\n            20-30\n          </FilterSidePanelCategoryItem>\n          <FilterSidePanelCategoryItem\n            key=\"gt20\"\n            count={8}\n            checked={activeFilters.mileage10}\n            onClick={e => this.onFilterChange('mileage10', e.target.checked)}\n          >\n            {'< 20'}\n          </FilterSidePanelCategoryItem>\n        </FilterSidePanelCategory>\n        <FilterSidePanelCategory\n          key=\"cat6\"\n          title=\"Rating\"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.rating}\n          onShowAllToggle={() => this.onShowAllToggle('rating')}\n        >\n          <FilterSidePanelCategoryItem\n            key=\"5star\"\n            count={2}\n            icon={this.getStars(5)}\n            checked={activeFilters.rating5}\n            onClick={e => this.onFilterChange('rating5', e.target.checked)}\n          />\n          <FilterSidePanelCategoryItem\n            key=\"4star\"\n            count={12}\n            icon={this.getStars(4)}\n            checked={activeFilters.rating4}\n            onClick={e => this.onFilterChange('rating4', e.target.checked)}\n          />\n          <FilterSidePanelCategoryItem\n            key=\"3star\"\n            count={8}\n            icon={this.getStars(3)}\n            checked={activeFilters.rating3}\n            onClick={e => this.onFilterChange('rating3', e.target.checked)}\n          />\n          <FilterSidePanelCategoryItem\n            key=\"2star\"\n            count={5}\n            icon={this.getStars(2)}\n            checked={activeFilters.rating2}\n            onClick={e => this.onFilterChange('rating2', e.target.checked)}\n          />\n          <FilterSidePanelCategoryItem\n            key=\"1star\"\n            count={3}\n            icon={this.getStars(1)}\n            checked={activeFilters.rating1}\n            onClick={e => this.onFilterChange('rating1', e.target.checked)}\n          />\n        </FilterSidePanelCategory>\n      </FilterSidePanel>\n    </div>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: FilterSidePanel lives in its own package at `}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension"}}>
        <code {...{"className":"ws-code"}}>
          {`@patternfly/react-catalog-view-extension`}
        </code>
      </PatternflyThemeLink>
      {`!`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note: the width, border, and top padding styling are not part of the FilterSidePanel.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsCatalogViewFilterSidePanelReactDocs';
Component.pageData = pageData;

export default Component;
