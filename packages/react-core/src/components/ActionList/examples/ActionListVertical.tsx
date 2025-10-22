import { ActionList, ActionListGroup, ActionListItem, Button } from '@patternfly/react-core';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const ActionListVertical: React.FunctionComponent = () => (
  <>
    <h4>Multiple groups</h4>
    <ActionList isVertical>
      <ActionListGroup>
        <ActionListItem>
          <Button>Next</Button>
        </ActionListItem>
        <ActionListItem>
          <Button variant="secondary">Back</Button>
        </ActionListItem>
      </ActionListGroup>
      <ActionListGroup>
        <ActionListItem>
          <Button>Submit</Button>
        </ActionListItem>
        <ActionListItem>
          <Button variant="link">Cancel</Button>
        </ActionListItem>
      </ActionListGroup>
    </ActionList>
    <h4>Icons, in two groups</h4>
    <ActionList isVertical>
      <ActionListGroup>
        <ActionListItem>
          <Button aria-label="Close vertical action list group 1" variant="plain" icon={<TimesIcon />} />
        </ActionListItem>
        <ActionListItem>
          <Button aria-label="Toggle vertical action list example group 1" variant="plain" icon={<CheckIcon />} />
        </ActionListItem>
      </ActionListGroup>
      <ActionListGroup>
        <ActionListItem>
          <Button aria-label="Close vertical action list group 2" variant="plain" icon={<TimesIcon />} />
        </ActionListItem>
        <ActionListItem>
          <Button aria-label="Toggle vertical action list example group 2" variant="plain" icon={<CheckIcon />} />
        </ActionListItem>
      </ActionListGroup>
    </ActionList>
  </>
);
