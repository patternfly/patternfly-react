import React from 'react';
import PropTypes from 'prop-types';
import { Title, TitleSizes } from '@patternfly/react-core';
import { TopologySideBar } from '@patternfly/react-topology';

export class ItemDetails extends React.Component {
  render() {
    const { show, onClose } = this.props;

    const header = (
      <div className="pf-u-m-lg">
        <Title headingLevel="h1" size={TitleSizes['2xl']}>
          Item Details
        </Title>
        <p>Short description of the selected item.</p>
      </div>
    );

    return (
      <TopologySideBar show={show} onClose={onClose} header={header}>
        <div className="pf-u-mx-lg">
          <p id="custom-header-example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <br />
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </TopologySideBar>
    );
  }
}

ItemDetails.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func
};

ItemDetails.defaultProps = {
  show: false,
  onClose: () => undefined
};
