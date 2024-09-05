import React from 'react';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import {
  PageSection,
  Content,
  Gallery,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader,
  Tab,
  Tabs,
  TabTitleText,
  List,
  ListItem,
  Grid,
  GridItem,
  TabContent
} from '@patternfly/react-core';

interface Product {
  id: string;
  name: string;
  description: string;
}

const products: Product[] = [
  {
    id: 'pf-card',
    name: 'PatternFly',
    description: 'PatternFly is a community project that promotes design commonality and improves user experience.'
  },
  {
    id: 'mq-card',
    name: 'ActiveMQ',
    description:
      'The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be consumed from a JMS Queue or Topic using Apache ActiveMQ.'
  },
  {
    id: 'apache-card',
    name: 'Apache Spark',
    description: 'This documentation page covers the Apache Spark component for the Apache Camel.'
  }
];

export const ModalTabs: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | undefined>(products[0]);
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);

  const onCardClick = React.useCallback(
    (product: Product) => () => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    },
    []
  );

  const closeModal = React.useCallback(() => {
    setSelectedProduct(undefined);
    setIsModalOpen(false);
    setActiveTabKey(0);
  }, []);

  const onTabSelect = React.useCallback(
    (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: string | number) => setActiveTabKey(tabIndex),
    []
  );

  return (
    <React.Fragment>
      <DashboardWrapper mainContainerId="main-content-card-view-default-nav">
        <PageSection>
          <Content>
            <h1>Projects</h1>
            <p>Click any project card to view tabs within modals.</p>
          </Content>
        </PageSection>
        <PageSection isFilled>
          <Gallery hasGutter aria-label="Selectable card container">
            {products.map((product) => (
              <Card
                isSelectable
                isSelected={selectedProduct?.id === product.id}
                isCompact
                key={product.id}
                id={product.name.replace(/ /g, '-')}
              >
                <CardHeader
                  selectableActions={{
                    selectableActionId: product.id,
                    selectableActionAriaLabelledby: 'single-selectable-card-example-1',
                    name: 'single-selectable-card-example',
                    variant: 'single',
                    onChange: onCardClick(product),
                    hasNoOffset: true
                  }}
                >
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardBody>{product.description}</CardBody>
              </Card>
            ))}
          </Gallery>
        </PageSection>
      </DashboardWrapper>

      {selectedProduct && (
        <Modal
          variant="small"
          isOpen={isModalOpen}
          onClose={closeModal}
          ouiaId="TabsModal"
          aria-labelledby="tabs-modal-title"
          aria-describedby="tabs-modal-box-body-basic"
        >
          <ModalHeader title={selectedProduct.name} labelId="tabs-modal-title" />
          <ModalBody id="tabs-modal-box-body-basic">
            <Grid hasGutter>
              <GridItem>
                <Tabs activeKey={activeTabKey} onSelect={onTabSelect}>
                  <Tab eventKey={0} tabContentId="details-tab" title={<TabTitleText>Details</TabTitleText>} />
                  <Tab eventKey={1} tabContentId="doc-tab" title={<TabTitleText>Documentation</TabTitleText>} />
                </Tabs>
              </GridItem>
              <GridItem>
                <TabContent eventKey={0} id="details-tab" hidden={activeTabKey !== 0}>
                  {selectedProduct.description}
                </TabContent>
                <TabContent eventKey={1} id="doc-tab" hidden={activeTabKey !== 1}>
                  <List>
                    <ListItem>
                      <a>Doc link 1</a>
                    </ListItem>
                    <ListItem>
                      <a>Doc link 2</a>
                    </ListItem>
                    <ListItem>
                      <a>Doc link 3</a>
                    </ListItem>
                  </List>
                </TabContent>
              </GridItem>
            </Grid>
          </ModalBody>
        </Modal>
      )}
    </React.Fragment>
  );
};
