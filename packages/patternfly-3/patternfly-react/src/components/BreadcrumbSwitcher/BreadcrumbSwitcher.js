import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Overlay } from '../Overlay';

import { noop } from '../../common/helpers';

import BreadcrumbSwitcherPopover from './components/BreadcrumbSwitcherPopover';
import BreadcrumbSwitcherToggler from './components/BreadcrumbSwitcherToggler';

class BreadcrumbSwitcher extends Component {
  componentDidUpdate(prevProps) {
    const { open, onOpen } = this.props;

    if (open === true && prevProps.open === false) {
      onOpen();
    }
  }

  render() {
    const {
      className,
      open,
      onOpen,
      currentPage,
      totalPages,
      isLoading,
      isPaginated,
      hasError,
      resources,
      onTogglerClick,
      onHide,
      onNextPageClick,
      onPrevPageClick,
      onSearchChange,
      searchValue,
      onSearchClear,
      searchDebounceTimeout,
      onResourceClick,
      ...props
    } = this.props;
    const classes = classNames('breadcrumb-switcher', className);

    return (
      <div className={classes} {...props}>
        <BreadcrumbSwitcherToggler
          id="switcher"
          onClick={() => onTogglerClick()}
          ref={ref => {
            this.togglerRef = ref;
          }}
        />

        <Overlay
          rootClose
          show={open}
          container={this}
          placement="bottom"
          onHide={onHide}
          // TODO: try to remove the `ReactDOM.findDOMNode`
          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
          // react-bootstrap still have it in their docs: https://react-bootstrap.github.io/components/overlays/
          // eslint-disable-next-line react/no-find-dom-node
          target={() => ReactDOM.findDOMNode(this.togglerRef)}
        >
          <BreadcrumbSwitcherPopover
            id="breadcrumb-switcher-popover"
            loading={isLoading}
            isPaginated={isPaginated}
            hasError={hasError}
            onSearchChange={onSearchChange}
            resources={resources}
            onNextPageClick={onNextPageClick}
            onPrevPageClick={onPrevPageClick}
            currentPage={currentPage}
            totalPages={totalPages}
            searchValue={searchValue}
            onSearchClear={onSearchClear}
            searchDebounceTimeout={searchDebounceTimeout}
            onResourceClick={onResourceClick}
          />
        </Overlay>
      </div>
    );
  }
}

BreadcrumbSwitcher.propTypes = {
  /** className */
  className: PropTypes.string,
  /** search box value */
  searchValue: PropTypes.string,
  /** is switcher open bool */
  open: PropTypes.bool,
  /** searchDebounceTimeout */
  searchDebounceTimeout: PropTypes.number,
  /** current Page */
  currentPage: PropTypes.number,
  /** total Pages */
  totalPages: PropTypes.number,
  /** is Loadnig bool */
  isLoading: PropTypes.bool,
  /** is Paginated bool */
  isPaginated: PropTypes.bool,
  /** has Error bool */
  hasError: PropTypes.bool,
  /** Breadcrumb resources */
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  /** function() onTogglerClick func */
  onTogglerClick: PropTypes.func,
  /** function() onHide func */
  onHide: PropTypes.func,
  /** function() onOpen func */
  onOpen: PropTypes.func,
  /** function() onPrevPageClick func */
  onPrevPageClick: PropTypes.func,
  /** function() onNextPageClick func */
  onNextPageClick: PropTypes.func,
  /** function(resource) onResourceClick func */
  onResourceClick: PropTypes.func,
  /** function(newSearch) onSearchChange func */
  onSearchChange: PropTypes.func,
  /** function() onSearchClear func */
  onSearchClear: PropTypes.func
};

BreadcrumbSwitcher.defaultProps = {
  className: '',
  searchValue: '',
  open: false,
  searchDebounceTimeout: 300,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  isPaginated: true,
  hasError: false,
  resources: [],
  onTogglerClick: noop,
  onHide: noop,
  onOpen: noop,
  onResourceClick: noop,
  onPrevPageClick: noop,
  onNextPageClick: noop,
  onSearchChange: noop,
  onSearchClear: noop
};

export default BreadcrumbSwitcher;
