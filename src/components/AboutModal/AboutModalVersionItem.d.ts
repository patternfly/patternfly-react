import { SFC, HTMLAttributes } from 'react';

export interface AboutModalVersionItemProps
  extends HTMLAttributes<HTMLLIElement> {
  /** Label for the version */
  label: string;
  /** Text for the version */
  versionText: string;
}

declare const AboutModalVersionItem: SFC<AboutModalVersionItemProps>;

export default AboutModalVersionItem;
