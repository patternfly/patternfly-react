---
id: Toolbar
section: components
---

import PauseIcon from '@patternfly/react-icons/dist/js/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';
import ExpandIcon from '@patternfly/react-icons/dist/js/icons/expand-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';

## Demos
### Console log viewer toolbar demo

This is an example of toolbar usage in log viewer.

```js isFullscreen
import React from 'react';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { Badge, Button, Checkbox, Dropdown, DropdownItem, DropdownToggle, DropdownToggleAction, DropdownPosition, KebabToggle, SearchInput, Select, SelectOption, Switch, PageHeader, PageHeaderTools, Page, PageSidebar, PageSection, PageSectionVariants } from '@patternfly/react-core';
import PauseIcon from '@patternfly/react-icons/dist/js/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';
import ExpandIcon from '@patternfly/react-icons/dist/js/icons/expand-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';

class ConsoleLogViewerToolbar extends React.Component {
  constructor(props) {
    super(props);

    this.firstOptions = {
      'container-sample-1': { type: 'C' },
      'container-sample-2': { type: 'D' },
      'container-sample-3': { type: 'E' }
    };

    this.state = {
      firstExpanded: false,
      firstExpandedMobile: false,
      firstSelected: Object.keys(this.firstOptions)[0],
      isPaused: false,
      firstSwitchChecked: true,
      secondSwitchChecked: false,
      searchValue: 'error',
      searchResultsCount: 3,
      currentSearchResult: 1,
      secondExpanded: false,
      secondExpandedMobile: false,
      thirdExpanded: false,
      thirdExpandedMobile: false,
      kebabExpanded: false,
      mobileView: window.innerWidth >= 768 ? false : true
    };

    this.onFirstToggle = isExpanded => {
      this.setState({
        firstExpanded: isExpanded
      });
    };

    this.onFirstToggleMobile = isExpanded => {
      this.setState({
        firstExpandedMobile: isExpanded
      });
    };

    this.onFirstSelect = (event, selection) => {
      this.setState({
        firstSelected: selection,
        firstExpanded: false
      });
    };

    this.onFirstSelectMobile = (event, selection) => {
      this.setState({
        firstSelected: selection,
        firstExpandedMobile: false
      });
    };

    this.onSecondToggle = isExpanded => {
      this.setState({
        secondExpanded: isExpanded
      });
    };

    this.onSecondToggleMobile = isExpanded => {
      this.setState({
        secondExpandedMobile: isExpanded
      });
    };

    this.onSecondSelect = event => {
      this.setState({
        secondExpanded: !this.state.secondExpanded
      });
    };

    this.onSecondSelectMobile = event => {
      this.setState({
        secondExpandedMobile: !this.state.secondExpandedMobile
      })
    }

    this.onThirdToggle = isExpanded => {
      this.setState({
        thirdExpanded: isExpanded
      });
    };

    this.onThirdToggleMobile = isExpanded => {
      this.setState({
        thirdExpandedMobile: isExpanded
      });
    };

    this.onThirdSelect = event => {
      this.setState({
        thirdExpanded: !this.state.thirdExpanded
      });
    };

    this.onThirdSelectMobile = event => {
      this.setState({
        thirdExpandedMobile: !this.state.thirdExpandedMobile
      })
    }

    this.onKebabToggle = isExpanded => {
      this.setState({
        kebabExpanded: isExpanded
      });
    }

    this.onSecondClick = event => {
      window.alert('Open external logs!');
    };

    this.onThirdClick = event => {
      window.alert('Action!');
    };

    this.pauseOrStart = event => {
      this.setState({
        isPaused: !this.state.isPaused
      })
    };

    this.handleFirstSwitchChange = (firstSwitchChecked, event) => {
      this.setState({ firstSwitchChecked })
    };

    this.handleSecondSwitchChange = (secondSwitchChecked, event) => {
      this.setState({ secondSwitchChecked })
    };

    this.onSearchChange = (value, event) => {
      this.setState({ 
        searchValue: value,
        searchResultsCount: 3
      })
    };

    this.onSearchClear = (event) => {
      this.setState({
        searchValue: '',
        searchResultsCount: 0,
        currentSearchResult: 1
      });
    };
    
    this.onSearchNext = (event) => {
      this.setState(prevState => {
        const newCurrentResult = prevState.currentSearchResult + 1;
        return {
          currentSearchResult: newCurrentResult <= prevState.searchResultsCount ? newCurrentResult : prevState.searchResultsCount
        } 
      });
    };
    
    this.onSearchPrevious = (event) => {
      this.setState(prevState => {
        const newCurrentResult = prevState.currentSearchResult - 1;
        return {
          currentSearchResult: newCurrentResult > 0 ? newCurrentResult : 1 
        }
      });
    };

    this.onPageResize = ({ mobileView, windowSize }) => {
      if (mobileView) {
        this.setState({
          mobileView: true
        })
      } else {
        this.setState({
          mobileView: false
        })
      }
    }
  }

  render() {
    const {
      firstExpanded,
      firstExpandedMobile,
      firstSelected,
      isPaused,
      firstSwitchChecked,
      secondSwitchChecked,
      searchValue,
      searchResultsCount,
      currentSearchResult,
      secondExpanded,
      secondExpandedMobile,
      thirdExpanded,
      thirdExpandedMobile,
      kebabExpanded,
      mobileView
    } = this.state;

    const firstDropdownItems = [
      <DropdownItem key="action-1" component="button" onClick={this.onSecondClick}>
        External Logs
      </DropdownItem>,
      <DropdownItem key="action-2" component="button" onClick={this.onSecondClick}>
        External Logs
      </DropdownItem>,
      <DropdownItem key="action-3" component="button" onClick={this.onSecondClick}>
        External Logs
      </DropdownItem>
    ];

    const secondDropdownItems = [
      <DropdownItem key="action-4" component="button" onClick={this.onThirdClick}>
        Current container logs
      </DropdownItem>,
      <DropdownItem key="action-5" component="button" onClick={this.onThirdClick}>
        All container logs
      </DropdownItem>
    ];

    const mobileDropdownItems = [
      <DropdownItem key="switch-mobile-1" >
        <Checkbox
          label="Display timestamp"
          isChecked={firstSwitchChecked}
          onChange={this.handleFirstSwitchChange}
          id="switchMobileCheckbox1"
          name="check1"
        />
      </DropdownItem>,
      <DropdownItem key="switch-mobile-2">
        <Checkbox
          label="Wrap lines"
          isChecked={secondSwitchChecked}
          onChange={this.handleSecondSwitchChange}
          id="switchMobileCheckbox2"
          name="check2"
        />
      </DropdownItem>
    ];

    const selectedDropdownContent = (
      <React.Fragment>
        {Object.entries(this.firstOptions).map(([value, { type }]) => (
          <SelectOption
            key={value}
            value={value}
            isSelected={firstSelected === value}
            isChecked={firstSelected === value}
          >
            <Badge key={value}>{type}</Badge>
            {` ${value}`}
          </SelectOption>   
        ))}
      </React.Fragment>
    );

    const selectToggleContent = ({ showText }) => {
      if (!firstSelected) {
        return "Select";
      }
      return (
        <React.Fragment>
         <Badge>{this.firstOptions[firstSelected].type}</Badge>
         {showText && ` ${firstSelected}`}
        </React.Fragment>
      );
    };

    const leftAlignedItemsDesktop = (
      <React.Fragment>
        <ToolbarItem visibility={{default: 'hidden', xl: 'visible'}}>
          <Select
            onToggle={this.onFirstToggle}
            onSelect={this.onFirstSelect}
            selections={firstSelected}
            isOpen={firstExpanded}
            customContent={selectedDropdownContent}
            placeholderText={selectToggleContent({ showText: true })}
          />
        </ToolbarItem>
        <ToolbarItem visibility={{default: 'hidden', xl: 'visible'}}>
          <Button variant={isPaused? "plain": "link"} onClick={this.pauseOrStart}>
            {isPaused? <PlayIcon /> : <PauseIcon />}
            {` Log Stream`}
          </Button>
        </ToolbarItem>
        <ToolbarItem className="pf-l-level pf-m-gutter" visibility={{default: 'hidden', xl: 'visible'}}>
          <Switch
            id="switch1"
            aria-label="Timestamp"
            isChecked={firstSwitchChecked}
            onChange={this.handleFirstSwitchChange}
          />
          <span>Timestamp</span>
        </ToolbarItem>
        <ToolbarItem className="pf-l-level pf-m-gutter" visibility={{default: 'hidden', xl: 'visible'}}>
          <Switch
            id="switch2"
            aria-label="Wrap lines"
            isChecked={secondSwitchChecked}
            onChange={this.handleSecondSwitchChange}
          />
          <span>Wrap lines</span>
        </ToolbarItem>
      </React.Fragment>
    );

    const leftAlignedItemsMobile = (
      <React.Fragment>
        <ToolbarItem visibility={{default: 'visible', xl: 'hidden'}}>
          <Select
            onToggle={this.onFirstToggleMobile}
            onSelect={this.onFirstSelectMobile}
            selections={firstSelected}
            isOpen={firstExpandedMobile}
            customContent={selectedDropdownContent}
            placeholderText={selectToggleContent({ showText: false })}
          />
        </ToolbarItem>
        <ToolbarItem visibility={{default: 'visible', xl: 'hidden'}}>
          <Button variant="plain" onClick={this.pauseOrStart}>
            {this.state.isPaused? <PlayIcon /> : <PauseIcon />}
          </Button>
        </ToolbarItem>
        <ToolbarItem visibility={{default: 'visible', xl: 'hidden'}}>
          <Dropdown
            toggle={<KebabToggle onToggle={this.onKebabToggle} id="kebab-toggle" />}
            isOpen={kebabExpanded}
            isPlain
            dropdownItems={mobileDropdownItems}
          />
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
        <ToolbarItem visibility={{default: 'hidden', xl: 'visible'}}>
          <SearchInput 
            placeholder='find'
            value={searchValue}
            onChange={this.onSearchChange}
            onClear={this.onSearchClear}
            resultsCount={`${currentSearchResult} / ${searchResultsCount}`}
            onNextClick={this.onSearchNext}
            onPreviousClick={this.onSearchPrevious}
          />
        </ToolbarItem>
        <ToolbarItem visibility={{default: 'hidden', xl: 'visible'}}>
          <Dropdown
            onSelect={this.onSecondSelect}
            toggle={
              <DropdownToggle
                splitButtonItems={[
                  <DropdownToggleAction key="action-7" onClick={this.onSecondClick}>
                    External Logs
                  </DropdownToggleAction>
                ]}
                splitButtonVariant="action"
                onToggle={this.onSecondToggle}
              />
            }
            isOpen={secondExpanded}
            dropdownItems={firstDropdownItems}
          />
        </ToolbarItem>
         <ToolbarItem visibility={{default: 'hidden', xl: 'visible'}}>
          <Dropdown
            onSelect={this.onThirdSelect}
            toggle={
              <DropdownToggle
                splitButtonItems={[
                  <DropdownToggleAction key="action-8" onClick={this.onThirdClick}>
                    Download
                  </DropdownToggleAction>
                ]}
                splitButtonVariant="action"
                onToggle={this.onThirdToggle}
              />
            }
            isOpen={thirdExpanded}
            dropdownItems={secondDropdownItems}
          />
        </ToolbarItem>
      </React.Fragment>
    );

    const rightAlignedItemsMobile = (
      <React.Fragment>
        <ToolbarItem visibility={{default: 'visible', xl: 'hidden'}}>
          <Dropdown
            onSelect={this.onSecondSelectMobile}
            toggle={
              <DropdownToggle id='mobile-external-toggle' onToggle={this.onSecondToggleMobile}>
                <ExternalLinkAltIcon />
              </DropdownToggle>
            }
            isOpen={secondExpandedMobile}
            dropdownItems={firstDropdownItems}
          />
        </ToolbarItem>
         <ToolbarItem visibility={{default: 'visible', xl: 'hidden'}}>
          <Dropdown
            onSelect={this.onThirdSelectMobile}
            toggle={
              <DropdownToggle id='mobile-download-toggle' onToggle={this.onThirdToggleMobile}>
                <DownloadIcon />
              </DropdownToggle>
            }
            isOpen={thirdExpandedMobile}
            position={DropdownPosition.right}
            dropdownItems={secondDropdownItems}
          />
        </ToolbarItem>
      </React.Fragment>
    );

    const rightAlignedItems = (
      <React.Fragment>
        {rightAlignedItemsDesktop}
        {rightAlignedItemsMobile}
        <ToolbarItem>
          <Button variant="plain" aria-label="expand">
            <ExpandIcon />
          </Button>
        </ToolbarItem>
      </React.Fragment>
    )

    const items = (
      <React.Fragment>
        <ToolbarGroup alignment={{default: 'alignLeft'}}>{leftAlignedItems}</ToolbarGroup>
        <ToolbarGroup alignment={{default: 'alignRight'}}>{rightAlignedItems}</ToolbarGroup>
      </React.Fragment>
    );

    const toolbar = (
      <Toolbar id="log-viewer-toolbar">
        <ToolbarContent className="align-toolbar-group">{items}</ToolbarContent>
      </Toolbar>
    )

    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={{ href: 'https://patternfly.org', target: '_blank' }}
        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
      />
    );

    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={!mobileView}/>;

    return (
      <Page header={Header} sidebar={Sidebar} onPageResize={this.onPageResize}>
        <PageSection variant={PageSectionVariants.light}>
          {toolbar}
        </PageSection>
      </Page>
    );
  }
}
```