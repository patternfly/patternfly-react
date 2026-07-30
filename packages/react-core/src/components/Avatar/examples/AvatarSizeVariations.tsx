import { Avatar } from '@patternfly/react-core';

export const AvatarSizeVariations: React.FunctionComponent = () => (
  <>
    <Avatar alt="small red avatar with initial C" initials="C" color="red" size="sm" />
    <Avatar alt="medium red avatar with initial C" initials="C" color="red" size="md" />
    <Avatar alt="large red avatar with initial C" initials="C" color="red" size="lg" />
    <Avatar alt="extra large red avatar with initial C" initials="C" color="red" size="xl" />
  </>
);
