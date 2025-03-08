
import * as React from 'react';
import { IconWrapper } from '../IconWrapper';

/**
 * FingerprintIcon - fingerprint icon component
 */
export const FingerprintIcon = (props) => (
  <IconWrapper {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* SVG content for fingerprint */}
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  </IconWrapper>
);

FingerprintIcon.displayName = 'FingerprintIcon';

export default FingerprintIcon;
