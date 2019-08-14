# @patternfly/react-table

![npm badge](https://img.shields.io/npm/v/@patternfly/react-table.svg?style=for-the-badge)

This package provides Table PatternFly components based on [PatternFly 4][patternfly-4]


### Installing

```sh
yarn add @patternfly/react-table
```

```sh
npm install @patternfly/react-table --save
```


## Usage

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```javascript
import '@patternfly/react-core/dist/styles/base.css';
```

#### Example Component Usage

```javascript
import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

class SimpleTable extends React.Component {
  static title = 'Simple Table';
  constructor(props) {
    super(props);
    this.state = {
      columns: [{ title: 'Repositories', props: null }, 'Branches', { title: 'Pull requests', props: null }, 'Workspaces', 'Last Commit'],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }
  render() {
    const { columns, rows } = this.state;
    return (
      <Table caption="Simple Table" rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
export default SimpleTable;
```


### Custom transformators
If you want to add custom transformators to show some special column (collapsible, checkbox) you have to include `isVisible` there as well so cellRenderer knows which cells to render (main purpose is for colSpan).

Example of such transformator can be:
```JSX
function someTransform(value) {
  return {
    isVisible: true,
    children: <div>cell</div>
  }
}
```

If you want to add this transformer as default cell (first, last, any,...) for each row you also want to change function `calculateColumns`in [HeaderUtils.js](src/components/Table/utils/HeaderUtils.js).

Notice: Any data provided as cell will be visible by default, no need to add `isVisible` if you want to change how data are displayed.


### Building

To build just react-table:

```sh
yarn run lerna run build --scope=@patternfly/react-table
```


### Testing

To only run the @patternfly/react-table tests:

```sh
yarn test packages/patternfly-4/react-table
```

[patternfly-4]: https://github.com/patternfly/patternfly-next
[docs]: https://patternfly-react.surge.sh/patternfly-4
