import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ToolbarToggleGroup } from '../ToolbarToggleGroup';
import { Toolbar } from '../Toolbar';
import { ToolbarItem } from '../ToolbarItem';
import { ToolbarContent } from '../ToolbarContent';

describe('ToolbarToggleGroup', () => {
  it('should warn on bad props', () => {
    const myMock = jest.fn() as any;
    global.console = { error: myMock } as any;
    shallow(<ToolbarToggleGroup breakpoint={undefined as 'xl'} toggleIcon={null} />);
    expect(myMock).toBeCalled();
  });
});

describe('Toolbar', () => {
  it('should render inset', () => {
    const items = (
      <React.Fragment>
        <ToolbarItem>Test</ToolbarItem>
        <ToolbarItem>Test 2</ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>Test 3 </ToolbarItem>
      </React.Fragment>
    );

    const view = mount(
      <Toolbar
        id="toolbar"
        inset={{
          default: 'insetNone',
          md: 'insetSm',
          xl: 'inset2xl',
          '2xl': 'insetLg'
        }}
      >
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );
    expect(view).toMatchSnapshot();
  });

  it('should render with page inset flag', () => {
    const items = (
      <React.Fragment>
        <ToolbarItem>Test</ToolbarItem>
        <ToolbarItem>Test 2</ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>Test 3 </ToolbarItem>
      </React.Fragment>
    );

    const view = mount(
      <Toolbar id="toolbar" usePageInsets>
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );
    expect(view).toMatchSnapshot();
  });
});
