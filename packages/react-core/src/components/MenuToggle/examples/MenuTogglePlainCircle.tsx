import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';
import RhUiEllipsisVerticalFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ellipsis-vertical-fill-icon';

export const MenuTogglePlainCircle: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle isCircle icon={<RhUiEllipsisVerticalFillIcon />} variant="plain" aria-label="plain circle kebab" />{' '}
    <MenuToggle
      isCircle
      icon={<RhUiEllipsisVerticalFillIcon />}
      variant="plain"
      isExpanded
      aria-label="plain circle expanded kebab"
    />{' '}
    <MenuToggle
      isCircle
      icon={<RhUiEllipsisVerticalFillIcon />}
      variant="plain"
      isDisabled
      aria-label="disabled plain circle kebab"
    />
  </Fragment>
);
