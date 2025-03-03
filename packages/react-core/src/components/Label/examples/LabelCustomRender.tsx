import { Label } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

export const LabelCustomRender: React.FunctionComponent = () => (
  <Label
    color="blue"
    icon={<InfoCircleIcon />}
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
