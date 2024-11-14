import React from 'react';
import {
  Badge,
  Bullseye,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Content,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownList,
  EmptyState,
  EmptyStateFooter,
  EmptyStateVariant,
  EmptyStateActions,
  Gallery,
  MenuToggle,
  MenuToggleCheckbox,
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuDropdownItem,
  OverflowMenuItem,
  PageSection,
  Pagination,
  Toolbar,
  ToolbarItem,
  ToolbarFilter,
  ToolbarContent,
  Select,
  SelectList,
  SelectOption,
  MenuToggleElement
} from '@patternfly/react-core';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import pfIcon from './assets/pf-logo-small.svg';
import activeMQIcon from './assets/activemq-core_200x150.png';
import avroIcon from './assets/camel-avro_200x150.png';
import dropBoxIcon from './assets/camel-dropbox_200x150.png';
import infinispanIcon from './assets/camel-infinispan_200x150.png';
import saxonIcon from './assets/camel-saxon_200x150.png';
import sparkIcon from './assets/camel-spark_200x150.png';
import swaggerIcon from './assets/camel-swagger-java_200x150.png';
import azureIcon from './assets/FuseConnector_Icons_AzureServices.png';
import restIcon from './assets/FuseConnector_Icons_REST.png';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import { data } from '@patternfly/react-core/src/demos/CardView/examples/CardViewData.jsx';

