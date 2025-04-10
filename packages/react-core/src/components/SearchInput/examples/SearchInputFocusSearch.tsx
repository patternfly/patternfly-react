import { useRef, useState } from 'react';
import { SearchInput, Button } from '@patternfly/react-core';

export const SearchInputFocusSearch: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const ref: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  return (
    <>
      <SearchInput
        ref={ref}
        value={value}
        onChange={(_event, value) => setValue(value)}
        onClear={() => setValue('')}
        aria-label="Search focus using ref example"
      />
      <Button onClick={() => ref.current && ref.current.focus()}>Focus on the search input</Button>
    </>
  );
};
