import * as React from 'react';
import { shallow } from 'enzyme';
import { ToolbarToggleGroup } from '../ToolbarToggleGroup';

describe('ToolbarToggleGroup', () => {
  it('should warn on bad props', () => {
    const myMock = jest.fn() as any;
    global.console = { error: myMock } as any;
    shallow(<ToolbarToggleGroup breakpoint={undefined as 'xl'} toggleIcon={null} />);
    expect(myMock).toBeCalled();
  });
});
