import Checkbox, { CheckboxProps } from './Checkbox';
import ControlLabel, { ControlLabelProps } from './ControlLabel';
import FormBase, { FormProps } from './Form';
import FormControl, { FormControlProps } from './FormControl';
import FormGroup, { FormGroupProps } from './FormGroup';
import HelpBlock, { HelpBlockProps } from './HelpBlock';
import InputGroup, { InputGroupProps } from './InputGroup';
import Radio, { RadioProps } from './Radio';

declare const Form: typeof FormBase & {
  Checkbox: typeof Checkbox;
  ControlLabel: typeof ControlLabel;
  FormControl: typeof FormControl;
  FormGroup: typeof FormGroup;
  HelpBlock: typeof HelpBlock;
  InputGroup: typeof InputGroup;
  Radio: typeof Radio;
};

export {
  Checkbox,
  CheckboxProps,
  ControlLabel,
  ControlLabelProps,
  Form,
  FormControl,
  FormControlProps,
  FormGroup,
  FormGroupProps,
  FormProps,
  HelpBlock,
  HelpBlockProps,
  InputGroup,
  InputGroupProps,
  Radio,
  RadioProps
};
