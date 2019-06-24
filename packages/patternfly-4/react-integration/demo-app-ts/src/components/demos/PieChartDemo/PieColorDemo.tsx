import React from 'react';
import { ChartLegend, ChartPie, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import { height, width } from 'styled-system';

// export class PieColorDemo extends React.Component {
//   chartStyles = {
//     width:'500px', height:'400px', marginTop: '50px', marginLeft: 'auto',
//     marginRight: 'auto'
//   };
//   render() {
//     return (
//       <div style={this.chartStyles}>
//         <div className="pie-chart-container">
//           <ChartPie
//             data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
//             labels={datum => `${datum.x}: ${datum.y}`}
//             themeColor={ChartThemeColor.multi}
//             themeVariant={ChartThemeVariant.light}
//           />
//         </div>
//         <ChartLegend
//           data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
//           height={35}
//           width={500}
//           orientation={'horizontal'}
//           responsive={false}
//           themeColor={ChartThemeColor.multi}
//           themeVariant={ChartThemeVariant.light}
//           y={7}
//         />
//       </div>
//     )
//   }
// }
