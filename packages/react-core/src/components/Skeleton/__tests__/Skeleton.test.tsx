import React from 'react';
import { shallow } from 'enzyme';
import { Skeleton } from '../Skeleton';

describe('skeleton', () => {
  test('default', () => {
    const view = shallow(<Skeleton />);
    expect(view).toMatchSnapshot();
  });

  ['25', '33', '50', '66', '75'].forEach((width: string) =>
    test(`skeleton with ${width} width`, () => {
      const view = shallow(<Skeleton width={width} />);
      expect(view).toMatchSnapshot();
    })
  );

  ['25', '33', '50', '66', '75', '100'].forEach((height: string) =>
    test(`skeleton with ${height} height`, () => {
      const view = shallow(<Skeleton height={height} />);
      expect(view).toMatchSnapshot();
    })
  );

  ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].forEach((fontSize: string) =>
    test(`skeleton with ${fontSize} font size`, () => {
      const view = shallow(<Skeleton fontSize={fontSize as 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'} />);
      expect(view).toMatchSnapshot();
    })
  );

  test('circle skeleton', () => {
    const view = shallow(<Skeleton shape="circle" />);
    expect(view).toMatchSnapshot();
  });

  test('square skeleton', () => {
    const view = shallow(<Skeleton shape="square" />);
    expect(view).toMatchSnapshot();
  });

  test('rectangle skeleton', () => {
    const view = shallow(<Skeleton shapeHeight="sm" shapeWidth="md" />);
    expect(view).toMatchSnapshot();
    const viewMd = shallow(<Skeleton shapeHeight="md" shapeWidth="lg" />);
    expect(viewMd).toMatchSnapshot();
    const viewLg = shallow(<Skeleton shapeHeight="lg" />);
    expect(viewLg).toMatchSnapshot();
  });

  ['sm', 'md', 'lg'].forEach((width: string) =>
    test(`shape skeleton with ${width} width`, () => {
      const view = shallow(<Skeleton shape="circle" shapeWidth={width as 'sm' | 'md' | 'lg'} />);
      expect(view).toMatchSnapshot();
      const viewSquare = shallow(<Skeleton shape="square" shapeWidth={width as 'sm' | 'md' | 'lg'} />);
      expect(viewSquare).toMatchSnapshot();
    })
  );
});
