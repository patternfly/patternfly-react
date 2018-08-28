import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { noop } from '../../common/helpers';

/**
 * Pager component for Patternfly React
 */
const Pager = ({ baseClassName, className, messages, disableNext, onNextPage, disablePrevious, onPreviousPage }) => {
  const classes = classNames('pager', className);
  return (
    <ul className={classes}>
      <li className={classNames({ disabled: disablePrevious }, 'previous')}>
        <a
          href="#"
          className={classNames({ disabled: disablePrevious })}
          onClick={e => {
            e.preventDefault();
            if (!disablePrevious) {
              onPreviousPage(e);
            }
          }}
        >
          <Icon className="i" name="angle-left" />
          {messages.previousPage}
        </a>
      </li>
      <li className={classNames({ disabled: disableNext }, 'next')}>
        <a
          href="#"
          className={classNames({ disabled: disableNext })}
          onClick={e => {
            e.preventDefault();
            if (!disableNext) {
              onNextPage(e);
            }
          }}
        >
          {messages.nextPage}
          <Icon className="i" name="angle-right" />
        </a>
      </li>
    </ul>
  );
};
Pager.propTypes = {
  /** Base css class */
  baseClassName: PropTypes.string,
  /** Additional css classes */
  className: PropTypes.string,
  /** message text inputs for i18n */
  messages: PropTypes.shape({
    nextPage: PropTypes.string,
    previousPage: PropTypes.string
  }),
  /** next button disabled */
  disableNext: PropTypes.bool,
  /** next page callback */
  onNextPage: PropTypes.func,
  /** previous button disabled */
  disablePrevious: PropTypes.bool,
  /** previous page callback */
  onPreviousPage: PropTypes.func
};
Pager.defaultProps = {
  baseClassName: 'content-view-pf-pagination',
  className: '',
  messages: {
    nextPage: 'Next',
    previousPage: 'Previous'
  },
  disableNext: false,
  onNextPage: noop,
  disablePrevious: false,
  onPreviousPage: noop
};
export default Pager;
