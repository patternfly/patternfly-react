import { HTMLProps, ReactNode, FunctionComponent, ReactElement, Children, cloneElement } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { DroppableContext } from './DroppableContext';

interface DroppableProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Name of zone that items can be dragged between. Should specify if there is more than one Droppable on the page. */
  zone?: string;
  /** Id to be passed back on drop events */
  droppableId?: string;
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper?: boolean;
}

export const Droppable: FunctionComponent<DroppableProps> = ({
  className,
  children,
  zone = 'defaultZone',
  droppableId = 'defaultId',
  hasNoWrapper = false,
  ...props
}: DroppableProps) => {
  const childProps = {
    'data-pf-droppable': zone,
    'data-pf-droppableid': droppableId,
    // if has no wrapper is set, don't overwrite children className with the className prop
    className:
      hasNoWrapper && Children.count(children) === 1
        ? css(styles.droppable, className, (children as ReactElement).props.className)
        : css(styles.droppable, className),
    ...props
  };

  return (
    <DroppableContext.Provider value={{ zone, droppableId }}>
      {hasNoWrapper ? cloneElement(children as ReactElement, childProps) : <div {...childProps}>{children}</div>}
    </DroppableContext.Provider>
  );
};
Droppable.displayName = 'Droppable';
