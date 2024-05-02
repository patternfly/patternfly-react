import React from 'react';
import { Button, Modal, Wizard, WizardHeader, WizardStep } from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';

interface WizardDemoState {
  isOpen: boolean;
  isOpenWithRole: boolean;
}

class WizardDemo extends React.Component<React.HTMLProps<HTMLDivElement>, WizardDemoState> {
  static displayName = 'WizardDemo';
  state = {
    isOpen: false,
    isOpenWithRole: false
  };

  handleModalToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  handleRoleWizardToggle = () => {
    this.setState(({ isOpenWithRole }) => ({ isOpenWithRole: !isOpenWithRole }));
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isOpen, isOpenWithRole } = this.state;

    return (
      <React.Fragment>
        <Button id="launchWiz" variant="primary" onClick={this.handleModalToggle}>
          Show Modal
        </Button>
        <Modal isOpen={isOpen} showClose={false} hasNoBodyWrapper onEscapePress={this.handleModalToggle}>
          <Wizard
            id="modalWizId"
            width={710}
            onClose={this.handleModalToggle}
            header={
              <WizardHeader
                onClose={this.handleModalToggle}
                title="Simple Modal Wizard"
                description="Simple Wizard Description"
              />
            }
          >
            <WizardStep name="A" id="wizard-step-a">
              <p>Step 1</p>
            </WizardStep>
            <WizardStep
              name="B"
              id="wizard-step-b"
              steps={[
                <WizardStep name="B-1" id="wizard-step-b1" key="wizard-step-b1">
                  <p>Step 2</p>
                </WizardStep>,
                <WizardStep name="B-2" id="wizard-step-b2" key="wizard-step-b2">
                  <p>Step 3</p>
                </WizardStep>
              ]}
            />
            <WizardStep name="C" id="wizard-step-c">
              <p>Step 4</p>
            </WizardStep>
            <WizardStep name="D" id="wizard-step-d">
              <p>Step 5</p>
            </WizardStep>
          </Wizard>
        </Modal>
        <br />
        <br />
        <Wizard id="inPageWizId" height={500}>
          <WizardStep name="A" id="wizard-step-a">
            <p>Step 1</p>
          </WizardStep>
          <WizardStep
            name="B"
            id="wizard-step-b"
            steps={[
              <WizardStep name="B-1" id="wizard-step-b1" key="wizard-step-b1">
                <p>Step 2</p>
              </WizardStep>,
              <WizardStep name="B-2" id="wizard-step-b2" key="wizard-step-b2">
                <p>Step 3</p>
              </WizardStep>
            ]}
          />
          <WizardStep name="C" id="wizard-step-c">
            <p>Step 4</p>
          </WizardStep>
          <WizardStep name="D" id="wizard-step-d">
            <p>Step 5</p>
          </WizardStep>
        </Wizard>
        <br />
        <br />
        <Wizard id="inPageWizWithAnchorsId" height={500}>
          <WizardStep
            name={
              <>
                <ExternalLinkAltIcon /> Read about PF3
              </>
            }
            id="wizard-anchor-pf3"
            navItem={{ component: 'a', href: 'https://www.patternfly.org/v3', target: '_blank' }}
          >
            <p>Step 1</p>
          </WizardStep>
          <WizardStep
            name={
              <>
                <ExternalLinkAltIcon /> Read about PF4
              </>
            }
            id="wizard-anchor-pf4"
            navItem={{ component: 'a', href: 'https://www.patternfly.org/v4', target: '_blank' }}
          >
            <p>Step 2</p>
          </WizardStep>
          <WizardStep
            name={
              <>
                <SlackHashIcon /> Join us on Slack
              </>
            }
            id="wizard-anchor-slack"
            navItem={{ component: 'a', href: 'https://patternfly.slack.com', target: '_blank' }}
          >
            <p>Step 3</p>
          </WizardStep>
        </Wizard>
        <br />
        <br />
        <Wizard id="inPageWizWithOverflow" height={500}>
          <WizardStep id="inPage-overflow-step-1" name="Step without overflow">
            <p>Step 1</p>
          </WizardStep>
          <WizardStep id="inPage-overflow-step-2" name="Step with overflow">
            <div style={{ height: '800px' }}>
              <p>Step 2</p>
              <>
                <p>
                  The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
                  "region", and an aria-label or aria-labelledby to be applied.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis
                  lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor,
                  enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla
                  facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus
                  posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a
                  auctor.
                </p>
                <p>
                  Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                  ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                  bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                  commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                  egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                  odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.
                </p>
              </>
              <>
                <p>
                  The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
                  "region", and an aria-label or aria-labelledby to be applied.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis
                  lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor,
                  enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla
                  facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus
                  posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a
                  auctor.
                </p>
                <p>
                  Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                  ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                  bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                  commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                  egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                  odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.
                </p>
              </>
              <>
                <p>
                  The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
                  "region", and an aria-label or aria-labelledby to be applied.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis
                  lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor,
                  enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla
                  facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus
                  posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a
                  auctor.
                </p>
                <p>
                  Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                  ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                  bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                  commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                  egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                  odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.
                </p>
              </>
              <>
                <p>
                  The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
                  "region", and an aria-label or aria-labelledby to be applied.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis
                  lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor,
                  enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla
                  facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus
                  posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a
                  auctor.
                </p>
                <p>
                  Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                  ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                  bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                  commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                  egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                  odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.
                </p>
              </>
            </div>
          </WizardStep>
        </Wizard>
        <br />
        <br />
        <Button id="launchWizOverflow" variant="primary" onClick={this.handleRoleWizardToggle}>
          Show Modal with Overflow
        </Button>
        <Modal isOpen={isOpenWithRole} showClose={false} hasNoBodyWrapper onEscapePress={this.handleRoleWizardToggle}>
          <Wizard
            id="inModalWizWithOverflow"
            height={400}
            width={710}
            onClose={this.handleRoleWizardToggle}
            header={
              <WizardHeader
                onClose={this.handleRoleWizardToggle}
                title="Modal Wizard with Overflow"
                description="Simple Wizard Description"
              />
            }
          >
            <WizardStep id="modal-overflow-step-1" body={{ component: 'main' }} name="Step without overflow">
              <p>Step 1</p>
            </WizardStep>
            <WizardStep id="modal-overflow-step-2" body={{ component: 'main' }} name="Step with overflow">
              <div style={{ height: '200px' }}>
                <>
                  <p>
                    The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role
                    of "region", and an aria-label or aria-labelledby to be applied.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra.
                    Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt
                    tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus.
                    Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci
                    eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et
                    libero a auctor.
                  </p>
                  <p>
                    Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                    ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                    bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                    commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                    egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                    odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus
                    dolor.
                  </p>
                </>
                <>
                  <p>
                    The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role
                    of "region", and an aria-label or aria-labelledby to be applied.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra.
                    Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt
                    tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus.
                    Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci
                    eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et
                    libero a auctor.
                  </p>
                  <p>
                    Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                    ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                    bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                    commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                    egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                    odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus
                    dolor.
                  </p>
                </>
                <>
                  <p>
                    The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role
                    of "region", and an aria-label or aria-labelledby to be applied.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra.
                    Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt
                    tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus.
                    Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci
                    eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et
                    libero a auctor.
                  </p>
                  <p>
                    Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                    ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                    bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                    commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                    egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                    odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus
                    dolor.
                  </p>
                </>
                <>
                  <p>
                    The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role
                    of "region", and an aria-label or aria-labelledby to be applied.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra.
                    Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt
                    tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus.
                    Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci
                    eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et
                    libero a auctor.
                  </p>
                  <p>
                    Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                    ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                    bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                    commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                    egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                    odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus
                    dolor.
                  </p>
                </>
              </div>
            </WizardStep>
            <WizardStep id="modal-overflow-step-3" body={{ component: 'div' }} name="Div step with overflow">
              <div style={{ height: '200px' }}>
                <>
                  <p>
                    The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role
                    of "region", and an aria-label or aria-labelledby to be applied.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra.
                    Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt
                    tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus.
                    Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci
                    eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et
                    libero a auctor.
                  </p>
                  <p>
                    Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                    ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                    bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                    commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                    egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                    odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus
                    dolor.
                  </p>
                </>
                <>
                  <p>
                    The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role
                    of "region", and an aria-label or aria-labelledby to be applied.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra.
                    Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt
                    tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus.
                    Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci
                    eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et
                    libero a auctor.
                  </p>
                  <p>
                    Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                    ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                    bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                    commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                    egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                    odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus
                    dolor.
                  </p>
                </>
                <>
                  <p>
                    The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role
                    of "region", and an aria-label or aria-labelledby to be applied.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra.
                    Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt
                    tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus.
                    Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci
                    eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et
                    libero a auctor.
                  </p>
                  <p>
                    Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                    ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                    bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                    commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                    egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                    odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus
                    dolor.
                  </p>
                </>
                <>
                  <p>
                    The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role
                    of "region", and an aria-label or aria-labelledby to be applied.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra.
                    Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt
                    tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus.
                    Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci
                    eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et
                    libero a auctor.
                  </p>
                  <p>
                    Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                    ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                    bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                    commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                    egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in
                    odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus
                    dolor.
                  </p>
                </>
              </div>
            </WizardStep>
          </Wizard>
        </Modal>
      </React.Fragment>
    );
  }
}

export { WizardDemo };
