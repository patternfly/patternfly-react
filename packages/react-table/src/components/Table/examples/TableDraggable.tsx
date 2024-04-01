import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TbodyProps, TrProps } from '@patternfly/react-table';
import styles from '@patternfly/react-styles/css/components/Table/table';

export const TableDraggable: React.FunctionComponent = () => {
  const [draggedItemId, setDraggedItemId] = React.useState<string | null>(null);
  const [draggingToItemIndex, setDraggingToItemIndex] = React.useState<number | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [itemOrder, setItemOrder] = React.useState(['row1', 'row2', 'row3']);
  const [tempItemOrder, setTempItemOrder] = React.useState<string[]>([]);

  const bodyRef = React.useRef<HTMLTableSectionElement>();

  const onDragStart: TrProps['onDragStart'] = (evt) => {
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
    const draggedItemId = evt.currentTarget.id;

    evt.currentTarget.classList.add(styles.modifiers.ghostRow);
    evt.currentTarget.setAttribute('aria-pressed', 'true');

    setDraggedItemId(draggedItemId);
    setIsDragging(true);
  };

  const moveItem = (arr: string[], i1: string, toIndex: number) => {
    const fromIndex = arr.indexOf(i1);
    if (fromIndex === toIndex) {
      return arr;
    }
    const temp = arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, temp[0]);

    return arr;
  };

  const move = (itemOrder: string[]) => {
    const ulNode = bodyRef.current;
    const nodes = Array.from(ulNode.children);
    if (nodes.map((node) => node.id).every((id, i) => id === itemOrder[i])) {
      return;
    }
    while (ulNode.firstChild) {
      ulNode.removeChild(ulNode.lastChild);
    }

    itemOrder.forEach((id) => {
      ulNode.appendChild(nodes.find((n) => n.id === id));
    });
  };

  const onDragCancel = () => {
    Array.from(bodyRef.current.children).forEach((el) => {
      el.classList.remove(styles.modifiers.ghostRow);
      el.setAttribute('aria-pressed', 'false');
    });
    setDraggedItemId(null);
    setDraggingToItemIndex(null);
    setIsDragging(false);
  };

  const onDragLeave: TbodyProps['onDragLeave'] = (evt) => {
    if (!isValidDrop(evt)) {
      move(itemOrder);
      setDraggingToItemIndex(null);
    }
  };

  const isValidDrop = (evt: React.DragEvent<HTMLTableSectionElement | HTMLTableRowElement>) => {
    const ulRect = bodyRef.current.getBoundingClientRect();
    return (
      evt.clientX > ulRect.x &&
      evt.clientX < ulRect.x + ulRect.width &&
      evt.clientY > ulRect.y &&
      evt.clientY < ulRect.y + ulRect.height
    );
  };

  const onDrop: TrProps['onDrop'] = (evt) => {
    if (isValidDrop(evt)) {
      setItemOrder(tempItemOrder);
    } else {
      onDragCancel();
    }
  };

  const onDragOver: TbodyProps['onDragOver'] = (evt) => {
    evt.preventDefault();

    const curListItem = (evt.target as HTMLTableSectionElement).closest('tr');
    if (!curListItem || !bodyRef.current.contains(curListItem) || curListItem.id === draggedItemId) {
      return null;
    } else {
      const dragId = curListItem.id;
      const newDraggingToItemIndex = Array.from(bodyRef.current.children).findIndex((item) => item.id === dragId);
      if (newDraggingToItemIndex !== draggingToItemIndex) {
        const tempItemOrder = moveItem([...itemOrder], draggedItemId, newDraggingToItemIndex);
        move(tempItemOrder);
        setDraggingToItemIndex(newDraggingToItemIndex);
        setTempItemOrder(tempItemOrder);
      }
    }
  };

  const onDragEnd: TrProps['onDragEnd'] = (evt) => {
    const target = evt.target as HTMLTableRowElement;
    target.classList.remove(styles.modifiers.ghostRow);
    target.setAttribute('aria-pressed', 'false');
    setDraggedItemId(null);
    setDraggingToItemIndex(null);
    setIsDragging(false);
  };

  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows = [
    {
      id: 'row1',
      repository: 'one',
      branch: 'two',
      pullRequest: 'three',
      workspace: 'four',
      lastCommit: 'five'
    },
    {
      id: 'row2',
      repository: 'one -2',
      branch: null,
      pullRequest: null,
      workspace: 'four -2',
      lastCommit: 'five -2'
    },
    {
      id: 'row3',
      repository: 'one - 3',
      branch: 'two - 3',
      pullRequest: 'three - 3',
      workspace: 'four - 3',
      lastCommit: 'five - 3'
    }
  ];

  return (
    <Table aria-label="Draggable table" className={isDragging ? styles.modifiers.dragOver : ''}>
      <Thead>
        <Tr>
          <Th screenReaderText="Drag and drop" />
          {columns.map((column, columnIndex) => (
            <Th key={columnIndex}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody ref={bodyRef} onDragOver={onDragOver} onDrop={onDragOver} onDragLeave={onDragLeave}>
        {rows.map((row, rowIndex) => {
          const rowCellsToBuild = Object.keys(row).filter((rowCell) => rowCell !== 'id');
          return (
            <Tr key={rowIndex} id={row.id} draggable onDrop={onDrop} onDragEnd={onDragEnd} onDragStart={onDragStart}>
              <Td
                draggableRow={{
                  id: `draggable-row-${row.id}`
                }}
              />
              {rowCellsToBuild.map((key, keyIndex) => (
                <Td key={`${rowIndex}_${keyIndex}`} dataLabel={columns[keyIndex]}>
                  {row[key]}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
