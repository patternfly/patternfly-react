import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardBody = ({ children, className, ...props }) => {
    const classes = ClassNames('p', 'card-pf-body', className);

    return (
        <p className={classes} {...props}>
            {children}
        </p>
    );
};
CardBody.propTypes = {
    /** Child node - contents of the element */
    children: PropTypes.node.isRequired,
    /** Additional element css classes */
    className: PropTypes.string
};
export default CardBody;
