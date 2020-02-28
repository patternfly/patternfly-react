import React from 'react';
import { VerticalNav, Masthead } from '../../../index';
import { mockNavItems } from './mockNavItems';

export class MockWithMastHeadComponent extends React.Component {
  state = {
    collapse: false
  };

  onCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <VerticalNav
        sessionKey="storybookCustomMasthead"
        items={mockNavItems}
        masthead={<Masthead onNavToggleClick={() => this.onCollapse()} />}
        navCollapsed={this.state.collapse}
        showBadges
      />
    );
  }
}

export const mockWithMastHeadSource = `
import React from 'react';
import { VerticalNav, MastHead as MastheadPf } from '../../../index';
import { mockNavItems } from './mockNavItems';

export class MockWithMastHeadComponent extends React.Component {
  state = {
    collapse: false
  };

  onCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <VerticalNav
        sessionKey="storybookCustomMasthead"
        items={mockNavItems}
        masthead={<Masthead onNavToggleClick={() => this.onCollapse()} />}
        navCollapsed={this.state.collapse}
        showBadges
      />
    );
  }
}
`;
