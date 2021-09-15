import * as React from 'react';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { shallow, mount } from 'enzyme';

test('gutter', () => {
  const view = shallow(<Grid hasGutter />);
  expect(view).toMatchSnapshot();
});

test('alternative component', () => {
  const view = mount(
    <Grid component='ul'>
      <GridItem component='li'>Test</GridItem>
    </Grid>
  );
  expect(view).toMatchSnapshot();
});
