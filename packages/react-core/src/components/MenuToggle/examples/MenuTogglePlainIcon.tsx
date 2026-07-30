import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';
import RhUiEllipsisVerticalFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ellipsis-vertical-fill-icon';

export const MenuTogglePlainIcon: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle icon={<RhUiEllipsisVerticalFillIcon />} variant="plain" aria-label="plain kebab" />{' '}
    <MenuToggle icon={<RhUiEllipsisVerticalFillIcon />} variant="plain" isExpanded aria-label="plain expanded kebab" />{' '}
    <MenuToggle icon={<RhUiEllipsisVerticalFillIcon />} variant="plain" isDisabled aria-label="disabled plain kebab" />
  </Fragment>
);
