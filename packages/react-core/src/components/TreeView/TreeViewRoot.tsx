import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import { canUseDOM } from '../../helpers/util';
import { handleArrows } from '../../helpers';

export interface TreeViewRootProps {
  /** Child nodes of the tree view */
  children: React.ReactNode;
  /** Flag indicating if the tree view has checkboxes */
  hasChecks?: boolean;
  /** Class to add to add if not passed a parentItem */
  className?: string;
}

export class TreeViewRoot extends React.Component<TreeViewRootProps> {
  displayName = 'TreeViewRoot';
  private treeRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    if (canUseDOM) {
      window.addEventListener('keydown', this.props.hasChecks ? this.handleKeysCheckbox : this.handleKeys);
    }
    if (this.props.hasChecks) {
      const firstToggle = this.treeRef.current.getElementsByClassName('pf-c-tree-view__node-toggle')[0] as HTMLElement;
      if (firstToggle) {
        firstToggle.tabIndex = 0;
      }
      const firstInput = this.treeRef.current.getElementsByTagName('INPUT')[0] as HTMLElement;
      if (firstInput) {
        firstInput.tabIndex = 0;
      }
    } else {
      (this.treeRef.current.getElementsByClassName('pf-c-tree-view__node')[0] as HTMLElement).tabIndex = 0;
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      window.removeEventListener('keydown', this.props.hasChecks ? this.handleKeysCheckbox : this.handleKeys);
    }
  }

  handleKeys = (event: KeyboardEvent) => {
    if (this.treeRef.current !== (event.target as HTMLElement).closest('.pf-c-tree-view')) {
      return;
    }
    const activeElement = document.activeElement;
    const key = event.key;
    const treeItems = Array.from(this.treeRef.current.getElementsByClassName('pf-c-tree-view__node')).filter(
      el => !el.classList.contains('pf-m-disabled')
    );

    if (key === 'Space') {
      (document.activeElement as HTMLElement).click();
      event.preventDefault();
    }

    handleArrows(
      event,
      treeItems,
      (element: Element) => activeElement === element,
      undefined,
      [],
      undefined,
      true,
      true
    );

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
            (activeElement as HTMLElement).tabIndex = -1;
            parentButton.tabIndex = 0;
            parentButton.focus();
          }
        }
      } else {
        if (isExpandable && !isExpanded) {
          (activeElement as HTMLElement).tabIndex = -1;
          (activeElement as HTMLElement).click();
          const childElement = activeElement
            .closest('li')
            .querySelector('ul > li')
            .querySelector('button');
          childElement.tabIndex = 0;
          childElement.focus();
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
    let previousIndex = -1;
    const treeNodes = Array.from(this.treeRef.current.getElementsByClassName('pf-c-tree-view__node'));
    const mappedItems = treeNodes.map(item => {
      const itemChildren = item.childNodes;
      const firstItem = itemChildren[0];
      if ((firstItem as HTMLElement).tagName === 'SPAN') {
        return [null as HTMLElement, firstItem.firstChild as HTMLElement];
      } else {
        return [itemChildren[0] as HTMLElement, itemChildren[1].firstChild as HTMLElement];
      }
    });

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
            previousIndex = treeItemIndex;
            currentIndex = treeItemIndex + increment;
            while (
              currentIndex < mappedItems.length &&
              currentIndex >= 0 &&
              (!mappedItems[currentIndex][index] ||
                mappedItems[currentIndex][index].classList.contains('pf-m-disabled'))
            ) {
              currentIndex = currentIndex + increment;
            }
            moveFocus = true;
            event.preventDefault();
          }
        });
      });

      if (moveFocus && mappedItems[currentIndex] && mappedItems[currentIndex][innerIndex]) {
        if (mappedItems[previousIndex][0]) {
          (mappedItems[previousIndex][0] as HTMLElement).tabIndex = -1;
        }
        (mappedItems[previousIndex][1] as HTMLElement).tabIndex = -1;
        if (mappedItems[currentIndex][0]) {
          (mappedItems[currentIndex][0] as HTMLElement).tabIndex = 0;
        }
        (mappedItems[currentIndex][1] as HTMLElement).tabIndex = 0;
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
    const { children, hasChecks, className, ...props } = this.props;
    return (
      <div className={css(styles.treeView, className)} ref={this.treeRef} {...props}>
        {children}
      </div>
    );
  }
}
