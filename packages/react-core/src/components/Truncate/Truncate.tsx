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
  /** The number of characters displayed in the second half of a middle truncation. This will be overridden by
   * the maxCharsDisplayed prop.
   */
  trailingNumChars?: number;
  /** The maximum number of characters to display before truncating. This will always truncate content
   * when its length exceeds the value passed to this prop, and container width/resizing will not affect truncation.
   */
  maxCharsDisplayed?: number;
  /** The content to use to signify omission of characters when using the maxCharsDisplayed prop.
   * By default this will render an ellipsis.
   */
  omissionContent?: string;
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

const sliceTrailingContent = (str: string, slice: number) => [str.slice(0, str.length - slice), str.slice(-slice)];

export const Truncate: React.FunctionComponent<TruncateProps> = ({
  className,
  position = 'end',
  tooltipPosition = 'top',
  trailingNumChars = 7,
  maxCharsDisplayed,
  omissionContent = '\u2026',
  content,
  refToGetParent,
  ...props
}: TruncateProps) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [parentElement, setParentElement] = useState<HTMLElement>(null);
  const [textElement, setTextElement] = useState<HTMLElement>(null);
  const [shouldRenderByMaxChars, setShouldRenderByMaxChars] = useState(maxCharsDisplayed > 0);

  const textRef = useRef<HTMLElement>(null);
  const subParentRef = useRef<HTMLDivElement>(null);
  const observer = useRef(null);

  if (maxCharsDisplayed <= 0) {
    // eslint-disable-next-line no-console
    console.warn('Truncate: the maxCharsDisplayed must be greater than 0, otherwise no content will be visible.');
  }

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

    if ((refToGetParent?.current || (subParentRef?.current && subParentRef.current.parentElement)) && !parentElement) {
      setParentElement(refToGetParent?.current.parentElement || subParentRef?.current.parentElement);
    }
  }, [textRef, subParentRef, textElement, parentElement]);

  useEffect(() => {
    if (textElement && parentElement && !observer.current && !shouldRenderByMaxChars) {
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
  }, [textElement, parentElement, trailingNumChars, content, position, shouldRenderByMaxChars]);

  useEffect(() => {
    if (shouldRenderByMaxChars) {
      setIsTruncated(content.length > maxCharsDisplayed);
    }
  }, [shouldRenderByMaxChars]);

  useEffect(() => {
    setShouldRenderByMaxChars(maxCharsDisplayed > 0);
  }, [maxCharsDisplayed]);

  const lrmEntity = <Fragment>&lrm;</Fragment>;
  const isStartPosition = position === TruncatePosition.start;
  const isEndPosition = position === TruncatePosition.end;

  const renderResizeObserverContent = () => {
    if (isEndPosition || isStartPosition) {
      return (
        <>
          <span ref={textRef} className={truncateStyles[position]}>
            {isStartPosition && lrmEntity}
            {content}
            {isStartPosition && lrmEntity}
          </span>
        </>
      );
    }

    const shouldSliceContent = content.length - trailingNumChars > minWidthCharacters;
    return (
      <>
        <Fragment>
          <span ref={textRef} className={styles.truncateStart}>
            {shouldSliceContent ? sliceTrailingContent(content, trailingNumChars)[0] : content}
          </span>
          {shouldSliceContent && (
            <span className={styles.truncateEnd}>{sliceTrailingContent(content, trailingNumChars)[1]}</span>
          )}
        </Fragment>
      </>
    );
  };

  const renderMaxDisplayContent = () => {
    const renderVisibleContent = (contentToRender: string) => (
      <span className={`${styles.truncate}__text`}>{contentToRender}</span>
    );
    if (!isTruncated) {
      return renderVisibleContent(content);
    }

    const omissionElement = (
      <span className={`${styles.truncate}__omission`} aria-hidden="true">
        {omissionContent}
      </span>
    );
    const renderVisuallyHiddenContent = (contentToHide: string) => (
      <span className="pf-v6-screen-reader">{contentToHide}</span>
    );

    if (position === TruncatePosition.start) {
      return (
        <>
          {renderVisuallyHiddenContent(content.slice(0, maxCharsDisplayed * -1))}
          {omissionElement}
          {renderVisibleContent(content.slice(maxCharsDisplayed * -1))}
        </>
      );
    }
    if (isEndPosition) {
      return (
        <>
          {renderVisibleContent(content.slice(0, maxCharsDisplayed))}
          {omissionElement}
          {renderVisuallyHiddenContent(content.slice(maxCharsDisplayed))}
        </>
      );
    }

    const trueMiddleStart = Math.floor(maxCharsDisplayed / 2);
    const trueMiddleEnd = Math.ceil(maxCharsDisplayed / 2) * -1;
    return (
      <>
        {renderVisibleContent(content.slice(0, trueMiddleStart))}
        {omissionElement}
        {renderVisuallyHiddenContent(content.slice(trueMiddleStart, trueMiddleEnd))}
        {renderVisibleContent(content.slice(trueMiddleEnd))}
      </>
    );
  };

  const truncateBody = (
    <span
      ref={subParentRef}
      className={css(styles.truncate, shouldRenderByMaxChars && styles.modifiers.fixed, className)}
      {...(isTruncated && { tabIndex: 0 })}
      {...props}
    >
      {!shouldRenderByMaxChars ? renderResizeObserverContent() : renderMaxDisplayContent()}
    </span>
  );

  return (
    <>
      {isTruncated && (
        <Tooltip hidden={!isTruncated} position={tooltipPosition} content={content} triggerRef={subParentRef} />
      )}
      {truncateBody}
    </>
  );
};

Truncate.displayName = 'Truncate';
