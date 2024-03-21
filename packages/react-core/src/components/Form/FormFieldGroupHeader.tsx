import { ReactNode, HTMLProps, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';

// typo - rename to FormFieldGroupHeaderTitleTextObject during breaking change release
export interface FormFiledGroupHeaderTitleTextObject {
  /** Title text. */
  text: ReactNode;
  /** The applied to the title div for accessibility */
  id: string;
}

export interface FormFieldGroupHeaderTitleTextObject extends FormFiledGroupHeaderTitleTextObject {}

export interface FormFieldGroupHeaderProps extends HTMLProps<HTMLDivElement> {
  /** Additional classes added to the section */
  className?: string;
  /** Field group header title text */
  titleText?: FormFieldGroupHeaderTitleTextObject;
  /** Field group header title description */
  titleDescription?: ReactNode;
  /** Field group header actions */
  actions?: ReactNode;
}

export const FormFieldGroupHeader: FunctionComponent<FormFieldGroupHeaderProps> = ({
  className,
  titleText,
  titleDescription,
  actions,
  ...props
}: FormFieldGroupHeaderProps) => (
  <div className={css(styles.formFieldGroupHeader, className)} {...props}>
    <div className={css(styles.formFieldGroupHeaderMain)}>
      {titleText && (
        <div className={css(styles.formFieldGroupHeaderTitle)}>
          <div className={css(styles.formFieldGroupHeaderTitleText)} id={titleText.id}>
            {titleText.text}
          </div>
        </div>
      )}
      {titleDescription && <div className={css(styles.formFieldGroupHeaderDescription)}>{titleDescription}</div>}
    </div>
    <div className={css(styles.formFieldGroupHeaderActions)}>{actions && actions}</div>
  </div>
);
FormFieldGroupHeader.displayName = 'FormFieldGroupHeader';