export const CardViewBasic: React.FunctionComponent = () => {
  const totalItemCount = 10;

  const [cardData, setCardData] = React.useState(data);
  const [isChecked, setIsChecked] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
  const [areAllSelected, setAreAllSelected] = React.useState<boolean>(false);
  const [splitButtonDropdownIsOpen, setSplitButtonDropdownIsOpen] = React.useState(false);
  const [isLowerToolbarDropdownOpen, setIsLowerToolbarDropdownOpen] = React.useState(false);
  const [isLowerToolbarKebabDropdownOpen, setIsLowerToolbarKebabDropdownOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [filters, setFilters] = React.useState<Record<string, string[]>>({ products: [] });
  const [state, setState] = React.useState({});

  interface ProductType {
    id: number;
    name: string;
    icon: string;
    description: string;
  }
  const checkAllSelected = (selected: number, total: number) => {
    if (selected && selected < total) {
      return null;
    }
    return selected === total;
  };

  const onToolbarDropdownToggle = () => {
    setIsLowerToolbarDropdownOpen(!isLowerToolbarDropdownOpen);
  };

  const onToolbarKebabDropdownToggle = () => {
    setIsLowerToolbarKebabDropdownOpen(!isLowerToolbarKebabDropdownOpen);
  };

  const onToolbarKebabDropdownSelect = () => {
    setIsLowerToolbarKebabDropdownOpen(!isLowerToolbarKebabDropdownOpen);
  };

  const onCardKebabDropdownToggle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>,
    key: string
  ) => {
    setState({
      [key]: !state[key as keyof Object]
    });
  };

  const deleteItem = (item: ProductType) => {
    const filter = (getter) => (val) => getter(val) !== item.id;

    setCardData(cardData.filter(filter(({ id }) => id)));

    setSelectedItems(selectedItems.filter(filter((id) => id)));
  };

  const onSetPage = (_event: any, pageNumber: number) => {
    setPage(pageNumber);
  };

  const onPerPageSelect = (_event: any, perPage: number) => {
    setPerPage(perPage);
    setPage(1);
  };

  const onSplitButtonToggle = () => {
    setSplitButtonDropdownIsOpen(!splitButtonDropdownIsOpen);
  };

  const onSplitButtonSelect = () => {
    setSplitButtonDropdownIsOpen(false);
  };

  const onNameSelect = (event: any, selection = '') => {
    const checked = event.target.checked;
    const prevSelections = filters.products;

    setFilters({
      ...filters,
      products: checked ? [...prevSelections, selection] : prevSelections.filter((value) => value !== selection)
    });
  };

  const onDelete = (type = '', _id = '') => {
    if (type) {
      setFilters(filters);
    } else {
      setFilters({ products: [] });
    }
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const productId = Number(name.charAt(name.length - 1));

    if (selectedItems.includes(productId * 1)) {
      setSelectedItems(selectedItems.filter((id) => productId * 1 !== id));

      const checkAll = checkAllSelected(selectedItems.length - 1, totalItemCount);
      setAreAllSelected(!!checkAll);
    } else {
      setSelectedItems([...selectedItems, productId * 1]);
      const checkAll = checkAllSelected(selectedItems.length + 1, totalItemCount);
      setAreAllSelected(!!checkAll);
    }
  };

  const updateSelected = () => {
    const rows = cardData.map((post) => {
      post.selected = selectedItems.includes(post.id);
      return post;
    });

    setCardData(rows);
  };

  const getAllItems = () => {
    const collection: number[] = [];
    for (const items of cardData) {
      collection.push(items.id);
    }

    return collection;
  };

  const splitCheckboxSelectAll = (e: any) => {
    let collection: number[] = [];

    if (e.target.checked) {
      for (let i = 0; i <= 9; i++) {
        collection = [...collection, i];
      }
    }

    setSelectedItems(collection);
    setIsChecked(isChecked);
    setAreAllSelected(e.target.checked);

    updateSelected();
  };

  const selectPage = (e: { target: { checked: any } }) => {
    const { checked } = e.target;
    let collection: number[] = [];

    collection = getAllItems();

    setSelectedItems(collection);
    setIsChecked(checked);
    setAreAllSelected(totalItemCount === perPage ? true : false);

    updateSelected();
  };

  const selectAll = () => {
    let collection: number[] = [];
    for (let i = 0; i <= 9; i++) {
      collection = [...collection, i];
    }

    setSelectedItems(collection);
    setIsChecked(true);
    setAreAllSelected(true);

    updateSelected();
  };

  const selectNone = () => {
    setSelectedItems([]);
    setIsChecked(false);
    setAreAllSelected(false);

    updateSelected();
  };

  const renderPagination = () => {
    const defaultPerPageOptions = [
      {
        title: '1',
        value: 1
      },
      {
        title: '5',
        value: 5
      },
      {
        title: '10',
        value: 10
      }
    ];

    return (
      <Pagination
        itemCount={totalItemCount}
        page={page}
        perPage={perPage}
        perPageOptions={defaultPerPageOptions}
        onSetPage={onSetPage}
        onPerPageSelect={onPerPageSelect}
        variant="top"
        isCompact
      />
    );
  };

  const buildSelectDropdown = () => {
    const numSelected = selectedItems.length;
    const anySelected = numSelected > 0;
    const splitButtonDropdownItems = (
      <>
        <DropdownItem key="item-1" onClick={selectNone}>
          Select none (0 items)
        </DropdownItem>
        <DropdownItem key="item-2" onClick={selectPage}>
          Select page ({perPage} items)
        </DropdownItem>
        <DropdownItem key="item-3" onClick={selectAll}>
          Select all ({totalItemCount} items)
        </DropdownItem>
      </>
    );
    return (
      <Dropdown
        onSelect={onSplitButtonSelect}
        isOpen={splitButtonDropdownIsOpen}
        onOpenChange={(isOpen) => setSplitButtonDropdownIsOpen(isOpen)}
        toggle={(toggleRef) => (
          <MenuToggle
            ref={toggleRef}
            isExpanded={splitButtonDropdownIsOpen}
            onClick={onSplitButtonToggle}
            aria-label="Select cards"
            splitButtonItems={[
              <MenuToggleCheckbox
                id="split-dropdown-checkbox"
                key="split-dropdown-checkbox"
                aria-label={anySelected ? 'Deselect all cards' : 'Select all cards'}
                isChecked={areAllSelected}
                onClick={(e) => splitCheckboxSelectAll(e)}
              >
                {numSelected !== 0 && `${numSelected} selected`}
              </MenuToggleCheckbox>
            ]}
          ></MenuToggle>
        )}
      >
        <DropdownList>{splitButtonDropdownItems}</DropdownList>
      </Dropdown>
    );
  };

  const buildFilterDropdown = () => {
    const filterDropdownItems = (
      <SelectList>
        <SelectOption
          hasCheckbox
          key="patternfly"
          value="PatternFly"
          isSelected={filters.products.includes('PatternFly')}
        >
          PatternFly
        </SelectOption>
        <SelectOption hasCheckbox key="activemq" value="ActiveMQ" isSelected={filters.products.includes('ActiveMQ')}>
          ActiveMQ
        </SelectOption>
        <SelectOption
          hasCheckbox
          key="apachespark"
          value="Apache Spark"
          isSelected={filters.products.includes('Apache Spark')}
        >
          Apache Spark
        </SelectOption>
        <SelectOption hasCheckbox key="avro" value="Avro" isSelected={filters.products.includes('Avro')}>
          Avro
        </SelectOption>
        <SelectOption
          hasCheckbox
          key="azureservices"
          value="Azure Services"
          isSelected={filters.products.includes('Azure Services')}
        >
          Azure Services
        </SelectOption>
        <SelectOption hasCheckbox key="crypto" value="Crypto" isSelected={filters.products.includes('Crypto')}>
          Crypto
        </SelectOption>
        <SelectOption hasCheckbox key="dropbox" value="DropBox" isSelected={filters.products.includes('DropBox')}>
          DropBox
        </SelectOption>
        <SelectOption
          hasCheckbox
          key="jbossdatagrid"
          value="JBoss Data Grid"
          isSelected={filters.products.includes('JBoss Data Grid')}
        >
          JBoss Data Grid
        </SelectOption>
        <SelectOption hasCheckbox key="rest" value="REST" isSelected={filters.products.includes('REST')}>
          REST
        </SelectOption>
        <SelectOption hasCheckbox key="swagger" value="SWAGGER" isSelected={filters.products.includes('SWAGGER')}>
          SWAGGER
        </SelectOption>
      </SelectList>
    );

    return (
      <ToolbarFilter
        categoryName="Products"
        labels={filters.products}
        deleteLabel={(type, id) => onDelete(type as string, id as string)}
      >
        <Select
          aria-label="Products"
          role="menu"
          toggle={(toggleRef) => (
            <MenuToggle ref={toggleRef} onClick={onToolbarDropdownToggle} isExpanded={isLowerToolbarDropdownOpen}>
              Filter by creator name
              {filters.products.length > 0 && <Badge isRead>{filters.products.length}</Badge>}
            </MenuToggle>
          )}
          onSelect={(event, selection) => onNameSelect(event, selection.toString())}
          onOpenChange={(isOpen) => {
            setIsLowerToolbarDropdownOpen(isOpen);
          }}
          selected={filters.products}
          isOpen={isLowerToolbarDropdownOpen}
        >
          {filterDropdownItems}
        </Select>
      </ToolbarFilter>
    );
  };

  const toolbarKebabDropdownItems = [
    <OverflowMenuDropdownItem itemId={0} key="link">
      Link
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={1} key="action" component="button">
      Action
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={2} key="disabled link" isDisabled>
      Disabled Link
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={3} key="disabled action" isDisabled component="button">
      Disabled Action
    </OverflowMenuDropdownItem>,
    <Divider key="separator" />,
    <OverflowMenuDropdownItem itemId={5} key="separated link">
      Separated Link
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={6} key="separated action" component="button">
      Separated Action
    </OverflowMenuDropdownItem>
  ];

  const toolbarItems = (
    <React.Fragment>
      <ToolbarItem>{buildSelectDropdown()}</ToolbarItem>
      <ToolbarItem>{buildFilterDropdown()}</ToolbarItem>
      <ToolbarItem>
        <OverflowMenu breakpoint="md">
          <OverflowMenuItem>
            <Button variant="primary">Create a project</Button>
          </OverflowMenuItem>
          <OverflowMenuControl hasAdditionalOptions>
            <Dropdown
              onSelect={onToolbarKebabDropdownSelect}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  aria-label="Toolbar kebab overflow menu"
                  variant="plain"
                  onClick={onToolbarKebabDropdownToggle}
                  isExpanded={isLowerToolbarKebabDropdownOpen}
                  icon={<EllipsisVIcon />}
                />
              )}
              isOpen={isLowerToolbarKebabDropdownOpen}
              onOpenChange={(isOpen) => setIsLowerToolbarDropdownOpen(isOpen)}
            >
              <DropdownList>{toolbarKebabDropdownItems}</DropdownList>
            </Dropdown>
          </OverflowMenuControl>
        </OverflowMenu>
      </ToolbarItem>
      <ToolbarItem variant="pagination" align={{ default: 'alignEnd' }}>
        {renderPagination()}
      </ToolbarItem>
    </React.Fragment>
  );

  const icons = {
    pfIcon,
    activeMQIcon,
    sparkIcon,
    avroIcon,
    azureIcon,
    saxonIcon,
    dropBoxIcon,
    infinispanIcon,
    restIcon,
    swaggerIcon
  };

  const filtered =
    filters.products.length > 0
      ? data.filter((card: { name: string }) => filters.products.length === 0 || filters.products.includes(card.name))
      : cardData.slice((page - 1) * perPage, perPage === 1 ? page * perPage : page * perPage - 1);

  return (
    <React.Fragment>
      <DashboardWrapper mainContainerId="main-content-card-view-default-nav" breadcrumb={null}>
        <PageSection>
          <Content>
            <h1>Projects</h1>
            <p>This is a demo that showcases PatternFly cards.</p>
          </Content>
          <Toolbar id="toolbar-group-types" clearAllFilters={onDelete}>
            <ToolbarContent>{toolbarItems}</ToolbarContent>
          </Toolbar>
        </PageSection>
        <PageSection isFilled>
          <Gallery hasGutter aria-label="Selectable card container">
            <Card isCompact>
              <Bullseye>
                <EmptyState
                  headingLevel="h2"
                  titleText="Add a new card to your page"
                  icon={PlusCircleIcon}
                  variant={EmptyStateVariant.xs}
                >
                  <EmptyStateFooter>
                    <EmptyStateActions>
                      <Button variant="link">Add card</Button>
                    </EmptyStateActions>
                  </EmptyStateFooter>
                </EmptyState>
              </Bullseye>
            </Card>
            {filtered.map((product, key) => (
              <Card isCompact isClickable isSelectable key={product.name} id={product.name.replace(/ /g, '-')}>
                <CardHeader
                  selectableActions={{
                    isChecked: selectedItems.includes(product.id),
                    selectableActionId: `selectable-actions-item-${product.id}`,
                    selectableActionAriaLabelledby: product.name.replace(/ /g, '-'),
                    name: `check-${product.id}`,
                    onChange
                  }}
                  actions={{
                    actions: (
                      <>
                        <Dropdown
                          isOpen={!!state[key] ?? false}
                          onOpenChange={(isOpen) => setState({ [key]: isOpen })}
                          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                            <MenuToggle
                              ref={toggleRef}
                              aria-label={`${product.name} actions`}
                              variant="plain"
                              onClick={(e) => {
                                onCardKebabDropdownToggle(e, key.toString());
                              }}
                              isExpanded={!!state[key]}
                              icon={<EllipsisVIcon />}
                            />
                          )}
                          popperProps={{ position: 'right' }}
                        >
                          <DropdownList>
                            <DropdownItem
                              key="trash"
                              onClick={() => {
                                deleteItem(product);
                              }}
                            >
                              <TrashIcon />
                              Delete
                            </DropdownItem>
                          </DropdownList>
                        </Dropdown>
                      </>
                    )
                  }}
                >
                  <img src={icons[product.icon]} alt={`${product.name} icon`} style={{ maxWidth: '60px' }} />
                </CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardBody>{product.description}</CardBody>
              </Card>
            ))}
          </Gallery>
        </PageSection>
        <PageSection isFilled={false} stickyOnBreakpoint={{ default: 'bottom' }} padding={{ default: 'noPadding' }}>
          <Pagination
            itemCount={totalItemCount}
            page={page}
            perPage={perPage}
            onPerPageSelect={onPerPageSelect}
            onSetPage={onSetPage}
            variant="bottom"
          />
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
