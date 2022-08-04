import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImportsticky from './react/sticky.png';
const pageData = {
  "id": "Pagination",
  "section": "components",
  "source": "react",
  "slug": "/components/pagination/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Pagination/examples/Pagination.md",
  "propComponents": [
    {
      "name": "Pagination",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "What should be rendered inside",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes for the container.",
          "defaultValue": "''"
        },
        {
          "name": "defaultToFullPage",
          "type": "boolean",
          "description": "Indicate whether to show last full page of results when user selects perPage value greater than remaining rows",
          "defaultValue": "false"
        },
        {
          "name": "dropDirection",
          "type": "'up' | 'down'",
          "description": "Direction of dropdown context menu."
        },
        {
          "name": "firstPage",
          "type": "number",
          "description": "Page we start at.",
          "defaultValue": "1"
        },
        {
          "name": "isCompact",
          "type": "boolean",
          "description": "Flag indicating if pagination is compact",
          "defaultValue": "false"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating if pagination is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isStatic",
          "type": "boolean",
          "description": "Flag indicating if pagination should not be sticky on mobile"
        },
        {
          "name": "isSticky",
          "type": "boolean",
          "description": "Flag indicating if pagination should stick to its position (based on variant)",
          "defaultValue": "false"
        },
        {
          "name": "itemCount",
          "type": "number",
          "description": "Total number of items."
        },
        {
          "name": "itemsEnd",
          "type": "number",
          "description": "Last index of items on current page.",
          "defaultValue": "null"
        },
        {
          "name": "itemsStart",
          "type": "number",
          "description": "First index of items on current page.",
          "defaultValue": "null"
        },
        {
          "name": "offset",
          "type": "number",
          "description": "Start index of rows to display, used in place of providing page",
          "defaultValue": "0"
        },
        {
          "name": "onFirstClick",
          "type": "(event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void",
          "description": "Function called when user clicks on navigate to first page.",
          "defaultValue": "() => undefined"
        },
        {
          "name": "onLastClick",
          "type": "(event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void",
          "description": "Function called when user clicks on navigate to last page.",
          "defaultValue": "() => undefined"
        },
        {
          "name": "onNextClick",
          "type": "(event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void",
          "description": "Function called when user clicks on navigate to next page.",
          "defaultValue": "() => undefined"
        },
        {
          "name": "onPageInput",
          "type": "(event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void",
          "description": "Function called when user inputs page number.",
          "defaultValue": "() => undefined"
        },
        {
          "name": "onPerPageSelect",
          "type": "(\n  _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,\n  newPerPage: number,\n  newPage: number,\n  startIdx?: number,\n  endIdx?: number\n) => void",
          "description": "Function called when user selects number of items per page.",
          "defaultValue": "() => undefined"
        },
        {
          "name": "onPreviousClick",
          "type": "(event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void",
          "description": "Function called when user clicks on navigate to previous page.",
          "defaultValue": "() => undefined"
        },
        {
          "name": "onSetPage",
          "type": "(\n  _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,\n  newPage: number,\n  perPage?: number,\n  startIdx?: number,\n  endIdx?: number\n) => void",
          "description": "Function called when user sets page.",
          "defaultValue": "() => undefined"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "page",
          "type": "number",
          "description": "Current page number.",
          "defaultValue": "0"
        },
        {
          "name": "perPage",
          "type": "number",
          "description": "Number of items per page.",
          "defaultValue": "defaultPerPageOptions[0].value"
        },
        {
          "name": "perPageComponent",
          "type": "'div' | 'button'",
          "description": "Component to be used for wrapping the toggle contents. Use 'button' when you want\nall of the toggle text to be clickable.",
          "defaultValue": "'div'"
        },
        {
          "name": "perPageOptions",
          "type": "PerPageOptions[]",
          "description": "Array of the number of items per page  options.",
          "defaultValue": "[\n  {\n    title: '10',\n    value: 10\n  },\n  {\n    title: '20',\n    value: 20\n  },\n  {\n    title: '50',\n    value: 50\n  },\n  {\n    title: '100',\n    value: 100\n  }\n]"
        },
        {
          "name": "titles",
          "type": "PaginationTitles",
          "description": "Object with titles to display in pagination.",
          "defaultValue": "{\n  items: '',\n  page: '',\n  pages: '',\n  itemsPerPage: 'Items per page',\n  perPageSuffix: 'per page',\n  toFirstPage: 'Go to first page',\n  toPreviousPage: 'Go to previous page',\n  toLastPage: 'Go to last page',\n  toNextPage: 'Go to next page',\n  optionsToggle: '',\n  currPage: 'Current page',\n  paginationTitle: 'Pagination',\n  ofWord: 'of'\n}"
        },
        {
          "name": "toggleTemplate",
          "type": "((props: ToggleTemplateProps) => React.ReactElement) | string",
          "description": "This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle, ofWord props."
        },
        {
          "name": "variant",
          "type": "'top' | 'bottom' | PaginationVariant",
          "description": "Position where pagination is rendered.",
          "defaultValue": "PaginationVariant.top"
        },
        {
          "name": "widgetId",
          "type": "string",
          "description": "ID to ideintify widget on page.",
          "defaultValue": "'pagination-options-menu'"
        }
      ]
    },
    {
      "name": "PaginationTitles",
      "description": "",
      "props": [
        {
          "name": "currPage",
          "type": "string",
          "description": "Accessible label for the input displaying the current page"
        },
        {
          "name": "items",
          "type": "string",
          "description": "The type or title of the items being paginated"
        },
        {
          "name": "itemsPerPage",
          "type": "string",
          "description": "The title of the pagination options menu"
        },
        {
          "name": "ofWord",
          "type": "string",
          "description": "Accessible label for the English word \"of\""
        },
        {
          "name": "optionsToggle",
          "type": "string",
          "description": "Accessible label for the options toggle"
        },
        {
          "name": "page",
          "type": "string",
          "description": "The title of a page displayed beside the page number"
        },
        {
          "name": "pages",
          "type": "string",
          "description": "The title of a page displayed beside the page number (plural form)"
        },
        {
          "name": "paginationTitle",
          "type": "string",
          "description": "Accessible label for the pagination component"
        },
        {
          "name": "perPageSuffix",
          "type": "string",
          "description": "The suffix to be displayed after each option on the options menu dropdown"
        },
        {
          "name": "toFirstPage",
          "type": "string",
          "description": "Accessible label for the button which moves to the first page"
        },
        {
          "name": "toLastPage",
          "type": "string",
          "description": "Accessible label for the button which moves to the last page"
        },
        {
          "name": "toNextPage",
          "type": "string",
          "description": "Accessible label for the button which moves to the next page"
        },
        {
          "name": "toPreviousPage",
          "type": "string",
          "description": "Accessible label for the button which moves to the previous page"
        }
      ]
    },
    {
      "name": "PerPageOptions",
      "description": "",
      "props": [
        {
          "name": "title",
          "type": "string",
          "description": "option title"
        },
        {
          "name": "value",
          "type": "number",
          "description": "option value"
        }
      ]
    },
    {
      "name": "ToggleTemplateProps",
      "description": "",
      "props": [
        {
          "name": "firstIndex",
          "type": "number",
          "description": "The first index of the items being paginated"
        },
        {
          "name": "itemCount",
          "type": "number",
          "description": "The total number of items being paginated"
        },
        {
          "name": "itemsTitle",
          "type": "string",
          "description": "The type or title of the items being paginated"
        },
        {
          "name": "lastIndex",
          "type": "number",
          "description": "The last index of the items being paginated"
        },
        {
          "name": "ofWord",
          "type": "React.ReactNode",
          "description": "The word that joins the index and itemCount/itemsTitle"
        }
      ]
    }
  ],
  "examples": [
    "Top",
    "Bottom",
    "Indeterminate",
    "Disabled",
    "No items",
    "One page",
    "Compact"
  ],
  "fullscreenExamples": [
    "Sticky"
  ]
};
pageData.examples = {
  'Top': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from '@patternfly/react-core';\n\nclass PaginationTop extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        perPageComponent=\"button\"\n        itemCount={523}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n      />\n    );\n  }\n}","title":"Top","lang":"js"}}>
      
    </Example>,
  'Bottom': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from '@patternfly/react-core';\n\nclass PaginationBottom extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1\n    };\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        perPageComponent=\"button\"\n        itemCount={333}\n        widgetId=\"pagination-options-menu-bottom\"\n        perPage={this.state.perPage}\n        page={this.state.page}\n        variant={PaginationVariant.bottom}\n        onSetPage={this.onSetPage}\n        onPerPageSelect={this.onPerPageSelect}\n      />\n    );\n  }\n}","title":"Bottom","lang":"js"}}>
      
    </Example>,
  'Indeterminate': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Pagination } from '@patternfly/react-core';\n\nPaginationIndeterminate = () => {\n  const [page, setPage] = React.useState(1);\n  const [perPage, setPerPage] = React.useState(20);\n\n  const onSetPage = (_event, pageNumber) => setPage(pageNumber);\n  const onPerPageSelect = (_event, perPage) => setPerPage(perPage);\n\n  return (\n    <Pagination\n      perPageComponent=\"button\"\n      toggleTemplate={({ firstIndex, lastIndex }) => (\n        <React.Fragment>\n          <b>\n            {firstIndex} - {lastIndex}\n          </b>\n          of\n          <b>many</b>\n        </React.Fragment>\n      )}\n      widgetId=\"pagination-indeterminate\"\n      perPage={perPage}\n      page={page}\n      onSetPage={onSetPage}\n      onPerPageSelect={onPerPageSelect}\n    />\n  );\n};","title":"Indeterminate","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`By not passing `}
        
        <code {...{"className":"ws-code"}}>
          {`itemCount`}
        </code>
        {` and passing `}
        
        <code {...{"className":"ws-code"}}>
          {`toggleTemplate`}
        </code>
        {` you can customize the toggle with text.`}
      </p>
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from '@patternfly/react-core';\n\nclass PaginationDisabled extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        perPageComponent=\"button\"\n        itemCount={523}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n        isDisabled\n      />\n    );\n  }\n}","title":"Disabled","lang":"js"}}>
      
    </Example>,
  'No items': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from '@patternfly/react-core';\n\nclass PaginationTop extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        perPageComponent=\"button\"\n        itemCount={0}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n      />\n    );\n  }\n}","title":"No items","lang":"js"}}>
      
    </Example>,
  'One page': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from '@patternfly/react-core';\n\nclass PaginationTop extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        perPageComponent=\"button\"\n        itemCount={15}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n      />\n    );\n  }\n}","title":"One page","lang":"js"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from '@patternfly/react-core';\n\nclass PaginationTop extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        perPageComponent=\"button\"\n        itemCount={523}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n        isCompact\n      />\n    );\n  }\n}","title":"Compact","lang":"js"}}>
      
    </Example>,
  'Sticky': props => 
    <Example {...pageData} {...props} thumbnail={srcImportsticky} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant, Gallery, GalleryItem, Card, CardBody } from '@patternfly/react-core';\n\nclass PaginationSticky extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20,\n      isTopSticky: true\n    };\n\n    this.onToggleSticky = () => {\n      this.setState({\n        isTopSticky: !this.state.isTopSticky\n      });\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        {this.state.isTopSticky && (\n          <React.Fragment>\n            <Pagination\n              perPageComponent=\"button\"\n              itemCount={523}\n              perPage={this.state.perPage}\n              page={this.state.page}\n              onSetPage={this.onSetPage}\n              widgetId=\"pagination-options-menu-top\"\n              onPerPageSelect={this.onPerPageSelect}\n              isSticky\n            >\n              <button onClick={this.onToggleSticky}>Toggle to bottom position</button>\n            </Pagination>\n            <Gallery hasGutter>\n              {Array.apply(0, Array(40)).map((x, i) => (\n                <GalleryItem key={i}>\n                  <Card>\n                    <CardBody>This is a card</CardBody>\n                  </Card>\n                </GalleryItem>\n              ))}\n            </Gallery>\n          </React.Fragment>\n        )}\n        {!this.state.isTopSticky && (\n          <React.Fragment>\n            <Gallery hasGutter>\n              {Array.apply(0, Array(40)).map((x, i) => (\n                <GalleryItem key={i}>\n                  <Card>\n                    <CardBody>This is a card</CardBody>\n                  </Card>\n                </GalleryItem>\n              ))}\n            </Gallery>\n            <Pagination\n              perPageComponent=\"button\"\n              itemCount={523}\n              perPage={this.state.perPage}\n              page={this.state.page}\n              onSetPage={this.onSetPage}\n              widgetId=\"pagination-options-menu-top\"\n              onPerPageSelect={this.onPerPageSelect}\n              isSticky\n              variant={PaginationVariant.bottom}\n            >\n              <button onClick={this.onToggleSticky}>Toggle to top position</button>\n            </Pagination>\n          </React.Fragment>\n        )}\n      </div>\n    );\n  }\n}","title":"Sticky","lang":"js","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Top"])}
    {React.createElement(pageData.examples["Bottom"])}
    {React.createElement(pageData.examples["Indeterminate"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["No items"])}
    {React.createElement(pageData.examples["One page"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Sticky"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsPaginationReactDocs';
Component.pageData = pageData;

export default Component;
