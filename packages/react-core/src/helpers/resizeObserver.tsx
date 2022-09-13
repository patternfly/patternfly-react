import { canUseDOM } from './util';

/**
 * This function creates a ResizeObserver used to handle resize events for the given containerRef. If ResizeObserver
 * or the given containerRef are not available, a window resize event listener is used by default.
 *
 * Example 1:
 *
 * private containerRef = React.createRef<HTMLDivElement>();
 * private observer: any = () => {};
 *
 * public componentDidMount() {
 *   this.observer = getResizeObserver(this.containerRef.current, this.handleResize);
 * }
 *
 * public componentWillUnmount() {
 *   this.observer();
 * }
 *
 * private handleResize = () => {
 *   if (this.containerRef.current && this.containerRef.current.clientWidth) {
 *     this.setState({ width: this.containerRef.current.clientWidth });
 *   }
 * };
 *
 * public render() {
 *   return (
 *     <div ref={this.containerRef} >
 *       <Chart width={this.state.width} ... />
 *     </div>
 *   );
 * }
 *
 * Example 2:
 *
 * private inputRef = React.createRef<HTMLInputElement>();
 * private observer: any = () => {};
 *
 * public componentDidMount() {
 *   this.observer = getResizeObserver(this.inputRef.current, this.handleResize);
 * }
 *
 * public componentWillUnmount() {
 *   this.observer();
 * }
 *
 * private handleResize = () => {
 *   if (this.inputRef.current) {
 *     trimLeft(inputRef.current, String(this.props.value));
 *   }
 * };
 *
 * public render() {
 *   return (
 *     <input ref={this.inputRef} ... />
 *   );
 * }
 *
 * Example 3 - With debounced method passed in:
 *
 * public componentDidMount() {
 *   this.observer = getResizeObserver(this.inputRef.current, debounce(this.handleResize, 250), false);
 * }
 *
 * @param {Element} containerRefElement The container reference to observe
 * @param {Function} handleResize The function to call for resize events
 * @param {boolean} useRequestAnimationFrame Whether to pass the handleResize function as a callback to requestAnimationFrame. Pass in false when the function passed in is debounced. Defaults to true.
 * @return {Function} The function used to unobserve resize events
 */
export const getResizeObserver = (
  containerRefElement: Element,
  handleResize: () => void,
  useRequestAnimationFrame: boolean = true
) => {
  let unobserve: any;

  if (canUseDOM) {
    const { ResizeObserver } = window as any;

    if (containerRefElement && ResizeObserver) {
      const resizeObserver = new ResizeObserver((entries: any) => {
        // Wrap resize function in requestAnimationFrame to avoid "ResizeObserver loop limit exceeded" errors
        if (useRequestAnimationFrame) {
          window.requestAnimationFrame(() => {
            if (Array.isArray(entries) && entries.length > 0) {
              handleResize();
            }
          });
          // Avoid wrapping function in requestAnimationFrame if the function is debounced
        } else {
          if (Array.isArray(entries) && entries.length > 0) {
            handleResize();
          }
        }
      });
      resizeObserver.observe(containerRefElement);
      unobserve = () => resizeObserver.unobserve(containerRefElement);
    } else {
      window.addEventListener('resize', handleResize);
      unobserve = () => window.removeEventListener('resize', handleResize);
    }
  }
  return () => {
    if (unobserve) {
      unobserve();
    }
  };
};
