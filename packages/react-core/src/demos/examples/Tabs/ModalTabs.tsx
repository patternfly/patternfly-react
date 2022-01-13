import React from 'react';
import DashboardWrapper from '../DashboardWrapper';
import {
  PageSection,
  TextContent,
  Text,
  Gallery,
  Card,
  CardBody,
  CardTitle,
  PageSectionVariants,
  Modal,
  ModalVariant,
  Tab,
  Tabs,
  TabTitleText,
  List,
  ListItem
} from '@patternfly/react-core';

interface Product {
  id: number;
  name: string;
  description: string;
}

const products: Product[] = [
  {
    id: 0,
    name: 'Patternfly',
    description: 'PatternFly is a community project that promotes design commonality and improves user experience.'
  },
  {
    id: 1,
    name: 'ActiveMQ',
    description:
      'The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be consumed from a JMS Queue or Topic using Apache ActiveMQ.'
  },
  {
    id: 2,
    name: 'Apache Spark',
    description: 'This documentation page covers the Apache Spark component for the Apache Camel.'
  }
];

export const ModalTabs: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product>();

  const onDetailsClick = React.useCallback(
    (product: Product) => () => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    },
    []
  );

  const closeModal = React.useCallback(() => {
    setSelectedProduct(undefined);
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <DashboardWrapper mainContainerId="main-content-card-view-default-nav" breadcrumb={null}>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Products</Text>
            <Text component="p">Click any product card to view Tabs within Modals.</Text>
          </TextContent>
        </PageSection>
        <PageSection isFilled>
          <Gallery hasGutter>
            {products.map(product => (
              <Card isSelectable isSelectableRaised isCompact key={product.id} onClick={onDetailsClick(product)}>
                <CardTitle>{product.name}</CardTitle>
                <CardBody>{product.description}</CardBody>
              </Card>
            ))}
          </Gallery>
        </PageSection>
      </DashboardWrapper>

      {selectedProduct && (
        <Modal variant={ModalVariant.small} title={selectedProduct.name} isOpen={isModalOpen} onClose={closeModal}>
          <Tabs defaultActiveKey={0}>
            <Tab eventKey={0} title={<TabTitleText>Details</TabTitleText>}>
              <div className="pf-u-mt-md">{selectedProduct.description}</div>
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Documentation</TabTitleText>}>
              <div className="pf-u-mt-md">
                <List>
                  <ListItem>
                    <a>Doc Link 1</a>
                  </ListItem>
                  <ListItem>
                    <a>Doc Link 2</a>
                  </ListItem>
                  <ListItem>
                    <a>Doc Link 3</a>
                  </ListItem>
                </List>
              </div>
            </Tab>
          </Tabs>
        </Modal>
      )}
    </>
  );
};
