import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
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
import { data } from '../../../../../react-log-viewer/src/LogViewer/demos/../examples/realTestData.js';
import { OutlinedPlayCircleIcon } from '@patternfly/react-icons';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import PauseIcon from '@patternfly/react-icons/dist/esm/icons/pause-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
const pageData = {
  "id": "Log viewer",
  "section": "extensions",
  "source": "react-demos",
  "slug": "/extensions/log-viewer/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-log-viewer/src/LogViewer/demos/LogViewer.md",
  "beta": true,
  "examples": [
    "With complex toolbar"
  ]
};
pageData.liveContext = {
  LogViewer,
  LogViewerSearch,
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
  ToolbarToggleGroup,
  data,
  OutlinedPlayCircleIcon,
  ExpandIcon,
  PauseIcon,
  DownloadIcon,
  PlayIcon,
  EllipsisVIcon
};
pageData.examples = {
  'With complex toolbar': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { data } from './realTestData';\nimport { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';\nimport {\n  Badge,\n  Button,\n  Select,\n  SelectOption,\n  Tooltip,\n  Toolbar,\n  ToolbarContent,\n  ToolbarGroup,\n  ToolbarItem,\n  ToolbarToggleGroup\n} from '@patternfly/react-core';\nimport OutlinedPlayCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-play-circle-icon';\nimport ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';\nimport PauseIcon from '@patternfly/react-icons/dist/esm/icons/pause-icon';\nimport PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';\nimport EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';\nimport DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';\n\nComplexToolbarLogViewer = () => {\n  const dataSources = {\n    'container-1': { type: 'C', id: 'data1' },\n    'container-2': { type: 'D', id: 'data2' },\n    'container-3': { type: 'E', id: 'data3' }\n  };\n  const [isPaused, setIsPaused] = React.useState(false);\n  const [isFullScreen, setIsFullScreen] = React.useState(false);\n  const [itemCount, setItemCount] = React.useState(1);\n  const [currentItemCount, setCurrentItemCount] = React.useState(0);\n  const [renderData, setRenderData] = React.useState('');\n  const [selectedDataSource, setSelectedDataSource] = React.useState('container-1');\n  const [selectDataSourceOpen, setSelectDataSourceOpen] = React.useState(false);\n  const [timer, setTimer] = React.useState(null);\n  const [selectedData, setSelectedData] = React.useState(data[dataSources[selectedDataSource].id].split('\\n'));\n  const [buffer, setBuffer] = React.useState([]);\n  const [linesBehind, setLinesBehind] = React.useState(0);\n  const logViewerRef = React.useRef();\n\n  React.useEffect(() => {\n    setTimer(\n      window.setInterval(() => {\n        setItemCount(itemCount => itemCount + 1);\n      }, 500)\n    );\n    return () => {\n      window.clearInterval(timer);\n    };\n  }, []);\n\n  React.useEffect(() => {\n    if (itemCount > selectedData.length) {\n      window.clearInterval(timer);\n    } else {\n      setBuffer(selectedData.slice(0, itemCount));\n    }\n  }, [itemCount]);\n\n  React.useEffect(() => {\n    if (!isPaused && buffer.length > 0) {\n      setCurrentItemCount(buffer.length);\n      setRenderData(buffer.join('\\n'));\n      if (logViewerRef && logViewerRef.current) {\n        logViewerRef.current.scrollToBottom();\n      }\n    } else if (buffer.length !== currentItemCount) {\n      setLinesBehind(buffer.length - currentItemCount);\n    } else {\n      setLinesBehind(0);\n    }\n  }, [isPaused, buffer]);\n\n  const onExpandClick = event => {\n    const element = document.querySelector('#complex-toolbar-demo');\n\n    if (!isFullScreen) {\n      if (element.requestFullscreen) {\n        element.requestFullscreen();\n      } else if (element.mozRequestFullScreen) {\n        element.mozRequestFullScreen();\n      } else if (element.webkitRequestFullScreen) {\n        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);\n      }\n      setIsFullScreen(true);\n    } else {\n      if (document.exitFullscreen) {\n        document.exitFullscreen();\n      } else if (document.webkitExitFullscreen) {\n        /* Safari */\n        document.webkitExitFullscreen();\n      } else if (document.msExitFullscreen) {\n        /* IE11 */\n        document.msExitFullscreen();\n      }\n      setIsFullScreen(false);\n    }\n  };\n\n  const onDownloadClick = () => {\n    const element = document.createElement('a');\n    const dataToDownload = [data[dataSources[selectedDataSource].id]];\n    const file = new Blob(dataToDownload, { type: 'text/plain' });\n    element.href = URL.createObjectURL(file);\n    element.download = `${selectedDataSource}.txt`;\n    document.body.appendChild(element);\n    element.click();\n    document.body.removeChild(element);\n  };\n\n  const onScroll = ({ scrollOffsetToBottom, scrollDirection, scrollUpdateWasRequested }) => {\n    if (!scrollUpdateWasRequested) {\n      if (scrollOffsetToBottom > 0) {\n        setIsPaused(true);\n      } else {\n        setIsPaused(false);\n      }\n    }\n  };\n\n  const selectDataSourceMenu = Object.entries(dataSources).map(([value, { type }]) => (\n    <SelectOption\n      key={value}\n      value={value}\n      isSelected={selectedDataSource === value}\n      isChecked={selectedDataSource === value}\n    >\n      <Badge key={value}>{type}</Badge>\n      {` ${value}`}\n    </SelectOption>\n  ));\n\n  const selectDataSourcePlaceholder = (\n    <React.Fragment>\n      <Badge>{dataSources[selectedDataSource].type}</Badge>\n      {` ${selectedDataSource}`}\n    </React.Fragment>\n  );\n\n  const ControlButton = () => {\n    return (\n      <Button\n        variant={isPaused ? 'plain' : 'link'}\n        onClick={() => {\n          setIsPaused(!isPaused);\n        }}\n      >\n        {isPaused ? <PlayIcon /> : <PauseIcon />}\n        {isPaused ? ` Resume Log` : ` Pause Log`}\n      </Button>\n    );\n  };\n\n  const leftAlignedToolbarGroup = (\n    <React.Fragment>\n      <ToolbarToggleGroup toggleIcon={<EllipsisVIcon />} breakpoint=\"md\">\n        <ToolbarItem variant=\"search-filter\">\n          <Select\n            onToggle={isOpen => setSelectDataSourceOpen(isOpen)}\n            onSelect={(event, selection) => {\n              setSelectDataSourceOpen(false);\n              setSelectedDataSource(selection);\n              setSelectedData(data[dataSources[selection].id].split('\\n'));\n              setLinesBehind(0);\n              setBuffer([]);\n              setItemCount(1);\n              setCurrentItemCount(0);\n            }}\n            selections={selectedDataSource}\n            isOpen={selectDataSourceOpen}\n            placeholderText={selectDataSourcePlaceholder}\n          >\n            {selectDataSourceMenu}\n          </Select>\n        </ToolbarItem>\n        <ToolbarItem variant=\"search-filter\">\n          <LogViewerSearch onFocus={e => setIsPaused(true)} placeholder=\"Search\" />\n        </ToolbarItem>\n      </ToolbarToggleGroup>\n      <ToolbarItem>\n        <ControlButton />\n      </ToolbarItem>\n    </React.Fragment>\n  );\n\n  const rightAlignedToolbarGroup = (\n    <React.Fragment>\n      <ToolbarGroup variant=\"icon-button-group\">\n        <ToolbarItem>\n          <Tooltip position=\"top\" content={<div>Download</div>}>\n            <Button onClick={onDownloadClick} variant=\"plain\" aria-label=\"Download current logs\">\n              <DownloadIcon />\n            </Button>\n          </Tooltip>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Tooltip position=\"top\" content={<div>Expand</div>}>\n            <Button onClick={onExpandClick} variant=\"plain\" aria-label=\"View log viewer in full screen\">\n              <ExpandIcon />\n            </Button>\n          </Tooltip>\n        </ToolbarItem>\n      </ToolbarGroup>\n    </React.Fragment>\n  );\n\n  const FooterButton = () => {\n    const handleClick = e => {\n      setIsPaused(false);\n    };\n    return (\n      <Button onClick={handleClick} isBlock>\n        <OutlinedPlayCircleIcon />\n        resume {linesBehind === 0 ? null : `and show ${linesBehind} lines`}\n      </Button>\n    );\n  };\n  return (\n    <LogViewer\n      data={renderData}\n      id=\"complex-toolbar-demo\"\n      scrollToRow={currentItemCount}\n      innerRef={logViewerRef}\n      height={isFullScreen ? '100%' : 600}\n      toolbar={\n        <Toolbar>\n          <ToolbarContent>\n            <ToolbarGroup alignment={{ default: 'alignLeft' }}>{leftAlignedToolbarGroup}</ToolbarGroup>\n            <ToolbarGroup alignment={{ default: 'alignRight' }}>{rightAlignedToolbarGroup}</ToolbarGroup>\n          </ToolbarContent>\n        </Toolbar>\n      }\n      overScanCount={10}\n      footer={isPaused && <FooterButton />}\n      onScroll={onScroll}\n    />\n  );\n};","title":"With complex toolbar","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    {React.createElement(pageData.examples["With complex toolbar"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsLogViewerReactDemosDocs';
Component.pageData = pageData;

export default Component;
