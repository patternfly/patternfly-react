import styles from '@patternfly/patternfly/components/Toolbar/toolbar.css';
import { css } from '@patternfly/react-styles';
import React, { HTMLProps } from 'react';
import { OneOf } from '../../typeUtils';
import { Dropdown, DropdownDirection, DropdownPosition, KebabToggle } from '../Dropdown';

export interface ToolbarActionListProps extends HTMLProps<HTMLDivElement> {
  dropdownItems: React.ReactNode[];
  position?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
  direction?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
  onSelect(event: React.SyntheticEvent<HTMLDivElement>): void;
  onToggle(event: React.SyntheticEvent<HTMLDivElement>): void;
}

const defaultProps = {
  className: null,
  position: DropdownPosition.left,
  direction: DropdownDirection.down
};

class ToolbarActionList extends React.Component<ToolbarActionListProps, { isOpen: boolean }> {
  public static defaultProps;

  constructor(props: ToolbarActionListProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  public render() {
    return (
      <Dropdown
        className={css(styles.toolbarActionGroup, this.props.className)}
        dropdownItems={this.props.dropdownItems}
        isOpen={this.state.isOpen}
        isPlain
        onSelect={this.props.onSelect}
        toggle={<KebabToggle onToggle={this.props.onToggle} />}
      />
    );
  }
}

ToolbarActionList.defaultProps = defaultProps;

export default ToolbarActionList;
