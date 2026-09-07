import { forwardRef } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface TfootProps extends React.HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <tfoot> row group */
  children?: React.ReactNode;
  /** Additional classes added to the <tfoot> element */
  className?: string;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

const TfootBase: React.FunctionComponent<TfootProps> = ({ children, className, innerRef, ...props }: TfootProps) => (
  <tfoot className={css(styles.tableTfoot, className)} ref={innerRef} {...props}>
    {children}
  </tfoot>
);

export const Tfoot = forwardRef((props: TfootProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <TfootBase {...props} innerRef={ref} />
));
Tfoot.displayName = 'Tfoot';
