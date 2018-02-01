import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardContainer = ({ children, className, ...props }) => {
    const classes = ClassNames('container-fluid container-cards-pf', className);

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};
CardContainer.propTypes = {
    /** Child node - contents of the element */
    children: PropTypes.node.isRequired,
    /** Additional element css classes */
    className: PropTypes.string
};
export default CardContainer;
