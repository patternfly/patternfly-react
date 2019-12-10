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
  onSelectDataListItem?: (id:string) => void;
  /* Id of DataList item currently selected */
  selectedDataListItemId?: string;
}

interface DataListContextProps {
  isSelectable: boolean;
  selectedDataListItemId: string;
  updateSelectedDataListItem: (id: string) => void;
}

export const DataListContext = React.createContext<Partial<DataListContextProps>>({
  isSelectable: false,
});

export class DataList extends React.Component<DataListProps> {

  constructor(props: DataListProps) {
    super(props);
    this.state = {
      selectedDataListItemId: props.selectedDataListItemId
    }
  }

  updateSelectedDataListItem = (id: string) => {
    this.props.onSelectDataListItem(id);
  };

  render() {
    const { children, className, 'aria-label': ariaLabel, selectedDataListItemId, onSelectDataListItem, ...props } = this.props;
    const isSelectable = !isUndefined(onSelectDataListItem);

    return (
      <DataListContext.Provider
        value={{
          isSelectable: isSelectable,
          selectedDataListItemId,
          updateSelectedDataListItem: this.updateSelectedDataListItem
        }}
      >
        <ul className={css(styles.dataList, className)} aria-label={ariaLabel} {...props}>
          {children}
        </ul>
      </DataListContext.Provider>
    );
  }
}
