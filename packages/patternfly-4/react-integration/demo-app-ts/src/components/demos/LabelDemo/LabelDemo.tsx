import { Label, LabelProps } from '@patternfly/react-core';
import React, { Component } from 'react';
export class LabelDemo extends Component {
 myLabelProps: LabelProps = {
   isCompact: true,
   children: "Compact label"
 }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

 render() {
   return (
     <React.Fragment>
       <Label>Default label</Label>
       <Label isCompact={this.myLabelProps.isCompact}>{this.myLabelProps.children}</Label>
     </React.Fragment>
   );
 }
}

export default LabelDemo;
