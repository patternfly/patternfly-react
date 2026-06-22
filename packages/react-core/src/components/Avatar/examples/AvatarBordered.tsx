import { Avatar } from '@patternfly/react-core';
import RhUiAiChatbotIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ai-chatbot-icon';

export const AvatarBordered: React.FunctionComponent = () => (
  <Avatar alt="Avatar with border" isBordered>
    <RhUiAiChatbotIcon />
  </Avatar>
);
