import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { handleArrows } from '../../../helpers';

/** Acts as the container for the DualListSelectorControl sub-components. */

export interface DualListSelectorControlsWrapperProps extends React.HTMLProps<HTMLDivElement> {
  /** Content to be rendered inside of the controls wrapper. */
  children?: React.ReactNode;
  /** Additional classes added to the wrapper. */
  className?: string;
  /** @hide Forwarded ref */
  innerRef?: React.RefObject<HTMLDivElement>;
  /** Accessible label for the dual list selector controls wrapper. */
  'aria-label'?: string;
}

export const DualListSelectorControlsWrapperBase: React.FunctionComponent<DualListSelectorControlsWrapperProps> = ({
  innerRef,
  children = null,
  className,
  'aria-label': ariaLabel = 'Controls for moving options between lists',
  ...props
}: DualListSelectorControlsWrapperProps) => {
  const ref = React.useRef(null);
  const wrapperRef = innerRef || ref;
  // Adds keyboard navigation to the dynamically built dual list selector controls. Works when controls are dynamically built
  // as well as when they are passed in via children.
  const handleKeys = (event: KeyboardEvent) => {
    if (
      !wrapperRef.current ||
      (wrapperRef.current !== (event.target as HTMLElement).closest(`.${styles.dualListSelectorControls}`) &&
        !Array.from(wrapperRef.current.getElementsByClassName(styles.dualListSelectorControls)).includes(
          (event.target as HTMLElement).closest(`.${styles.dualListSelectorControls}`)
        ))
    ) {
      return;
    }
    event.stopImmediatePropagation();

    const controls = (Array.from(wrapperRef.current.getElementsByTagName('BUTTON')) as Element[]).filter(
      (el) => !el.classList.contains('pf-m-disabled')
    );
    const activeElement = document.activeElement;
    handleArrows(
      event,
      controls,
      (element: Element) => activeElement.contains(element),
      (element: Element) => element,
      undefined,
      undefined,
      true,
      false
    );
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeys);
    return () => {
      window.removeEventListener('keydown', handleKeys);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef.current]);

  return (
    <div
      className={css(styles.dualListSelectorControls, className)}
      tabIndex={0}
      ref={wrapperRef}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </div>
  );
};

DualListSelectorControlsWrapperBase.displayName = 'DualListSelectorControlsWrapperBase';

export const DualListSelectorControlsWrapper = React.forwardRef(
  (props: DualListSelectorControlsWrapperProps, ref: React.Ref<HTMLDivElement>) => (
    <DualListSelectorControlsWrapperBase innerRef={ref as React.MutableRefObject<any>} role="group" {...props} />
  )
);

DualListSelectorControlsWrapper.displayName = 'DualListSelectorControlsWrapper';
