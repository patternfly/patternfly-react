import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import topSpacer from '@patternfly/react-tokens/dist/esm/c_modal_box_m_align_top_spacer';

export interface ModalBoxProps extends React.HTMLProps<HTMLDivElement> {
  /** Id to use for the modal box description. */
  'aria-describedby': string;
  /** Accessible descriptor of the modal. */
  'aria-label'?: string;
  /** Id to use for the modal box label. */
  'aria-labelledby'?: string;
  /** Content rendered inside the modal box. */
  children: React.ReactNode;
  /** Additional classes added to the modal box. */
  className?: string;
  /** Alternate position of the modal. */
  position?: 'top';
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset?: string;
  /** Variant of the modal. */
  variant?: 'small' | 'medium' | 'large' | 'default';
}

export const ModalBox: React.FunctionComponent<ModalBoxProps> = ({
  children,
  className = '',
  variant = 'default',
  position,
  positionOffset,
  'aria-labelledby': ariaLabelledby,
  'aria-label': ariaLabel = '',
  'aria-describedby': ariaDescribedby,
  style,
  ...props
}: ModalBoxProps) => {
  if (positionOffset) {
    style = style || {};
    (style as any)[topSpacer.name] = positionOffset;
  }
  return (
    <div
      {...props}
      role="dialog"
      aria-label={ariaLabel || null}
      aria-labelledby={ariaLabelledby || null}
      aria-describedby={ariaDescribedby}
      aria-modal="true"
      className={css(
        styles.modalBox,
        className,
        position === 'top' && styles.modifiers.alignTop,
        variant === 'large' && styles.modifiers.lg,
        variant === 'small' && styles.modifiers.sm,
        variant === 'medium' && styles.modifiers.md
      )}
      style={style}
    >
      {children}
    </div>
  );
};
ModalBox.displayName = 'ModalBox';
