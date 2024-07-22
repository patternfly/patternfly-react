import React from 'react';
import { AboutModal, Button, Content } from '@patternfly/react-core';
import brandImg from '../../assets/PF-IconLogo.svg';

export const AboutModalWithoutProductName: React.FunctionComponent = () => {
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
        aria-label="No product name about modal"
      >
        <Content>
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
