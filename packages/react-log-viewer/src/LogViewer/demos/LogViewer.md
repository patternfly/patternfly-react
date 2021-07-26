---
id: Log viewer
beta: true
section: extensions
---

import { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';
import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownToggleAction,
  DropdownPosition,
  DropdownSeparator,
  Select,
  SelectOption,
  PageSection,
  PageSectionVariants,
  Tooltip,
  Toolbar, 
  ToolbarContent, 
  ToolbarGroup, 
  ToolbarItem, 
  ToolbarToggleGroup
} from '@patternfly/react-core';
import { data } from '../examples/realTestData.js';
import ExpandIcon from '@patternfly/react-icons/dist/js/icons/expand-icon';
import PauseIcon from '@patternfly/react-icons/dist/js/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';

### With complex toolbar

```js
import React from 'react';
import { data } from './realTestData';
import { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';
import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  Select,
  SelectOption,
  Tooltip,
  Toolbar, 
  ToolbarContent, 
  ToolbarGroup, 
  ToolbarItem,
  ToolbarToggleGroup
} from '@patternfly/react-core';
import ExpandIcon from '@patternfly/react-icons/dist/js/icons/expand-icon';
import PauseIcon from '@patternfly/react-icons/dist/js/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';

ComplexToolbarLogViewer = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [currentItemCount, setCurrentItemCount] = React.useState(0);
  const [selectedDataSource, setSelectedDataSource] = React.useState("container-1");
  const [selectDataSourceOpen, setSelectDataSourceOpen] = React.useState(false);
  const [selectDownloadSourceOpen, setSelectDownloadSourceOpen] = React.useState(false);
  const [timer, setTimer] = React.useState(null);
  
  const dataSources = {                    
    'container-1': { type: 'C', id: "data1" },   
    'container-2': { type: 'D', id: "data2" },   
    'container-3': { type: 'E', id: "data3" }    
  };    
  
  React.useEffect(() => {
    if (!isPaused) {
      setTimer(window.setInterval(() => {
          setCurrentItemCount((currentItemCount) => currentItemCount + 1);
      }, 1000));
    } else {
      timer && window.clearInterval(timer);
    }
    return () => {
      window.clearInterval(timer)
    }
  }, [isPaused]);
  
  React.useEffect(() => {
    if (currentItemCount > 29) {
      window.clearInterval(timer);
    }
  }, [currentItemCount]);
  
  const onExpandClick = event => {
    const element = document.querySelector('#complex-toolbar-demo');
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  };
  
  const downloadData = dataSourceName => {
    const element = document.createElement("a");
    const dataToDownload = [data[dataSources[dataSourceName].id]];
    const file = new Blob(dataToDownload, { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${dataSourceName}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  const downloadFromSource = source => {
    if (source === 'all' || selectedDataSource === 'container-1') {
      downloadData('container-1');
    }
    if (source === 'all' || selectedDataSource === 'container-2') {
      downloadData('container-2');
    }
    if (source === 'all' || selectedDataSource === 'container-3') {
      downloadData('container-3');
    }
  };
  
  const selectDataSourceMenu = (
    <React.Fragment>
      {Object.entries(dataSources).map(([value, { type }]) => (
        <SelectOption
          key={value}
          value={value}
          isSelected={selectedDataSource === value}
          isChecked={selectedDataSource === value}
        >
          <Badge key={value}>{type}</Badge>
          {` ${value}`}
        </SelectOption>
      ))}
    </React.Fragment>
  );
  
  const selectDataSourcePlaceholder = (
    <React.Fragment>
      <Badge>{dataSources[selectedDataSource].type}</Badge>
      {` ${selectedDataSource}`}
    </React.Fragment>
  );
  
  const leftAlignedToolbarGroup = (
    <React.Fragment>
      <ToolbarItem variant="search-filter">
        <Select
          onToggle={isOpen => setSelectDataSourceOpen(isOpen)}
          onSelect={(event, selection) => {
            setSelectDataSourceOpen(false);
            setSelectedDataSource(selection);
            setCurrentItemCount(0);
          }}
          selections={selectedDataSource}
          isOpen={selectDataSourceOpen}
          customContent={selectDataSourceMenu}
          placeholderText={selectDataSourcePlaceholder}
          width={233}
        />
      </ToolbarItem>
      <ToolbarItem>
        <Button variant={isPaused ? 'plain' : 'link'} onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? <PlayIcon /> : <PauseIcon />}
          {isPaused ? ` Resume Log` : ` Pause Log`}
        </Button>
      </ToolbarItem>
    </React.Fragment>
  );
  
  const downloadSourceMenuItems = [
    <DropdownItem key="dropdown-1" component="button" onClick={() => downloadFromSource("selection")}>
      Current container logs
    </DropdownItem>,
    <DropdownItem key="dropdown-2" component="button" onClick={() => downloadFromSource("all")}>
      All container logs
    </DropdownItem>
  ];

  const rightAlignedToolbarGroup = (
    <React.Fragment>
      <ToolbarToggleGroup toggleIcon={<EllipsisVIcon />} breakpoint="md">
        <ToolbarItem variant="search-filter">
          <LogViewerSearch placeholder="Search" />
        </ToolbarItem>
        <ToolbarItem variant="search-filter">
          <Dropdown
            onSelect={() => {
              setSelectDownloadSourceOpen(false);
            }}
            toggle={
              <DropdownToggle id="download-toggle" onToggle={isOpen => setSelectDownloadSourceOpen(isOpen)}>
                Download
              </DropdownToggle>
            }
            isOpen={selectDownloadSourceOpen}
            dropdownItems={downloadSourceMenuItems}
          />
        </ToolbarItem>
        <ToolbarItem>
          <Tooltip position="top" content={<div>Expand</div>}>
            <Button onClick={onExpandClick} variant="plain" aria-label="View log viewer in full screen">
              <ExpandIcon />
            </Button>
          </Tooltip>
        </ToolbarItem>
      </ToolbarToggleGroup>
    </React.Fragment>
  );

  return (
    <LogViewer
      data={data[dataSources[selectedDataSource].id]}
      id="complex-toolbar-demo"
      itemCount={currentItemCount}
      scrollToRow={currentItemCount}
      toolbar={
        <Toolbar>
          <ToolbarContent>
            <ToolbarGroup alignment={{ default: 'alignLeft' }}>{leftAlignedToolbarGroup}</ToolbarGroup>
            <ToolbarGroup alignment={{ default: 'alignRight' }}>{rightAlignedToolbarGroup}</ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      }
    />
  );
};
```
