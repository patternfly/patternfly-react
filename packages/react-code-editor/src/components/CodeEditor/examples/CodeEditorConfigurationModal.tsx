import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import MapIcon from '@patternfly/react-icons/dist/esm/icons/map-icon';
import MoonIcon from '@patternfly/react-icons/dist/esm/icons/moon-icon';
import HashtagIcon from '@patternfly/react-icons/dist/esm/icons/hashtag-icon';
import FontIcon from '@patternfly/react-icons/dist/esm/icons/font-icon';
import { CodeEditor, CodeEditorControl } from '@patternfly/react-code-editor';
import {
  Flex,
  FlexItem,
  Icon,
  Modal,
  ModalBody,
  ModalHeader,
  NumberInput,
  Switch,
  SwitchProps
} from '@patternfly/react-core';
import { useState } from 'react';

interface ConfigModalItemProps {
  /** Icon rendered inside the configuration modal. */
  icon?: ReactNode;
  /** Description of the configuration option. */
  description: string;
  /** Title of the configuration option. We assume that titles are unique. */
  title: string;
  /**
   * Optional ID of the configuration option. Also used as a prefix for the following elements:
   * - `${id}-title` for the element which contains the title
   * - `${id}-description` for the element which contains the description
   */
  id?: string;
  /**
   * Slot to render inside the configuration modal. Remember to add `aria-labelledby` and `aria-describedby` props
   * to the control inside the slot, pointing to the title and description ids respectively.
   */
  slot?: ReactNode;
}

const ConfigModalItem: React.FunctionComponent<ConfigModalItemProps> = ({
  icon = <CogIcon />,
  description,
  title,
  id = `ConfigModalItem-${title.replace(/\s+/g, '-').toLowerCase()}`,
  slot
}) => (
  <Flex
    alignItems={{ default: 'alignItemsCenter' }}
    justifyContent={{ default: 'justifyContentSpaceBetween' }}
    spaceItems={{ default: 'spaceItemsMd' }}
    id={id}
  >
    <FlexItem flex={{ default: 'flex_1' }}>
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <Icon isInline>{icon}</Icon>
        <strong id={`${id}-title`} className="pf-v6-u-font-weight-bold">
          {title}
        </strong>
      </Flex>

      <div id={`${id}-description`}>{description}</div>
    </FlexItem>
    <FlexItem alignSelf={{ default: 'alignSelfCenter' }}>{slot}</FlexItem>
  </Flex>
);

interface ConfigModalSwitchProps extends Omit<ConfigModalItemProps, 'slot'> {
  /** Flag indicating whether the option is enabled or disabled. */
  isChecked?: SwitchProps['isChecked'];
  /** onChange handler for the switch. */
  onChange?: SwitchProps['onChange'];
  /** Labels for the enabled and disabled states of the switch. */
  labels?: {
    enabled: string;
    disabled: string;
  };
}

const ConfigModalSwitch: React.FunctionComponent<ConfigModalSwitchProps> = ({
  icon = <CogIcon />,
  description,
  title,
  id = `ConfigModalSwitch-${title.replace(/\s+/g, '-').toLowerCase()}`,
  isChecked = false,
  onChange,
  labels = { enabled: undefined, disabled: undefined }
}) => (
  <ConfigModalItem
    icon={icon}
    description={description}
    title={title}
    id={id}
    slot={
      <Switch
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        ouiaId={`${id}-switch`}
        isChecked={isChecked}
        isReversed
        label={isChecked ? labels.enabled : labels.disabled}
        onChange={onChange}
      />
    }
  />
);

interface ConfigModalControlProps {
  /** Controls to be rendered inside the configuration modal. */
  children: React.ReactNode;
  /** Title of the configuration modal. */
  title?: string;
  /** Description of the configuration modal. */
  description?: string;
  /** OptionalID of the configuration modal. Also used as a prefix for the ids of inner elements and the OUIA id. */
  ouiaId?: string;
}

const ConfigModalControl: React.FunctionComponent<ConfigModalControlProps> = ({
  children,
  title = 'Editor settings',
  description = 'Settings will be applied immediately',
  ouiaId = 'CodeEditorConfigurationModal'
}: ConfigModalControlProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        aria-describedby={`${ouiaId}-body`}
        aria-labelledby={`${ouiaId}-title`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ouiaId={ouiaId}
        variant="small"
      >
        <ModalHeader title={title} description={description} labelId={`${ouiaId}-title`} />
        <ModalBody id={`${ouiaId}-body`}>
          <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsMd' }}>
            {children}
          </Flex>
        </ModalBody>
      </Modal>
      <CodeEditorControl
        aria-label={title}
        aria-haspopup="dialog"
        isSettings
        onClick={() => setIsModalOpen(true)}
        tooltipProps={{ content: title, ariaLive: 'off' }}
      />
    </>
  );
};

export const CodeEditorConfigurationModal: React.FunctionComponent = () => {
  const [code, setCode] = useState('Some example content');

  const [isMinimapVisible, setIsMinimapVisible] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLineNumbersVisible, setIsLineNumbersVisible] = useState(true);
  const [fontSize, setFontSize] = useState(14);

  const onChange = (code: string) => {
    setCode(code);
  };

  const customControl = (
    <ConfigModalControl>
      <ConfigModalSwitch
        key="minimap-switch"
        title="Minimap"
        description="Show a preview of the full code on the side of the editor"
        isChecked={isMinimapVisible}
        onChange={(_e, checked) => setIsMinimapVisible(checked)}
        icon={<MapIcon />}
      />
      <ConfigModalSwitch
        key="dark-theme-switch"
        title="Dark theme"
        description="Switch the editor to a dark color theme"
        isChecked={isDarkTheme}
        onChange={(_e, checked) => setIsDarkTheme(checked)}
        icon={<MoonIcon />}
      />
      <ConfigModalSwitch
        key="line-numbers-switch"
        title="Line numbers"
        description="Show line numbers to the left of each line of code"
        isChecked={isLineNumbersVisible}
        onChange={(_e, checked) => setIsLineNumbersVisible(checked)}
        icon={<HashtagIcon />}
      />
      <ConfigModalItem
        key="font-size"
        title="Font size"
        description="Adjust the font size of the code editor"
        ouia-id="ConfigModalItem-font-size"
        icon={<FontIcon />}
        slot={
          <NumberInput
            aria-labelledby="ConfigModalItem-font-size-title"
            aria-describedby="ConfigModalItem-font-size-description"
            inputAriaLabel="Enter a font size"
            minusBtnAriaLabel="Decrease font size"
            plusBtnAriaLabel="Increase font size"
            role="group" // For screen readers to group the input and buttons as one widget
            value={fontSize}
            min={5}
            onMinus={() => setFontSize((size) => Math.max(5, size - 1))}
            onChange={(event) => setFontSize(Number((event.target as HTMLInputElement).value))}
            onPlus={() => setFontSize((size) => size + 1)}
            widthChars={2}
          />
        }
      />
    </ConfigModalControl>
  );

  return (
    <CodeEditor
      code={code}
      customControls={customControl}
      height="400px"
      isDarkTheme={isDarkTheme}
      isLineNumbersVisible={isLineNumbersVisible}
      isMinimapVisible={isMinimapVisible}
      onChange={onChange}
      options={{ fontSize }}
    />
  );
};
