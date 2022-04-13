import * as React from 'react';
import useLayoutFactory from '../../hooks/useLayoutFactory';
import { LayoutFactory } from '../../types';

interface Props {
  factory: LayoutFactory;
}

const RegisterLayoutFactory: React.FunctionComponent<React.PropsWithChildren<Props>> = ({ factory }) => {
  useLayoutFactory(factory);
  return null;
};

export default RegisterLayoutFactory;
