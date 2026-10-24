import { Button, Flex } from '@patternfly/react-core';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

export const ButtonStateful: React.FunctionComponent = () => (
  <Flex>
    <div>
      <div>
        <strong>Read</strong>
      </div>
      <Button variant="stateful" state="read" icon={<RhUiNotificationFillIcon />}>
        10 <span className="pf-v6-screen-reader">items</span>
      </Button>
    </div>
    <div>
      <div>
        <strong>Unread</strong>
      </div>
      <Button variant="stateful" state="unread" icon={<RhUiNotificationFillIcon />}>
        10 <span className="pf-v6-screen-reader">unread items</span>
      </Button>
    </div>
    <div>
      <div>
        <strong>Attention</strong>
      </div>
      <Button variant="stateful" state="attention" icon={<RhUiNotificationFillIcon />}>
        10 <span className="pf-v6-screen-reader">unread items, needs attention</span>
      </Button>
    </div>
  </Flex>
);
