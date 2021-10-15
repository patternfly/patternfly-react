import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

export interface TextInputGroupMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the text input group main div */
  children?: React.ReactNode;
  /** Additional classes applied to the text input group main container */
  className?: string;
  /** Flag indicating that a search icon should be displayed in the input */
  hasSearchIcon?: boolean;
  /** Callback for when there is a change in the input field*/
  onChange?: () => void;
}

export const TextInputGroupMain: React.FunctionComponent<TextInputGroupMainProps> = ({
  children,
  className,
  hasSearchIcon,
  onChange,
  ...props
}: TextInputGroupMainProps) => (
  <div {...props} className={css(styles.textInputGroupMain, className)}>
    {children}
    <span className={css(styles.textInputGroupText)}>
      {hasSearchIcon && (
        <span className={css(styles.textInputGroupIcon)}>
          <SearchIcon />
        </span>
      )}
      <input
        type="text"
        className={css(styles.textInputGroupTextInput)}
        aria-label="Type to filter"
        onChange={onChange}
      />
    </span>
  </div>
);

TextInputGroupMain.displayName = 'TextInputGroupMain';
