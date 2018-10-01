import Simple from './examples/SimpleForm';
import Horizontal from './examples/HorizontalForm';
import Various from './examples/VariousLabelsForm';
import Alternative from './examples/AlternativeForm';
import Invalid from './examples/InvalidForm';
import PropTypes from 'prop-types';
import { Form, FormGroup, ActionGroup } from '@patternfly/react-core';

export default {
  title: 'Form',
  components: {
    Form,
    FormGroup,
    ActionGroup
  },
  examples: [Simple, Horizontal, Alternative, Invalid, Various]
};
