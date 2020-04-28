import * as React from 'react';
import { Button } from '@patternfly/react-core';
import PencilAltIcon from '@patternfly/react-icons/dist/js/icons/pencil-alt-icon';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import { OnRowEdit } from './Table';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import classNames from 'classnames';

export interface EditColumnProps {
  name?: string;
  className?: string;
  onClick?: OnRowEdit;
  editing?: boolean;
  valid?: boolean;
  saveAriaLabel: string;
  cancelAriaLabel: string;
  editAriaLabel: string;
}

export const EditColumn: React.FunctionComponent<EditColumnProps> = ({
  onClick = null,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  className = '',
  editing,
  valid,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  saveAriaLabel,
  cancelAriaLabel,
  editAriaLabel,
  ...props
}: EditColumnProps) => (
  <React.Fragment>
    <div className={classNames(inlineStyles.inlineEditGroup, inlineStyles.modifiers.iconGroup, 'pf-m-action-group')}>
      <div className={classNames(inlineStyles.inlineEditAction)}>
        <Button aria-label={saveAriaLabel} {...props} onClick={e => onClick(e, 'save')} variant="plain">
          <CheckIcon />
        </Button>
      </div>
      <div className={classNames(inlineStyles.inlineEditAction)}>
        <Button aria-label={cancelAriaLabel} {...props} onClick={e => onClick(e, 'cancel')} variant="plain">
          <TimesIcon />
        </Button>
      </div>
    </div>
    <div className={classNames(inlineStyles.inlineEditAction, inlineStyles.modifiers.enableEditable)}>
      <Button aria-label={editAriaLabel} {...props} onClick={e => onClick(e, 'edit')} variant="plain">
        <PencilAltIcon />
      </Button>
    </div>
  </React.Fragment>
);
