import { Popover, Button } from '@rh-felt/react-core';
import RhUiAttentionBellFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-attention-bell-fill-icon';

export const PopoverWithIconInTheTitle: React.FunctionComponent = () => (
  <div style={{ margin: '50px' }}>
    <Popover
      aria-label="Popover with icon in the title example"
      headerContent="Popover with icon"
      headerIcon={<RhUiAttentionBellFillIcon />}
      bodyContent={<div>Popovers are triggered by click rather than hover.</div>}
      footerContent="Popover footer"
      appendTo={() => document.body}
    >
      <Button>Toggle popover</Button>
    </Popover>
  </div>
);
