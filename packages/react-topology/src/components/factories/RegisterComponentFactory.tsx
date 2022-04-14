import * as React from 'react';
import useComponentFactory from '../../hooks/useComponentFactory';
import { ComponentFactory } from '../../types';

interface Props {
  factory: ComponentFactory;
}

const RegisterComponentFactory: React.FunctionComponent<Props> = ({ factory }) => {
  useComponentFactory(factory);
  return null;
};

export default RegisterComponentFactory;
