import React from 'react';
import {
  LabelGroup,
  Label,
  Modal,
  ModalVariant,
  Button,
  Form,
  FormGroup,
  TextInput,
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  MenuToggle,
  Radio,
  Popper
} from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

export const LabelGroupEditableAddModal: React.FunctionComponent = () => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const [idIndex, setIdIndex] = React.useState<number>(7);
  const [labelText, setLabelText] = React.useState<string>('');
  const [color, setColor] = React.useState<string>();
  const [icon, setIcon] = React.useState<any>();
  const [labelType, setLabelType] = React.useState<string>('filled');
  const [isClosable, setIsCloseable] = React.useState<boolean>(false);
  const [isEditable, setIsEditable] = React.useState<boolean>(false);
  const labelInputRef = React.useRef(null);

  const [isColorOpen, setIsColorOpen] = React.useState<boolean>(false);
  const colorMenuRef = React.useRef<HTMLDivElement>(null);
  const colorContainerRef = React.useRef<HTMLDivElement>(null);
  const colorToggleRef = React.useRef<HTMLButtonElement>(null);

  const [isIconOpen, setIsIconOpen] = React.useState<boolean>(false);
  const iconMenuRef = React.useRef<HTMLDivElement>(null);
  const iconContainerRef = React.useRef<HTMLDivElement>(null);
  const iconToggleRef = React.useRef<HTMLButtonElement>(null);

  const [labels, setLabels] = React.useState<any>([
    { name: 'Label 1', id: 4 },
    { name: 'Label 2', id: 5 },
    {
      name: 'Label 3',
      props: {
        isEditable: true,
        editableProps: {
          'aria-label': 'Editable label with text Label 3'
        }
      },
      id: 6
    }
  ]);

  const onClose = (labelId: string) => {
    setLabels(labels.filter((l: any) => l.id !== labelId));
  };

  const onEdit = (nextText: string, index: number) => {
    const copy = [...labels];
    const updatedProps = {
      ...labels[index].props,
      editableProps: { 'aria-label': `Editable label with text ${nextText}` }
    };

    copy[index] = { name: nextText, props: updatedProps, id: labels[index].id };
    setLabels(copy);
  };

  const onAdd = () => {
    let labelIcon: any;
    if (icon === 'Info circle icon') {
      labelIcon = <InfoCircleIcon />;
    }

    setLabels([
      {
        name: labelText || 'New Label',
        props: {
          color: color ? color.toLowerCase() : 'gray',
          icon: labelIcon,
          variant: labelType || 'filled',
          ...(!isClosable && isClosable !== undefined && { onClose: null }),
          isEditable: isEditable !== undefined ? isEditable : true,
          ...(isEditable && {
            editableProps: {
              'aria-label': `Editable label with text ${labelText || 'New Label'}`
            }
          })
        },
        id: idIndex
      },
      ...labels
    ]);
    setModalOpen(!isModalOpen);
    setIdIndex(idIndex + 1);
    setLabelText('');
    setColor('');
    setIcon(null);
    setLabelType('filled');
    setIsCloseable(false);
    setIsEditable(false);
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  React.useEffect(() => {
    if (isModalOpen && labelInputRef && labelInputRef.current) {
      (labelInputRef.current as HTMLInputElement).focus();
    }
  }, [isModalOpen]);

  const handleMenuKeys = (event: KeyboardEvent) => {
    if (isColorOpen && colorMenuRef?.current?.contains(event.target as Node)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsColorOpen(!isColorOpen);
        colorToggleRef?.current?.focus();
      }
    }
    if (isIconOpen && iconMenuRef?.current?.contains(event.target as Node)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsIconOpen(!isIconOpen);
        iconToggleRef?.current?.focus();
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isColorOpen && !colorMenuRef?.current?.contains(event.target as Node)) {
      setIsColorOpen(false);
    }
    if (isIconOpen && !iconMenuRef?.current?.contains(event.target as Node)) {
      setIsIconOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isColorOpen, isIconOpen, colorMenuRef, iconMenuRef]);

  const onColorToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (colorMenuRef.current) {
        const firstElement = colorMenuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
    setIsColorOpen(!isColorOpen);
  };

  const colorToggle = (
    <MenuToggle ref={colorToggleRef} onClick={onColorToggleClick} isExpanded={isColorOpen}>
      {color || 'Select'}
    </MenuToggle>
  );

  const colorMenu = (
    <Menu
      ref={colorMenuRef}
      activeItemId={color}
      onSelect={(_ev, itemId) => {
        setColor(itemId?.toString());
        colorToggleRef?.current?.focus();
        setIsColorOpen(false);
      }}
      selected={color}
    >
      <MenuContent>
        <MenuList>
          <MenuItem itemId="Gray">Gray</MenuItem>
          <MenuItem itemId="Blue">Blue</MenuItem>
          <MenuItem itemId="Green">Green</MenuItem>
          <MenuItem itemId="Orange">Orange</MenuItem>
          <MenuItem itemId="Red">Red</MenuItem>
          <MenuItem itemId="Purple">Purple</MenuItem>
          <MenuItem itemId="Cyan">Cyan</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  const onIconToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (iconMenuRef.current) {
        const firstElement = iconMenuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
    setIsIconOpen(!isIconOpen);
  };

  const iconToggle = (
    <MenuToggle ref={iconToggleRef} onClick={onIconToggleClick} isExpanded={isIconOpen}>
      {icon || 'Select'}
    </MenuToggle>
  );

  const iconMenu = (
    <Menu
      ref={iconMenuRef}
      activeItemId={icon}
      onSelect={(_ev, itemId) => {
        setIcon(itemId?.toString());
        iconToggleRef?.current?.focus();
        setIsIconOpen(false);
      }}
      selected={icon}
    >
      <MenuContent>
        <MenuList>
          <MenuItem itemId="No icon">No icon</MenuItem>
          <MenuItem itemId="Info circle icon">
            <InfoCircleIcon />
            Info circle icon
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  return (
    <div>
      <LabelGroup
        categoryName="Label group 1"
        numLabels={5}
        isEditable
        addLabelControl={
          <Label color="blue" variant="outline" isOverflowLabel onClick={handleModalToggle}>
            Add label
          </Label>
        }
      >
        {labels.map((label: { name: string; id: string; props: any }, index: number) => (
          <Label
            key={label.id}
            id={label.id}
            color="blue"
            onClose={() => onClose(label.id)}
            onEditCancel={(_event, prevText) => onEdit(prevText, index)}
            onEditComplete={(_event, newText) => onEdit(newText, index)}
            {...label.props}
          >
            {label.name}
          </Label>
        ))}
      </LabelGroup>
      <Modal
        variant={ModalVariant.small}
        title="Add Label"
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        actions={[
          <Button key="create" variant="primary" form="create-label-form" onClick={onAdd}>
            Save
          </Button>,
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        ]}
      >
        <Form id="create-label-form">
          <FormGroup label="Label text" fieldId="create-label-form-label-text">
            <TextInput
              type="text"
              id="create-label-form-label-text"
              name="create-label-form-label-text"
              value={labelText}
              onChange={setLabelText}
              ref={labelInputRef}
            />
          </FormGroup>
          <FormGroup label="Color" fieldId="create-label-form-color">
            <div ref={colorContainerRef}>
              <Popper
                trigger={colorToggle}
                popper={colorMenu}
                appendTo={colorContainerRef.current as HTMLElement}
                isVisible={isColorOpen}
                popperMatchesTriggerWidth={false}
              />
            </div>
          </FormGroup>
          <FormGroup label="Icon" fieldId="create-label-form-icon">
            <div ref={iconContainerRef}>
              <Popper
                trigger={iconToggle}
                popper={iconMenu}
                appendTo={iconContainerRef.current as HTMLElement}
                isVisible={isIconOpen}
                popperMatchesTriggerWidth={false}
              />
            </div>
          </FormGroup>
          <FormGroup label="Label type" fieldId="create-label-form-label-type">
            <Radio
              isChecked={labelType === 'filled'}
              name="filled-label"
              onChange={() => setLabelType('filled')}
              label="Filled"
              id="radio-filled"
              value="check1"
            />
            <Radio
              isChecked={labelType === 'outline'}
              name="outline-label"
              onChange={() => setLabelType('outline')}
              label="Outlined"
              id="radio-outline"
              value="check2"
            />
          </FormGroup>
          <FormGroup label="Dismissable" fieldId="create-label-form-dismissable">
            <Radio
              isChecked={isClosable === true}
              name="closeable-label"
              onChange={() => setIsCloseable(true)}
              label="Yes"
              id="radio-closable"
              value="check1"
            />
            <Radio
              isChecked={isClosable === false}
              name="not-closeable-label"
              onChange={() => setIsCloseable(false)}
              label="No"
              id="radio-not-closable"
              value="check2"
            />
          </FormGroup>
          <FormGroup label="Editable" fieldId="create-label-form-editable">
            <Radio
              isChecked={isEditable === true}
              name="editable-label"
              onChange={() => setIsEditable(true)}
              label="Yes"
              id="radio-editable"
              value="check3"
            />
            <Radio
              isChecked={isEditable === false}
              name="not-editable-label"
              onChange={() => setIsEditable(false)}
              label="No"
              id="radio-not-editable"
              value="check4"
            />
          </FormGroup>
        </Form>
      </Modal>
    </div>
  );
};
