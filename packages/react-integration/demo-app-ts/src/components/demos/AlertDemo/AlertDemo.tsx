import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import { Component, Fragment } from 'react';
import UserIcon from '@patternfly/react-icons/dist/esm/icons/user-icon';

interface AlertDemoState {
  alertOneVisible: boolean;
  alertTwoVisible: boolean;
}

export class AlertDemo extends Component<{}, AlertDemoState> {
  static displayName = 'AlertDemo';
  constructor(props: {}) {
    super(props);
    this.state = { alertOneVisible: true, alertTwoVisible: true };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <Fragment>
        {alertOneVisible && (
          <Alert
            id="info-alert"
            variant="info"
            title="Info alert title"
            actionClose={<AlertActionCloseButton id="test-button-1" onClose={this.hideAlertOne} />}
          >
            Info alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            isLiveRegion
            id="info-alert"
            variant="info"
            title="Info alert title"
            actionClose={<AlertActionCloseButton id="test-button-2" onClose={this.hideAlertTwo} />}
          >
            Info alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        <Alert id="default-alert" title="Default alert title" truncateTitle={10} isInline>
          Info alert description
        </Alert>
        <Alert id="default-alert-inline-plain" title="Default alert title" truncateTitle={10} isInline isPlain>
          Info alert description
        </Alert>
        <Alert
          id="long-title-alert"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo."
          isInline
          truncateTitle={3}
          tooltipPosition="bottom"
        />
        <Alert id="custom-icon-alert" title="Custom icon alert title" customIcon={<UserIcon />}>
          Custom icon alert description
        </Alert>
        <Alert id="expandable-alert" title="Expandable alert title" isExpandable>
          Expandable alert description
        </Alert>
      </Fragment>
    );
  }
}
