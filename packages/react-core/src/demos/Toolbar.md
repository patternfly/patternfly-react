---
id: Toolbar
section: components
---

import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
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
  Tooltip,
  Dropdown,
  DropdownItem,
  DropdownList,
  Divider
} from '@patternfly/react-core';
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
      this.setState((prevState) => {
        return {
          containerExpanded: !prevState.containerExpanded
        };
      });
    };

    this.onContainerToggleMobile = () => {
      this.setState((prevState) => {
        return {
          containerExpandedMobile: !prevState.containerExpandedMobile
        };
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

    this.onOptionToggle = () => {
      this.setState((prevState) => ({
        optionExpanded: !prevState.optionExpanded
      }));
    };

    this.onOptionToggleMobile = () => {
      this.setState((prevState) => ({
        optionExpandedMobile: !prevState.optionExpandedMobile
      }));
    };

    this.onExternalToggle = () => {
      this.setState((prevState) => ({
        externalExpanded: !prevState.externalExpanded
      }));
    };

    this.onExternalToggleMobile = () => {
      this.setState((prevState) => ({
        externalExpandedMobile: !prevState.externalExpandedMobile
      }));
    };

    this.onExternalSelect = () => {
      this.setState({
        externalExpanded: false
      });
    };

    this.onExternalSelectMobile = () => {
      this.setState({
        externalExpandedMobile: false
      });
    };

    this.onDownloadToggle = () => {
      this.setState((prevState) => ({
        downloadExpanded: !prevState.downloadExpanded
      }));
    };

    this.onDownloadToggleMobile = () => {
      this.setState((prevState) => ({
        downloadExpandedMobile: !prevState.downloadExpandedMobile
      }));
    };

    this.onDownloadSelect = () => {
      this.setState({
        downloadExpanded: false
      });
    };

    this.onDownloadSelectMobile = () => {
      this.setState({
        downloadExpandedMobile: false
      });
    };

    this.onExternalClick = (event) => {
      console.log('External logs opened!');
    };

    this.onDownloadClick = (event) => {
      console.log('Download action clicked!');
    };

    this.pauseOrStart = (event) => {
      this.setState({
        isPaused: !this.state.isPaused
      });
    };

    this.handleFirstSwitchChange = () => {
      this.setState((prevState) => ({ firstSwitchChecked: !prevState.firstSwitchChecked }));
    };

    this.handleSecondSwitchChange = () => {
      this.setState((prevState) => ({ secondSwitchChecked: !prevState.secondSwitchChecked }));
    };

    this.onClearLogs = () => {
      this.setState({
        optionExpanded: false
      });
      console.log('Logs cleared!');
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

    this.onPageResize = (_event, { windowSize }) => {
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

    const externalDropdownItems = (
      <>
        <DropdownItem key="action-1" onClick={this.onExternalClick}>
          External logs 1
        </DropdownItem>
        <DropdownItem key="action-2" onClick={this.onExternalClick}>
          External logs 2
        </DropdownItem>
        <DropdownItem key="action-3" onClick={this.onExternalClick}>
          External logs 3
        </DropdownItem>
      </>
    );
    const downloadDropdownItems = (
      <>
        <DropdownItem key="action-4" onClick={this.onDownloadClick}>
          Current container logs
        </DropdownItem>
        <DropdownItem key="action-5" onClick={this.onDownloadClick}>
          All container logs
        </DropdownItem>
      </>
    );
    const optionDropdownItems = (
      <>
        <DropdownItem key="switch-1" hasCheckbox isSelected={firstSwitchChecked} onClick={this.handleFirstSwitchChange}>
          Display timestamp
        </DropdownItem>
        <DropdownItem
          key="switch-2"
          hasCheckbox
          isSelected={secondSwitchChecked}
          onClick={this.handleSecondSwitchChange}
        >
          Wrap lines
        </DropdownItem>
        <Divider component="li" key="separator" />
        <DropdownItem key="clear-log" onClick={this.onClearLogs}>
          Clear logs
        </DropdownItem>
      </>
    );
    const selectDropdownContent = (
      <SelectList>
        {Object.entries(this.firstOptions).map(([value, { type }]) => (
          <SelectOption key={value} hasCheckbox value={value} isSelected={containerSelected === value}>
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
          <Dropdown
            isOpen={optionExpanded}
            onOpenChange={(isOpen) => this.setState({ optionExpanded: isOpen })}
            onSelect={this.onOptionSelect}
            toggle={(toggleRef) => (
              <MenuToggle ref={toggleRef} isExpanded={optionExpanded} onClick={this.onOptionToggle} icon={<CogIcon />}>
                Options
              </MenuToggle>
            )}
          >
            <DropdownList>{optionDropdownItems}</DropdownList>
          </Dropdown>
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
                <MenuToggle ref={toggleRef} onClick={this.onContainerToggleMobile} isExpanded={containerExpandedMobile}>
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
            <Dropdown
              isOpen={optionExpandedMobile}
              onOpenChange={(isOpen) => this.setState({ optionExpandedMobile: isOpen })}
              onSelect={this.onOptionSelectMobile}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={optionExpandedMobile}
                  onClick={this.onOptionToggleMobile}
                  icon={<CogIcon />}
                  aria-label="Options"
                />
              )}
            >
              <DropdownList>{optionDropdownItems}</DropdownList>
            </Dropdown>
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
          <Dropdown
            isOpen={externalExpanded}
            onOpenChange={(isOpen) => this.setState({ externalExpanded: isOpen })}
            onSelect={this.onExternalSelect}
            toggle={(toggleRef) => (
              <MenuToggle ref={toggleRef} isExpanded={externalExpanded} onClick={this.onExternalToggle}>
                External logs
              </MenuToggle>
            )}
          >
            <DropdownList>{externalDropdownItems}</DropdownList>
          </Dropdown>
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>
          <Dropdown
            isOpen={downloadExpanded}
            onOpenChange={(isOpen) => this.setState({ downloadExpanded: isOpen })}
            onSelect={this.onDownloadSelect}
            toggle={(toggleRef) => (
              <MenuToggle ref={toggleRef} isExpanded={downloadExpanded} onClick={this.onDownloadToggle}>
                Download
              </MenuToggle>
            )}
          >
            <DropdownList>{downloadDropdownItems}</DropdownList>
          </Dropdown>
        </ToolbarItem>
      </React.Fragment>
    );

    const rightAlignedItemsMobile = (
      <React.Fragment>
        <ToolbarItem visibility={{ default: 'visible', '2xl': 'hidden' }}>
          <Tooltip position="top" content={<div>External logs</div>}>
            <Dropdown
              isOpen={externalExpandedMobile}
              onOpenChange={(isOpen) => this.setState({ externalExpandedMobile: isOpen })}
              onSelect={this.onExternalSelectMobile}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={externalExpandedMobile}
                  onClick={this.onExternalToggleMobile}
                  icon={<ExternalLinkAltIcon />}
                  aria-label="External logs"
                />
              )}
            >
              <DropdownList>{externalDropdownItems}</DropdownList>
            </Dropdown>
          </Tooltip>
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'visible', '2xl': 'hidden' }}>
          <Tooltip position="top" content={<div>Download</div>}>
            <Dropdown
              isOpen={downloadExpandedMobile}
              onOpenChange={(isOpen) => this.setState({ downloadExpandedMobile: isOpen })}
              onSelect={this.onDownloadSelectMobile}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={downloadExpandedMobile}
                  onClick={this.onDownloadToggleMobile}
                  icon={<DownloadIcon />}
                  aria-label="Download"
                />
              )}
            >
              <DropdownList>{downloadDropdownItems}</DropdownList>
            </Dropdown>
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
