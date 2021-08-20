---
id: Card
section: components
---

import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

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
