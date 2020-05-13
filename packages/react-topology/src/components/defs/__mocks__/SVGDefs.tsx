import * as React from 'react';
import SVGDefs from '../SVGDefs';

// This mock simply renders the `defs` in place.
const SvgDefsMock: React.FC<React.ComponentProps<typeof SVGDefs>> = ({ id, children }) => (
  <defs id={id}>{children}</defs>
);

export default SvgDefsMock;
