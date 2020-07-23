import React from 'react';
import { Tile } from '@patternfly/react-core';
import PlusIcon from '@patternfly/react-icons/dist/js/icons/plus-icon';

export class TileDemo extends React.Component {
  static displayName = 'TileDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Tile title="Basic" id="basic" />
        <br />
        <Tile title="Selected" id="selected" isSelected />
        <br />
        <Tile title="Disabled" id="disabled" isDisabled />
        <br />
        <Tile title="Basic Text" id="subtext">
          Subtext is here
        </Tile>
        <br />
        <Tile title="Icon" id="icon" icon={<PlusIcon />}>
          Subtext is here
        </Tile>
        <br />
        <Tile title="Stacked Icon" id="stacked-icon" icon={<PlusIcon />} isStacked>
          Subtext is here
        </Tile>
        <br />
        <Tile title="Stacked Large Icon" id="large-icon" icon={<PlusIcon />} isStacked isLargeIcon>
          Subtext is here
        </Tile>
      </React.Fragment>
    );
  }
}
