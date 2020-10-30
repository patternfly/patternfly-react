import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import { JumpLinksItem } from './JumpLinksItem';

export interface JumpLinksProps {
  'aria-label'?: string;
  isCentered?: boolean;
  isVertical?: boolean;
  children?: React.ReactNode;
  label?: React.ReactNode;
}

export const JumpLinks: React.FunctionComponent<JumpLinksProps> = ({
  isCentered,
  isVertical,
  children,
  label,
  'aria-label': ariaLabel = typeof label === 'string' ? label : null
}: JumpLinksProps) => {
  const scrollItems = React.Children.toArray(children).map((child: any) => {
    if (child.type === JumpLinksItem) {
      const scrollNode = child.props.node || child.props.href;
      if (typeof scrollNode === 'string' && typeof document !== 'undefined') {
        return document.querySelector(scrollNode) as HTMLElement;
      } else if (scrollNode instanceof HTMLElement) {
        return scrollNode;
      }
    }

    return null;
  });
  // console.log('scrollItems', scrollItems);

  return (
    <nav
      className={css(styles.jumpLinks, isCentered && styles.modifiers.center, isVertical && styles.modifiers.vertical)}
      aria-label={ariaLabel}
    >
      <div className={styles.jumpLinksMain}>
        {label && <div className={styles.jumpLinksLabel}>{label}</div>}
        <ul className={styles.jumpLinksList}>
          {React.Children.map(children, (child: any, i: number) => {
            if (child.type === JumpLinksItem) {
              const { onClick: onClickProp } = child.props;
              const scrollItem = scrollItems[i];
              return React.cloneElement(child, {
                onClick(ev: React.MouseEvent<HTMLAnchorElement>) {
                  if (scrollItem) {
                    ev.preventDefault();
                    // console.log('scroll to', scrollItem);
                    scrollItem.scrollIntoView();
                  }
                  if (onClickProp) {
                    onClickProp(ev);
                  }
                }
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
