import { Avatar } from '@patternfly/react-core';

const profileSvg = (
  <svg aria-hidden="true" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 36 36">
    <path fill="currentColor" d="M17.7,20.1c-3.5,0-6.4-2.9-6.4-6.4s2.9-6.4,6.4-6.4,6.4,2.9,6.4,6.4-2.8,6.4-6.4,6.4Z" />
    <path
      fill="currentColor"
      d="M30.6,36c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4,1.2-3.4,2.6-1.7,1.9-2.6,7.1-3,10.9h25.2Z"
    />
  </svg>
);

export const AvatarColorModifiers: React.FunctionComponent = () => (
  <>
    <Avatar color="red" alt="red avatar">
      {profileSvg}
    </Avatar>
    <Avatar color="orangered" alt="orangered avatar">
      {profileSvg}
    </Avatar>
    <Avatar color="orange" alt="orange avatar">
      {profileSvg}
    </Avatar>
    <Avatar color="yellow" alt="yellow avatar">
      {profileSvg}
    </Avatar>
    <Avatar color="green" alt="green avatar">
      {profileSvg}
    </Avatar>
    <Avatar color="teal" alt="teal avatar">
      {profileSvg}
    </Avatar>
    <Avatar color="blue" alt="blue avatar">
      {profileSvg}
    </Avatar>
    <Avatar color="purple" alt="purple avatar">
      {profileSvg}
    </Avatar>
    <Avatar color="gray" alt="gray avatar">
      {profileSvg}
    </Avatar>
  </>
);
