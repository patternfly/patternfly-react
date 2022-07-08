import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import imgBrand from '@patternfly/react-core/src/demos/examples/pfColorLogo.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';
const pageData = {
  "id": "Masthead",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/masthead/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/Masthead.md",
  "examples": [
    "Basic"
  ]
};
pageData.liveContext = {
  imgBrand,
  BarsIcon,
  CaretDownIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Masthead,\n  MastheadToggle,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  Button,\n  Toolbar,\n  ToolbarContent,\n  ToolbarGroup,\n  ToolbarItem,\n  ContextSelector,\n  ContextSelectorItem,\n  Dropdown,\n  DropdownSeparator,\n  DropdownToggle,\n  KebabToggle,\n  DropdownItem,\n  Brand\n} from '@patternfly/react-core';\nimport imgBrand from '@patternfly/react-core/src/demos/examples/pfColorLogo.svg';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\nimport CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';\n\nclass BasicMasthead extends React.Component {\n  items = [\n    'My Project',\n    'OpenShift Cluster',\n    'Production Ansible',\n    'AWS',\n    'Azure',\n    'My Project 2',\n    'OpenShift Cluster',\n    'Production Ansible 2',\n    'AWS 2',\n    'Azure 2'\n  ];\n\n  state = {\n    isOpen: false,\n    isDropdownOpen: false,\n    isKebabOpen: false,\n    selected: this.items[0],\n    searchValue: '',\n    filteredItems: this.items\n  };\n\n  onToggle = (event: any, isOpen: boolean) => {\n    this.setState({\n      isOpen\n    });\n  };\n\n  onDropdownToggle = (isDropdownOpen: boolean) => {\n    this.setState({\n      isDropdownOpen\n    });\n  };\n\n  onKebabToggle = (isKebabOpen: boolean) => {\n    this.setState({\n      isKebabOpen\n    });\n  };\n\n  onSelect = (event: any, value: string) => {\n    this.setState({\n      selected: value,\n      isOpen: !this.state.isOpen\n    });\n  };\n\n  onDropdownSelect = () => {\n    this.setState({\n      isDropdownOpen: !this.state.isDropdownOpen\n    });\n  };\n\n  onKebabSelect = () => {\n    this.setState({\n      isKebabOpen: !this.state.isKebabOpen\n    });\n  };\n\n  onSearchInputChange = (value: string) => {\n    this.setState({ searchValue: value });\n  };\n\n  onSearchButtonClick = () => {\n    const filtered =\n      this.state.searchValue === ''\n        ? this.items\n        : this.items.filter(str => str.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);\n\n    this.setState({ filteredItems: filtered || [] });\n  };\n\n  render() {\n    const { isOpen, isDropdownOpen, isKebabOpen, selected, searchValue, filteredItems } = this.state;\n\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n        Disabled Link\n      </DropdownItem>,\n      <DropdownItem\n        key=\"disabled action\"\n        isAriaDisabled\n        component=\"button\"\n        tooltip=\"Tooltip for disabled item\"\n        tooltipProps={{ position: 'top' }}\n      >\n        Disabled Action\n      </DropdownItem>,\n      <DropdownSeparator key=\"separator\" />,\n      <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n      <DropdownItem key=\"separated action\" component=\"button\">\n        Separated Action\n      </DropdownItem>\n    ];\n\n    return (\n      <Masthead id=\"basic\">\n        <MastheadToggle>\n          <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n            <BarsIcon />\n          </Button>\n        </MastheadToggle>\n        <MastheadMain>\n          <MastheadBrand>\n            <Brand src={imgBrand} alt=\"Patternfly logo\" />\n          </MastheadBrand>\n        </MastheadMain>\n        <MastheadContent>\n          <Toolbar id=\"toolbar\" isFullHeight isStatic>\n            <ToolbarContent>\n              <ToolbarItem>\n                <ContextSelector\n                  toggleText={selected}\n                  onSearchInputChange={this.onSearchInputChange}\n                  isOpen={isOpen}\n                  searchInputValue={searchValue}\n                  onToggle={this.onToggle}\n                  onSelect={this.onSelect}\n                  onSearchButtonClick={this.onSearchButtonClick}\n                  screenReaderLabel=\"Selected Project:\"\n                  isFullHeight\n                >\n                  {filteredItems.map((item, index) => (\n                    <ContextSelectorItem key={index}>{item}</ContextSelectorItem>\n                  ))}\n                </ContextSelector>\n              </ToolbarItem>\n              <ToolbarGroup alignment={{ default: 'alignRight' }}>\n                <ToolbarItem visibility={{ default: 'hidden', lg: 'visible' }}>\n                  <Dropdown\n                    onSelect={this.onDropdownSelect}\n                    toggle={\n                      <DropdownToggle id=\"toggle-id\" onToggle={this.onDropdownToggle} toggleIndicator={CaretDownIcon}>\n                        Dropdown\n                      </DropdownToggle>\n                    }\n                    isOpen={isDropdownOpen}\n                    dropdownItems={dropdownItems}\n                    isFullHeight\n                  />\n                </ToolbarItem>\n                <ToolbarItem>\n                  <Dropdown\n                    onSelect={this.onKebabSelect}\n                    position=\"right\"\n                    toggle={<KebabToggle onToggle={this.onKebabToggle} id=\"toggle-id-kebab\" />}\n                    isOpen={isKebabOpen}\n                    isPlain\n                    dropdownItems={dropdownItems}\n                  />\n                </ToolbarItem>\n              </ToolbarGroup>\n            </ToolbarContent>\n          </Toolbar>\n        </MastheadContent>\n      </Masthead>\n    );\n  }\n}","title":"Basic","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsMastheadReactDemosDocs';
Component.pageData = pageData;

export default Component;
