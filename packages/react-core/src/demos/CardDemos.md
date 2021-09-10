---
id: Card
section: components
---

import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, TimesCircleIcon, BellIcon } from '@patternfly/react-icons';
import { TableComposable, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';


## Demos

### Horizontal card grid

```js
import React from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardTitle,
  CardBody,
  CardExpandableContent,
  Level,
  LabelGroup,
  Label,
  Dropdown,
  DropdownItem,
  KebabToggle,
  Grid,
  Flex,
  List,
  ListItem,
  Button
} from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

class CardGridDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCardExpanded: false, isDropdownOpen: false };

    this.onCardExpand = () => {
      this.setState({
        isCardExpanded: !this.state.isCardExpanded
      });
    };

    this.onActionToggle = isDropdownOpen => {
      this.setState({
        isDropdownOpen
      });
    };

    this.onActionSelect = event => {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen
      });
    };
  }

  render() {
    const { isCardExpanded, isDropdownOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="action1" component="button">
        Action 1
      </DropdownItem>,
      <DropdownItem key="action2" component="button">
        Action 2
      </DropdownItem>,
      <DropdownItem key="disabled action3" isDisabled component="button">
        Disabled Action 3
      </DropdownItem>,
      <DropdownItem key="action4" component="button">
        Action 4
      </DropdownItem>
    ];
    return (
      <Card id="horizontal card" isExpanded={isCardExpanded}>
        <CardHeader
          onExpand={this.onCardExpand}
          toggleButtonProps={{
            id: 'toggle-button',
            'aria-label': 'Actions',
            'aria-labelledby': 'titleId toggle-button',
            'aria-expanded': isCardExpanded
          }}
        >
          <CardActions>
            <Dropdown
              onSelect={this.onActionSelect}
              toggle={<KebabToggle onToggle={this.onActionToggle} />}
              isOpen={isDropdownOpen}
              isPlain
              dropdownItems={dropdownItems}
              position="right"
            />
          </CardActions>
          {isCardExpanded && <CardTitle id="titleId">Getting Started</CardTitle>}
          {!isCardExpanded && (
            <Level hasGutter>
              <CardTitle id="titleId">Getting Started</CardTitle>
              <LabelGroup>
                <Label icon={<InfoCircleIcon />} color="blue">
                  Set up your cluster
                </Label>
                <Label icon={<InfoCircleIcon />} color="purple">
                  Guided tours
                </Label>
                <Label icon={<InfoCircleIcon />} color="green">
                  Quick starts
                </Label>
                <Label icon={<InfoCircleIcon />} color="orange">
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
  }
}
```

### Horizontal split

```js
import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Button
} from '@patternfly/react-core';

CardHorizontalSplitDemo = () => {
  return (
    <Card id="card-demo-horizontal-split-example" isFlat>
      <Grid md={6}>
        <GridItem style={{minHeight: '200px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: 'url(/assets/images/pfbg_992@2x.jpg)' }}/>
        <GridItem>
          <CardTitle>Headline</CardTitle>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu purus, lobortis nec euismod eu, tristique ut sapien. Nullam turpis lectus, aliquet sit amet volutpat eu, semper eget quam. Maecenas in tempus diam. Aenean interdum velit sed massa aliquet, sit amet malesuada nulla hendrerit. Aenean non faucibus odio. Etiam non metus turpis. Praesent sollicitudin elit neque, id ullamcorper nibh faucibus eget.
          </CardBody>
          <CardFooter>
            <Button variant="tertiary">Call to action</Button>
          </CardFooter>
        </GridItem>
      </Grid>
    </Card>
  );
}
```

### Details Card

```js
import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Gallery,
  Title,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Divider
} from '@patternfly/react-core';

CardDetailsDemo = () => {
  return (
    <Gallery hasGutter style={{'--pf-l-gallery--GridTemplateColumns--min': '260px'}}>
      <Card>
        <CardTitle>
          <Title headingLevel="h2" size="xl">
            Details
          </Title> 
        </CardTitle>
        <CardBody>
           <DescriptionList>
            <DescriptionListGroup>
              <DescriptionListTerm>Cluster API Address</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">https://api1.devcluster.openshift.com</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                Cluster ID
              </DescriptionListTerm>
              <DescriptionListDescription>
                63b97ac1-b850-41d9-8820-239becde9e86
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Provide</DescriptionListTerm>
              <DescriptionListDescription>
                AWS
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>OpenShift Version</DescriptionListTerm>
              <DescriptionListDescription>
                4.5.0.ci-2020-06-16-015028
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Update Channel</DescriptionListTerm>
              <DescriptionListDescription>
                stable-4.5
              </DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </CardBody>
        <Divider />
        <CardFooter>
          <a href="#">View Settings</a>
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>
          <Title headingLevel="h2" size="xl">
            Details
          </Title>
        </CardTitle>
        <CardBody>
          <DescriptionList>
            <DescriptionListGroup>
              <DescriptionListTerm>
                Cluster API Address
              </DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">https://api2.devcluster.openshift.com</a>
             </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                Cluster ID
              </DescriptionListTerm>
              <DescriptionListDescription>
                08908908-b850-41d9-8820-239becde9e86
             </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                Provider
              </DescriptionListTerm>
              <DescriptionListDescription>
                Azure
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                OpenShift Version
              </DescriptionListTerm>
              <DescriptionListDescription>
                4.5.0.ci-2020-06-16-015026
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Update Channel</DescriptionListTerm>
              <DescriptionListDescription>
                stable-4.4
              </DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </CardBody>
        <Divider />
        <CardFooter>
          <a href="#">View Settings</a>
        </CardFooter>
      </Card>
    </Gallery>
  );
}
```

### Aggregate status card

```ts
import * as React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Divider,
  Flex,
  FlexItem,
  Gallery,
  Grid,
  GridItem,
  Stack
} from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';

const cardData = {
  iconOnly: [
    {
      title: '5 Clusters',
      content: [
        {
          icon: <CheckCircleIcon color='var(--pf-global--success-color--100)' />
        }
      ],
      layout: 'icon'
    },
    {
      title: '15 Clusters',
      content: [
        {
          icon: <ExclamationTriangleIcon color='var(--pf-global--warning-color--100)' />
        }
      ],
      layout: 'icon'
    },
    {
      title: '3 Clusters',
      content: [
        {
          icon: <TimesCircleIcon color='var(--pf-global--danger-color--100)' />
        }
      ],
      layout: 'icon'
    }
  ],
  iconWithCount: [
    {
      title: '10 Hosts',
      content: [
        {
          icon: <ExclamationCircleIcon color='var(--pf-global--success-color--100)' />,
          count: 2
        },
        {
          icon: <ExclamationTriangleIcon color='var(--pf-global--warning-color--100)' />,
          count: 1
        }
      ],
      layout: 'multiIcon'
    },
    {
      title: '50 Hosts',
      content: [
        {
          icon: <CheckCircleIcon color='var(--pf-global--success-color--100)' />,
          count: 5
        },
        {
          icon: <TimesCircleIcon color='var(--pf-global--danger-color--100)' />,
          count: 12
        }
      ],
      layout: 'multiIcon'
    },
    {
      title: '12 Hosts',
      content: [
        {
          icon: <ExclamationTriangleIcon color='var(--pf-global--warning-color--100)' />,
          count: 3
        },
        {
          icon: <TimesCircleIcon color='var(--pf-global--danger-color--100)' />,
          count: 7
        }
      ],
      layout: 'multiIcon'
    }
  ],
  withSubtitle: [
    {
      title: '13 Hosts',
      content: [
        {
          icon: <TimesCircleIcon color='var(--pf-global--danger-color--100)' />,
          status: '2 errors',
          subtitle: 'subtitle'
        },
        {
          icon: <ExclamationTriangleIcon color='var(--pf-global--warning-color--100)' />,
          status: '1 warning',
          subtitle: 'subtitle'
        }
      ],
      layout: 'withSubtitle'
    },
    {
      title: '3 Hosts',
      content: [
        {
          icon: <CheckCircleIcon color='var(--pf-global--success-color--100)' />,
          status: '2 successes',
          subtitle: 'subtitle'
        },
        {
          icon: <ExclamationTriangleIcon color='var(--pf-global--warning-color--100)' />,
          status: '3 warnings',
          subtitle: 'subtitle'
        }
      ],
      layout: 'withSubtitle'
    },
    {
      title: '50 Hosts',
      content: [
        {
          icon: <ExclamationTriangleIcon color='var(--pf-global--warning-color--100)' />,
          status: '7 warnings',
          subtitle: 'subtitle'
        },
        {
          icon: <TimesCircleIcon color='var(--pf-global--danger-color--100)' />,
          status: '1 error',
          subtitle: 'subtitle'
        }
      ],
      layout: 'withSubtitle'
    }
  ]
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AggregateStatusCards: React.FunctionComponent = () => {
  const renderContent = (content, layout) => {
    if (layout === 'icon') {
      return content[0].icon;
    }
    if (layout === 'multiIcon') {
      return (
        <Flex display={{ default: 'inlineFlex' }}>
          {content.map(({ icon, count }, index: number) => (
            <React.Fragment key={index}>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem>{icon}</FlexItem>
                <FlexItem>
                  <a href="#">{count}</a>
                </FlexItem>
              </Flex>
              {content.length > 1 && index === 0 && <Divider key={`${index}_d`} isVertical />}
            </React.Fragment>
          ))}
        </Flex>
      );
    }
    if (layout === 'withSubtitle') {
      return (
        <Flex justifyContent={{ default: 'justifyContentSpaceAround' }}>
          {content.map(({ icon, status, subtitle }, index) => (
            <Flex key={index}>
              <FlexItem>{icon}</FlexItem>
              <Stack>
                <a href="#">{status}</a>
                <span>{subtitle}</span>
              </Stack>
            </Flex>
          ))}
        </Flex>
      );
    }
  };
  return (
    <Grid hasGutter>
      {Object.keys(cardData).map((cardGroup, groupIndex) => {
        let galleryWidth;
        let cardAlign;
        let titleAlign;
        if (cardGroup === 'withSubtitle') {
          galleryWidth = '260px';
          cardAlign = '';
          titleAlign = 'center';
        } else {
          cardAlign = 'center';
        }
        return (
          <GridItem key={groupIndex}>
            <Gallery hasGutter style={{ '--pf-l-gallery--GridTemplateColumns--min': galleryWidth } as any}>
              {cardData[cardGroup].map(({ title, content, layout }, cardIndex) => (
                <Card style={{ textAlign: cardAlign }} key={`${groupIndex}${cardIndex}`} component="div">
                  <CardTitle style={{ textAlign: titleAlign }}>{title}</CardTitle>
                  <CardBody>{renderContent(content, layout)}</CardBody>
                </Card>
              ))}
            </Gallery>
          </GridItem>
        );
      })}
    </Grid>
  );
};
```

### Status

```ts
import * as React from 'react';
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Label,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerGroup,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Popover,
  Title
} from '@patternfly/react-core';
import { TableComposable, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StatusPlain: React.FunctionComponent = () => {
  const [drawerExpanded, setDrawerExpanded] = React.useState(false);
  const handleDrawerToggleClick = () => {
    setDrawerExpanded(!drawerExpanded);
  };

  const [rowsExpanded, setRowsExpanded] = React.useState([false, false, false]);
  const handleToggleExpand = (_: any, rowIndex: number) => {
    const newRowsExpanded = [...rowsExpanded];
    newRowsExpanded[rowIndex] = !rowsExpanded[rowIndex];
    setRowsExpanded(newRowsExpanded);
  };

  const header = (
    <CardHeader>
      <Title headingLevel="h2" size="lg">
        Status
      </Title>
    </CardHeader>
  );

  const columns = ['Components', 'Response Rate'];

  const rows = [
    {
      content: ['API Servers', '20%'],
      child: (
        <Alert
          title="This is a critical alert that can be associated with the control panel."
          variant="danger"
          isInline
        ></Alert>
      )
    },
    {
      content: ['Controller Managers', '100%'],
      child: (
        <Alert
          title="This is a critical alert that can be associated with the control panel."
          variant="danger"
          isInline
        ></Alert>
      )
    },
    {
      content: ['etcd', '91%'],
      child: (
        <Alert
          title="This is a critical alert that can be associated with the control panel."
          variant="danger"
          isInline
        ></Alert>
      )
    }
  ];

  const popoverBodyContent = (
    <>
      <div>
        Components of the Control Panel are responsible for maintaining and reconciling the state of the cluster.
      </div>
      <TableComposable variant="compact">
        <Thead>
          <Tr>
            <Th />
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex} modifier="fitContent">
                {column}
              </Th>
            ))}
          </Tr>
        </Thead>
        {rows.map((row, rowIndex) => {
          const parentRow = (
            <Tr key={rowIndex}>
              <Td
                key={`${rowIndex}_0`}
                expand={row.child && { isExpanded: rowsExpanded[rowIndex], rowIndex, onToggle: handleToggleExpand }}
              />
              {row.content.map((cell, cellIndex) => (
                <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]} modifier="fitContent">
                  {cell}
                </Td>
              ))}
            </Tr>
          );
          const childRow = row.child ? (
            <Tr key={`${rowIndex}_child`} isExpanded={rowsExpanded[rowIndex]}>
              <Td key={`${rowIndex}_1`} colSpan={3} dataLabel={`${rowIndex}_child`}>
                <ExpandableRowContent>{row.child}</ExpandableRowContent>
              </Td>
            </Tr>
          ) : null;
          return (
            <Tbody key={rowIndex} isExpanded={rowsExpanded[rowIndex]}>
              {parentRow}
              {childRow}
            </Tbody>
          );
        })}
      </TableComposable>
    </>
  );

  const body = (
    <CardBody>
      <Grid hasGutter sm={6} lg={3}>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <CheckCircleIcon color='var(--pf-global--success-color--100)' />
            </FlexItem>
            <FlexItem>
              <span>Cluster</span>
            </FlexItem>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <ExclamationCircleIcon color='var(--pf-global--danger-color--100)' />
            </FlexItem>
            <FlexItem>
              <Popover headerContent="Control Panel Status" bodyContent={popoverBodyContent} minWidth="400px">
                <a href="#" onClick={e => e.preventDefault()}>
                  Control Panel
                </a>
              </Popover>
            </FlexItem>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <ExclamationCircleIcon color='var(--pf-global--danger-color--100)' />
            </FlexItem>
            <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
              <FlexItem>
                <a href="#">Operators</a>
              </FlexItem>
              <FlexItem>
                <span style={{ color: 'var(--pf-global--Color--400)' }}>1 degraded</span>
              </FlexItem> 
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <CheckCircleIcon color='var(--pf-global--success-color--100)' />
            </FlexItem>
            <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
              <FlexItem>
                <a href="#">Image Vulnerabilities</a>
              </FlexItem>
              <FlexItem>
                <span style={{ color: '#8a8d90' }}>0 vulnerabilities</span>
              </FlexItem>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </CardBody>
  );

  const drawerTitle = (
    <Flex spaceItems={{ default: 'spaceItemsSm' }}>
      <FlexItem spacer={{ default: 'spacerMd' }}>
        <span>Notifications</span>
      </FlexItem>
      <Label color="red" icon={<ExclamationCircleIcon />}>
        1
      </Label>
      <Label color="orange" icon={<ExclamationTriangleIcon />}>
        3
      </Label>
      <Label color="green" icon={<CheckCircleIcon />}>
        3
      </Label>
      <Label color="blue" icon={<ExclamationCircleIcon />}>
        3
      </Label>
      <Label color="green" icon={<BellIcon />}>
        3
      </Label>
    </Flex>
  );

  const drawer = (
    <NotificationDrawer>
      <NotificationDrawerBody>
        <NotificationDrawerGroup
          count={0}
          onExpand={handleDrawerToggleClick}
          isExpanded={drawerExpanded}
          title={drawerTitle}
        >
          <NotificationDrawerList isHidden={!drawerExpanded}>
            <NotificationDrawerListItem variant="danger">
              <NotificationDrawerListItemHeader variant="danger" title="Critical alert regarding control plane" />
              <NotificationDrawerListItemBody>
                This is a long description to show how the title will wrap if it is long and wraps to multiple lines.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="warning">
              <NotificationDrawerListItemHeader variant="warning" title="Warning alert" />
              <NotificationDrawerListItemBody>
                This is a warning notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
          </NotificationDrawerList>
        </NotificationDrawerGroup>
      </NotificationDrawerBody>
    </NotificationDrawer>
  );

  return (
    <Card>
      {header}
      {body}
      <Divider />
      {drawer}
    </Card>
  );
};
```

### Status Tabbed

```ts
import * as React from 'react';
import { Card, CardBody, CardHeader, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, Flex, FlexItem, Grid, GridItem, Spinner, Tab, TabContent, Tabs, TabTitleText, Title } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

const descriptionListData = [
    {
        status: 'Running',
        resourceName: 'Resource name that is long and can wrap',
        detail: '121 Systems',
        icon: <CheckCircleIcon />
    },
    {
        status: 'Ready',
        resourceName: 'Resource name that is long and can wrap',
        detail: '123 Systems',
        icon: <ExclamationCircleIcon />
    },
    {
        status: 'Running',
        resourceName: 'Resource name that is long and can wrap',
        detail: '122 Systems',
        icon: <CheckCircleIcon />
    },
    {
        status: 'Ready',
        resourceName: 'Resource name that is long and can wrap',
        detail: '124 Systems',
        icon: <ExclamationCircleIcon />
    },
]

const Status: React.FunctionComponent = () => {
    const [activeTabKey, setActiveTabKey] = React.useState(0);
    const handleTabClick = (event: React.MouseEvent, tabIndex: number) => {
        setActiveTabKey(tabIndex);
    }

    const tabContent = (
        <DescriptionList isHorizontal columnModifier={{ lg: '2Col' }}>
            {descriptionListData.map(({ status, resourceName, detail, icon }, index) => (
                <DescriptionListGroup key={index}>
                    <DescriptionListTerm>
                        <Flex>
                            <FlexItem>
                                {icon}
                            </FlexItem>
                            <FlexItem>
                                <Title headingLevel='h3' size='md'>{status}</Title>
                            </FlexItem>
                        </Flex>
                    </DescriptionListTerm>
                    <DescriptionListDescription>
                        <a href="#">
                            {resourceName}
                        </a>
                        <div>{detail}</div>
                    </DescriptionListDescription>
                </DescriptionListGroup>
            ))}
        </DescriptionList>
    )

    return (
        <>
            <Card>
                <CardHeader>
                    <Title headingLevel='h2' size='lg'>
                        Status
                    </Title>
                </CardHeader>
                <CardBody>
                    <Tabs isFilled id="status-tabs" activeKey={activeTabKey} onSelect={handleTabClick}>
                        {[1, 2, 3].map((tab, tabIndex) =>
                            <Tab key={tabIndex} eventKey={tabIndex} title={<TabTitleText>{`Object ${tabIndex + 1}`}</TabTitleText>} tabContentId={`tabContent${tabIndex}`} />
                        )}
                    </Tabs>
                </CardBody>
                <CardBody>
                    {[1, 2, 3].map((tab, tabIndex) =>
                        <TabContent key={tabIndex} eventKey={tabIndex} id={`tabContent${tabIndex}`} activeKey={activeTabKey} hidden={tabIndex !== activeTabKey}>
                            {tabContent}
                        </TabContent>
                    )}
                </CardBody>
            </Card>
        </>
  )
}
```