import * as React from 'react';
import { createFocusTrap, Options as FocusTrapOptions, FocusTrap as IFocusTrap } from 'focus-trap';

interface FocusTrapProps extends Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  paused?: boolean;
  focusTrapOptions?: FocusTrapOptions;
  /** Prevent from scrolling to the previously focused element on deactivation */
  preventScrollOnDeactivate?: boolean;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
}

class FocusTrapBase extends React.Component<FocusTrapProps> {
  static displayName = 'FocusTrap';
  previouslyFocusedElement: HTMLElement;
  focusTrap: IFocusTrap;
  divRef = (this.props.innerRef as React.RefObject<HTMLDivElement>) || React.createRef<HTMLDivElement>();

  static defaultProps = {
    active: true,
    paused: false,
    focusTrapOptions: {},
    preventScrollOnDeactivate: false
  };

  constructor(props: FocusTrapProps) {
    super(props);

    if (typeof document !== 'undefined') {
      this.previouslyFocusedElement = document.activeElement as HTMLElement;
    }
  }

  componentDidMount() {
    // We need to hijack the returnFocusOnDeactivate option,
    // because React can move focus into the element before we arrived at
    // this lifecycle hook (e.g. with autoFocus inputs). So the component
    // captures the previouslyFocusedElement in componentWillMount,
    // then (optionally) returns focus to it in componentWillUnmount.
    this.focusTrap = createFocusTrap(this.divRef.current, {
      ...this.props.focusTrapOptions,
      returnFocusOnDeactivate: false
    });
    if (this.props.active) {
      this.focusTrap.activate();
    }
    if (this.props.paused) {
      this.focusTrap.pause();
    }
  }

  componentDidUpdate(prevProps: FocusTrapProps) {
    if (prevProps.active && !this.props.active) {
      this.focusTrap.deactivate();
    } else if (!prevProps.active && this.props.active) {
      this.focusTrap.activate();
    }

    if (prevProps.paused && !this.props.paused) {
      this.focusTrap.unpause();
    } else if (!prevProps.paused && this.props.paused) {
      this.focusTrap.pause();
    }
  }

  componentWillUnmount() {
    this.focusTrap.deactivate();
    if (
      this.props.focusTrapOptions.returnFocusOnDeactivate !== false &&
      this.previouslyFocusedElement &&
      this.previouslyFocusedElement.focus
    ) {
      this.previouslyFocusedElement.focus({ preventScroll: this.props.preventScrollOnDeactivate });
    }
  }

  render() {
    const {
      children,
      className,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      focusTrapOptions,
      active,
      paused,
      preventScrollOnDeactivate,
      innerRef,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...rest
    } = this.props;
    return (
      <div ref={this.divRef} className={className} {...rest}>
        {children}
      </div>
    );
  }
}

export const FocusTrap = React.forwardRef((props: FocusTrapProps, ref: React.Ref<any>) => (
  <FocusTrapBase innerRef={ref} {...props} />
));
