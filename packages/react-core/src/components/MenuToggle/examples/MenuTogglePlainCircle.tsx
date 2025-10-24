import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const MenuTogglePlainCircle: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle isCircle icon={<EllipsisVIcon />} variant="plain" aria-label="plain circle kebab" />{' '}
    <MenuToggle isCircle icon={<EllipsisVIcon />} variant="plain" isExpanded aria-label="plain circle expanded kebab" />{' '}
    <MenuToggle isCircle icon={<EllipsisVIcon />} variant="plain" isDisabled aria-label="disabled plain circle kebab" />
  </Fragment>
);
