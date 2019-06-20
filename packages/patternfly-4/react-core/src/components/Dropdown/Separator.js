import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { DropdownContext, DropdownArrowContext } from './dropdownConstants';
import DropdownItem from './InternalDropdownItem';

const Separator = ({ className, ...props }) => (
  <DropdownContext.Consumer>
    {({ separatorClass }) => (
      <DropdownArrowContext.Consumer>
        {context => (
          <DropdownItem
            {...props}
            context={context}
            className={css(separatorClass, className)}
            component="div"
            role="separator"
          />
        )}
      </DropdownArrowContext.Consumer>
    )}
  </DropdownContext.Consumer>
);

Separator.propTypes = {
  /** Classes applied to root element of dropdown item */
  className: PropTypes.string,
  /** Additional props are passed to the DropdownItem */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

Separator.defaultProps = {
  className: ''
};

export default Separator;
