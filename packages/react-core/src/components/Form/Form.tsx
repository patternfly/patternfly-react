import { forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';
import cssMaxWidth from '@patternfly/react-tokens/dist/esm/c_form_m_limit_width_MaxWidth';
import { useOUIAProps, OUIAProps } from '../../helpers';

export interface FormProps extends Omit<React.HTMLProps<HTMLFormElement>, 'ref'>, OUIAProps {
  /** Anything that can be rendered as Form content. */
  children?: React.ReactNode;
  /** Additional classes added to the Form. */
  className?: string;
  /** Sets the Form to horizontal. */
  isHorizontal?: boolean;
  /** Limits the max-width of the form. */
  isWidthLimited?: boolean;
  /** Sets a custom max-width for the form. */
  maxWidth?: string;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

const FormBase: React.FunctionComponent<FormProps> = ({
  children = null,
  className = '',
  isHorizontal = false,
  isWidthLimited = false,
  maxWidth = '',
  innerRef,
  ouiaId,
  ouiaSafe = true,
  ...props
}: FormProps) => {
  const ouiaProps = useOUIAProps(Form.displayName, ouiaId, ouiaSafe);
  return (
    <form
      noValidate
      {...(maxWidth && {
        style: {
          [cssMaxWidth.name]: maxWidth,
          ...props.style
        } as React.CSSProperties
      })}
      {...props}
      {...ouiaProps}
      className={css(
        styles.form,
        isHorizontal && styles.modifiers.horizontal,
        (isWidthLimited || maxWidth) && styles.modifiers.limitWidth,
        className
      )}
      ref={innerRef}
    >
      {children}
    </form>
  );
};

export const Form = forwardRef((props: FormProps, ref: React.Ref<any>) => <FormBase innerRef={ref} {...props} />);

Form.displayName = 'Form';
