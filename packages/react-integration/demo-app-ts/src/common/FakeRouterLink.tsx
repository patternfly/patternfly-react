import React from 'react';

export const FakeRouterLink = ({ to, children, ...props }: any) => (
  <a href={to} {...props}>
    {children}
  </a>
);
