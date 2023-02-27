import React from 'react';
import { AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';
import brandImg from './brandImg.svg';
import bgImg from './patternfly-orb.svg';

export const AboutModalCustomBackgroundImage: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = (_event: React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={toggleModal}>
        Show about modal
      </Button>
      <AboutModal
        isOpen={isModalOpen}
        onClose={(event: any) => toggleModal(event)}
        trademark="Trademark and copyright information here"
        brandImageSrc={brandImg}
        brandImageAlt="Patternfly Logo"
        backgroundImageSrc={bgImg}
        aria-label="Background image about modal"
      >
        <TextContent>
          <TextList component="dl">
            <TextListItem component="dt">CFME Version</TextListItem>
            <TextListItem component="dd">5.5.3.4.20102789036450</TextListItem>
          </TextList>
        </TextContent>
      </AboutModal>
    </React.Fragment>
  );
};
