import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';

export interface TreeViewRootProps {
  /** Child nodes of the tree view */
  children: React.ReactNode;
}

export class TreeViewRoot extends React.Component<TreeViewRootProps> {
  displayName = 'TreeViewRoot';
  private treeRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeys);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeys);
  }

  handleKeys = (event: KeyboardEvent) => {
    if (this.treeRef.current !== (event.target as HTMLElement).closest('.pf-c-tree-view')) {
      return;
    }
    const activeElement = document.activeElement;
    const key = event.key;
    let moveFocus = false;
    let currentIndex = -1;
    const treeItems = Array.from(this.treeRef.current.getElementsByClassName('pf-c-tree-view__node'));

    if (key === 'Space') {
      (document.activeElement as HTMLElement).click();
      event.preventDefault();
    }

    if (['ArrowUp', 'ArrowDown'].includes(key)) {
      treeItems.forEach((treeItem, index) => {
        if (activeElement === treeItem) {
          const increment = key === 'ArrowUp' ? -1 : 1;
          currentIndex = index + increment;
          while (
            currentIndex < treeItems.length &&
            currentIndex >= 0 &&
            treeItems[currentIndex].classList.contains('pf-m-disabled')
          ) {
            currentIndex = currentIndex + increment;
          }
          moveFocus = true;
          event.preventDefault();
        }
      });

      if (moveFocus && treeItems[currentIndex]) {
        (treeItems[currentIndex] as HTMLElement).focus();
      }
    }

    if (['ArrowLeft', 'ArrowRight'].includes(key)) {
      const isExpandable = activeElement.firstElementChild.classList.contains('pf-c-tree-view__node-toggle');
      const isExpanded = activeElement.closest('li').classList.contains('pf-m-expanded');
      if (key === 'ArrowLeft') {
        if (isExpandable && isExpanded) {
          (activeElement as HTMLElement).click();
        } else {
          const parentList = activeElement.closest('ul').parentElement;
          if (parentList.tagName !== 'DIV') {
            const parentButton = parentList.querySelector('button');
            parentButton.focus();
            (parentButton as HTMLElement).click();
          }
        }
      } else {
        if (isExpandable && !isExpanded) {
          (activeElement as HTMLElement).click();
          activeElement
            .closest('li')
            .querySelector('ul > li')
            .querySelector('button')
            .focus();
        }
      }
      event.preventDefault();
    }
  };

  render() {
    const { children, ...props } = this.props;
    return (
      <div className={css(styles.treeView)} ref={this.treeRef} {...props}>
        {children}
      </div>
    );
  }
}
