# @rh-felt/react-table

This package provides Felt React table components.

### Installing

```sh
yarn add @rh-felt/react-table
```

or

```sh
npm install @rh-felt/react-table --save
```

## Usage

It's strongly advised to use the PatternFly base CSS in your whole project, or some components may diverge in appearance:

```js
import '@rh-felt/react-core/dist/styles/base.css';
```

#### Example component usage

```ts
import { Table, Thead, Tr, Th, Td, Tbody } from '@rh-felt/react-table';

export const ComposableTableBasic = () => {
  const repositories = [
    { name: 'one', branches: 'two', prs: 'three' },
    { name: 'one - 2', branches: null, prs: null },
    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests'
  };
  
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map(repo => (
          <Tr key={repo.name}>
            <Td dataLabel={columnNames.name}>{repo.name}</Td>
            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
export default SimpleTable;
```

## Contribution

This library makes use of the babel plugin from [@rh-felt/react-styles](../react-styles/README.md) to enable providing the CSS alongside the components. This removes the need for consumers to use (style|css|sass)-loaders. For an example of using CSS from core you can reference [Button.js](./src/components/Button/Button.js). For any CSS not provided by core please use the `StyleSheet.create` utility from [@rh-felt/react-styles](../react-styles/README.md). This will prevent collisions with any consumers, and allow the CSS to be bundled with the component.

### Documentation

A comprehensive list of components and detailed usage of each can be found on the [PatternFly react docs][docs] website
You can also find how each component is meant to be used from a design perspective on the [PatternFly core][patternfly] website.

Note: All commands below assume you are on the root directory in this repository.

### Install & run locally

Run to install all the dependencies, build and run the site locally.

```sh
yarn install && yarn start
```

### Testing

Testing is done at the root of this repo. To only run the @rh-felt/react-table tests:

```
yarn test packages/react-table
```

[patternfly]: https://github.com/patternfly/patternfly
[docs]: https://rh-felt-react-staging.surge.sh/
