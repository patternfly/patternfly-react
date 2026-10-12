import { css } from '@rh-felt/react-styles';
import styles from '@rh-felt/react-styles/css/components/Table/table';
import stylesTreeView from '@rh-felt/react-styles/css/components/Table/table-tree-view';
import { RowWrapperProps } from './RowWrapper';
import { Tr } from './Tr';

export const DraggableRowWrapper: React.FunctionComponent<RowWrapperProps> = ({
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rowProps,
  row,
  ...props
}: RowWrapperProps) => {
  const {
    'aria-level': level,
    'aria-posinset': posinset,
    'aria-setsize': setsize,
    isExpanded,
    isDetailsExpanded,
    isHidden
  } = row.props;
  return (
    <Tr
      aria-level={level}
      aria-posinset={posinset}
      aria-setsize={setsize}
      aria-expanded={!!isExpanded}
      isHidden={isHidden}
      className={css(
        className,
        isExpanded && styles.modifiers.expanded,
        isDetailsExpanded && stylesTreeView.modifiers.treeViewDetailsExpanded
      )}
      {...props}
    />
  );
};
DraggableRowWrapper.displayName = 'DraggableRowWrapper';
