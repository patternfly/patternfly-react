import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHeading,
  BreadcrumbItemRenderArgs,
  Dropdown,
  BadgeToggle,
  DropdownItem
} from '@patternfly/react-core';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

export class BreadcrumbDemo extends React.Component {
  static displayName = 'BreadcrumbDemo';
  state = {
    isOpen: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onToggle = (_event: any, isOpen: boolean) => {
    this.setState({
      isOpen
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
      <DropdownItem key="edit" component="button" icon={<AngleLeftIcon />}>
        Edit
      </DropdownItem>,
      <DropdownItem key="action" component="button" icon={<AngleLeftIcon />}>
        Deployment
      </DropdownItem>,
      <DropdownItem key="apps" component="button" icon={<AngleLeftIcon />}>
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
            toggle={
              <BadgeToggle id="toggle-id" onToggle={this.onToggle}>
                {dropdownItems.length}
              </BadgeToggle>
            }
            isOpen={isOpen}
            dropdownItems={dropdownItems}
          />
        </BreadcrumbItem>{' '}
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbHeading to="#">Section Title</BreadcrumbHeading>
      </Breadcrumb>
    );
  }
}
