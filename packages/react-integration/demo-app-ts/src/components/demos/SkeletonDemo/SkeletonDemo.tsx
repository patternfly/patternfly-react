import React from 'react';
import { Skeleton } from '@patternfly/react-core';

export class SkeletonDemo extends React.Component {
  static displayName = 'SkeletonDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Widths</h2>
        <Skeleton width="15" id="skele-wcustom" />
        <br />
        <Skeleton width="25" id="skele-w25" />
        <br />
        <Skeleton width="33" />
        <br />
        <Skeleton width="50" />
        <br />
        <Skeleton width="66" />
        <br />
        <Skeleton width="75" />
        <br />
        <Skeleton />
        <br></br>
        <h2>Heights</h2>
        <div style={{ height: '400px' }}>
          <Skeleton height="25" id="skele-h25" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
          <Skeleton height="33" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
          <Skeleton height="50" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
          <Skeleton height="66" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
          <Skeleton height="75" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
          <Skeleton height="100" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
        </div>
        <br></br>
        <h2>Fonts</h2>
        <Skeleton fontSize="sm" />
        <br />
        <Skeleton fontSize="md" id="skele-md" />
        <br />
        <Skeleton fontSize="lg" />
        <br />
        <Skeleton fontSize="xl" />
        <br />
        <Skeleton fontSize="2xl" />
        <br />
        <Skeleton fontSize="3xl" />
        <br />
        <Skeleton fontSize="4xl" />
        <br></br>
        <h2>Shapes</h2>
        <Skeleton shape="circle" shapeWidth="sm" id="skele-circle" />
        <br />
        <Skeleton shape="circle" shapeWidth="md" />
        <br />
        <Skeleton shape="square" shapeWidth="sm" id="skele-square" />
        <br />
        <Skeleton shape="square" shapeWidth="md" />
      </React.Fragment>
    );
  }
}
