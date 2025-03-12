import { Fragment, useEffect, useRef, useState } from 'react';
import styles from '@patternfly/react-styles/css/components/Truncate/truncate';
import { css } from '@patternfly/react-styles';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { getResizeObserver } from '../../helpers/resizeObserver';

export enum TruncatePosition {
  start = 'start',
  end = 'end',
  middle = 'middle'
}

const truncateStyles = {
  start: styles.truncateEnd,
  end: styles.truncateStart
};

const minWidthCharacters: number = 12;

export interface TruncateProps extends React.HTMLProps<HTMLSpanElement> {
  /** Class to add to outer span */
  className?: string;
  /** Text to truncate */
  content: string;
  /** The number of characters displayed in the second half of the truncation */
  trailingNumChars?: number;
  /** Where the text will be truncated */
  position?: 'start' | 'middle' | 'end';
  /** Tooltip position */
  tooltipPosition?:
    | TooltipPosition
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  /** @hide The element whose parent to reference when calculating whether truncation should occur. This must be an ancestor
   * of the ClipboardCopy, and must have a valid width value. For internal use only, do not use as it is not part of the public API
   * and is subject to change.
   */
  refToGetParent?: React.RefObject<any>;
}

const sliceContent = (str: string, slice: number) => [str.slice(0, str.length - slice), str.slice(-slice)];

export const Truncate: React.FunctionComponent<TruncateProps> = ({
  className,
  position = 'end',
  tooltipPosition = 'top',
  trailingNumChars = 7,
  content,
  refToGetParent,
  ...props
}: TruncateProps) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [parentElement, setParentElement] = useState<HTMLElement>(null);
  const [textElement, setTextElement] = useState<HTMLElement>(null);

  const textRef = useRef<HTMLElement>(null);
  const subParentRef = useRef<HTMLDivElement>(null);
  const observer = useRef(null);

  const getActualWidth = (element: Element) => {
    const computedStyle = getComputedStyle(element);

    return (
      parseFloat(computedStyle.width) -
      parseFloat(computedStyle.paddingLeft) -
      parseFloat(computedStyle.paddingRight) -
      parseFloat(computedStyle.borderRight) -
      parseFloat(computedStyle.borderLeft)
    );
  };

  const calculateTotalTextWidth = (element: Element, trailingNumChars: number, content: string) => {
    const firstTextWidth = element.scrollWidth;
    const firstTextLength = content.length;
    return (firstTextWidth / firstTextLength) * trailingNumChars + firstTextWidth;
  };

  useEffect(() => {
    if (textRef && textRef.current && !textElement) {
      setTextElement(textRef.current);
    }

    if (
      (refToGetParent?.current || (subParentRef?.current && subParentRef.current.parentElement.parentElement)) &&
      !parentElement
    ) {
      setParentElement(refToGetParent?.current.parentElement || subParentRef?.current.parentElement.parentElement);
    }
  }, [textRef, subParentRef, textElement, parentElement]);

  useEffect(() => {
    if (textElement && parentElement && !observer.current) {
      const totalTextWidth = calculateTotalTextWidth(textElement, trailingNumChars, content);
      const textWidth = position === 'middle' ? totalTextWidth : textElement.scrollWidth;

      const handleResize = () => {
        const parentWidth = getActualWidth(parentElement);
        setIsTruncated(textWidth >= parentWidth);
      };

      const observer = getResizeObserver(parentElement, handleResize);

      return () => {
        observer();
      };
    }
  }, [textElement, parentElement, trailingNumChars, content, position]);

  const truncateBody = (
    <span ref={subParentRef} className={css(styles.truncate, className)} {...props}>
      {(position === TruncatePosition.end || position === TruncatePosition.start) && (
        <span ref={textRef} className={truncateStyles[position]}>
          {content}
          {position === TruncatePosition.start && <Fragment>&lrm;</Fragment>}
        </span>
      )}
      {position === TruncatePosition.middle && content.length - trailingNumChars > minWidthCharacters && (
        <Fragment>
          <span ref={textRef} className={styles.truncateStart}>
            {sliceContent(content, trailingNumChars)[0]}
          </span>
          <span className={styles.truncateEnd}>{sliceContent(content, trailingNumChars)[1]}</span>
        </Fragment>
      )}
      {position === TruncatePosition.middle && content.length - trailingNumChars <= minWidthCharacters && (
        <Fragment>
          <span ref={textRef} className={styles.truncateStart}>
            {content}
          </span>
        </Fragment>
      )}
    </span>
  );

  return isTruncated ? (
    <Tooltip hidden={!isTruncated} position={tooltipPosition} content={content}>
      {truncateBody}
    </Tooltip>
  ) : (
    truncateBody
  );
};

Truncate.displayName = 'Truncate';
