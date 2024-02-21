import React from 'react';
import { Button, Flex } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const ButtonStateful: React.FunctionComponent = () => (
  <Flex>
    <div>
      <div>
        <strong>Read</strong>
      </div>
      <Button variant="stateful" state="read" icon={<BellIcon />}>
        10 <span className="pf-v6-screen-reader">items</span>
      </Button>
    </div>
    <div>
      <div>
        <strong>Unread</strong>
      </div>
      <Button variant="stateful" state="unread" icon={<BellIcon />}>
        10 <span className="pf-v6-screen-reader">unread items</span>
      </Button>
    </div>
    <div>
      <div>
        <strong>Attention</strong>
      </div>
      <Button variant="stateful" state="attention" icon={<BellIcon />}>
        10 <span className="pf-v6-screen-reader">unread items, needs attention</span>
      </Button>
    </div>
  </Flex>
);
