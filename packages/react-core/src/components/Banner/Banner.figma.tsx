import React from 'react';
import figma from '@figma/code-connect';
import { Banner } from './Banner';



const sharedBannerProps = {
  // iconWrapper: figma.boolean('Icon'),
  // iconSwap: figma.instance('Icon Swap'),
  leftText: figma.boolean('Left text'),
  // leftText: figma.string("✏️ Left text"),
  rightText: figma.boolean('Right text'),
  // rightText: figma.string("✏️Right text"),
  centerText: figma.string('✏️ Center text'),
};

const status = {
  status: figma.enum('Status', {
    Warning: 'red',
    Danger: 'orangered',
    Info: 'orange',
    Custom: 'gold'
  }),
}

const color = {
  color: figma.enum('Color', {
    Red: 'red',
    Orangered: 'orangered',
    Orange: 'orange',
    Gold: 'gold',
    Green: 'green',
    Cyan: 'cyan',
    Blue: 'blue',
    Purple: 'purple',
    Gray: 'gray'
  })
};

const test = fetch(`https://api.figma.com/v1/files/VMEX8Xg2nzhBX8rfBx53jp/nodes?ids=2879-13973`, {headers: {'X-Figma-Token': 'YOUR_TOKEN_HERE'}}).then(res => res.json()).then(data => console.log(JSON.stringify(data.nodes['2879-13973'], null, 2)));

// figma.connect(
//   'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=221-1443', {
//     props: {
//       // iconWrapper: figma.boolean('Icon'),
//       // iconSwap: figma.instance('Icon Swap'),
//       leftText: figma.boolean('Left text'),
//       // leftText: figma.string("✏️ Left text"),
//       rightText: figma.boolean('Right text'),
//       // rightText: figma.string("✏️Right text"),
//       centerText: figma.string('✏️ Center text'),
//       color: figma.enum('Color', {
//         Red: 'red',
//         Orangered: 'orangered',
//         Orange: 'orange',
//         Gold: 'gold',
//         Green: 'green',
//         Cyan: 'cyan',
//         Blue: 'blue',
//         Purple: 'purple',
//         Gray: 'gray'
//       })
//     },
//     example: (props) => <Banner></Banner>
//     console.log()
//   }
// );
