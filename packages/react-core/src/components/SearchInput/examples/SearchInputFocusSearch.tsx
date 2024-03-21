import { FunctionComponent, MutableRefObject, useState, useRef } from 'react';
import { SearchInput, Button } from '@patternfly/react-core';

export const SearchInputFocusSearch: FunctionComponent = () => {
  const [value, setValue] = useState('');
  const ref: MutableRefObject<HTMLInputElement | null> = useRef(null);

  return (
    <>
      <SearchInput ref={ref} value={value} onChange={(_event, value) => setValue(value)} onClear={() => setValue('')} />
      <Button onClick={() => ref.current && ref.current.focus()}>Focus on the search input</Button>
    </>
  );
};
