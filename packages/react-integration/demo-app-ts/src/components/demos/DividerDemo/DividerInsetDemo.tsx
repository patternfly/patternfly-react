import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

export class DividerInsetDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        inset none
        <Divider
          id="insetNone"
          inset={{
            default: 'insetNone',
            md: 'insetNone',
            lg: 'insetNone',
            xl: 'insetNone',
            '2xl': 'insetNone'
          }}
        />
        inset sm
        <Divider
          id="insetSm"
          inset={{
            default: 'insetSm',
            md: 'insetSm',
            lg: 'insetSm',
            xl: 'insetSm',
            '2xl': 'insetSm'
          }}
        />
        inset md
        <Divider
          id="insetMd"
          inset={{
            default: 'insetMd',
            md: 'insetMd',
            lg: 'insetMd',
            xl: 'insetMd',
            '2xl': 'insetMd'
          }}
        />
        inset Lg
        <Divider
          id="insetLg"
          inset={{
            default: 'insetLg',
            md: 'insetLg',
            lg: 'insetLg',
            xl: 'insetLg',
            '2xl': 'insetLg'
          }}
        />
        <Divider
          id="insetXl"
          inset={{
            default: 'insetXl',
            md: 'insetXl',
            lg: 'insetXl',
            xl: 'insetXl',
            '2xl': 'insetXl'
          }}
        />
        inset XL
        <Divider
          id="inset2Xl"
          inset={{
            default: 'inset2xl',
            md: 'inset2xl',
            lg: 'inset2xl',
            xl: 'inset2xl',
            '2xl': 'inset2xl'
          }}
        />
        inset 2XL
        <Divider
          id="inset3Xl"
          inset={{
            default: 'inset3xl',
            md: 'inset3xl',
            lg: 'inset3xl',
            xl: 'inset3xl',
            '2xl': 'inset3xl'
          }}
        />
        inset 3XL
        <Flex>
          <FlexItem>first item</FlexItem>
          <Divider
            id="verticalInsetNone"
            isVertical
            inset={{
              default: 'insetNone',
              md: 'insetNone',
              lg: 'insetNone',
              xl: 'insetNone',
              '2xl': 'insetNone'
            }}
          />
          <FlexItem>second item</FlexItem>
          <Divider
            id="verticalInsetSm"
            isVertical
            inset={{
              default: 'insetSm',
              md: 'insetSm',
              lg: 'insetSm',
              xl: 'insetSm',
              '2xl': 'insetSm'
            }}
          />
          <FlexItem>third item</FlexItem>
          <Divider
            id="verticalInsetMd"
            isVertical
            inset={{
              default: 'insetMd',
              md: 'insetMd',
              lg: 'insetMd',
              xl: 'insetMd',
              '2xl': 'insetMd'
            }}
          />
          <FlexItem>fourth item</FlexItem>
          <Divider
            id="verticalInsetLg"
            isVertical
            inset={{
              default: 'insetLg',
              md: 'insetLg',
              lg: 'insetLg',
              xl: 'insetLg',
              '2xl': 'insetLg'
            }}
          />
          <FlexItem>fifth item</FlexItem>
          <Divider
            id="verticalInsetXl"
            isVertical
            inset={{
              default: 'insetXl',
              md: 'insetXl',
              lg: 'insetXl',
              xl: 'insetXl',
              '2xl': 'insetXl'
            }}
          />
          <FlexItem>sixth item</FlexItem>
          <Divider
            id="verticalInset2Xl"
            isVertical
            inset={{
              default: 'inset2xl',
              md: 'inset2xl',
              lg: 'inset2xl',
              xl: 'inset2xl',
              '2xl': 'inset2xl'
            }}
          />
          <FlexItem>seventh item</FlexItem>
          <Divider
            id="verticalInset3Xl"
            isVertical
            inset={{
              default: 'inset3xl',
              md: 'inset3xl',
              lg: 'inset3xl',
              xl: 'inset3xl',
              '2xl': 'inset3xl'
            }}
          />
          <FlexItem>eighth item</FlexItem>
        </Flex>
      </React.Fragment>
    );
  }
}
