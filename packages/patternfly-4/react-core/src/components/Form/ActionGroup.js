import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Form/form.css';
import { css, getModifier } from '@patternfly/react-styles';
import { FormContext } from '../Form/FormContext';

const propTypes = {
  /** Anything that can be rendered as ActionGroup content. */
  children: PropTypes.node,
  /** Additional classes added to the ActionGroup. */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: ''
};

const ActionGroup = ({ className, children, ...props }) => {
  const customClassName = css(styles.formGroup, styles.modifiers.action, className);
  const classesHorizontal = css(styles.formHorizontalGroup);

  const formActionsComponent = <div className={css(styles.formActions)}>{children}</div>;
  return (
    <FormContext.Consumer>
      {({ isHorizontal }) => (
        <div {...props} className={customClassName}>
          {isHorizontal ? <div className={classesHorizontal}>{formActionsComponent}</div> : formActionsComponent}
        </div>
      )}
    </FormContext.Consumer>
  );
};

ActionGroup.propTypes = propTypes;
ActionGroup.defaultProps = defaultProps;

export default ActionGroup;
