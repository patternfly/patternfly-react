import React from 'react';
import {
  Badge,
  Button,
  MenuToggle,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  PageSection,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
  Tooltip,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuFooter
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import PauseIcon from '@patternfly/react-icons/dist/esm/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

export const ConsoleLogViewerToolbar: React.FC = () => {
  const firstOptions = {
    'container-sample-1': { type: 'C' },
    'container-sample-2': { type: 'D' },
    'container-sample-3': { type: 'E' }
  };

  const [containerExpanded, setContainerExpanded] = React.useState(false);
  const [containerExpandedMobile, setContainerExpandedMobile] = React.useState(false);
  const [containerSelected, setContainerSelected] = React.useState(Object.keys(firstOptions)[0]);
  const [optionExpanded, setOptionExpanded] = React.useState(false);
  const [optionExpandedMobile, setOptionExpandedMobile] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [firstSwitchChecked, setFirstSwitchChecked] = React.useState(true);
  const [secondSwitchChecked, setSecondSwitchChecked] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchResultsCount, setSearchResultsCount] = React.useState(3);
  const [currentSearchResult, setCurrentSearchResult] = React.useState(1);
  const [externalExpanded, setExternalExpanded] = React.useState(false);
  const [externalExpandedMobile, setExternalExpandedMobile] = React.useState(false);
  const [downloadExpanded, setDownloadExpanded] = React.useState(false);
  const [downloadExpandedMobile, setDownloadExpandedMobile] = React.useState(false);
  const [mobileView, setMobileView] = React.useState(window.innerWidth >= 1450 ? false : true);

  const onContainerToggle = () => {
    setContainerExpanded((prevState) => !prevState);
  };

  const onContainerToggleMobile = () => {
    setContainerExpandedMobile((prevState) => !prevState);
  };

  const onContainerSelect = (_event: React.MouseEvent | undefined, selection: string | number | undefined) => {
    setContainerSelected(selection as string);
    setContainerExpanded(false);
  };

  const onContainerSelectMobile = (_event: React.MouseEvent | undefined, selection: string | number | undefined) => {
    setContainerSelected(selection as string);
    setContainerExpandedMobile(false);
  };

  const onOptionSelect = (_event: React.MouseEvent | undefined) => {};

  const onOptionSelectMobile = (_event: React.MouseEvent | undefined) => {};

  const onOptionToggle = () => {
    setOptionExpanded((prevState) => !prevState);
  };

  const onOptionToggleMobile = () => {
    setOptionExpandedMobile((prevState) => !prevState);
  };

  const onExternalToggle = () => {
    setExternalExpanded((prevState) => !prevState);
  };

  const onExternalToggleMobile = () => {
    setExternalExpandedMobile((prevState) => !prevState);
  };

  const onExternalSelect = () => {
    setExternalExpanded(false);
  };

  const onExternalSelectMobile = () => {
    setExternalExpandedMobile(false);
  };

  const onDownloadToggle = () => {
    setDownloadExpanded((prevState) => !prevState);
  };

  const onDownloadToggleMobile = () => {
    setDownloadExpandedMobile((prevState) => !prevState);
  };

  const onDownloadSelect = () => {
    setDownloadExpanded(false);
  };

  const onDownloadSelectMobile = () => {
    setDownloadExpandedMobile(false);
  };

  const onExternalClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log('External logs opened!');
  };

  const onDownloadClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log('Download action clicked!');
  };

  const pauseOrStart = (_event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPaused((prevState) => !prevState);
  };

  const handleFirstSwitchChange = () => {
    setFirstSwitchChecked((prevState) => !prevState);
  };

  const handleSecondSwitchChange = () => {
    setSecondSwitchChecked((prevState) => !prevState);
  };

  const onClearLogs = () => {
    setOptionExpanded(false);
    // eslint-disable-next-line no-console
    console.log('Logs cleared!');
  };

  const onClearLogsMobile = () => {
    setOptionExpandedMobile(false);
    // eslint-disable-next-line no-console
    console.log('Logs cleared!');
  };

  const onSearchChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setSearchValue(value);
    setSearchResultsCount(3);
  };

  const onSearchClear = (_event: React.SyntheticEvent<HTMLButtonElement, Event>) => {
    setSearchValue('');
    setSearchResultsCount(0);
    setCurrentSearchResult(1);
  };

  const onSearchNext = (_event: React.SyntheticEvent<HTMLButtonElement, Event>) => {
    setCurrentSearchResult((prevState) => {
      const newCurrentResult = prevState + 1;

      return newCurrentResult <= searchResultsCount ? newCurrentResult : searchResultsCount;
    });
  };

  const onSearchPrevious = (_event: React.SyntheticEvent<HTMLButtonElement, Event>) => {
    setCurrentSearchResult((prevState) => {
      const newCurrentResult = prevState - 1;
      return newCurrentResult > 0 ? newCurrentResult : 1;
    });
  };

  const onPageResize = (
    _event: MouseEvent | TouchEvent | React.KeyboardEvent<Element>,
    { windowSize }: { windowSize: number }
  ) => {
    if (windowSize >= 1450) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  };

  const externalDropdownItems = (
    <>
      <DropdownItem key="action-1" onClick={onExternalClick}>
        External logs 1
      </DropdownItem>
      <DropdownItem key="action-2" onClick={onExternalClick}>
        External logs 2
      </DropdownItem>
      <DropdownItem key="action-3" onClick={onExternalClick}>
        External logs 3
      </DropdownItem>
    </>
  );

  const downloadDropdownItems = (
    <>
      <DropdownItem key="action-4" onClick={onDownloadClick}>
        Current container logs
      </DropdownItem>
      <DropdownItem key="action-5" onClick={onDownloadClick}>
        All container logs
      </DropdownItem>
    </>
  );

  const optionSelectItems = (
    <>
      <SelectOption key="switch-1" hasCheckbox isSelected={firstSwitchChecked} onClick={handleFirstSwitchChange}>
        Display timestamp
      </SelectOption>
      <SelectOption key="switch-2" hasCheckbox isSelected={secondSwitchChecked} onClick={handleSecondSwitchChange}>
        Wrap lines
      </SelectOption>
    </>
  );

  const selectDropdownContent = (
    <>
      <SelectList>
        {Object.entries(firstOptions).map(([value, { type }]) => (
          <SelectOption key={value} hasCheckbox value={value} isSelected={containerSelected === value}>
            <Badge key={value}>{type}</Badge>
            {` ${value}`}
          </SelectOption>
        ))}
      </SelectList>
    </>
  );

  const clearLogsFooter = (type: string) => (
    <MenuFooter key="clear-log" onClick={type === 'mobile' ? onClearLogsMobile : onClearLogs}>
      <Button variant="link" isInline>
        Clear logs
      </Button>
    </MenuFooter>
  );

  const selectToggleContent = ({ showText }: { showText: boolean }) => {
    if (!containerSelected) {
      return 'Select';
    }
    return (
      <React.Fragment>
        <Badge>{firstOptions[containerSelected].type}</Badge>
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
          onChange={onSearchChange}
          onClear={onSearchClear}
          resultsCount={`${currentSearchResult} / ${searchResultsCount}`}
          onNextClick={onSearchNext}
          onPreviousClick={onSearchPrevious}
        />
      </ToolbarItem>
    </ToolbarToggleGroup>
  );

  const leftAlignedItemsDesktop = (
    <React.Fragment>
      <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>
        <Select
          role="menu"
          toggle={(toggleRef) => (
            <MenuToggle
              ref={toggleRef}
              onClick={onContainerToggle}
              isExpanded={containerExpanded}
              style={{ width: '250px' }}
            >
              {selectToggleContent({ showText: true })}
            </MenuToggle>
          )}
          onSelect={onContainerSelect}
          onOpenChange={(isOpen) => setContainerExpanded(isOpen)}
          selected={containerSelected}
          isOpen={containerExpanded}
        >
          {selectDropdownContent}
        </Select>
      </ToolbarItem>
      <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>
        <Select
          isOpen={optionExpanded}
          role="menu"
          onOpenChange={(isOpen) => setOptionExpanded(isOpen)}
          onOpenChangeKeys={['Escape']}
          onSelect={onOptionSelect}
          toggle={(toggleRef) => (
            <MenuToggle ref={toggleRef} isExpanded={optionExpanded} onClick={onOptionToggle} icon={<CogIcon />}>
              Options
            </MenuToggle>
          )}
        >
          <SelectList>{optionSelectItems}</SelectList>
          {clearLogsFooter('desktop')}
        </Select>
      </ToolbarItem>
      <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>
        <Button
          variant={isPaused ? 'plain' : 'link'}
          onClick={pauseOrStart}
          icon={isPaused ? <PlayIcon /> : <PauseIcon />}
        >
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
              <MenuToggle ref={toggleRef} onClick={onContainerToggleMobile} isExpanded={containerExpandedMobile}>
                {selectToggleContent({ showText: false })}
              </MenuToggle>
            )}
            onSelect={onContainerSelectMobile}
            onOpenChange={(isOpen) => setContainerExpandedMobile(isOpen)}
            selected={containerSelected}
            isOpen={containerExpandedMobile}
          >
            {selectDropdownContent}
          </Select>
        </Tooltip>
      </ToolbarItem>
      <ToolbarItem visibility={{ default: 'visible', '2xl': 'hidden' }}>
        <Tooltip position="top" content={<div>Options</div>}>
          <Select
            role="menu"
            isOpen={optionExpandedMobile}
            onOpenChange={(isOpen) => setOptionExpandedMobile(isOpen)}
            onOpenChangeKeys={['Escape']}
            onSelect={onOptionSelectMobile}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                isExpanded={optionExpandedMobile}
                onClick={onOptionToggleMobile}
                icon={<CogIcon />}
                aria-label="Options"
              />
            )}
          >
            <SelectList>{optionSelectItems}</SelectList>
            {clearLogsFooter('mobile')}
          </Select>
        </Tooltip>
      </ToolbarItem>
      <ToolbarItem visibility={{ default: 'visible', '2xl': 'hidden' }}>
        <Tooltip position="top" content={<div>{isPaused ? 'Resume log' : 'Pause log'}</div>}>
          <Button
            variant="plain"
            onClick={pauseOrStart}
            aria-label={isPaused ? 'Play' : 'Paused'}
            icon={isPaused ? <PlayIcon /> : <PauseIcon />}
          />
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
          onOpenChange={(isOpen) => setExternalExpanded(isOpen)}
          onSelect={onExternalSelect}
          toggle={(toggleRef) => (
            <MenuToggle ref={toggleRef} isExpanded={externalExpanded} onClick={onExternalToggle}>
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
          onOpenChange={(isOpen) => setDownloadExpanded(isOpen)}
          onSelect={onDownloadSelect}
          toggle={(toggleRef) => (
            <MenuToggle ref={toggleRef} isExpanded={downloadExpanded} onClick={onDownloadToggle}>
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
            onOpenChange={(isOpen) => setExternalExpandedMobile(isOpen)}
            onSelect={onExternalSelectMobile}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                isExpanded={externalExpandedMobile}
                onClick={onExternalToggleMobile}
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
            onOpenChange={(isOpen) => setDownloadExpandedMobile(isOpen)}
            onSelect={onDownloadSelectMobile}
            popperProps={{ position: 'right' }}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                isExpanded={downloadExpandedMobile}
                onClick={onDownloadToggleMobile}
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
          <Button variant="plain" aria-label="expand" icon={<ExpandIcon />} />
        </Tooltip>
      </ToolbarItem>
    </React.Fragment>
  );

  const items = (
    <React.Fragment>
      <ToolbarGroup align={{ default: 'alignStart' }}>{leftAlignedItems}</ToolbarGroup>
      <ToolbarGroup align={{ default: 'alignEnd' }}>{rightAlignedItems}</ToolbarGroup>
    </React.Fragment>
  );

  return (
    <DashboardWrapper sidebarNavOpen={!mobileView} onPageResize={onPageResize}>
      <PageSection>
        <Toolbar id="log-viewer-toolbar" inset={{ default: 'insetNone' }}>
          <ToolbarContent>{items}</ToolbarContent>
        </Toolbar>
      </PageSection>
    </DashboardWrapper>
  );
};
