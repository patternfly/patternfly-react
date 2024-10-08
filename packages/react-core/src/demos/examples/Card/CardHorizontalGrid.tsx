import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardExpandableContent,
  Level,
  LabelGroup,
  Label,
  Grid,
  Flex,
  List,
  ListItem,
  Button,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const CardHorizontalGrid: React.FunctionComponent = () => {
  const [isCardExpanded, setIsCardExpanded] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const onCardExpand = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  const onActionToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onActionSelect = () => {
    setIsDropdownOpen(false);
  };

  const dropdownItems = (
    <>
      <DropdownItem key="action1">Action 1</DropdownItem>
      <DropdownItem key="action2">Action 2</DropdownItem>
      <DropdownItem key="disabled action3" isDisabled>
        Disabled Action 3
      </DropdownItem>
      <DropdownItem key="action4">Action 4</DropdownItem>
    </>
  );
  const headerActions = (
    <Dropdown
      onSelect={onActionSelect}
      isOpen={isDropdownOpen}
      popperProps={{ position: 'right' }}
      onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          isExpanded={isDropdownOpen}
          onClick={onActionToggle}
          variant="plain"
          aria-label="Horizontal card grid demo kebab toggle"
          icon={<EllipsisVIcon aria-hidden="true" />}
        />
      )}
    >
      <DropdownList>{dropdownItems}</DropdownList>
    </Dropdown>
  );

  return (
    <Card id="horizontal card" isExpanded={isCardExpanded}>
      <CardHeader
        actions={{ actions: headerActions }}
        onExpand={onCardExpand}
        toggleButtonProps={{
          id: 'toggle-button',
          'aria-label': 'Actions',
          'aria-labelledby': 'titleId toggle-button',
          'aria-expanded': isCardExpanded
        }}
      >
        {isCardExpanded && <CardTitle id="titleId">Getting Started</CardTitle>}
        {!isCardExpanded && (
          <Level hasGutter>
            <CardTitle id="titleId">Getting Started</CardTitle>
            <LabelGroup isCompact>
              <Label isCompact icon={<InfoCircleIcon />} color="blue">
                Set up your cluster
              </Label>
              <Label isCompact icon={<InfoCircleIcon />} color="purple">
                Guided tours
              </Label>
              <Label isCompact icon={<InfoCircleIcon />} color="green">
                Quick starts
              </Label>
              <Label isCompact icon={<InfoCircleIcon />} color="orange">
                Learning resources
              </Label>
            </LabelGroup>
          </Level>
        )}
      </CardHeader>
      <CardExpandableContent>
        <CardBody>
          <Grid md={6} lg={3} hasGutter>
            <Flex
              spaceItems={{ default: 'spaceItemsLg' }}
              alignItems={{ default: 'alignItemsFlexStart' }}
              direction={{ default: 'column' }}
            >
              <Flex
                spaceItems={{ default: 'spaceItemsSm' }}
                alignItems={{ default: 'alignItemsFlexStart' }}
                direction={{ default: 'column' }}
                grow={{ default: 'grow' }}
              >
                <Label icon={<InfoCircleIcon />} color="blue">
                  Set up your cluster
                </Label>
                <p>Continue setting up your cluster to access all you cain in the Console</p>
                <List isPlain>
                  <ListItem>
                    <a href="#">Add identity provider</a>
                  </ListItem>
                  <ListItem>
                    <a href="#">Configure alert receivers</a>
                  </ListItem>
                  <ListItem>
                    <a href="#">Configure default ingress certificate</a>
                  </ListItem>
                </List>
              </Flex>
              <Button href="#" component="a" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="right">
                View all set up cluster steps
              </Button>
            </Flex>
            <Flex
              spaceItems={{ default: 'spaceItemsLg' }}
              alignItems={{ default: 'alignItemsFlexStart' }}
              direction={{ default: 'column' }}
            >
              <Flex
                spaceItems={{ default: 'spaceItemsSm' }}
                alignItems={{ default: 'alignItemsFlexStart' }}
                direction={{ default: 'column' }}
                grow={{ default: 'grow' }}
              >
                <Label icon={<InfoCircleIcon />} color="purple">
                  Guided tours
                </Label>
                <p>Tour some of the key features around the console</p>
                <List isPlain>
                  <ListItem>
                    <a href="#">Tour the console</a>
                  </ListItem>
                  <ListItem>
                    <a href="#">Getting started with Serverless</a>
                  </ListItem>
                </List>
              </Flex>
              <Button href="#" component="a" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="right">
                View all guided tours
              </Button>
            </Flex>
            <Flex
              spaceItems={{ default: 'spaceItemsLg' }}
              alignItems={{ default: 'alignItemsFlexStart' }}
              direction={{ default: 'column' }}
            >
              <Flex
                spaceItems={{ default: 'spaceItemsSm' }}
                alignItems={{ default: 'alignItemsFlexStart' }}
                direction={{ default: 'column' }}
                grow={{ default: 'grow' }}
              >
                <Label icon={<InfoCircleIcon />} color="green">
                  Quick starts
                </Label>
                <p>Get started with features using our step-by-step documentation</p>
                <List isPlain>
                  <ListItem>
                    <a href="#">Getting started with Serverless</a>
                  </ListItem>
                  <ListItem>
                    <a href="#">Explore virtualization</a>
                  </ListItem>
                  <ListItem>
                    <a href="#">Build pipelines</a>
                  </ListItem>
                </List>
              </Flex>
              <Button href="#" component="a" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="right">
                View all quick starts
              </Button>
            </Flex>
            <Flex
              spaceItems={{ default: 'spaceItemsLg' }}
              alignItems={{ default: 'alignItemsFlexStart' }}
              direction={{ default: 'column' }}
            >
              <Flex
                spaceItems={{ default: 'spaceItemsSm' }}
                alignItems={{ default: 'alignItemsFlexStart' }}
                direction={{ default: 'column' }}
                grow={{ default: 'grow' }}
              >
                <Label icon={<InfoCircleIcon />} color="orange">
                  Learning resources
                </Label>
                <p>Learn about new features within the Console and get started with demo apps</p>
                <List isPlain>
                  <ListItem>
                    <a href="#">See what's possible with the Explore page</a>
                  </ListItem>
                  <ListItem>
                    <a href="#">
                      OpenShift 4.5: Top Tasks
                      <ExternalLinkAltIcon />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="#">Try a demo app</a>
                  </ListItem>
                </List>
              </Flex>
              <Button href="#" component="a" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="right">
                View all learning resources
              </Button>
            </Flex>
          </Grid>
        </CardBody>
      </CardExpandableContent>
    </Card>
  );
};
