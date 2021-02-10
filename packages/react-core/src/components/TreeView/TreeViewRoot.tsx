import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';

export interface TreeViewRootProps {
  /** Child nodes of the tree view */
  children: React.ReactNode;
  /** Flag indicating if the tree view has checkboxes */
  hasChecks?: boolean;
}

export class TreeViewRoot extends React.Component<TreeViewRootProps> {
  displayName = 'TreeViewRoot';
  private treeRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    window.addEventListener('keydown', this.props.hasChecks ? this.handleKeysCheckbox : this.handleKeys);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.hasChecks ? this.handleKeysCheckbox : this.handleKeys);
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

  handleKeysCheckbox = (event: KeyboardEvent) => {
    if (this.treeRef.current !== (event.target as HTMLElement).closest('.pf-c-tree-view')) {
      return;
    }
    const activeElement = document.activeElement;
    const key = event.key;
    let moveFocus = false;
    let currentIndex = -1;
    let innerIndex = -1;
    const treeItems = Array.from(this.treeRef.current.getElementsByClassName('pf-c-tree-view__node-toggle'));
    const checkItems = Array.from(this.treeRef.current.getElementsByTagName('INPUT'));
    const mappedItems = checkItems.map((item, index) => [treeItems[index], item]);

    if (key === 'Space') {
      (document.activeElement as HTMLElement).click();
      event.preventDefault();
    }

    if (['ArrowUp', 'ArrowDown'].includes(key)) {
      mappedItems.forEach((treeItem, treeItemIndex) => {
        treeItem.forEach((element, index) => {
          if (activeElement === element) {
            const increment = key === 'ArrowUp' ? -1 : 1;
            innerIndex = index;
            currentIndex = treeItemIndex + increment;
            while (
              currentIndex < mappedItems.length &&
              currentIndex >= 0 &&
              mappedItems[currentIndex][index].classList.contains('pf-m-disabled')
            ) {
              currentIndex = currentIndex + increment;
            }
            moveFocus = true;
            event.preventDefault();
          }
        });
      });

      if (moveFocus && mappedItems[currentIndex] && mappedItems[currentIndex][innerIndex]) {
        (mappedItems[currentIndex][innerIndex] as HTMLElement).focus();
      }
    }

    if (['ArrowLeft', 'ArrowRight'].includes(key)) {
      if (key === 'ArrowLeft') {
        if (activeElement.tagName === 'INPUT') {
          activeElement.parentElement.previousSibling &&
            (activeElement.parentElement.previousSibling as HTMLElement).focus();
        } else if (activeElement.previousSibling) {
          if (activeElement.previousElementSibling.tagName === 'SPAN') {
            (activeElement.previousSibling.firstChild as HTMLElement).focus();
          } else {
            (activeElement.previousSibling as HTMLElement).focus();
          }
        }
      } else {
        if (activeElement.tagName === 'INPUT') {
          activeElement.parentElement.nextSibling && (activeElement.parentElement.nextSibling as HTMLElement).focus();
        } else if (activeElement.nextSibling) {
          if (activeElement.nextElementSibling.tagName === 'SPAN') {
            (activeElement.nextSibling.firstChild as HTMLElement).focus();
          } else {
            (activeElement.nextSibling as HTMLElement).focus();
          }
        }
      }
      event.preventDefault();
    }
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, hasChecks, ...props } = this.props;
    return (
      <div className={css(styles.treeView)} ref={this.treeRef} {...props}>
        {children}
      </div>
    );
  }
}
