import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';
import RhUiEllipsisVerticalFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ellipsis-vertical-fill-icon';

export const MenuTogglePlainIcon: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle
      aria-haspopup={false}
      icon={<RhUiEllipsisVerticalFillIcon />}
      variant="plain"
      aria-label="plain kebab"
    />{' '}
    <MenuToggle
      aria-haspopup={false}
      icon={<RhUiEllipsisVerticalFillIcon />}
      variant="plain"
      isExpanded
      aria-label="plain expanded kebab"
    />{' '}
    <MenuToggle
      aria-haspopup={false}
      icon={<RhUiEllipsisVerticalFillIcon />}
      variant="plain"
      isDisabled
      aria-label="disabled plain kebab"
    />
  </Fragment>
);
