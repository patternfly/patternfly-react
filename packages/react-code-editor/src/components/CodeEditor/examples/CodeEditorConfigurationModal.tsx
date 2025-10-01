import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import MapIcon from '@patternfly/react-icons/dist/esm/icons/map-icon';
import MoonIcon from '@patternfly/react-icons/dist/esm/icons/moon-icon';
import HashtagIcon from '@patternfly/react-icons/dist/esm/icons/hashtag-icon';
import { CodeEditor, CodeEditorControl } from '@patternfly/react-code-editor';
import { Flex, FlexItem, Icon, Modal, ModalBody, ModalHeader, Switch, SwitchProps } from '@patternfly/react-core';
import { useState } from 'react';

interface ConfigModalItemProps {
  /** Icon rendered inside the configuration modal. */
  icon?: React.ReactNode;
  /** Description of the configuration option. */
  description: string;
  /** Flag indicating whether the option is enabled or disabled. */
  isChecked?: SwitchProps['isChecked'];
  /** onChange handler for the switch. */
  onChange?: SwitchProps['onChange'];
  /** Title of the configuration option. We assume that titles are unique. */
  title: string;
  /** Labels for the enabled and disabled states of the switch. */
  labels?: {
    enabled: string;
    disabled: string;
  };
  /** Optional OUIA ID of the configuration option. Also used as a prefix for the ids of inner elements. */
  ouiaId?: string;
}

const ConfigModalItem: React.FunctionComponent<ConfigModalItemProps> = ({
  icon = <CogIcon />,
  description,
  isChecked = false,
  labels = { enabled: undefined, disabled: undefined },
  onChange,
  title,
  ouiaId
}) => (
  <Flex
    alignItems={{ default: 'alignItemsCenter' }}
    justifyContent={{ default: 'justifyContentSpaceBetween' }}
    spaceItems={{ default: 'spaceItemsMd' }}
  >
    <FlexItem flex={{ default: 'flex_1' }}>
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <Icon isInline>{icon}</Icon>
        <strong id={`${ouiaId}-title`} className="pf-v6-u-font-weight-bold">
          {title}
        </strong>
      </Flex>

      <div id={`${ouiaId}-description`}>{description}</div>
    </FlexItem>
    <FlexItem alignSelf={{ default: 'alignSelfCenter' }}>
      <Switch
        aria-labelledby={`${ouiaId}-title`}
        aria-describedby={`${ouiaId}-description`}
        ouiaId={`${ouiaId}-switch`}
        isChecked={isChecked}
        isReversed
        label={isChecked ? labels.enabled : labels.disabled}
        onChange={onChange}
      />
    </FlexItem>
  </Flex>
);

interface ConfigModalControlProps {
  /** Array of configuration controls to be rendered inside the modal. */
  controls: ConfigModalItemProps[];
  /** Title of the configuration modal. */
  title?: string;
  /** Description of the configuration modal. */
  description?: string;
  /** Optional OUIA ID of the configuration modal. Also used as a prefix for the ids of inner elements. */
  ouiaId?: string;
}

const ConfigModalControl: React.FunctionComponent<ConfigModalControlProps> = ({
  controls,
  title = 'Editor settings',
  description = 'Settings will be applied immediately',
  ouiaId = 'CodeEditorConfigurationModal'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        aria-describedby={`${ouiaId}-body`}
        aria-labelledby={`${ouiaId}-title`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        ouiaId={ouiaId}
        variant="small"
      >
        <ModalHeader title={title} description={description} labelId={`${ouiaId}-title`} />
        <ModalBody id={`${ouiaId}-body`}>
          <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsMd' }}>
            {controls.map((control) => (
              <ConfigModalItem
                key={control.title}
                ouiaId={`${ouiaId}-${control.title.replace(/\s+/g, '-').toLowerCase()}`}
                {...control}
              />
            ))}
          </Flex>
        </ModalBody>
      </Modal>
      <CodeEditorControl
        aria-label={title}
        aria-haspopup="dialog"
        icon={<CogIcon />}
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

  const onChange = (code: string) => {
    setCode(code);
  };

  const customControl = (
    <ConfigModalControl
      controls={[
        {
          title: 'Minimap',
          description: 'Show a preview of the full code on the side of the editor',
          isChecked: isMinimapVisible,
          onChange: (_e, checked) => setIsMinimapVisible(checked),
          icon: <MapIcon />
        },
        {
          title: 'Dark theme',
          description: 'Switch the editor to a dark color theme',
          isChecked: isDarkTheme,
          onChange: (_e, checked) => setIsDarkTheme(checked),
          icon: <MoonIcon />
        },
        {
          title: 'Line numbers',
          description: 'Show line numbers to the left of each line of code',
          isChecked: isLineNumbersVisible,
          onChange: (_e, checked) => setIsLineNumbersVisible(checked),
          icon: <HashtagIcon />
        }
      ]}
    />
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
    />
  );
};
