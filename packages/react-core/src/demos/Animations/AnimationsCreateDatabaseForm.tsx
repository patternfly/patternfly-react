import { useRef, useState, FunctionComponent } from 'react';
import {
  AlertGroup,
  Alert,
  Button,
  Form,
  FormGroup,
  FormHelperText,
  FormAlert,
  FormGroupLabelHelp,
  HelperText,
  HelperTextItem,
  TextInput,
  Popover,
  ActionGroup
} from '../..';
import { useGuidedTour } from './GuidedTourContext';

interface Props {
  onClose: () => void;
}

export const AnimationsCreateDatabaseForm: FunctionComponent<Props> = ({ onClose }) => {
  // State variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Submit state variables
  const [isSuccess, setIsSuccess] = useState(false);
  const [actionCompleted, setActionCompleted] = useState(false);
  const { renderTourStepElement } = useGuidedTour();

  const labelHelpRef = useRef(null);

  // Re-introducing the type alias for validation status
  type validationStatus = 'success' | 'warning' | 'error' | 'default';

  // Reverting useState to infer the type as a generic string
  const [isNameValid, setIsNameValid] = useState('default');
  const [isPasswordValid, setIsPasswordValid] = useState('default');
  const [isEmailValid, setIsEmailValid] = useState('default');

  const handleNameChange = (_event: React.FormEvent<HTMLInputElement>, name: string) => {
    setName(name);
  };

  const handleEmailChange = (_event: React.FormEvent<HTMLInputElement>, email: string) => {
    setEmail(email);
  };

  const handlePasswordChange = (_event: React.FormEvent<HTMLInputElement>, password: string) => {
    setPassword(password);
  };

  const validateName = (value: string) => /^[a-z0-9-]+$/.test(value) && value.length > 0;
  const validatePassword = (value: string) => value.length >= 12 && /[0-9]/.test(value) && /[A-Z]/.test(value);
  const validateEmail = (value: string) => value.includes('@');

  const handleNameBlur = () => {
    setIsNameValid(validateName(name) ? 'success' : 'error');
  };

  const handlePasswordBlur = () => {
    setIsPasswordValid(validatePassword(password) ? 'success' : 'error');
  };

  const handleEmailBlur = () => {
    setIsEmailValid(validateEmail(email) ? 'success' : 'error');
  };

  const handleSubmit = () => {
    const isNameCurrentValid = validateName(name);
    const isPasswordCurrentValid = validatePassword(password);
    const isEmailCurrentValid = validateEmail(email);

    setIsNameValid(isNameCurrentValid ? 'success' : 'error');
    setIsPasswordValid(isPasswordCurrentValid ? 'success' : 'error');
    setIsEmailValid(isEmailCurrentValid ? 'success' : 'error');

    const allFieldsValid = isNameCurrentValid && isPasswordCurrentValid && isEmailCurrentValid;

    setActionCompleted(true);
    setIsSuccess(allFieldsValid);
  };

  const onReset = () => {
    setIsNameValid('default');
    setIsPasswordValid('default');
    setIsEmailValid('default');
  };

  return renderTourStepElement(
    'validationErrors',
    <Form isWidthLimited id="create-database-form">
      {actionCompleted && isSuccess ? (
        <FormAlert>
          <AlertGroup hasAnimations isLiveRegion>
            <Alert
              variant="success"
              title="Successfully created database"
              isInline
              timeout={4000}
              timeoutAnimation={4000}
            />
          </AlertGroup>
        </FormAlert>
      ) : null}
      <FormGroup
        label="Database instance name"
        labelHelp={
          <Popover
            triggerRef={labelHelpRef}
            headerContent={<div>The name of your database</div>}
            bodyContent={
              <div>
                <p>
                  The name of your database is used to identify it in the system. It must be unique and cannot be
                  changed later.
                </p>
              </div>
            }
          >
            <FormGroupLabelHelp ref={labelHelpRef} aria-label="More info for name field" />
          </Popover>
        }
        isRequired
        fieldId="simple-form-name-01"
      >
        <TextInput
          isRequired
          type="text"
          id="simple-form-name-01"
          name="simple-form-name-01"
          aria-describedby="simple-form-name-01-helper"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          validated={isNameValid as validationStatus}
        />
        {isNameValid === 'error' && (
          <FormHelperText>
            <HelperText>
              <HelperTextItem variant={isNameValid as validationStatus}>
                Must contain only lowercase letters, numbers, and hyphens.
              </HelperTextItem>
            </HelperText>
          </FormHelperText>
        )}
      </FormGroup>
      <FormGroup label="Admin email" isRequired fieldId="simple-form-email-01">
        <TextInput
          isRequired
          type="email"
          id="simple-form-email-01"
          name="simple-form-email-01"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          validated={isEmailValid as validationStatus}
        />
        {isEmailValid === 'error' && (
          <FormHelperText>
            <HelperText>
              <HelperTextItem variant={isEmailValid as validationStatus}>
                Must be a valid email address containing an @ symbol.
              </HelperTextItem>
            </HelperText>
          </FormHelperText>
        )}
      </FormGroup>
      <FormGroup label="Admin password" isRequired fieldId="simple-form-password-01">
        <TextInput
          isRequired
          type="password"
          id="simple-form-password-01"
          name="simple-form-password-01"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          validated={isPasswordValid as validationStatus}
        />
        {isPasswordValid === 'error' && (
          <FormHelperText>
            <HelperText>
              <HelperTextItem variant={isPasswordValid as validationStatus}>
                Password must be at least 12 characters and include one uppercase letter and one number.
              </HelperTextItem>
            </HelperText>
          </FormHelperText>
        )}
      </FormGroup>
      <ActionGroup>
        <Button id="create-database-submit" variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="link" onClick={onClose}>
          Cancel
        </Button>
        <Button className="pf-u-ml-2xl" variant="link" onClick={onReset}>
          Reset
        </Button>
      </ActionGroup>
    </Form>
  );
};
