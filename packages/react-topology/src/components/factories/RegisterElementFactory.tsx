import * as React from 'react';
import useElementFactory from '../../hooks/useElementFactory';
import { ElementFactory } from '../../types';

interface Props {
  factory: ElementFactory;
}

const RegisteElementFactory: React.FunctionComponent<Props> = ({ factory }) => {
  useElementFactory(factory);
  return null;
};

export default RegisteElementFactory;
