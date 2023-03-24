---
id: Toolbar
section: components
---

import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import {
Dropdown as DropdownDeprecated,
DropdownItem as DropdownItemDeprecated,
DropdownToggle,
DropdownToggleAction,
DropdownPosition,
DropdownSeparator
} from '@patternfly/react-core/deprecated';

import PauseIcon from '@patternfly/react-icons/dist/esm/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

## Demos

### Console log viewer toolbar demo

This is an example of toolbar usage in log viewer.

```js isFullscreen
import React from 'react';
import {
  Badge,
  Button,
  Checkbox,
  MenuToggle,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  PageSection,
  PageSectionVariants,
  Toolbar,
  ToolbarContent, 
  ToolbarGroup, 
  ToolbarItem, 
  ToolbarToggleGroup,
  Tooltip
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownToggle,
  DropdownToggleAction,
  DropdownPosition,
  DropdownSeparator
} from '@patternfly/react-core/deprecated';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

import PauseIcon from '@patternfly/react-icons/dist/esm/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

class ConsoleLogViewerToolbar extends React.Component {
  constructor(props) {
    super(props);

    this.firstOptions = {
      'container-sample-1': { type: 'C' },
      'container-sample-2': { type: 'D' },
      'container-sample-3': { type: 'E' }
    };

    this.state = {
      containerExpanded: false,
      containerExpandedMobile: false,
      containerSelected: Object.keys(this.firstOptions)[0],
      optionExpanded: false,
      optionExpandedMobile: false,
      isPaused: false,
      firstSwitchChecked: true,
      secondSwitchChecked: false,
      searchValue: '',
      searchResultsCount: 3,
      currentSearchResult: 1,
      externalExpanded: false,
      externalExpandedMobile: false,
      downloadExpanded: false,
      downloadExpandedMobile: false,
      mobileView: window.innerWidth >= 1450 ? false : true
    };

    this.onContainerToggle = () => {
      this.setState(prevState => {
        return {
          containerExpanded: !prevState.containerExpanded
        }
      });
    };

    this.onContainerToggleMobile = () => {
      this.setState(prevState => {
        return {
          containerExpandedMobile: !prevState.containerExpandedMobile
        }
      });
    };

    this.onContainerSelect = (event, selection) => {
      this.setState({
        containerSelected: selection,
        containerExpanded: false
      });
    };

    this.onContainerSelectMobile = (event, selection) => {
      this.setState({
        containerSelected: selection,
        containerExpandedMobile: false
      });
    };

    this.onOptionToggle = (_event, isExpanded) => {
      this.setState({
        optionExpanded: isExpanded
      });
    };

    this.onOptionToggleMobile = (_event, isExpanded) => {
      this.setState({
        optionExpandedMobile: isExpanded
      });
    };

    this.onOptionSelect = (event) => {
      this.setState({
        optionExpanded: !this.state.optionExpanded
      });
    };

    this.onOptionSelectMobile = (event) => {
      this.setState({
        optionExpandedMobile: !this.state.optionExpandedMobile
      });
    };

    this.onExternalToggle = (_event, isExpanded) => {
      this.setState({
        externalExpanded: isExpanded
      });
    };

    this.onExternalToggleMobile = (_event, isExpanded) => {
      this.setState({
        externalExpandedMobile: isExpanded
      });
    };

    this.onExternalSelect = (event) => {
      this.setState({
        externalExpanded: !this.state.externalExpanded
      });
    };

    this.onExternalSelectMobile = (event) => {
      this.setState({
        externalExpandedMobile: !this.state.externalExpandedMobile
      });
    };

    this.onDownloadToggle = (_event, isExpanded) => {
      this.setState({
        downloadExpanded: isExpanded
      });
    };

    this.onDownloadToggleMobile = (_event, isExpanded) => {
      this.setState({
        downloadExpandedMobile: isExpanded
      });
    };

    this.onDownloadSelect = (event) => {
      this.setState({
        downloadExpanded: !this.state.downloadExpanded
      });
    };

    this.onDownloadSelectMobile = (event) => {
      this.setState({
        downloadExpandedMobile: !this.state.downloadExpandedMobile
      });
    };

    this.onExternalClick = (event) => {
      window.alert('Open external logs!');
    };

    this.onDownloadClick = (event) => {
      window.alert('Action!');
    };

    this.pauseOrStart = (event) => {
      this.setState({
        isPaused: !this.state.isPaused
      });
    };

    this.handleFirstSwitchChange = (event, firstSwitchChecked) => {
      this.setState({ firstSwitchChecked });
    };

    this.handleSecondSwitchChange = (event, secondSwitchChecked) => {
      this.setState({ secondSwitchChecked });
    };

    this.onClearLogs = (event) => {
      this.setState({
        optionExpanded: false
      });
      window.alert('Clear Logs!');
    };

    this.onSearchChange = (event, value) => {
      this.setState({
        searchValue: value,
        searchResultsCount: 3
      });
    };

    this.onSearchClear = (event) => {
      this.setState({
        searchValue: '',
        searchResultsCount: 0,
        currentSearchResult: 1
      });
    };

    this.onSearchNext = (event) => {
      this.setState((prevState) => {
        const newCurrentResult = prevState.currentSearchResult + 1;
        return {
          currentSearchResult:
            newCurrentResult <= prevState.searchResultsCount ? newCurrentResult : prevState.searchResultsCount
        };
      });
    };

    this.onSearchPrevious = (event) => {
      this.setState((prevState) => {
        const newCurrentResult = prevState.currentSearchResult - 1;
        return {
          currentSearchResult: newCurrentResult > 0 ? newCurrentResult : 1
        };
      });
    };

    this.onPageResize = ({ windowSize }) => {
      if (windowSize >= 1450) {
        this.setState({
          mobileView: false
        });
      } else {
        this.setState({
          mobileView: true
        });
      }
    };
  }

  render() {
    const {
      containerExpanded,
      containerExpandedMobile,
      containerSelected,
      optionExpanded,
      optionExpandedMobile,
      isPaused,
      firstSwitchChecked,
      secondSwitchChecked,
      searchValue,
      searchResultsCount,
      currentSearchResult,
      externalExpanded,
      externalExpandedMobile,
      downloadExpanded,
      downloadExpandedMobile,
      kebabExpanded,
      mobileView
    } = this.state;

    const externalDropdownItems = [
      <DropdownItemDeprecated key="action-1" component="button" onClick={this.onExternalClick}>
        External logs
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated key="action-2" component="button" onClick={this.onExternalClick}>
        External logs
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated key="action-3" component="button" onClick={this.onExternalClick}>
        External logs
      </DropdownItemDeprecated>
    ];

    const downloadDropdownItems = [
      <DropdownItemDeprecated key="action-4" component="button" onClick={this.onDownloadClick}>
        Current container logs
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated key="action-5" component="button" onClick={this.onDownloadClick}>
        All container logs
      </DropdownItemDeprecated>
    ];

    const optionDropdownItems = [
      <DropdownItemDeprecated key="switch-1">
        <Checkbox
          label="Display timestamp"
          isChecked={firstSwitchChecked}
          onChange={this.handleFirstSwitchChange}
          id="switchMobileCheckbox1"
          name="check1"
        />
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated key="switch-2">
        <Checkbox
          label="Wrap lines"
          isChecked={secondSwitchChecked}
          onChange={this.handleSecondSwitchChange}
          id="switchMobileCheckbox2"
          name="check2"
        />
      </DropdownItemDeprecated>,
      <DropdownSeparator key="separator" />,
      <DropdownItemDeprecated key="clear-log" onClick={this.onClearLogs}>
        Clear logs
      </DropdownItemDeprecated>
    ];

    const selectDropdownContent = (
      <SelectList>
        {Object.entries(this.firstOptions).map(([value, { type }]) => (
          <SelectOption
            key={value}
            hasCheckbox
            itemId={value}
            isSelected={containerSelected === value}
          >
            <Badge key={value}>{type}</Badge>
            {` ${value}`}
          </SelectOption>
        ))}
      </SelectList>
    );

    const selectToggleContent = ({ showText }) => {
      if (!containerSelected) {
        return 'Select';
      }
      return (
        <React.Fragment>
          <Badge>{this.firstOptions[containerSelected].type}</Badge>
          {showText && ` ${containerSelected}`}
        </React.Fragment>
      );
    };

    const LogsSearchInput = (
      <ToolbarToggleGroup toggleIcon={<SearchIcon />} breakpoint="lg">
        <ToolbarItem>
          <SearchInput
            placeholder="Search logs"
            value={searchValue}
            onChange={this.onSearchChange}
            onClear={this.onSearchClear}
            resultsCount={`${currentSearchResult} / ${searchResultsCount}`}
            onNextClick={this.onSearchNext}
            onPreviousClick={this.onSearchPrevious}
          />
        </ToolbarItem>
      </ToolbarToggleGroup>
    );

    const leftAlignedItemsDesktop = (
      <React.Fragment>
        <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>
          <Select
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                onClick={this.onContainerToggle}
                isExpanded={containerExpanded}
                style={{ width: '250px' }}
              >
                {selectToggleContent({ showText: true })}
              </MenuToggle>
            )}
            onSelect={this.onContainerSelect}
            onOpenChange={(isOpen) => this.setState({ containerExpanded: isOpen })}
            selected={containerSelected}
            isOpen={containerExpanded}
          >
            {selectDropdownContent}
          </Select>
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>
          <DropdownDeprecated
            toggle={
              <DropdownToggle id="option-toggle-desktop" onToggle={this.onOptionToggle} icon={<CogIcon />}>
                Options
              </DropdownToggle>
            }
            isOpen={optionExpanded}
            dropdownItems={optionDropdownItems}
          />
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>
          <Button variant={isPaused ? 'plain' : 'link'} onClick={this.pauseOrStart}>
            {isPaused ? <PlayIcon /> : <PauseIcon />}
            {isPaused ? ` Resume Log` : ` Pause Log`}
          </Button>
        </ToolbarItem>
      </React.Fragment>
    );

    const leftAlignedItemsMobile = (
      <React.Fragment>
        <ToolbarItem visibility={{ default: 'visible', '2xl': 'hidden' }}>
          <Tooltip position="top" content={<div>Select container</div>}>
            <Select
              role="menu"
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={this.onContainerToggleMobile}
                  isExpanded={containerExpandedMobile}
                >
                  {selectToggleContent({ showText: false })}
                </MenuToggle>
              )}
              onSelect={this.onContainerSelectMobile}
              onOpenChange={(isOpen) => this.setState({ containerExpandedMobile: isOpen })}
              selected={containerSelected}
              isOpen={containerExpandedMobile}
            >
              {selectDropdownContent}
              </Select>
          </Tooltip>
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'visible', '2xl': 'hidden' }}>
          <Tooltip position="top" content={<div>Options</div>}>
            <DropdownDeprecated
              toggle={
                <DropdownToggle
                  aria-label="Options"
                  id="option-toggle-mobile"
                  onToggle={this.onOptionToggleMobile}
                  icon={<CogIcon />}
                />
              }
              isOpen={optionExpandedMobile}
              dropdownItems={optionDropdownItems}
            />
          </Tooltip>
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'visible', '2xl': 'hidden' }}>
          <Tooltip position="top" content={<div>{isPaused ? 'Resume log' : 'Pause log'}</div>}>
            <Button variant="plain" onClick={this.pauseOrStart} aria-label={isPaused ? 'Play' : 'Paused'}>
              {isPaused ? <PlayIcon /> : <PauseIcon />}
            </Button>
          </Tooltip>
        </ToolbarItem>
      </React.Fragment>
    );

    const leftAlignedItems = (
      <React.Fragment>
        {leftAlignedItemsDesktop}
        {leftAlignedItemsMobile}
      </React.Fragment>
    );

    const rightAlignedItemsDesktop = (
      <React.Fragment>
        <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>
          <DropdownDeprecated
            onSelect={this.onExternalSelect}
            toggle={
              <DropdownToggle id="external-toggle" onToggle={this.onExternalToggle}>
                External logs
              </DropdownToggle>
            }
            isOpen={externalExpanded}
            dropdownItems={externalDropdownItems}
          />
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>
          <DropdownDeprecated
            onSelect={this.onDownloadSelect}
            toggle={
              <DropdownToggle id="download-toggle" onToggle={this.onDownloadToggle}>
                Download
              </DropdownToggle>
            }
            isOpen={downloadExpanded}
            dropdownItems={downloadDropdownItems}
          />
        </ToolbarItem>
      </React.Fragment>
    );

    const rightAlignedItemsMobile = (
      <React.Fragment>
        <ToolbarItem visibility={{ default: 'visible', '2xl': 'hidden' }}>
          <Tooltip position="top" content={<div>External logs</div>}>
            <DropdownDeprecated
              onSelect={this.onExternalSelectMobile}
              toggle={
                <DropdownToggle
                  id="mobile-external-toggle"
                  onToggle={this.onExternalToggleMobile}
                  aria-label="External logs"
                  icon={<ExternalLinkAltIcon />}
                />
              }
              isOpen={externalExpandedMobile}
              dropdownItems={externalDropdownItems}
            />
          </Tooltip>
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'visible', '2xl': 'hidden' }}>
          <Tooltip position="top" content={<div>Download</div>}>
            <DropdownDeprecated
              onSelect={this.onDownloadSelectMobile}
              toggle={
                <DropdownToggle
                  id="mobile-download-toggle"
                  aria-label="Download"
                  onToggle={this.onDownloadToggleMobile}
                  icon={<DownloadIcon />}
                />
              }
              isOpen={downloadExpandedMobile}
              position={DropdownPosition.right}
              dropdownItems={downloadDropdownItems}
            />
          </Tooltip>
        </ToolbarItem>
      </React.Fragment>
    );

    const rightAlignedItems = (
      <React.Fragment>
        <ToolbarItem>{LogsSearchInput}</ToolbarItem>
        {rightAlignedItemsDesktop}
        {rightAlignedItemsMobile}
        <ToolbarItem>
          <Tooltip position="top" content={<div>Expand</div>}>
            <Button variant="plain" aria-label="expand">
              <ExpandIcon />
            </Button>
          </Tooltip>
        </ToolbarItem>
      </React.Fragment>
    );

    const items = (
      <React.Fragment>
        <ToolbarGroup align={{ default: 'alignLeft' }}>{leftAlignedItems}</ToolbarGroup>
        <ToolbarGroup align={{ default: 'alignRight' }}>{rightAlignedItems}</ToolbarGroup>
      </React.Fragment>
    );

    const toolbar = (
      <Toolbar
        id="log-viewer-toolbar"
        inset={{
          default: 'insetNone'
        }}
      >
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );
    return (
      <DashboardWrapper sidebarNavOpen={!mobileView} onPageResize={this.onPageResize}>
        <PageSection variant={PageSectionVariants.light}>{toolbar}</PageSection>
      </DashboardWrapper>
    );
  }
}
```
