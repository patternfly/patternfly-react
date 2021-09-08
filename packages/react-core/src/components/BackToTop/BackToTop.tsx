import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/BackToTop/back-to-top';
import { css } from '@patternfly/react-styles';
import { Button } from '..';
import AngleUpIcon from '@patternfly/react-icons/dist/esm/icons/angle-up-icon';
import { canUseDOM } from '../../helpers/util';

interface BackToTopProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** Additional classes added to the back to top. */
  className?: string;
  /** Title to appear in back to top button, defaults to 'Back to top'. */
  title?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Selector for the scrollable element to spy on. Not passing a selector defaults to spying on window scroll events. */
  scrollableSelector?: string;
  /** Flag to always show back to top button, defaults to false. */
  alwaysShow?: boolean;
}

const BackToTopBase: React.FunctionComponent<BackToTopProps> = ({
  className,
  title = 'Back to top',
  innerRef,
  scrollableSelector,
  alwaysShow = false,
  ...props
}: BackToTopProps) => {
  const [hidden, setHidden] = React.useState(alwaysShow ? false : true);
  const [scrollElement, setScrollElement] = React.useState(null);

  const toggleHidden = () => {
    // scrollTop returns undefined in window use case
    const scrolled = scrollElement.scrollY ? scrollElement.scrollY : scrollElement.scrollTop;
    if (!alwaysShow) {
      if (scrolled > 400) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    }
  };

  React.useEffect(() => {
    const hasScrollSpy = Boolean(scrollableSelector);
    if (hasScrollSpy) {
      const scrollEl = document.querySelector(scrollableSelector) as HTMLElement;
      if (!canUseDOM || !(scrollEl instanceof HTMLElement)) {
        return;
      }
      setScrollElement(scrollEl);
      scrollEl.addEventListener('scroll', toggleHidden);

      return () => {
        scrollEl.removeEventListener('scroll', toggleHidden);
      };
    } else {
      if (!canUseDOM) {
        return;
      }
      const scrollEl = window;
      setScrollElement(scrollEl);
      scrollEl.addEventListener('scroll', toggleHidden);

      return () => {
        scrollEl.removeEventListener('scroll', toggleHidden);
      };
    }
  });

  const handleClick = () => {
    scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={css(styles.backToTop, hidden && styles.modifiers.hidden, className)}
      {...props}
      ref={innerRef}
      onClick={handleClick}
    >
      <Button component="a" variant="primary" icon={<AngleUpIcon aria-hidden="true" />} iconPosition="right">
        {title}
      </Button>
    </div>
  );
};

export const BackToTop = React.forwardRef((props: BackToTopProps, ref: React.Ref<any>) => (
  <BackToTopBase innerRef={ref} {...props} />
));
BackToTop.displayName = 'BackToTop';
