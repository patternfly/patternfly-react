---
id: Log viewer
beta: true
section: extensions
---

import { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';
import {
  Badge,
  Button,
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
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';
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
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';

ComplexToolbarLogViewer = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [currentItemCount, setCurrentItemCount] = React.useState(0);
  const [selectedDataSource, setSelectedDataSource] = React.useState("container-1");
  const [selectDataSourceOpen, setSelectDataSourceOpen] = React.useState(false);
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

    if (!isFullScreen) {
      if (element.requestFullscreen) {
          element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
      } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
    
  };
  
  const onDownloadClick = () => {
    const element = document.createElement("a");
    const dataToDownload = [data[dataSources[selectedDataSource].id]];
    const file = new Blob(dataToDownload, { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedDataSource}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  const selectDataSourceMenu = Object.entries(dataSources).map(([value, { type }]) => (
    <SelectOption
      key={value}
      value={value}
      isSelected={selectedDataSource === value}
      isChecked={selectedDataSource === value}
    >
      <Badge key={value}>{type}</Badge>
      {` ${value}`}
    </SelectOption>
  ));
  
  const selectDataSourcePlaceholder = (
    <React.Fragment>
      <Badge>{dataSources[selectedDataSource].type}</Badge>
      {` ${selectedDataSource}`}
    </React.Fragment>
  );
  
  const leftAlignedToolbarGroup = (
    <React.Fragment>
    <ToolbarToggleGroup toggleIcon={<EllipsisVIcon />} breakpoint="md">
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
            placeholderText={selectDataSourcePlaceholder}
          >
            {selectDataSourceMenu}
          </Select>
        </ToolbarItem>
        <ToolbarItem variant="search-filter">
          <LogViewerSearch placeholder="Search" />
        </ToolbarItem>
      </ToolbarToggleGroup>
      <ToolbarItem>
        <Button variant={isPaused ? 'plain' : 'link'} onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? <PlayIcon /> : <PauseIcon />}
          {isPaused ? ` Resume Log` : ` Pause Log`}
        </Button>
      </ToolbarItem>
    </React.Fragment>
  );

  const rightAlignedToolbarGroup = (
    <React.Fragment>
      <ToolbarGroup variant="icon-button-group">
        <ToolbarItem>
          <Tooltip position="top" content={<div>Download</div>}>
            <Button onClick={onDownloadClick} variant="plain" aria-label="Download current logs">
              <DownloadIcon />
            </Button>
          </Tooltip>
        </ToolbarItem>
        <ToolbarItem>
          <Tooltip position="top" content={<div>Expand</div>}>
            <Button onClick={onExpandClick} variant="plain" aria-label="View log viewer in full screen">
              <ExpandIcon />
            </Button>
          </Tooltip>
        </ToolbarItem>
      </ToolbarGroup>
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
