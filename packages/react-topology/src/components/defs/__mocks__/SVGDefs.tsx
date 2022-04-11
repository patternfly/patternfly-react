import * as React from 'react';
import SVGDefs from '../SVGDefs';

// This mock simply renders the `defs` in place.
const SvgDefsMock: React.FunctionComponent<React.ComponentProps<typeof SVGDefs>> = ({ id, children }) => (
  <defs id={id}>{children}</defs>
);

export default SvgDefsMock;
