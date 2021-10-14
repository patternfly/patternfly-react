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
import { OutlinedPlayCircleIcon } from '@patternfly/react-icons';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import PauseIcon from '@patternfly/react-icons/dist/esm/icons/pause-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

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
import OutlinedPlayCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-play-circle-icon';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import PauseIcon from '@patternfly/react-icons/dist/esm/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';

ComplexToolbarLogViewer = () => {
  const dataSources = {
    'container-1': { type: 'C', id: 'data1' },
    'container-2': { type: 'D', id: 'data2' },
    'container-3': { type: 'E', id: 'data3' }
  };
  const [isPaused, setIsPaused] = React.useState(false);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [itemCount, setItemCount] = React.useState(1);
  const [currentItemCount, setCurrentItemCount] = React.useState(0);
  const [renderData, setRenderData] = React.useState('');
  const [selectedDataSource, setSelectedDataSource] = React.useState('container-1');
  const [selectDataSourceOpen, setSelectDataSourceOpen] = React.useState(false);
  const [timer, setTimer] = React.useState(null);
  const [selectedData, setSelectedData] = React.useState(data[dataSources[selectedDataSource].id].split('\n'));
  const [buffer, setBuffer] = React.useState([]);
  const [linesBehind, setLinesBehind] = React.useState(0);
  const logViewerRef = React.useRef();

  React.useEffect(() => {
    setTimer(
      window.setInterval(() => {
        setItemCount(itemCount => itemCount + 1);
      }, 500)
    );
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    if (itemCount > selectedData.length) {
      window.clearInterval(timer);
    } else {
      setBuffer(selectedData.slice(0, itemCount));
    }
  }, [itemCount]);

  React.useEffect(() => {
    if (!isPaused && buffer.length > 0) {
      setCurrentItemCount(buffer.length);
      setRenderData(buffer.join('\n'));
      if (logViewerRef && logViewerRef.current) {
        logViewerRef.current.scrollToBottom();
      }
    } else if (buffer.length !== currentItemCount) {
      setLinesBehind(buffer.length - currentItemCount);
    } else {
      setLinesBehind(0);
    }
  }, [isPaused, buffer]);

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
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  const onDownloadClick = () => {
    const element = document.createElement('a');
    const dataToDownload = [data[dataSources[selectedDataSource].id]];
    const file = new Blob(dataToDownload, { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedDataSource}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const onScroll = ({ scrollOffsetToBottom, scrollDirection, scrollUpdateWasRequested }) => {
    if (!scrollUpdateWasRequested) {
      if (scrollOffsetToBottom > 0) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }
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

  const ControlButton = () => {
    return (
      <Button
        variant={isPaused ? 'plain' : 'link'}
        onClick={() => {
          setIsPaused(!isPaused);
        }}
      >
        {isPaused ? <PlayIcon /> : <PauseIcon />}
        {isPaused ? ` Resume Log` : ` Pause Log`}
      </Button>
    );
  };

  const leftAlignedToolbarGroup = (
    <React.Fragment>
      <ToolbarToggleGroup toggleIcon={<EllipsisVIcon />} breakpoint="md">
        <ToolbarItem variant="search-filter">
          <Select
            onToggle={isOpen => setSelectDataSourceOpen(isOpen)}
            onSelect={(event, selection) => {
              setSelectDataSourceOpen(false);
              setSelectedDataSource(selection);
              setSelectedData(data[dataSources[selection].id].split('\n'));
              setLinesBehind(0);
              setBuffer([]);
              setItemCount(1);
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
          <LogViewerSearch onFocus={e => setIsPaused(true)} placeholder="Search" />
        </ToolbarItem>
      </ToolbarToggleGroup>
      <ToolbarItem>
        <ControlButton />
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

  const FooterButton = () => {
    const handleClick = e => {
      setIsPaused(false);
    };
    return (
      <Button onClick={handleClick} isBlock>
        <OutlinedPlayCircleIcon />
        resume {linesBehind === 0 ? null : `and show ${linesBehind} lines`}
      </Button>
    );
  };
  return (
    <LogViewer
      data={renderData}
      id="complex-toolbar-demo"
      scrollToRow={currentItemCount}
      innerRef={logViewerRef}
      height={isFullScreen ? '100%' : 600}
      toolbar={
        <Toolbar>
          <ToolbarContent>
            <ToolbarGroup alignment={{ default: 'alignLeft' }}>{leftAlignedToolbarGroup}</ToolbarGroup>
            <ToolbarGroup alignment={{ default: 'alignRight' }}>{rightAlignedToolbarGroup}</ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      }
      overScanCount={10}
      footer={isPaused && <FooterButton />}
      onScroll={onScroll}
    />
  );
};
```
