import React from 'react';
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHeading,
  BreadcrumbItemRenderArgs,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle
} from '@patternfly/react-core';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

export class BreadcrumbDemo extends React.Component {
  static displayName = 'BreadcrumbDemo';
  state = {
    isOpen: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  onSelect = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem icon={<AngleLeftIcon />} key="edit">
        Edit
      </DropdownItem>,
      <DropdownItem icon={<AngleLeftIcon />} key="action">
        Deployment
      </DropdownItem>,
      <DropdownItem icon={<AngleLeftIcon />} key="apps">
        Applications
      </DropdownItem>
    ];

    return (
      <Breadcrumb>
        <BreadcrumbItem to="/">Section Home</BreadcrumbItem>
        <BreadcrumbItem
          render={({ ariaCurrent, className }: BreadcrumbItemRenderArgs) => (
            <span
              aria-current={ariaCurrent}
              role="link"
              data-href="/hello"
              className={className}
              style={{ cursor: 'pointer' }}
            >
              Fake Section Title
            </span>
          )}
        />
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem isDropdown id="badge-dropdown">
          <Dropdown
            onSelect={this.onSelect}
            onOpenChange={(isOpen) => this.setState({ isOpen })}
            toggle={(toggleRef) => (
              <MenuToggle ref={toggleRef} onClick={this.onToggle} isExpanded={isOpen} variant="plain">
                <Badge isRead screenReaderText="additional items">
                  {dropdownItems.length}
                  <span>
                    <CaretDownIcon />
                  </span>
                </Badge>
              </MenuToggle>
            )}
            isOpen={isOpen}
          >
            <DropdownList>{dropdownItems.map((dropdownItem) => dropdownItem)}</DropdownList>
          </Dropdown>
        </BreadcrumbItem>{' '}
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbHeading to="#">Section Title</BreadcrumbHeading>
      </Breadcrumb>
    );
  }
}
