import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Drag and drop",
  "section": "components",
  "source": "react",
  "slug": "/components/drag-and-drop/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/DragDrop/examples/DragDrop.md",
  "propComponents": [
    {
      "name": "DragDrop",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Potentially Droppable and Draggable children"
        },
        {
          "name": "onDrag",
          "type": "(source: DraggableItemPosition) => boolean",
          "description": "Callback for drag event. Return true to allow drag, false to disallow.",
          "defaultValue": "() => true"
        },
        {
          "name": "onDragMove",
          "type": "(source: DraggableItemPosition, dest?: DraggableItemPosition) => void",
          "description": "Callback on mouse move while dragging.",
          "defaultValue": "() => {}"
        },
        {
          "name": "onDrop",
          "type": "(source: DraggableItemPosition, dest?: DraggableItemPosition) => boolean",
          "description": "Callback for drop event. Return true to allow drop, false to disallow.",
          "defaultValue": "() => false"
        }
      ]
    },
    {
      "name": "Draggable",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside DragDrop"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        },
        {
          "name": "hasNoWrapper",
          "type": "boolean",
          "description": "Don't wrap the component in a div. Requires passing a single child.",
          "defaultValue": "false"
        },
        {
          "name": "style",
          "type": "No type info",
          "defaultValue": "{}"
        }
      ]
    },
    {
      "name": "Droppable",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside DragDrop"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        },
        {
          "name": "droppableId",
          "type": "string",
          "description": "Id to be passed back on drop events",
          "defaultValue": "'defaultId'"
        },
        {
          "name": "hasNoWrapper",
          "type": "boolean",
          "description": "Don't wrap the component in a div. Requires passing a single child.",
          "defaultValue": "false"
        },
        {
          "name": "zone",
          "type": "string",
          "description": "Name of zone that items can be dragged between. Should specify if there is more than one Droppable on the page.",
          "defaultValue": "'defaultZone'"
        }
      ]
    },
    {
      "name": "DraggableItemPosition",
      "description": "",
      "props": [
        {
          "name": "droppableId",
          "type": "string",
          "description": "Parent droppableId",
          "required": true
        },
        {
          "name": "index",
          "type": "number",
          "description": "Index of item in parent Droppable",
          "required": true
        }
      ]
    }
  ],
  "beta": true,
  "examples": [
    "Basic",
    "Multiple lists"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DragDrop, Draggable, Droppable } from '@patternfly/react-core';\n\ninterface ItemType {\n  id: string;\n  content: string;\n}\n\ninterface SourceType {\n  droppableId: string;\n  index: number;\n}\n\ninterface DestinationType extends SourceType {}\n\nconst getItems = (count: number) =>\n  Array.from({ length: count }, (_, idx) => idx).map(idx => ({\n    id: `item-${idx}`,\n    content: `item ${idx} `.repeat(idx === 4 ? 20 : 1)\n  }));\n\nconst reorder = (list: ItemType[], startIndex: number, endIndex: number) => {\n  const result = list;\n  const [removed] = result.splice(startIndex, 1);\n  result.splice(endIndex, 0, removed);\n  return result;\n};\n\nexport const DragDropBasic: React.FunctionComponent = () => {\n  const [items, setItems] = React.useState(getItems(10));\n\n  function onDrop(source: SourceType, dest: DestinationType) {\n    if (dest) {\n      const newItems = reorder(items, source.index, dest.index);\n      setItems(newItems);\n\n      return true;\n    }\n    return false;\n  }\n\n  return (\n    <DragDrop onDrop={onDrop}>\n      <Droppable>\n        {items.map(({ content }, i) => (\n          <Draggable key={i} style={{ padding: '8px' }}>\n            {content}\n          </Draggable>\n        ))}\n      </Droppable>\n    </DragDrop>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Multiple lists': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DragDrop, Draggable, Droppable, Split, SplitItem } from '@patternfly/react-core';\n\ninterface ItemType {\n  id: string;\n  content: string;\n}\n\ninterface SourceType {\n  droppableId: string;\n  index: number;\n}\n\ninterface DestinationType extends SourceType {}\n\nconst getItems = (count: number, startIndex: number) =>\n  Array.from({ length: count }, (_, idx) => idx + startIndex).map(idx => ({\n    id: `item-${idx}`,\n    content: `item ${idx} `.repeat(idx === 4 ? 20 : 1)\n  }));\n\nconst reorder = (list: ItemType[], startIndex: number, endIndex: number) => {\n  const result = list;\n  const [removed] = result.splice(startIndex, 1);\n  result.splice(endIndex, 0, removed);\n  return result;\n};\n\nconst move = (source: ItemType[], destination: ItemType[], sourceIndex: number, destIndex: number) => {\n  const sourceClone = source;\n  const destClone = destination;\n  const [removed] = sourceClone.splice(sourceIndex, 1);\n  destClone.splice(destIndex, 0, removed);\n  return [sourceClone, destClone];\n};\n\nexport const DragDropMultipleLists: React.FunctionComponent = () => {\n  const [items, setItems] = React.useState({\n    items1: getItems(10, 0),\n    items2: getItems(5, 10)\n  });\n\n  function onDrop(source: SourceType, dest: DestinationType) {\n    // eslint-disable-next-line no-console\n    console.log(source, dest);\n    if (dest) {\n      if (source.droppableId === dest.droppableId) {\n        const newItems = reorder(\n          source.droppableId === 'items1' ? items.items1 : items.items2,\n          source.index,\n          dest.index\n        );\n        if (source.droppableId === 'items1') {\n          setItems({\n            items1: newItems,\n            items2: items.items2\n          });\n        } else {\n          setItems({\n            items1: items.items1,\n            items2: newItems\n          });\n        }\n      } else {\n        const [newItems1, newItems2] = move(\n          source.droppableId === 'items1' ? items.items1 : items.items2,\n          dest.droppableId === 'items1' ? items.items1 : items.items2,\n          source.index,\n          dest.index\n        );\n        setItems({\n          items1: source.droppableId === 'items1' ? newItems1 : newItems2,\n          items2: dest.droppableId === 'items1' ? newItems1 : newItems2\n        });\n      }\n      return true;\n    }\n    return false;\n  }\n\n  return (\n    <DragDrop onDrop={onDrop}>\n      <Split hasGutter>\n        {Object.entries(items).map(([key, subitems]) => (\n          <SplitItem key={key} style={{ flex: 1 }}>\n            <Droppable zone=\"multizone\" droppableId={key}>\n              {subitems.map(({ id, content }) => (\n                <Draggable key={id} style={{ padding: '8px' }}>\n                  {content}\n                </Draggable>\n              ))}\n            </Droppable>\n          </SplitItem>\n        ))}\n      </Split>\n    </DragDrop>\n  );\n};\n","title":"Multiple lists","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`You can use the `}
      <code {...{"className":"ws-code"}}>
        {`DragDrop`}
      </code>
      {` component to move items in or between lists. The `}
      <code {...{"className":"ws-code"}}>
        {`DragDrop`}
      </code>
      {` component should contain `}
      <code {...{"className":"ws-code"}}>
        {`Droppable`}
      </code>
      {` components which contain `}
      <code {...{"className":"ws-code"}}>
        {`Draggable`}
      </code>
      {` components.`}
    </p>
    <Example {...{"code":"import React from 'react';\nimport { DragDrop, Draggable, Droppable } from '@patternfly/react-core';\n\nconst DragDropCodeSample: React.FunctionComponent = () => (\n  <DragDrop>\n    {' '}\n    {/* DragDrop houses the context for dragging and dropping */}\n    <Droppable>\n      <Draggable>You can put anything here! It will be wrapped in a styled div.</Draggable>\n      <Draggable>You can have as many Draggables as you like.</Draggable>\n    </Droppable>\n    <Droppable>\n      {' '}\n      {/* You can also have many droppables! */}\n      <Draggable />\n    </Droppable>\n  </DragDrop>\n);","lang":"ts","noLive":true}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`Note: Keyboard accessibility and screen reader accessibility are still in development.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Multiple lists"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDragAndDropReactDocs';
Component.pageData = pageData;

export default Component;
