/* eslint-disable no-console */
import React from 'react';
import {
  Brand,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownList,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  MenuToggle,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  PageToggleButton
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import EllipsisIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-h-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';

export const ToolbarDropdown = ({ children, isPlain, toolbarItemProps }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const Toggle = (ref) => (
    <MenuToggle
      ref={ref}
      isExpanded={isOpen}
      onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      variant={isPlain ? 'plain' : undefined}
    >
      {children}
    </MenuToggle>
  );

  return (
    <ToolbarItem {...toolbarItemProps}>
      <Dropdown
        isOpen={isOpen}
        onSelect={(_ev, value) => console.log(value, ' clicked')}
        onOpenChange={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        toggle={(ref) => Toggle(ref)}
        shouldFocusToggleOnSelect
      >
        <DropdownList>
          <DropdownItem value={0} key="action">
            Action
          </DropdownItem>
          <DropdownItem
            value={1}
            key="link"
            to="#default-link2"
            // Prevent the default onClick functionality for example purposes
            onClick={(ev) => ev.preventDefault()}
          >
            Link
          </DropdownItem>
          <DropdownItem value={2} isDisabled key="disabled action">
            Disabled Action
          </DropdownItem>
          <DropdownItem value={3} isDisabled key="disabled link" to="#default-link4">
            Disabled Link
          </DropdownItem>
          <DropdownItem
            value={4}
            isAriaDisabled
            key="aria-disabled link"
            to="#default-link5"
            tooltipProps={{ content: 'aria-disabled link', position: 'top' }}
          >
            Aria-disabled Link
          </DropdownItem>
          <Divider component="li" key="separator" />
          <DropdownItem value={5} key="separated action">
            Separated Action
          </DropdownItem>
          <DropdownItem value={6} key="separated link" to="#default-link6" onClick={(ev) => ev.preventDefault()}>
            Separated Link
          </DropdownItem>
        </DropdownList>
      </Dropdown>
    </ToolbarItem>
  );
};

export default class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      isFullKebabDropdownOpen: false,
      activeItem: 0
    };

    this.onDropdownToggle = () => {
      this.setState((prevState) => ({
        isDropdownOpen: !prevState.isDropdownOpen
      }));
    };

    this.onDropdownSelect = () => {
      this.setState({
        isDropdownOpen: false
      });
    };

    this.onKebabDropdownToggle = () => {
      this.setState((prevState) => ({
        isKebabDropdownOpen: !prevState.isKebabDropdownOpen
      }));
    };

    this.onKebabDropdownSelect = () => {
      this.setState({
        isKebabDropdownOpen: false
      });
    };

    this.onFullKebabToggle = () => {
      this.setState((prevState) => ({
        isFullKebabDropdownOpen: !prevState.isFullKebabDropdownOpen
      }));
    };

    this.onFullKebabSelect = () => {
      this.setState({
        isFullKebabDropdownOpen: false
      });
    };
  }

  render() {
    const headerToolbar = (
      <Toolbar id="toolbar">
        <ToolbarContent>
          <ToolbarDropdown toolbarItemProps={{ visibility: { default: 'hidden', md: 'visible' } }}>
            Context selector
          </ToolbarDropdown>
          <ToolbarGroup className="pf-m-align-right">
            <ToolbarDropdown isPlain>
              <EllipsisIcon />
            </ToolbarDropdown>
            <ToolbarDropdown>Alex dev</ToolbarDropdown>
          </ToolbarGroup>
        </ToolbarContent>
      </Toolbar>
    );

    const masthead = (
      <Masthead display={{}}>
        <div className="pf-v5-c-masthead__logo">
          <MastheadToggle>
            <PageToggleButton variant="plain" aria-label="Global navigation">
              <BarsIcon />
            </PageToggleButton>
          </MastheadToggle>
          <MastheadMain>
            <MastheadBrand>
              <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
            </MastheadBrand>
          </MastheadMain>
        </div>
        <MastheadContent>{headerToolbar}</MastheadContent>
      </Masthead>
    );

    return masthead;
  }
}
