import { ReactNode, SFC } from 'react';

export interface ListViewRowProps {
  /** Node which renders right-positioned actions (e.g. Buttons, DropdownKebab...) */
  actions?: ReactNode;
  /** An array of ListViewInfoItem instances to render additional info items */
  additionalInfo?: ReactNode;
  /** Contents of ListViewItem description section */
  description?: ReactNode;
  /** Contents of ListViewItem heading */
  heading?: ReactNode;
  /** Contents for left section of ListViewItem (usually ListViewIcon) */
  leftContent?: ReactNode;
  /** Checkbox form input component */
  checkboxInput?: ReactNode;
}

declare const ListViewRow: SFC<ListViewRowProps>;

export default ListViewRow;
