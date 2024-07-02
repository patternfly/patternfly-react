import React from 'react';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import { Button, InputGroup, InputGroupItem, TextInput, Popover, PopoverPosition } from '@patternfly/react-core';

export const InputGroupWithPopover: React.FunctionComponent = () => {
  const inputGroupRef1 = React.useRef(null);
  const inputGroupRef2 = React.useRef(null);
  return (
    <React.Fragment>
      <InputGroup ref={inputGroupRef1}>
        <InputGroupItem isFill>
          <TextInput
            name="textInput-with-popover-1"
            id="textInput-with-popover-1"
            type="text"
            aria-label="first input example with popover"
          />
        </InputGroupItem>
        <InputGroupItem>
          <Popover
            aria-label="popover example"
            position={PopoverPosition.top}
            bodyContent="This field is an example of an input group with a popover."
            appendTo={() => inputGroupRef1.current}
          >
            <Button variant="control" aria-label="popover for input" icon={<QuestionCircleIcon />} />
          </Popover>
        </InputGroupItem>
      </InputGroup>
      <br />
      <InputGroup ref={inputGroupRef2}>
        <InputGroupItem isFill>
          <TextInput
            name="textInput-with-popover-2"
            id="textInput-with-popover-2"
            type="text"
            aria-label="second input example with popover"
          />
        </InputGroupItem>
        <InputGroupItem>
          <Popover
            aria-label="popover example"
            position={PopoverPosition.top}
            bodyContent="This field is an example of an input group with a popover."
            appendTo={() => inputGroupRef2.current}
          >
            <Button variant="plain" aria-label="Popover for input" icon={<QuestionCircleIcon />} />
          </Popover>
        </InputGroupItem>
      </InputGroup>
    </React.Fragment>
  );
};
