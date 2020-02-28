import * as React from 'react';
import { isUndefined } from 'lodash';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

export interface DataListProps extends React.HTMLProps<HTMLUListElement> {
  /* Content rendered inside the DataList list */
  children?: React.ReactNode;
  /* Additional classes added to the DataList list */
  className?: string;
  /* Adds accessible text to the DataList list */
  'aria-label': string;
  /* Optional callback to make DataList selectable, fired when DataListItem selected */
  onSelectDataListItem?: (id: string) => void;
  /* Id of DataList item currently selected */
  selectedDataListItemId?: string;
}

interface DataListContextProps {
  isSelectable: boolean;
  selectedDataListItemId: string;
  updateSelectedDataListItem: (id: string) => void;
}

export const DataListContext = React.createContext<Partial<DataListContextProps>>({
  isSelectable: false
});

export const DataList: React.FunctionComponent<DataListProps> = ({
  children = null,
  className = '',
  'aria-label': ariaLabel,
  selectedDataListItemId = '',
  onSelectDataListItem,
  ...props
}: DataListProps) => {
  const isSelectable = !isUndefined(onSelectDataListItem);

  const updateSelectedDataListItem = (id: string) => {
    onSelectDataListItem(id);
  };

  return (
    <DataListContext.Provider
      value={{
        isSelectable,
        selectedDataListItemId,
        updateSelectedDataListItem
      }}
    >
      <ul className={css(styles.dataList, className)} aria-label={ariaLabel} {...props}>
        {children}
      </ul>
    </DataListContext.Provider>
  );
};
