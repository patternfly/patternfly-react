import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import { JumpLinksItem, JumpLinksItemProps } from './JumpLinksItem';

export interface JumpLinksProps {
  'aria-label'?: string;
  isCentered?: boolean;
  isVertical?: boolean;
  children?: React.ReactNode;
  label?: React.ReactNode;
  scrollableSelector?: string;
  hasScrollSpy?: boolean;
  activeIndex?: number;
}

const getScrollItems = (children: React.ReactNode, hasScrollSpy: boolean) =>
  React.Children.toArray(children).map((child: any) => {
    if (hasScrollSpy && typeof document !== 'undefined' && child.type === JumpLinksItem) {
      const scrollNode = child.props.node || child.props.href;
      if (typeof scrollNode === 'string' && typeof document !== 'undefined') {
        return document.querySelector(scrollNode) as HTMLElement;
      } else if (scrollNode instanceof HTMLElement) {
        return scrollNode;
      }
    }

    return null;
  });

export const JumpLinks: React.FunctionComponent<JumpLinksProps> = ({
  isCentered,
  isVertical,
  children,
  label,
  'aria-label': ariaLabel = typeof label === 'string' ? label : null,
  scrollableSelector,
  hasScrollSpy = true,
  activeIndex: activeIndexProp = 0
}: JumpLinksProps) => {
  const [scrollItems, setScrollItems] = React.useState(getScrollItems(children, hasScrollSpy));
  const [activeIndex, setActiveIndex] = React.useState(activeIndexProp);
  if (hasScrollSpy) {
    React.useEffect(() => {
      if (typeof window === 'undefined') {
        return;
      }
      const scrollableElement = document.querySelector(scrollableSelector) as HTMLElement;
      if (!(scrollableElement instanceof HTMLElement)) {
        return;
      }

      function scrollSpy() {
        const scrollPosition = scrollableElement.scrollTop;
        window.requestAnimationFrame(() => {
          let newScrollItems = scrollItems;
          // Items might have rendered after this component. Do a quick refresh.
          if (!newScrollItems[0]) {
            newScrollItems = getScrollItems(children, hasScrollSpy);
            setScrollItems(newScrollItems);
          }
          const scrollElements = newScrollItems
            .map((e, index) => ({
              y: e ? e.offsetTop : null,
              index
            }))
            .filter(({ y }) => y !== null)
            .sort((e1, e2) => e2.y - e1.y);
          for (const { y, index } of scrollElements) {
            if (scrollPosition >= y) {
              return setActiveIndex(index);
            }
          }
        });
      }
      if (scrollableElement) {
        scrollSpy();
        scrollableElement.addEventListener('scroll', scrollSpy);
      }

      return () => scrollableElement.removeEventListener('scroll', scrollSpy);
    }, [scrollItems, hasScrollSpy]);
  }

  return (
    <nav
      className={css(styles.jumpLinks, isCentered && styles.modifiers.center, isVertical && styles.modifiers.vertical)}
      aria-label={ariaLabel}
    >
      <div className={styles.jumpLinksMain}>
        {label && <div className={styles.jumpLinksLabel}>{label}</div>}
        <ul className={styles.jumpLinksList}>
          {React.Children.map(children, (child: any, i: number) => {
            if (hasScrollSpy && child.type === JumpLinksItem) {
              const { onClick: onClickProp, isActive: isActiveProp } = child.props;
              const scrollItem = scrollItems[i];
              return React.cloneElement(child as React.ReactElement<JumpLinksItemProps>, {
                onClick(ev: React.MouseEvent<HTMLAnchorElement>) {
                  // Items might have rendered after this component. Do a quick refresh.
                  let newScrollItems;
                  if (!scrollItem) {
                    newScrollItems = getScrollItems(children, hasScrollSpy);
                    setScrollItems(newScrollItems);
                  }
                  const newScrollItem = scrollItem || newScrollItems[i];

                  if (newScrollItem) {
                    newScrollItem.scrollIntoView();
                    ev.preventDefault();
                  }
                  if (onClickProp) {
                    onClickProp(ev);
                  }
                },
                isActive: isActiveProp || activeIndex === i
              });
            }
            return child;
          })}
        </ul>
      </div>
    </nav>
  );
};
JumpLinks.displayName = 'JumpLinks';
