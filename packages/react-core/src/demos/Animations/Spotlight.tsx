import { useEffect, useRef, useState } from 'react';
import { debounce, getResizeObserver } from '../..';

const SpotlightBorderWidth = 3;
const SpotlightGap = 4;

type BoundingClientRect = ClientRect | null;

interface SpotlightProps {
  selector: string;
  resizeSelector?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ selector, resizeSelector }) => {
  const [clientRect, setClientRect] = useState<BoundingClientRect>(
    document.querySelector(selector)?.getBoundingClientRect()
  );
  const unObserver = useRef(null);

  // if target element is a hidden one return null
  const element = document.querySelector(selector);

  useEffect(() => {
    if (!element) {
      return;
    }

    const handleResize = () => {
      if (element) {
        setClientRect(element.getBoundingClientRect());
      }
    };

    const debounceResize = debounce(handleResize, 100);

    // Update graph size on resize events
    const resizeElement = resizeSelector ? document.querySelector(resizeSelector) || element : element;
    unObserver.current = getResizeObserver(resizeElement, debounceResize);

    return () => {
      if (unObserver.current) {
        unObserver.current();
        unObserver.current = undefined;
      }
    };
  }, [element, resizeSelector]);

  useEffect(
    () => () => {
      if (unObserver.current) {
        unObserver.current();
        unObserver.current = undefined;
      }
    },
    []
  );

  if (!element) {
    return null;
  }

  const style: React.CSSProperties = clientRect
    ? {
        position: 'fixed',
        top: clientRect.top - (SpotlightBorderWidth + SpotlightGap),
        left: clientRect.left - (SpotlightBorderWidth + SpotlightGap),
        height: clientRect.height + 2 * (SpotlightBorderWidth + SpotlightGap),
        width: clientRect.width + 2 * (SpotlightBorderWidth + SpotlightGap),
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'var(--pf-t--global--background--color--highlight--default)',
        background: 'transparent',
        pointerEvents: 'none'
      }
    : {};

  return clientRect ? <div className="ocs-spotlight ocs-spotlight__element-highlight-noanimate" style={style} /> : null;
};

export default Spotlight;
