import { Label, LabelColor } from '@patternfly/react-core';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';

export const LabelCustomRender: React.FunctionComponent = () => (
  <Label
    color={LabelColor.blue}
    icon={<RhUiInformationFillIcon />}
    onClose={() => Function.prototype}
    render={({ className, content, componentRef }) => (
      <a className={className} ref={componentRef}>
        {content}
      </a>
    )}
    textMaxWidth="16ch"
    isClickable
  >
    Blue label router link with icon that overflows
  </Label>
);
