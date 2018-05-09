import { SFC, MouseEvent } from 'react';

export interface PagerMessages {
  nextPage?: string;
  previousPage?: string;
}

export interface PagerProps {
  /** Base css class */
  baseClassName?: string;
  /** Additional css classes */
  className?: string;
  /** next button disabled */
  disableNext?: boolean;
  /** previous button disabled */
  disablePrevious?: boolean;
  /** message text inputs for i18n */
  messages?: PagerMessages;
  /** next page callback */
  onNextPage?(event: MouseEvent<HTMLAnchorElement>): void;
  /** previous page callback */
  onPreviousPage?(event: MouseEvent<HTMLAnchorElement>): void;
}

declare const Pager: SFC<PagerProps>;

export default Pager;
