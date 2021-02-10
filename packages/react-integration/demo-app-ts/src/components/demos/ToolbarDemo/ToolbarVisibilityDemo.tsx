import React from 'react';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, ToolbarToggleGroup } from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/js/icons/filter-icon';

export class ToolbarVisibilityDemo extends React.Component {
  static displayName = 'ToolbarVisibilityDemo';

  render() {
    const toolbarContents = (
      <React.Fragment>
        <ToolbarContent visibility={{ default: 'visible', md: 'hidden' }}>ToolbarContent visibility sm</ToolbarContent>
        <ToolbarContent visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
          ToolbarContent visibility md
        </ToolbarContent>
        <ToolbarContent visibility={{ default: 'hidden', lg: 'visible', xl: 'hidden' }}>
          ToolbarContent visibility lg
        </ToolbarContent>
        <ToolbarContent visibility={{ default: 'hidden', xl: 'visible', '2xl': 'hidden' }}>
          ToolbarContent visibility xl
        </ToolbarContent>
        <ToolbarContent visibility={{ default: 'hidden', '2xl': 'visible' }}>
          ToolbarContent visibility 2xl
        </ToolbarContent>
      </React.Fragment>
    );

    const toolbarGroups = (
      <React.Fragment>
        <ToolbarGroup visibility={{ default: 'visible', md: 'hidden' }}>ToolbarGroup visibility sm</ToolbarGroup>
        <ToolbarGroup visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
          ToolbarGroup visibility md
        </ToolbarGroup>
        <ToolbarGroup visibility={{ default: 'hidden', lg: 'visible', xl: 'hidden' }}>
          ToolbarGroup visibility lg
        </ToolbarGroup>
        <ToolbarGroup visibility={{ default: 'hidden', xl: 'visible', '2xl': 'hidden' }}>
          ToolbarGroup visibility xl
        </ToolbarGroup>
        <ToolbarGroup visibility={{ default: 'hidden', '2xl': 'visible' }}>ToolbarGroup visibility 2xl</ToolbarGroup>
      </React.Fragment>
    );

    const toolbarItems = (
      <React.Fragment>
        <ToolbarItem visibility={{ default: 'visible', md: 'hidden' }}>ToolbarItem visibility sm</ToolbarItem>
        <ToolbarItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
          ToolbarItem visibility md
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'hidden', lg: 'visible', xl: 'hidden' }}>
          ToolbarItem visibility lg
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'hidden', xl: 'visible', '2xl': 'hidden' }}>
          ToolbarItem visibility xl
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'hidden', '2xl': 'visible' }}>ToolbarItem visibility 2xl</ToolbarItem>
      </React.Fragment>
    );

    const toolbarToggleGroups = (
      <React.Fragment>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="md"
              visibility={{ default: 'visible', md: 'hidden' }}
            >
              ToolbarToggleGroup visibility sm
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="lg"
              visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}
            >
              ToolbarToggleGroup visibility md
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="xl"
              visibility={{ default: 'hidden', lg: 'visible', xl: 'hidden' }}
            >
              ToolbarToggleGroup visibility lg
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="2xl"
              visibility={{ default: 'hidden', xl: 'visible', '2xl': 'hidden' }}
            >
              ToolbarToggleGroup visibility xl
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <Toolbar>
          <ToolbarContent>
            <ToolbarToggleGroup
              toggleIcon={<FilterIcon />}
              breakpoint="md"
              visibility={{ default: 'hidden', '2xl': 'visible' }}
            >
              ToolbarToggleGroup visibility 2xl
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
      </React.Fragment>
    );

    return (
      <div id="toolbar-visibility-demo">
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
