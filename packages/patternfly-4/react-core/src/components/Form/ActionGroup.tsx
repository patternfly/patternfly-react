import * as React from 'react';
import styles from '@patternfly/patternfly/components/Form/form.css';
import { css } from '@patternfly/react-styles';
import { FormContext } from './FormContext';

export interface ActionGroupProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const ActionGroup: React.FunctionComponent<ActionGroupProps> = ({
  children = null,
  className = '',
  ...props
}) => {
  const customClassName = css(styles.formGroup, styles.modifiers.action, className);
  const classesHorizontal = css(styles.formHorizontalGroup);

  const formActionsComponent = <div className={css(styles.formActions)}>{children}</div>;
  return (
    <FormContext.Consumer>
      {({ isHorizontal }: { isHorizontal: boolean }) => (
        <div {...props} className={customClassName}>
          {isHorizontal ? <div className={classesHorizontal}>{formActionsComponent}</div> : formActionsComponent}
        </div>
      )}
    </FormContext.Consumer>
  );
};
