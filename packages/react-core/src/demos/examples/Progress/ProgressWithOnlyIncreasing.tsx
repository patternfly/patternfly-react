import { useState } from 'react';
import { Progress, Button, Stack, StackItem } from '@patternfly/react-core';

export const ProgressWithOnlyIncreasing: React.FunctionComponent = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const onProgressUpdate = (nextValue) => {
    if (nextValue > currentValue) {
      setCurrentValue(nextValue);
    }
  };

  return (
    <Stack>
      <StackItem>
        <Button onClick={() => onProgressUpdate(currentValue - 10)} isDisabled={currentValue === 0}>
          Decrease value
        </Button>{' '}
        <Button onClick={() => onProgressUpdate(currentValue + 10)} isDisabled={currentValue === 100}>
          Increase value
        </Button>
        <br />
        <br />
      </StackItem>
      <StackItem>
        <div className={accessibilityStyles.screenReader} aria-live="polite">
          {`Progress value is ${currentValue}%.`}
        </div>
        <Progress value={currentValue} title="Title" />
      </StackItem>
    </Stack>
  );
};
