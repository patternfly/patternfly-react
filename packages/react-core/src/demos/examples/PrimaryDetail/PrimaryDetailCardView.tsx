import React from 'react';
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Content,
  Divider,
  Drawer,
  DrawerActions,
  DrawerPanelBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelContent,
  Dropdown,
  DropdownItem,
  DropdownList,
  Flex,
  FlexItem,
  Gallery,
  MenuToggle,
  MenuToggleCheckbox,
  PageSection,
  Pagination,
  Progress,
  Select,
  SelectList,
  SelectOption,
  Title,
  Toolbar,
  ToolbarFilter,
  ToolbarItem,
  ToolbarContent,
  MenuToggleElement
} from '@patternfly/react-core';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
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
import { DashboardWrapper } from '@patternfly/react-core/src/demos/DashboardWrapper';
import { data } from '@patternfly/react-core/src/demos/CardView/examples/CardViewData.jsx';

export const PrimaryDetailCardView: React.FunctionComponent = () => {
  const [totalItemCount, setTotalItemCount] = React.useState(10);
  const [cardData, setCardData] = React.useState(data);
  const [isChecked, setIsChecked] = React.useState(false);
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
  const [areAllSelected, setAreAllSelected] = React.useState<boolean>(false);
  const [splitButtonDropdownIsOpen, setSplitButtonDropdownIsOpen] = React.useState(false);
  const [isLowerToolbarDropdownOpen, setIsLowerToolbarDropdownOpen] = React.useState(false);
  const [isLowerToolbarKebabDropdownOpen, setIsLowerToolbarKebabDropdownOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [filters, setFilters] = React.useState<Record<string, string[]>>({ products: [] });
  const [state, setState] = React.useState({});
  const [activeCard, setActiveCard] = React.useState(-1);

  interface ProductType {
    id: number;
    name: string;
    icon: string;
    description: string;
  }

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

  const checkAllSelected = (selected: number, total: number) => {
    if (selected && selected < total) {
      return null;
    }
    return selected === total;
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

  const deleteItem = (item: ProductType) => {
    const filter = (getter) => (val) => getter(val) !== item.id;

    setCardData(cardData.filter(filter(({ id }) => id)));

    setSelectedItems(selectedItems.filter(filter((id) => id)));

    setTotalItemCount(totalItemCount - 1);
    setIsDrawerExpanded(false);
    setActiveCard(-1);
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
    setIsDrawerExpanded(false);
    setActiveCard(-1);
  };

  const onCloseDrawerClick = () => {
    setActiveCard(-1);
    setIsDrawerExpanded(false);
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

  const onCardClick = (productId) => {
    if (productId === activeCard) {
      setIsDrawerExpanded(!isDrawerExpanded);
      setActiveCard(-1);
    } else {
      setActiveCard(productId);
      setIsDrawerExpanded(true);
    }
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
    setIsDrawerExpanded(false);
    setActiveCard(-1);

    updateSelected();
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
    setIsDrawerExpanded(false);
    setActiveCard(-1);

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
                onClick={splitCheckboxSelectAll.bind(this)}
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
          onSelect={(event, selection) => onNameSelect(event, selection?.toString())}
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

  const toolbarKebabDropdownItems = (
    <>
      <DropdownItem value={0} key="action">
        Action
      </DropdownItem>
      <DropdownItem
        value={1}
        key="link"
        to="#default-link2"
        // Prevent the default onClick functionality for example purposes
        onClick={(ev) => ev.preventDefault()}
      >
        Link
      </DropdownItem>
      <DropdownItem value={2} isDisabled key="disabled action">
        Disabled Action
      </DropdownItem>
      <DropdownItem value={3} isDisabled key="disabled link" to="#default-link4">
        Disabled Link
      </DropdownItem>
      <Divider component="li" key="separator" />
      <DropdownItem value={4} key="separated action">
        Separated Action
      </DropdownItem>
      <DropdownItem value={5} key="separated link" to="#default-link6" onClick={(ev) => ev.preventDefault()}>
        Separated Link
      </DropdownItem>
    </>
  );
  const toolbarItems = (
    <React.Fragment>
      <ToolbarItem>{buildSelectDropdown()}</ToolbarItem>
      <ToolbarItem>{buildFilterDropdown()}</ToolbarItem>
      <ToolbarItem>
        <Button variant="primary">Create instance</Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary">Action</Button>
      </ToolbarItem>
      <ToolbarItem>
        <Dropdown
          onSelect={onToolbarKebabDropdownSelect}
          isOpen={isLowerToolbarKebabDropdownOpen}
          onOpenChange={(isOpen) => setIsLowerToolbarKebabDropdownOpen(isOpen)}
          toggle={(toggleRef) => (
            <MenuToggle
              ref={toggleRef}
              isExpanded={isLowerToolbarKebabDropdownOpen}
              variant="plain"
              onClick={onToolbarKebabDropdownToggle}
              aria-label="Toolbar actions"
              icon={<EllipsisVIcon aria-hidden="true" />}
            />
          )}
        >
          <DropdownList>{toolbarKebabDropdownItems}</DropdownList>
        </Dropdown>
      </ToolbarItem>
      <ToolbarItem variant="pagination" align={{ default: 'alignEnd' }}>
        {renderPagination()}
      </ToolbarItem>
    </React.Fragment>
  );

  const filtered =
    filters.products.length > 0
      ? data.filter((card: { name: string }) => filters.products.length === 0 || filters.products.includes(card.name))
      : cardData.slice((page - 1) * perPage, perPage === 1 ? page * perPage : page * perPage - 1);

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

  const drawerContent = (
    <Gallery hasGutter role="region" aria-label="Selectable card container">
      {filtered.map((product, key) => (
        <Card
          key={product.name}
          id={'card-view-' + key}
          isClickable
          isSelectable
          isSelected={activeCard === product.id}
        >
          <CardHeader
            actions={{
              actions: (
                <>
                  <Dropdown
                    isOpen={!!state[key] ?? false}
                    onOpenChange={(isOpen) => setState({ [key]: isOpen })}
                    popperProps={{ position: 'right' }}
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
            selectableActions={{
              isChecked: selectedItems.includes(product.id),
              selectableActionId: `selectable-actions-item-${product.id}`,
              selectableActionAriaLabelledby: `${'card-view-' + key}`,
              name: `check-${product.id}`,
              onChange
            }}
          >
            <img src={icons[product.icon]} alt={`${product.name} icon`} style={{ height: '50px' }} />
          </CardHeader>
          <CardTitle>
            <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
              <FlexItem>
                <Button
                  variant="link"
                  isInline
                  onClick={() => onCardClick(product.id)}
                  aria-expanded={activeCard === product.id}
                >
                  {product.name}
                </Button>
              </FlexItem>
              <FlexItem>
                <Content>
                  <small className="pf-v6-u-color-200 pf-v6-u-font-family-text">Provided by Red Hat</small>
                </Content>
              </FlexItem>
            </Flex>
          </CardTitle>

          <CardBody>{product.description}</CardBody>
        </Card>
      ))}
    </Gallery>
  );

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <Title headingLevel="h2" size="xl">
          node-{activeCard}
        </Title>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseDrawerClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Flex spaceItems={{ default: 'spaceItemsLg' }} direction={{ default: 'column' }}>
          <FlexItem>
            <p>
              The content of the drawer really is up to you. It could have form fields, definition lists, text lists,
              labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here, and
              can also make the drawer scrollable.
            </p>
          </FlexItem>
          <FlexItem>
            <Progress value={activeCard * 10} title="Title" />
          </FlexItem>
          <FlexItem>
            <Progress value={activeCard * 5} title="Title" />
          </FlexItem>
        </Flex>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <DashboardWrapper mainContainerId="main-content-card-view-default-nav" breadcrumb={null}>
      <PageSection>
        <Content>
          <h1>Projects</h1>
          <p>This is a demo that showcases Patternfly cards.</p>
        </Content>
      </PageSection>
      <PageSection isFilled padding={{ default: 'noPadding' }}>
        <Toolbar id="card-view-data-toolbar-group-types" clearAllFilters={onDelete}>
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <Divider component="div" />
      </PageSection>
      <PageSection isFilled padding={{ default: 'noPadding' }}>
        <Drawer isExpanded={isDrawerExpanded} className={'pf-m-inline-on-2xl'}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody hasPadding>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </PageSection>
      <PageSection
        isFilled={false}
        stickyOnBreakpoint={{ default: 'bottom' }}
        padding={{ default: 'noPadding' }}
        variant="light"
      >
        <Pagination
          itemCount={filtered.length}
          page={page}
          perPage={perPage}
          onPerPageSelect={onPerPageSelect}
          onSetPage={onSetPage}
          variant="bottom"
        />
      </PageSection>
    </DashboardWrapper>
  );
};
