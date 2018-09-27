import React from 'react';
import { AboutModal, Button } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Content/content.css';
import brandImg from './pf_mini_logo_white.svg';
import logoImg from './pf_logo.svg';
import heroImg from './pfbg_992.jpg';

class SimpleAboutModal extends React.Component {
  static title = 'Simple AboutModal';

  state = {
    isModalOpen: false
  };

  handleModalToggle = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen
    }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show About Modal
        </Button>
        <AboutModal
          isOpen={isModalOpen}
          onClose={this.handleModalToggle}
          productName="Product Name"
          trademark="Trademark and copyright information here"
          brandImageSrc={brandImg}
          brandImageAlt="Brand Image"
          logoImageSrc={logoImg}
          logoImageAlt="AboutModal Logo"
          heroImageSrc={heroImg}
        >
          <div className={css(styles.content)}>
            <dl>
              <dt>CFME Version</dt>
              <dd>5.5.3.4.20102789036450</dd>
              <dt>Cloudforms Version</dt>
              <dd>4.1</dd>
              <dt>Server Name</dt>
              <dd>40DemoMaster</dd>
              <dt>User Name</dt>
              <dd>Administrator</dd>
              <dt>User Role</dt>
              <dd>EvmRole-super_administrator</dd>
              <dt>Browser Version</dt>
              <dd>601.2</dd>
              <dt>Browser OS</dt>
              <dd>Mac</dd>
            </dl>
          </div>
        </AboutModal>
      </React.Fragment>
    );
  }
}

export default SimpleAboutModal;
