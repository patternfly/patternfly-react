---
id: Card
section: components
---

import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, TimesCircleIcon } from '@patternfly/react-icons';

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
  CardFooter,
  CardExpandableContent,
  Level,
  LevelItem,
  LabelGroup,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  KebabToggle,
  Grid,
  GridItem,
  Flex,
  List,
  ListItem,
  Button
} from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';

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

### Aggregate status card

```ts
import * as React from 'react';
import { Card, CardBody, CardTitle, Divider, Flex, FlexItem, Gallery, Grid, GridItem, Stack } from '@patternfly/react-core';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, TimesCircleIcon } from '@patternfly/react-icons';

const cardData = {
  iconOnly: [
    {
      title: '5 Clusters',
      content: [
        {
          icon: <CheckCircleIcon color='#3E8635' />
        }
      ],
      layout: 'icon'
    },
    {
      title: '15 Clusters',
      content: [
        {
          icon: <ExclamationTriangleIcon color='#F0AB00' />
        }
      ],
      layout: 'icon'
    },
    {
      title: '3 Clusters',
      content: [
        {
          icon: <TimesCircleIcon color='#C9190B' />
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
          icon: <ExclamationCircleIcon color='#3E8635' />,
          count: 2
        },
        {
          icon: <ExclamationTriangleIcon color="#F0AB00" />,
          count: 1
        }
      ],
      layout: 'multiIcon'
    },
    {
      title: '50 Hosts',
      content: [
        {
          icon: <CheckCircleIcon color='#3E8635' />,
          count: 5
        },
        {
          icon: <TimesCircleIcon color='#C9190B' />,
          count: 12
        }
      ],
      layout: 'multiIcon'
    },
    {
      title: '12 Hosts',
      content: [
        {
          icon: <ExclamationTriangleIcon color='#F0AB00' />,
          count: 2
        },
        {
          icon: <TimesCircleIcon color='#C9190B' />,
          count: 7
        }
      ],
      layout: 'multiIcon'
    },
  ],
  withSubtitle: [
    {
      title: '13 Hosts',
      content: [
        {
          icon: <TimesCircleIcon color='#C9190B' />,
          status: '2 errors',
          subtitle: 'subtitle'
        },
        {
          icon: <ExclamationTriangleIcon color="#F0AB00" />,
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
          icon: <CheckCircleIcon color='#3E8635' />,
          status: '2 successes',
          subtitle: 'subtitle'
        },
        {
          icon: <ExclamationTriangleIcon color="#F0AB00" />,
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
          icon: <ExclamationTriangleIcon color='#F0AB00' />,
          status: '7 warnings',
          subtitle: 'subtitle'
        },
        {
          icon: <TimesCircleIcon color='#C9190B' />,
          status: '1 error',
          subtitle: 'subtitle'
        }
      ],
      layout: 'withSubtitle'
    }
  ]
}

const AggregateStatusCards: React.FunctionComponent = () => {
  const renderContent = (content, layout) => {
    if (layout === 'icon') {
      return content[0].icon
    }
    if (layout === 'multiIcon') {
      return ( 
        <Flex flex={{ default: 'inlineFlex' }}>
          {content.map(({icon, count}, idx: number) => {
            return (
              <>
                <Flex spaceItems={{modifier: 'spaceItemsSm'}}>
                  <FlexItem>{icon}</FlexItem>
                  <FlexItem><a href="#">{count}</a></FlexItem>
                </Flex>
                {content.length > 1 && idx === 0 && <Divider isVertical/>}
              </>
            ) 
          })}
      </Flex>
      )
    }
    if (layout === 'withSubtitle') {
      return (
        <Flex flex={{ default: 'justifyContentSpaceAround' }}>
          {content.map(({icon, status, subtitle}) => {
              return (  
                <Flex key={status}>
                  <FlexItem>{icon}</FlexItem>
                  <Stack>
                    <a href="#">{status}</a>
                    <span>{subtitle}</span>
                  </Stack>
                </Flex>
              ) 
           })
          }
        </Flex>
      )
    } 
  }
  return (
    <Grid hasGutter>
      {Object.keys(cardData).map(cardGroup => {
        let galleryWidth, cardAlign, titleAlign;
        if (cardGroup === 'withSubtitle') {
          galleryWidth = '260px';
          cardAlign = '';
          titleAlign = 'center';
        } else {
          cardAlign = 'center';
        }
        return (
          <GridItem key={cardGroup}>
            <Gallery hasGutter style={{'--pf-l-gallery--GridTemplateColumns--min': galleryWidth}}>
              {cardData[cardGroup].map(({title, content, layout}) => (
                <Card style={{textAlign: cardAlign}} key={title} component='div'>
                  <CardTitle style={{textAlign: titleAlign}} >{title}</CardTitle>
                  <CardBody>
                    {renderContent(content, layout)}
                  </CardBody>
                </Card>
              ))}
            </Gallery>
          </GridItem>
        )
      })}
      </Grid>
  )
}
```

