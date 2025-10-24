import { ActionList, ActionListGroup, ActionListItem, Button } from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';

export const ActionListVertical: React.FunctionComponent = () => (
  <>
    <h4>With icons</h4>
    <ActionList isVertical>
      <ActionListItem>
        <Button variant="plain" icon={<PlayIcon />} />
      </ActionListItem>
      <ActionListItem>
        <Button variant="plain" icon={<OutlinedPlusSquare />} />
      </ActionListItem>
      <ActionListItem>
        <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} />
      </ActionListItem>
    </ActionList>
    <h4>With icons in groups</h4>
    <ActionList isVertical>
      <ActionListGroup>
        <ActionListItem>
          <Button variant="plain" icon={<PlayIcon />} />
        </ActionListItem>
        <ActionListItem>
          <Button variant="plain" icon={<OutlinedPlusSquare />} />
        </ActionListItem>
      </ActionListGroup>
      <ActionListGroup>
        <ActionListItem>
          <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} />
        </ActionListItem>
        <ActionListItem>
          <Button variant="plain" icon={<OutlinedCopy />} />
        </ActionListItem>
      </ActionListGroup>
    </ActionList>
  </>
);
