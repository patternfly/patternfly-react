import * as React from 'react';
import useComponentFactory from '../../hooks/useComponentFactory';
import { ComponentFactory } from '../../types';

interface Props {
  factory: ComponentFactory;
}

const RegisterComponentFactory: React.FC<Props> = ({ factory }) => {
  useComponentFactory(factory);
  return null;
};

export default RegisterComponentFactory;
