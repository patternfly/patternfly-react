---
id: Toolbar
section: components
---

import PauseIcon from '@patternfly/react-icons/dist/js/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';
import ExpandIcon from '@patternfly/react-icons/dist/js/icons/expand-icon';
import './toolbar.css';

## Demos
### Console log viewer toolbar demo

This is an example of toolbar usage in log viewer.

```js isFullscreen
import React from 'react';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { Badge, Button, Dropdown, DropdownItem, DropdownToggle, DropdownToggleAction, SearchInput, Select, SelectOption, Switch, PageHeader, PageHeaderTools, Page, PageSidebar, PageSection, PageSectionVariants } from '@patternfly/react-core';
import PauseIcon from '@patternfly/react-icons/dist/js/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';
import ExpandIcon from '@patternfly/react-icons/dist/js/icons/expand-icon';

class ConsoleLogViewerToolbar extends React.Component {
  constructor(props) {
    super(props);

    this.firstOptions = [
      { value: 'container-sample-1', disabled: false },
      { value: 'container-sample-2', disabled: false },
      { value: 'container-sample-3', disabled: false }
    ];

    this.state = {
      firstIsExpanded: false,
      firstSelected: null,
      isPaused: false,
      firstSwitchChecked: true,
      secondSwitchChecked: false,
      searchValue: 'error',
      searchResultsCount: 3,
      currentSearchResult: 1,
      secondIsExpanded: false,
      thirdIsExpanded: false
    };

    this.onFirstToggle = isExpanded => {
      this.setState({
        firstIsExpanded: isExpanded
      });
    };

    this.onFirstSelect = (event, selection) => {
      this.setState({
        firstSelected: selection,
        firstIsExpanded: false
      });
    };

    this.onSecondToggle = isExpanded => {
      this.setState({
        secondIsExpanded: isExpanded
      });
    };

    this.onSecondSelect = event => {
      this.setState({
        secondIsExpanded: !this.state.secondIsExpanded
      });
    };

    this.onThirdToggle = isExpanded => {
      this.setState({
        thirdIsExpanded: isExpanded
      });
    };

    this.onThirdSelect = event => {
      this.setState({
        thirdIsExpanded: !this.state.thirdIsExpanded
      });
    };

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

    this.handleFirstSwitchChange = firstSwitchChecked => {
      this.setState({ firstSwitchChecked })
    };

    this.handleSecondSwitchChange = secondSwitchChecked => {
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
  }

  render() {
    const {
      firstIsExpanded,
      firstSelected,
      isPaused,
      firstSwitchChecked,
      secondSwitchChecked,
      searchValue,
      searchResultsCount,
      currentSearchResult,
      secondIsExpanded,
      thirdIsExpanded
    } = this.state;

    const firstDropdownItems = [
      <DropdownItem key="action1" component="button" onClick={this.onSecondClick}>
        External Logs
      </DropdownItem>,
      <DropdownItem key="action2" component="button" onClick={this.onSecondClick}>
        External Logs
      </DropdownItem>,
      <DropdownItem key="action3" component="button" onClick={this.onSecondClick}>
        External Logs
      </DropdownItem>
    ];

    const secondDropdownItems = [
      <DropdownItem key="action4" component="button" onClick={this.onThirdClick}>
        Export
      </DropdownItem>,
      <DropdownItem key="action5" component="button" onClick={this.onThirdClick}>
        Clear
      </DropdownItem>
    ];

    const leftAlignedItems = (
      <React.Fragment>
        <ToolbarItem>
          <Select
            aria-label="Select Input"
            onToggle={this.onFirstToggle}
            onSelect={this.onFirstSelect}
            selections={firstSelected}
            isOpen={firstIsExpanded}
          >
            {this.firstOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value}>
                <Badge key={index}>C</Badge>
                {` ${option.value}`}
              </SelectOption>   
            ))}
          </Select>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="link" onClick={this.pauseOrStart}>
          {this.state.isPaused? <PlayIcon /> : <PauseIcon />}
          {` Log Stream`}
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <Switch
            id="switch-1"
            label="Timestamp"
            isChecked={firstSwitchChecked}
            onChange={this.handleFirstSwitchChange}
          />
        </ToolbarItem>
        <ToolbarItem>
          <Switch
            id="switch-2"
            label="Wrap lines"
            isChecked={secondSwitchChecked}
            onChange={this.handleSecondSwitchChange}
          />
        </ToolbarItem>
      </React.Fragment>
    );

    const rightAlignedItems = (
      <React.Fragment>
        <ToolbarItem>
          <SearchInput 
            placeholder='find'
            value={this.state.searchValue}
            onChange={this.onSearchChange}
            onClear={this.onSearchClear}
            resultsCount={`${this.state.currentSearchResult} / ${this.state.searchResultsCount}`}
            onNextClick={this.onSearchNext}
            onPreviousClick={this.onSearchPrevious}
          />
        </ToolbarItem>
        <ToolbarItem>
          <Dropdown
            onSelect={this.onSecondSelect}
            toggle={
              <DropdownToggle
                splitButtonItems={[
                  <DropdownToggleAction key="action6" onClick={this.onSecondClick}>
                    External Logs
                  </DropdownToggleAction>
                ]}
                splitButtonVariant="action"
                onToggle={this.onSecondToggle}
              />
            }
            isOpen={secondIsExpanded}
            dropdownItems={firstDropdownItems}
          />
        </ToolbarItem>
         <ToolbarItem>
          <Dropdown
            onSelect={this.onThirdSelect}
            toggle={
              <DropdownToggle
                splitButtonItems={[
                  <DropdownToggleAction key="action7" onClick={this.onThirdClick}>
                    Download
                  </DropdownToggleAction>
                ]}
                splitButtonVariant="action"
                onToggle={this.onThirdToggle}
              />
            }
            isOpen={thirdIsExpanded}
            dropdownItems={secondDropdownItems}
          />
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="link" aria-label="expand">
            <ExpandIcon />
          </Button>
        </ToolbarItem>
      </React.Fragment>
    );

    const items = (
      <React.Fragment>
        <ToolbarGroup>{leftAlignedItems}</ToolbarGroup>
        <ToolbarGroup>{rightAlignedItems}</ToolbarGroup>
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

    const Sidebar = <PageSidebar nav="Navigation" />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageSection variant={PageSectionVariants.light}>
          {toolbar}
        </PageSection>
      </Page>
    );
  }
}
```