### Status, tabbed card

```ts
import * as React from 'react';
import { Card, CardBody, CardHeader, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, Grid, GridItem, Spinner, Tab, TabContent, Tabs, TabTitleText, Title } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

const descriptionListData = [
    {
        status: 'Running',
        resourceName: 'Resource name that is long and can wrap',
        detail: '121 Systems',
        icon: <Spinner size='md' aria-valuetext='Loading...'></Spinner>
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
        icon: <Spinner size='md' aria-valuetext='Loading...'></Spinner>
    },
    {
        status: 'Ready',
        resourceName: 'Resource name that is long and can wrap',
        detail: '124 Systems',
        icon: <ExclamationCircleIcon />
    },
]

const StatusTabbedCard: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  const handleTabClick = (event: React.MouseEvent, tabIndex: number) => {
      setActiveTabKey(tabIndex);
  }
  return (
      <Card style={{maxWidth: '800px'}}>
          <CardHeader>
              <Title headingLevel='h2' size='lg'>
                  Status
              </Title>
          </CardHeader>
          <CardBody>
              <Tabs isFilled id="status-tabs" activeKey={activeTabKey} onSelect={handleTabClick}>
                <Tab eventKey={0} title={<TabTitleText>Object 1</TabTitleText>}>
                    <CardBody>
                        <DescriptionList isHorizontal columnModifier={{lg: '2Col'}}>
                            {descriptionListData.map(({status, resourceName, detail, icon}) => (
                                <DescriptionListGroup key={status}>
                                    <DescriptionListTerm>
                                        <Grid>
                                            <GridItem span={3}>
                                                {icon}
                                            </GridItem>
                                            <GridItem span={9}>
                                                <Title headingLevel='h3' size='md'>{status}</Title>
                                            </GridItem>
                                        </Grid>
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
                    </CardBody>
                </Tab>
                <Tab eventKey={1} title={<TabTitleText>Object 2</TabTitleText>}>
                    <CardBody>
                        <DescriptionList isHorizontal columnModifier={{lg: '2Col'}}>
                            {descriptionListData.map(({status, resourceName, detail, icon}) => (
                                <DescriptionListGroup key={status}>
                                    <DescriptionListTerm>
                                        <Grid>
                                            <GridItem span={3}>
                                                {icon}
                                            </GridItem>
                                            <GridItem span={9}>
                                                <Title headingLevel='h3' size='md'>{status}</Title>
                                            </GridItem>
                                        </Grid>
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
                    </CardBody>
                </Tab>
                <Tab eventKey={2} title={<TabTitleText>Object 3</TabTitleText>}>
                    <CardBody>
                        <DescriptionList isHorizontal columnModifier={{lg: '2Col'}}>
                            {descriptionListData.map(({status, resourceName, detail, icon}) => (
                                <DescriptionListGroup key={status}>
                                    <DescriptionListTerm>
                                        <Grid>
                                            <GridItem span={3}>
                                                {icon}
                                            </GridItem>
                                            <GridItem span={9}>
                                                <Title headingLevel='h3' size='md'>{status}</Title>
                                            </GridItem>
                                        </Grid>
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
                    </CardBody>
                </Tab>
              </Tabs>
          </CardBody>
      </Card>
  )
}
```