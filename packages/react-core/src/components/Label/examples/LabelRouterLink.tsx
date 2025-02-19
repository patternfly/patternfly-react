import React from 'react';
import { Label } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

export const LabelRouterLink: React.FunctionComponent = () => (
  <Label
    color="blue"
    icon={<InfoCircleIcon />}
    onClose={() => Function.prototype}
    render={({ className, content, componentRef }) => (
      <a className={className} ref={componentRef}>
        {content}
      </a>
      /** A router link would look like the following:
       * <Link to="/" className={className} ref={componentRef}>
       *   {content}
       * </Link>
       */
    )}
    textMaxWidth="16ch"
    isClickable // can be passed manually to remove the default underline text-decoration of links
  >
    Blue label router link with icon that overflows
  </Label>
);
