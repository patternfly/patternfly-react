import * as React from 'react';
import SVGDefsContext from './SVGDefsContext';
import { SVGDefsSetterProps } from './SVGDefs';
export class SVGDefsSetter extends React.Component<SVGDefsSetterProps> {
  static contextType = SVGDefsContext;
  componentDidMount() {
    const { addDef, id, children } = this.props;
    addDef(id, children);
  }
  componentDidUpdate() {
    const { addDef, id, children } = this.props;
    addDef(id, children);
  }
  componentWillUnmount() {
    const { removeDef, id } = this.props;
    removeDef(id);
  }
  render(): any {
    return null;
  }
}
