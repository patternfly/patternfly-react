import React from 'react';
import PropTypes from 'prop-types';
import { Popover, ListGroup, ListGroupItem, Pager, Spinner, TypeAheadSelect } from '../../../index';
import EllipsisWithTooltip from 'react-ellipsis-with-tooltip';
import BreadcrumbSearchInput from './BreadcrumbSearchInput';
import { noop } from '../../../common/helpers';
import { removeLastSlashFromPath, getCurrentPath } from '../BreadcrumbSwitcherHelper';

const BreadcrumbSwitcherPopover = ({
  resources,
  onResourceClick,
  onNextPageClick,
  onPrevPageClick,
  loading,
  isPaginated,
  hasError,
  currentPage,
  totalPages,
  onSearchChange,
  onSearchClear,
  searchValue,
  searchDebounceTimeout,
  resourceLoadError,
  ...props
}) => {
  let popoverBody;

  if (loading) {
    popoverBody = (
      <div className="breadcrumb-switcher-popover-loading text-center">
        <Spinner loading size="md" />
      </div>
    );
  } else if (hasError) {
    popoverBody = <div className="breadcrumb-switcher-popover-error">{resourceLoadError}</div>;
  } else {
    const createItemProps = item => {
      const { id, href, name } = item;
      const key = `${id}-${name}`;
      const hrefWithName = href ? removeLastSlashFromPath(href.replace(id, name)) : href;

      const itemProps = {
        key,
        id: key,
        className: 'no-border',
        active: href === window.location.pathname || getCurrentPath() === hrefWithName
      };

      if (itemProps.active) {
        return { ...itemProps, disabled: true };
      }

      return { ...itemProps, onClick: e => onResourceClick(e, href, id), href };
    };
    popoverBody = (
      <React.Fragment>
        <ListGroup className="scrollable-list">
          {resources.map(resource => (
            <ListGroupItem {...createItemProps(resource)}>
              <EllipsisWithTooltip>
                {searchValue && searchValue.length ? (
                  <TypeAheadSelect.Highlighter search={searchValue}>{resource.name}</TypeAheadSelect.Highlighter>
                ) : (
                  resource.name
                )}
              </EllipsisWithTooltip>
            </ListGroupItem>
          ))}
        </ListGroup>
        {isPaginated && (
          <Pager
            className="pager-sm"
            messages={{ nextPage: '', previousPage: '' }}
            onNextPage={onNextPageClick}
            onPreviousPage={onPrevPageClick}
            disablePrevious={currentPage === 1}
            disableNext={totalPages === 0 || currentPage === Math.ceil(totalPages)}
          />
        )}
      </React.Fragment>
    );
  }

  return (
    <Popover className="breadcrumb-switcher-popover" {...props}>
      <BreadcrumbSearchInput
        onClear={onSearchClear}
        timeout={searchDebounceTimeout}
        focus
        onSearchChange={onSearchChange}
        searchValue={searchValue}
      />
      {popoverBody}
    </Popover>
  );
};

BreadcrumbSwitcherPopover.propTypes = {
  ...Popover.propTypes,
  searchValue: PropTypes.string,
  loading: PropTypes.bool,
  hasError: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  onSearchChange: PropTypes.func,
  onResourceClick: PropTypes.func,
  isPaginated: PropTypes.bool.isRequired
};

BreadcrumbSwitcherPopover.defaultProps = {
  searchValue: '',
  loading: false,
  hasError: false,
  currentPage: 1,
  totalPages: 1,
  resources: [],
  onResourceClick: noop,
  onSearchChange: noop
};

export default BreadcrumbSwitcherPopover;
