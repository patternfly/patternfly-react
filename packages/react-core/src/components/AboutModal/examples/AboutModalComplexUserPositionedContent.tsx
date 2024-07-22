import React from 'react';
import { AboutModal, Alert, Button, Content } from '@patternfly/react-core';
import brandImg from '../../assets/PF-IconLogo.svg';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

export const AboutModalComplexUserPositionedContent: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = (_event: React.MouseEvent<Element, MouseEvent> | KeyboardEvent | MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={toggleModal}>
        Show about modal
      </Button>
      <AboutModal
        isOpen={isModalOpen}
        onClose={(e: React.MouseEvent<Element, MouseEvent> | KeyboardEvent | MouseEvent) => toggleModal(e)}
        trademark="Trademark and copyright information here"
        brandImageSrc={brandImg}
        brandImageAlt="Patternfly Logo"
        backgroundImageSrc="/assets/images/pf-background.svg"
        hasNoContentContainer={true}
        productName="Product name"
      >
        <Content id="test1" className={spacing.pyXl}>
          <h4>About</h4>
          <p>Content here</p>
        </Content>
        <Alert variant="info" title="Updates available" />
        <Content id="test2" className={spacing.pyXl}>
          <dl>
            <dt>CFME version</dt>
            <dd>5.5.3.4.20102789036450</dd>
            <dt>Cloudforms version</dt>
            <dd>4.1</dd>
            <dt>Server name</dt>
            <dd>40DemoMaster</dd>
            <dt>User name</dt>
            <dd>Administrator</dd>
            <dt>User role</dt>
            <dd>EvmRole-super_administrator</dd>
            <dt>Browser version</dt>
            <dd>601.2</dd>
            <dt>Browser OS</dt>
            <dd>Mac</dd>
          </dl>
        </Content>
      </AboutModal>
    </React.Fragment>
  );
};
