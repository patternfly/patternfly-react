import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Splitter/splitter';
import { css } from '@patternfly/react-styles';

export enum SplitterOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export interface SplitterProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the splitter. */
  className?: string;
  /** Orientation of the splitter */
  orientation?: 'horizontal' | 'vertical';
  /** A reference object to attach to the splitter. */
  innerRef?: React.RefObject<any>;
}

const SplitterBase: React.FunctionComponent<SplitterProps> = ({
  className = '',
  orientation = 'horizontal',
  innerRef = React.createRef<HTMLDivElement>(),
  ...props
}: SplitterProps) => (
  <div
    className={css(styles.splitter, orientation === 'vertical' && styles.modifiers.vertical, className)}
    role="separator"
    tabIndex={0}
    {...{ 'aria-orientation': orientation }}
    ref={innerRef}
    {...props}
  >
    <div className={css(styles.splitterHandle)} />
  </div>
);
export const Splitter = React.forwardRef((props: SplitterProps, ref: React.Ref<HTMLDivElement>) => (
  <SplitterBase {...props} innerRef={ref as React.MutableRefObject<any>} />
));
Splitter.displayName = 'Splitter';
