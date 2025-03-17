import { Fragment, useState } from 'react';
import { Radio } from '@patternfly/react-core';

export const RadioControlled: React.FunctionComponent = () => {
  const [check1, setCheck1] = useState(false);

  const handleChange = () => {
    setCheck1(true);
  };
  return (
    <Fragment>
      <Radio
        isChecked={check1}
        name="radio-1"
        onChange={handleChange}
        label="Controlled Radio"
        id="radio-controlled"
      ></Radio>
    </Fragment>
  );
};
