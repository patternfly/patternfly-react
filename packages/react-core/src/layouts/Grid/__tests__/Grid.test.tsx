import * as React from 'react';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { render } from '@testing-library/react';

test('gutter', () => {
  const view = render(<Grid hasGutter />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('alternative component', () => {
  const view = render(
    <Grid component="ul">
      <GridItem component="li">Test</GridItem>
    </Grid>
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
