import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const MenuTogglePlainIcon: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle icon={<EllipsisVIcon />} variant="plain" aria-label="plain kebab" />{' '}
    <MenuToggle icon={<EllipsisVIcon />} variant="plain" isExpanded aria-label="plain expanded kebab" />{' '}
    <MenuToggle icon={<EllipsisVIcon />} variant="plain" isDisabled aria-label="disabled plain kebab" />
  </Fragment>
);
