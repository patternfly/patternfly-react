import { Fragment, useState } from 'react';
import {
  Button,
  Modal,
  ModalVariant,
  ModalBody,
  MenuToggle,
  MenuToggleElement,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarGroup,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  Title,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  ModalHeader
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';

export const ToolbarInModal: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [statusExpanded, setStatusExpanded] = useState(false);
  const [statusSelected, setStatusSelected] = useState('');
  const [priorityExpanded, setPriorityExpanded] = useState(false);
  const [prioritySelected, setPrioritySelected] = useState('');

  const statusOptions = ['Open', 'In Progress', 'Resolved', 'Closed'];
  const priorityOptions = ['Low', 'Medium', 'High', 'Critical'];

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toolbarItems = (
    <Fragment>
      <ToolbarItem>
        <SearchInput
          aria-label="Modal toolbar search input"
          placeholder="Search issues..."
          onChange={(_event, value) => setInputValue(value)}
          value={inputValue}
          onClear={() => setInputValue('')}
        />
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
        <ToolbarItem>
          <Select
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setStatusExpanded(!statusExpanded)}
                isExpanded={statusExpanded}
                style={{ width: '150px' } as React.CSSProperties}
              >
                {statusSelected || 'Status'}
              </MenuToggle>
            )}
            onSelect={(_event, selection) => {
              setStatusSelected(selection as string);
              setStatusExpanded(false);
            }}
            onOpenChange={(isOpen) => setStatusExpanded(isOpen)}
            selected={statusSelected}
            isOpen={statusExpanded}
          >
            <SelectList>
              {statusOptions.map((option, index) => (
                <SelectOption key={index} value={option}>
                  {option}
                </SelectOption>
              ))}
            </SelectList>
          </Select>
        </ToolbarItem>
        <ToolbarItem>
          <Select
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setPriorityExpanded(!priorityExpanded)}
                isExpanded={priorityExpanded}
                style={{ width: '120px' } as React.CSSProperties}
              >
                {prioritySelected || 'Priority'}
              </MenuToggle>
            )}
            onSelect={(_event, selection) => {
              setPrioritySelected(selection as string);
              setPriorityExpanded(false);
            }}
            onOpenChange={(isOpen) => setPriorityExpanded(isOpen)}
            selected={prioritySelected}
            isOpen={priorityExpanded}
          >
            <SelectList>
              {priorityOptions.map((option, index) => (
                <SelectOption key={index} value={option}>
                  {option}
                </SelectOption>
              ))}
            </SelectList>
          </Select>
        </ToolbarItem>
      </ToolbarGroup>
    </Fragment>
  );

  const sampleData = [
    { id: 'ISSUE-001', title: 'Login page not responsive on mobile', status: 'Open', priority: 'High' },
    { id: 'ISSUE-002', title: 'Dashboard widgets load slowly', status: 'In Progress', priority: 'Medium' },
    { id: 'ISSUE-003', title: 'Export CSV feature missing', status: 'Open', priority: 'Low' },
    { id: 'ISSUE-004', title: 'Search results pagination broken', status: 'Resolved', priority: 'Critical' },
    { id: 'ISSUE-005', title: 'User profile images not uploading', status: 'In Progress', priority: 'High' }
  ];

  return (
    <>
      <Card>
        <CardHeader>
          <Title headingLevel="h2" size="lg">
            Toolbar in Modal Demo
          </Title>
        </CardHeader>
        <CardBody>
          <p>
            This demo shows a toolbar inside a modal dialog using container queries. The toolbar responds to the modal's
            width rather than the viewport width, making it work correctly even when the modal is smaller than the
            viewport.
          </p>
        </CardBody>
        <CardFooter>
          <Button variant="primary" onClick={handleModalToggle}>
            Open Issue Tracker Modal
          </Button>
        </CardFooter>
      </Card>

      <Modal
        variant={ModalVariant.small}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        actions={[
          <Button key="close" variant="secondary" onClick={handleModalToggle}>
            Close
          </Button>
        ]}
      >
        <ModalHeader
          title="Issue Tracker"
          description="Filter and search through issues using the toolbar below. The toolbar uses container queries to adapt to the modal width."
        >
          <Toolbar id="modal-toolbar" useContainerQuery containerQueryBreakpoint="md">
            <ToolbarContent>
              <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="md">
                {toolbarItems}
              </ToolbarToggleGroup>
            </ToolbarContent>
          </Toolbar>
        </ModalHeader>
        <ModalBody>
          <DataList aria-label="Issues list" isCompact>
            {sampleData.map((item) => (
              <DataListItem key={item.id}>
                <DataListItemRow>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key="id" width={2}>
                        <strong>{item.id}</strong>
                      </DataListCell>,
                      <DataListCell key="title" width={5}>
                        {item.title}
                      </DataListCell>,
                      <DataListCell key="status" width={2}>
                        {item.status}
                      </DataListCell>,
                      <DataListCell key="priority" width={2}>
                        {item.priority}
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
            ))}
          </DataList>
        </ModalBody>
      </Modal>
    </>
  );
};
