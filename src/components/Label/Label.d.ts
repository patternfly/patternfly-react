import { SFC } from 'react';
import { LabelProps as BsLabelProps } from 'react-bootstrap';

export interface LabelProps extends BsLabelProps {
  type?: string;
  onRemoveClick(): void;
}

declare const Label: SFC<LabelProps>;

export default Label;
