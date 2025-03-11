import { createRef } from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListTermHelpTextButtonProps extends React.HTMLProps<HTMLSpanElement> {
  /** Anything that can be rendered inside of list term */
  children: React.ReactNode;
  /** Additional classes added to the DescriptionListTerm */
  className?: string;
}

export const DescriptionListTermHelpTextButton: React.FunctionComponent<DescriptionListTermHelpTextButtonProps> = ({
  children,
  className,
  ...props
}: DescriptionListTermHelpTextButtonProps) => {
  const helpTextRef = createRef<HTMLSpanElement>();

  const handleKeys = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (!helpTextRef.current || helpTextRef.current !== (event.target as HTMLElement)) {
      return;
    }

    const key = event.key;
    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      helpTextRef.current.click();
    }
  };

  return (
    <span
      ref={helpTextRef}
      className={css(className, styles.descriptionListText, styles.modifiers.helpText)}
      role="button"
      type="button"
      tabIndex={0}
      onKeyDown={(event) => handleKeys(event)}
      {...props}
    >
      {children}
    </span>
  );
};
DescriptionListTermHelpTextButton.displayName = 'DescriptionListTermHelpTextButton';
