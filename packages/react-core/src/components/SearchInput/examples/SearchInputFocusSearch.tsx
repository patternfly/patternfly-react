import React from 'react';
import { SearchInput, Button } from '@patternfly/react-core';

export const SearchInputFocusSearch: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const ref: React.MutableRefObject<HTMLInputElement | null> = React.useRef(null);

  return (
    <>
      <SearchInput ref={ref} value={value} onChange={(_event, value) => setValue(value)} onClear={() => setValue('')} />
      <Button onClick={() => ref.current && ref.current.focus()}>Focus on the search input</Button>
    </>
  );
};
