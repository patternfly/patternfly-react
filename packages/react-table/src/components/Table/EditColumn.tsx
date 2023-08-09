import * as React from 'react';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import PencilAltIcon from '@patternfly/react-icons/dist/esm/icons/pencil-alt-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { OnRowEdit } from './TableTypes';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';

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
    <div className={css(inlineStyles.inlineEditGroup, inlineStyles.modifiers.iconGroup, 'pf-m-action-group')}>
      <div className={css(inlineStyles.inlineEditAction)}>
        <Button aria-label={saveAriaLabel} {...props} onClick={(e) => onClick(e, 'save')} variant="plain">
          <CheckIcon />
        </Button>
      </div>
      <div className={css(inlineStyles.inlineEditAction)}>
        <Button aria-label={cancelAriaLabel} {...props} onClick={(e) => onClick(e, 'cancel')} variant="plain">
          <TimesIcon />
        </Button>
      </div>
    </div>
    <div className={css(inlineStyles.inlineEditAction, inlineStyles.modifiers.enableEditable)}>
      <Button aria-label={editAriaLabel} {...props} onClick={(e) => onClick(e, 'edit')} variant="plain">
        <PencilAltIcon />
      </Button>
    </div>
  </React.Fragment>
);
EditColumn.displayName = 'EditColumn';
