import React from 'react';

import { render } from '@testing-library/react';

import { InternalDropdownItem } from '../../InternalDropdownItem';
import { DropdownContext } from '../../dropdownConstants';

describe('InternalDropdownItem', () => {
  it('should match snapshot', () => {
    const view = render(
      <DropdownContext.Provider value={{}}>
        {' '}
        <InternalDropdownItem
          children={<div>ReactNode</div>}
          className={"''"}
          listItemClassName={'string'}
          component={'a'}
          role={"'none'"}
          isDisabled={false}
          isPlainText={false}
          isHovered={false}
          href={'string'}
          tooltip={<div>ReactNode</div>}
          tooltipProps={undefined}
          index={-1}
          context={{
            keyHandler: () => {},
            sendRef: () => {}
          }}
          onClick={(event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => undefined as any}
          id={'string'}
          componentID={'string'}
          additionalChild={<div>ReactNode</div>}
          customChild={<div>ReactNode</div>}
          enterTriggersArrowDown={false}
          icon={<div>ReactNode</div>}
        />
      </DropdownContext.Provider>
    );
    expect(view.container).toMatchSnapshot();
  });
});
