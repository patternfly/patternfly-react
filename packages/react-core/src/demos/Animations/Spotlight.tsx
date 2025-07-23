import { useEffect, useRef, useState } from 'react';
import { debounce, getResizeObserver } from '../..';

const SpotlightBorderWidth = 3;
const SpotlightGap = 4;

const isHTMLElement = (n: Node): n is HTMLElement => n.nodeType === Node.ELEMENT_NODE;

const getAllParentScrollableElements = (node: Element) => {
  let parentNode: Node = node;
  const scrollables: Node[] = [];

  while (parentNode) {
    if (isHTMLElement(parentNode)) {
      let overflow = parentNode.style?.overflow;
      if (!overflow.includes('scroll') && !overflow.includes('auto')) {
        overflow = window.getComputedStyle(parentNode).overflow;
      }
      if (overflow.includes('scroll') || overflow.includes('auto')) {
        scrollables.push(parentNode);
      }
    }
    parentNode = parentNode.parentNode;
  }
  return scrollables;
};

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
    // If the element is not found, give it another try after a redraw
    if (!element) {
      requestAnimationFrame(() => setClientRect(document.querySelector(selector)?.getBoundingClientRect()));
    }
  }, [element]);

  useEffect(() => {
    if (!element) {
      return;
    }

    const handleResize = () => {
      if (element) {
        setClientRect(element.getBoundingClientRect());
      }
    };

    const debounceResize = debounce(handleResize, 10);

    // Update graph size on resize events
    const resizeElement = resizeSelector ? document.querySelector(resizeSelector) || element : element;
    unObserver.current = getResizeObserver(resizeElement, debounceResize);

    const parentScrollables = getAllParentScrollableElements(element);
    parentScrollables.forEach((parentScrollable) => parentScrollable.addEventListener('scroll', debounceResize));

    return () => {
      parentScrollables.forEach((parentScrollable) => parentScrollable.removeEventListener('scroll', debounceResize));
      if (unObserver.current) {
        unObserver.current();
        unObserver.current = undefined;
      }
    };
  }, [element, resizeSelector]);

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
        borderRadius: 'var(--pf-t--global--border--radius--small)',
        background: 'transparent',
        pointerEvents: 'none'
      }
    : {};

  return clientRect ? <div style={style} /> : null;
};

export default Spotlight;
