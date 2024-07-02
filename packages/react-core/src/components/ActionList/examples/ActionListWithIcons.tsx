import React from 'react';
import { ActionList, ActionListGroup, ActionListItem, Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';

export const ActionListWithIcons: React.FunctionComponent = () => (
  <>
    <h4>With list icons wrapper</h4>
    <ActionList isIconList>
      <ActionListItem>
        <Button variant="plain" id="with-icons-times-button" aria-label="times icon button" icon={<TimesIcon />} />
      </ActionListItem>
      <ActionListItem>
        <Button variant="plain" id="with-icons-check-button" aria-label="check icon button" icon={<CheckIcon />} />
      </ActionListItem>
    </ActionList>
    <br />
    <h4>With group icons wrapper</h4>
    <ActionList>
      <ActionListGroup isIconGroup>
        <ActionListItem>
          <Button
            variant="plain"
            id="with-icons-list-times-button"
            aria-label="times icon button"
            icon={<TimesIcon />}
          />
        </ActionListItem>
        <ActionListItem>
          <Button
            variant="plain"
            id="with-icons-list-check-button"
            aria-label="check icon button"
            icon={<CheckIcon />}
          />
        </ActionListItem>
      </ActionListGroup>
      <ActionListGroup isIconGroup>
        <ActionListItem>
          <Button
            variant="plain"
            id="with-icons-group-times-button"
            aria-label="times icon button"
            icon={<TimesIcon />}
          />
        </ActionListItem>
        <ActionListItem>
          <Button
            variant="plain"
            id="with-icons-group-check-button"
            aria-label="check icon button"
            icon={<CheckIcon />}
          />
        </ActionListItem>
      </ActionListGroup>
    </ActionList>
  </>
);
