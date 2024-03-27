import { HTMLProps, ReactNode, Ref, FunctionComponent, forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuGroupProps extends Omit<HTMLProps<HTMLElement>, 'label'> {
  /** Items within group */
  children?: ReactNode;
  /** Additional classes added to the MenuGroup */
  className?: string;
  /** Group label */
  label?: ReactNode;
  /** ID for title label */
  titleId?: string;
  /** @hide Forwarded ref */
  innerRef?: Ref<any>;
  /** Group label heading level. Default is h1. */
  labelHeadingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const MenuGroupBase: FunctionComponent<MenuGroupProps> = ({
  children,
  className = '',
  label = '',
  titleId,
  innerRef,
  labelHeadingLevel: HeadingLevel = 'h1',
  ...props
}: MenuGroupProps) => {
  const Wrapper = typeof label === 'function' ? label : HeadingLevel;
  return (
    <section {...props} className={css(styles.menuGroup, className)} ref={innerRef}>
      <>
        {['function', 'string'].includes(typeof label) ? (
          <Wrapper className={css(styles.menuGroupTitle)} id={titleId}>
            {label}
          </Wrapper>
        ) : (
          label
        )}
        {children}
      </>
    </section>
  );
};

export const MenuGroup = forwardRef((props: MenuGroupProps, ref: Ref<HTMLElement>) => (
  <MenuGroupBase {...props} innerRef={ref} />
));
MenuGroup.displayName = 'MenuGroup';
