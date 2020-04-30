import * as React from 'react';
import SVGDefsContext, { SVGDefsContextProps } from './SVGDefsContext';

type SVGDefsProps = {
  id: string;
  children: React.ReactNode;
};

type SVGDefsSetterProps = SVGDefsContextProps & SVGDefsProps;

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

  render() {
    return null;
  }
}

/**
 * Contributes `children` to the parent SVG `<defs>` element.
 * A contribution is assumed to be static in nature in that the children will never change
 * for a given ID. This is because there may be multiple children referencing the same defs contribution.
 * The assumption must be that there is not a single owner but many owners and therefore each
 * owner must be contributing the same def.
 */
export default class SVGDefs extends React.Component<SVGDefsProps> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <SVGDefsContext.Consumer>
        {({ addDef, removeDef }) => (
          <SVGDefsSetter {...this.props} addDef={addDef} removeDef={removeDef} />
        )}
      </SVGDefsContext.Consumer>
    );
  }
}
