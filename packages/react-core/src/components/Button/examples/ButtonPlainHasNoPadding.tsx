import { Button } from '@patternfly/react-core';
import RhUiQuestionMarkCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-circle-fill-icon';

export const ButtonPlainHasNoPadding: React.FunctionComponent = () => (
  <p>
    This is an example of a button
    <Button variant="plain" hasNoPadding aria-label="More info" icon={<RhUiQuestionMarkCircleFillIcon />} />
    which is placed inline with text
  </p>
);
