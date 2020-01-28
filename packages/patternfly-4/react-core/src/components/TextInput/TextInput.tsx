import * as React from 'react';
import { withInnerRef } from '../../helpers';
import { TextInputBase, TextInputProps } from './TextInputBase';

const TextInputFR = withInnerRef<HTMLInputElement, TextInputProps>(TextInputBase)
export { TextInputFR as TextInput } 