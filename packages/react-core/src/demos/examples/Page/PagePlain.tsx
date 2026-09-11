import { useState } from 'react';
import {
  Brand,
  Bullseye,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  CardExpandableContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Content,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownList,
  EmptyState,
  EmptyStateActions,
  EmptyStateFooter,
  EmptyStateVariant,
  Flex,
  FlexItem,
  Gallery,
  GalleryItem,
  Icon,
  Label,
  LabelColor,
  LabelGroup,
  LabelStatus,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadLogo,
  MastheadMain,
  MastheadToggle,
  MenuToggle,
  MenuToggleElement,
  Page,
  PageBody,
  PageFooter,
  PageSection,
  PageToggleButton,
  Panel,
  PanelMain,
  PanelMainBody,
  SkipToContent,
  Title,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import RhUiEllipsisVerticalFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ellipsis-vertical-fill-icon';
import RhUiQuestionMarkCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-circle-fill-icon';
import RhUiSettingsFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-settings-fill-icon';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';
import RhUiTrashFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-trash-fill-icon';
import RhUiThumbnailViewSmallFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-thumbnail-view-small-fill-icon';
import RhUiPortIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-port-icon';
import RhUiContainerIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-container-icon';
import RhUiAutomationIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-automation-icon';
import RhUiConnectedIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-connected-icon';
import RhUiArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-right-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';
import pfIcon from '@patternfly/react-core/src/demos/assets/PF-IconLogo.svg';
import activeMQIcon from '@patternfly/react-core/src/demos/assets/activemq-core_200x150.png';
import avroIcon from '@patternfly/react-core/src/demos/assets/camel-avro_200x150.png';
import dropBoxIcon from '@patternfly/react-core/src/demos/assets/camel-dropbox_200x150.png';
import infinispanIcon from '@patternfly/react-core/src/demos/assets/camel-infinispan_200x150.png';
import saxonIcon from '@patternfly/react-core/src/demos/assets/camel-saxon_200x150.png';
import sparkIcon from '@patternfly/react-core/src/demos/assets/camel-spark_200x150.png';
import swaggerIcon from '@patternfly/react-core/src/demos/assets/camel-swagger-java_200x150.png';
import azureIcon from '@patternfly/react-core/src/demos/assets/FuseConnector_Icons_AzureServices.png';
import restIcon from '@patternfly/react-core/src/demos/assets/FuseConnector_Icons_REST.png';
import { data } from '@patternfly/react-core/src/demos/CardView/examples/CardViewData.jsx';

export const PagePlain: React.FunctionComponent = () => {
  const [isToolbarMenuOpen, setIsToolbarMenuOpen] = useState(false);
  const [isPathwayExpanded, setIsPathwayExpanded] = useState(true);
  const [isPathwayKebabOpen, setIsPathwayKebabOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [openCardMenu, setOpenCardMenu] = useState<number | null>(null);
  const mainContainerId = 'main-content-page-demo-plain';

  const onApplicationLauncher = () => {
    setIsToolbarMenuOpen(false);
  };

  const onSettings = () => {
    setIsToolbarMenuOpen(false);
  };

  const onHelp = () => {
    setIsToolbarMenuOpen(false);
  };

  const toolbar = (
    <Toolbar id="page-demo-plain-docked-toolbar" isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="action-group-plain"
          align={{ default: 'alignEnd' }}
          gap={{ default: 'gapNone', md: 'gapMd' }}
        >
          <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
            <ToolbarItem>
              <Button
                aria-label="Application launcher"
                variant={ButtonVariant.plain}
                icon={<RhUiThumbnailViewSmallFillIcon />}
                onClick={onApplicationLauncher}
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Settings" isSettings variant={ButtonVariant.plain} onClick={onSettings} />
            </ToolbarItem>
            <ToolbarItem>
              <Button
                aria-label="Help"
                variant={ButtonVariant.plain}
                icon={<RhUiQuestionMarkCircleFillIcon />}
                onClick={onHelp}
              />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
            <Dropdown
              isOpen={isToolbarMenuOpen}
              onSelect={() => setIsToolbarMenuOpen(false)}
              onOpenChange={(isOpen: boolean) => setIsToolbarMenuOpen(isOpen)}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  variant="plain"
                  aria-label="Actions"
                  isExpanded={isToolbarMenuOpen}
                  onClick={() => setIsToolbarMenuOpen(!isToolbarMenuOpen)}
                  icon={<RhUiEllipsisVerticalFillIcon />}
                />
              )}
            >
              <DropdownList>
                <DropdownItem onClick={onApplicationLauncher} icon={<RhUiThumbnailViewSmallFillIcon />}>
                  Application launcher
                </DropdownItem>
                <DropdownItem onClick={onSettings} icon={<RhUiSettingsFillIcon />}>
                  Settings
                </DropdownItem>
                <DropdownItem onClick={onHelp} icon={<RhUiQuestionMarkCircleFillIcon />}>
                  Help
                </DropdownItem>
              </DropdownList>
            </Dropdown>
          </ToolbarItem>
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead id="page-demo-plain-docked">
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton isHamburgerButton aria-label="Global navigation" />
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo href="#">
            <Brand src={pfLogo} alt="PatternFly" />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{toolbar}</MastheadContent>
    </Masthead>
  );

  const icons = {
    pfIcon,
    activeMQIcon,
    avroIcon,
    dropBoxIcon,
    infinispanIcon,
    saxonIcon,
    sparkIcon,
    swaggerIcon,
    azureIcon,
    restIcon
  };

  const cards = data.map((product) => (
    <GalleryItem key={product.name}>
      <Card isCompact isGlass isClickable isSelectable isFullHeight id={product.name.replace(/ /g, '-')}>
        <CardHeader
          selectableActions={{
            isChecked: selectedItems.includes(product.id),
            selectableActionId: `page-demo-plain-selectable-${product.id}`,
            selectableActionAriaLabelledby: product.name.replace(/ /g, '-'),
            name: `page-demo-plain-check-${product.id}`,
            onChange: (_event, checked) => {
              setSelectedItems((items) =>
                checked ? [...items, product.id] : items.filter((item) => item !== product.id)
              );
            }
          }}
          actions={{
            actions: (
              <Dropdown
                isOpen={openCardMenu === product.id}
                onOpenChange={(isOpen) => setOpenCardMenu(isOpen ? product.id : null)}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    aria-label={`${product.name} actions`}
                    variant="plain"
                    onClick={() => setOpenCardMenu(openCardMenu === product.id ? null : product.id)}
                    isExpanded={openCardMenu === product.id}
                    icon={<RhUiEllipsisVerticalFillIcon />}
                  />
                )}
              >
                <DropdownList>
                  <DropdownItem onClick={() => setOpenCardMenu(null)}>
                    <RhUiTrashFillIcon /> Delete
                  </DropdownItem>
                </DropdownList>
              </Dropdown>
            )
          }}
        >
          <img src={icons[product.icon]} alt={`${product.name} icon`} style={{ maxWidth: '60px' }} />
        </CardHeader>
        <CardTitle id={product.name.replace(/ /g, '-')}>{product.name}</CardTitle>
        <CardBody>{product.description}</CardBody>
      </Card>
    </GalleryItem>
  ));

  const renderPathwayCard = (
    category: React.ReactNode,
    systems: number,
    description: string,
    rebootRequired: boolean,
    hasIncident: boolean
  ) => (
    <FlexItem flex={{ default: 'flex_1' }} alignSelf={{ default: 'alignSelfStretch' }}>
      <Card isPlain isFullHeight>
        <CardBody>
          <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsSm' }} className="pf-v6-u-h-100">
            <Flex
              spaceItems={{ default: 'spaceItemsSm' }}
              direction={{ md: 'column', lg: 'row' }}
              spacer={{ md: 'spacerMd', lg: 'spacerSm' }}
            >
              {category}
              <Button variant={ButtonVariant.link} isInline component="a" href="#">
                {systems} systems
              </Button>
            </Flex>
            <FlexItem spacer={{ default: 'spacerMd' }}>
              <p>{description}</p>
            </FlexItem>
            <Flex
              grow={{ default: 'grow' }}
              direction={{ default: 'column', lg: 'row' }}
              justifyContent={{ default: 'justifyContentFlexEnd', lg: 'justifyContentFlexStart' }}
              alignContent={{ lg: 'alignContentFlexEnd' }}
              rowGap={{ default: 'rowGapMd' }}
            >
              {hasIncident && (
                <FlexItem style={{ marginBlockEnd: '-.25em' }}>
                  <Label status={LabelStatus.danger}>Incident</Label>
                </FlexItem>
              )}
              <Flex
                spaceItems={{ default: 'spaceItemsSm' }}
                alignItems={{ default: 'alignItemsCenter' }}
                flexWrap={{ default: 'nowrap' }}
                rowGap={{ default: 'rowGapMd' }}
              >
                <Icon status={rebootRequired ? 'danger' : 'success'}>
                  <RhUiConnectedIcon />
                </Icon>
                <p className="pf-v6-u-color-200">
                  System reboot <b className="pf-v6-u-color-100">{rebootRequired ? 'is' : 'is not'}</b> required
                </p>
              </Flex>
            </Flex>
          </Flex>
        </CardBody>
        <CardFooter>
          <Button
            variant={ButtonVariant.link}
            isInline
            component="a"
            href="#"
            icon={<RhUiArrowRightIcon />}
            iconPosition="end"
          >
            View pathway
          </Button>
        </CardFooter>
      </Card>
    </FlexItem>
  );

  const recommendedPathwaysCard = (
    <Card isExpanded={isPathwayExpanded} isGlass>
      <CardHeader
        onExpand={() => setIsPathwayExpanded(!isPathwayExpanded)}
        toggleButtonProps={{
          id: 'page-demo-plain-expandable-status-card-1-toggle',
          'aria-label': 'Details',
          'aria-labelledby':
            'page-demo-plain-expandable-status-card-1-title page-demo-plain-expandable-status-card-1-toggle',
          'aria-expanded': isPathwayExpanded
        }}
        actions={{
          actions: (
            <Dropdown
              isOpen={isPathwayKebabOpen}
              onOpenChange={(isOpen) => setIsPathwayKebabOpen(isOpen)}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  id="page-demo-plain-expandable-status-card-1-action-kebab"
                  aria-label="Menu toggle"
                  variant="plain"
                  onClick={() => setIsPathwayKebabOpen(!isPathwayKebabOpen)}
                  isExpanded={isPathwayKebabOpen}
                  icon={<RhUiEllipsisVerticalFillIcon />}
                />
              )}
            >
              <DropdownList>
                <DropdownItem onClick={() => setIsPathwayKebabOpen(false)}>Action</DropdownItem>
              </DropdownList>
            </Dropdown>
          )
        }}
      >
        <CardTitle id="page-demo-plain-expandable-status-card-1-title">
          <Title headingLevel="h2" size="xl">
            Improve recommended pathways
          </Title>
        </CardTitle>
      </CardHeader>
      <CardExpandableContent>
        <Flex direction={{ default: 'column', md: 'row' }} alignItems={{ default: 'alignItemsStretch' }}>
          {renderPathwayCard(
            <LabelGroup aria-label="Group of labels">
              <Label variant="outline" color={LabelColor.blue} icon={<RhUiPortIcon />}>
                Performance
              </Label>
            </LabelGroup>,
            378,
            'Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network instabilities and issues with system performance',
            true,
            true
          )}
          <Divider orientation={{ md: 'vertical' }} inset={{ default: 'inset3xl' }} />
          {renderPathwayCard(
            <LabelGroup numLabels={1} aria-label="Group of labels">
              <Label variant="outline" color={LabelColor.blue} icon={<RhUiContainerIcon />}>
                Stability
              </Label>
              <Label variant="outline" color={LabelColor.blue}>
                Availability
              </Label>
            </LabelGroup>,
            211,
            'Adjust your networking configuration to get ahead of network performance degradations and packet losses',
            false,
            false
          )}
          <Divider orientation={{ md: 'vertical' }} inset={{ default: 'inset3xl' }} />
          {renderPathwayCard(
            <LabelGroup aria-label="Group of labels">
              <Label variant="outline" color={LabelColor.blue} icon={<RhUiAutomationIcon />}>
                Availability
              </Label>
            </LabelGroup>,
            166,
            'Fine tune your Oracle DB configuration to improve database performance and avoid process failure',
            true,
            true
          )}
        </Flex>
      </CardExpandableContent>
    </Card>
  );

  const footer = (
    <PageFooter>
      <PageBody>custom footer</PageBody>
    </PageFooter>
  );

  return (
    <Page
      id="page-demo-plain"
      isPlain
      masthead={masthead}
      skipToContent={<SkipToContent href={`#${mainContainerId}`}>Skip to content</SkipToContent>}
      mainContainerId={mainContainerId}
      footer={footer}
    >
      <PageSection isPlain padding={{ default: 'noPadding' }}>
        <Panel isGlass variant="bordered">
          <PanelMain>
            <PanelMainBody>
              <Content>
                <h1>Page title</h1>
                <p>This is a full page demo.</p>
              </Content>
            </PanelMainBody>
          </PanelMain>
        </Panel>
      </PageSection>
      <PageSection isPlain padding={{ default: 'noPadding' }}>
        {recommendedPathwaysCard}
      </PageSection>
      <PageSection isPlain padding={{ default: 'noPadding' }} isFilled>
        <Gallery hasGutter aria-label="Selectable card container">
          <Card isCompact isGlass isFullHeight>
            <Bullseye>
              <EmptyState
                headingLevel="h2"
                titleText="Add a new card to your page"
                icon={RhUiAddCircleFillIcon}
                variant={EmptyStateVariant.xs}
              >
                <EmptyStateFooter>
                  <EmptyStateActions>
                    <Button variant={ButtonVariant.link}>Add card</Button>
                  </EmptyStateActions>
                </EmptyStateFooter>
              </EmptyState>
            </Bullseye>
          </Card>
          {cards}
        </Gallery>
      </PageSection>
    </Page>
  );
};
