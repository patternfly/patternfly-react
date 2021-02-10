import React from 'react';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, ToolbarToggleGroup } from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/js/icons/filter-icon';

export class ToolbarVisiblityDemo extends React.Component {
  static displayName = 'ToolbarVisibilityDemo';

  render() {
    const toolbarContents = (
      <React.Fragment>
        <ToolbarContent visiblity={{ default: 'visible', md: 'hidden' }}>ToolbarContent visiblity sm</ToolbarContent>
        <ToolbarContent visiblity={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
          ToolbarContent visiblity md
        </ToolbarContent>
        <ToolbarContent visiblity={{ default: 'hidden', lg: 'visible', xl: 'hidden' }}>
          ToolbarContent visiblity lg
        </ToolbarContent>
        <ToolbarContent visiblity={{ default: 'hidden', xl: 'visible', '2xl': 'hidden' }}>
          ToolbarContent visiblity xl
        </ToolbarContent>
        <ToolbarContent visiblity={{ default: 'hidden', '2xl': 'visible' }}>
          ToolbarContent visiblity 2xl
        </ToolbarContent>
      </React.Fragment>
    );

    const toolbarGroups = (
      <React.Fragment>
        <ToolbarGroup visiblity={{ default: 'visible', md: 'hidden' }}>ToolbarGroup visiblity sm</ToolbarGroup>
        <ToolbarGroup visiblity={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
          ToolbarGroup visiblity md
        </ToolbarGroup>
        <ToolbarGroup visiblity={{ default: 'hidden', lg: 'visible', xl: 'hidden' }}>
          ToolbarGroup visiblity lg
        </ToolbarGroup>
        <ToolbarGroup visiblity={{ default: 'hidden', xl: 'visible', '2xl': 'hidden' }}>
          ToolbarGroup visiblity xl
        </ToolbarGroup>
        <ToolbarGroup visiblity={{ default: 'hidden', '2xl': 'visible' }}>ToolbarGroup visiblity 2xl</ToolbarGroup>
      </React.Fragment>
    );

    const toolbarItems = (
      <React.Fragment>
        <ToolbarItem visiblity={{ default: 'visible', md: 'hidden' }}>ToolbarItem visiblity sm</ToolbarItem>
        <ToolbarItem visiblity={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
          ToolbarItem visiblity md
        </ToolbarItem>
        <ToolbarItem visiblity={{ default: 'hidden', lg: 'visible', xl: 'hidden' }}>
          ToolbarItem visiblity lg
        </ToolbarItem>
        <ToolbarItem visiblity={{ default: 'hidden', xl: 'visible', '2xl': 'hidden' }}>
          ToolbarItem visiblity xl
        </ToolbarItem>
        <ToolbarItem visiblity={{ default: 'hidden', '2xl': 'visible' }}>ToolbarItem visiblity 2xl</ToolbarItem>
      </React.Fragment>
    );

    const toolbarToggleGroups = (
      <React.Fragment>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="md"
              visiblity={{ default: 'visible', md: 'hidden' }}
            >
              ToolbarToggleGroup visiblity sm
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="lg"
              visiblity={{ default: 'hidden', md: 'visible', lg: 'hidden' }}
            >
              ToolbarToggleGroup visiblity md
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="xl"
              visiblity={{ default: 'hidden', lg: 'visible', xl: 'hidden' }}
            >
              ToolbarToggleGroup visiblity lg
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="2xl"
              visiblity={{ default: 'hidden', xl: 'visible', '2xl': 'hidden' }}
            >
              ToolbarToggleGroup visiblity xl
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="md"
              visiblity={{ default: 'hidden', '2xl': 'visible' }}
            >
              ToolbarToggleGroup visiblity 2xl
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
      </React.Fragment>
    );

    return (
      <div id="toolbar-visiblity-demo">
        <Toolbar>{toolbarContents}</Toolbar>
        <Toolbar>
          <ToolbarContent>{toolbarGroups}</ToolbarContent>
        </Toolbar>
        <Toolbar>
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        {toolbarToggleGroups}
      </div>
    );
  }
}
