import { Truncate, TruncatePosition } from '@patternfly/react-core';

export const TruncateMaxChars: React.FunctionComponent = () => (
  <>
    <div>Truncated at end position:</div>
    <Truncate
      maxCharsDisplayed={15}
      content={'redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'}
    />
    <br />
    <br />
    <div>Truncated at middle position:</div>
    <Truncate
      maxCharsDisplayed={15}
      position={TruncatePosition.middle}
      content={'redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'}
    />
    <br />
    <br />
    <div>Truncated at start position:</div>
    <Truncate
      maxCharsDisplayed={15}
      position={TruncatePosition.start}
      content={'redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'}
    />
  </>
);
