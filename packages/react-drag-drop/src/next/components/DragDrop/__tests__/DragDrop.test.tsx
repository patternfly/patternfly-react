import { render } from '@testing-library/react';
import { DragDropSort } from '../';

test('renders some divs', () => {
  const { asFragment } = render(
    <div className="pf-c-droppable pf-m-dragging">
      <DragDropSort
        items={[
          { id: '1', content: 'one' },
          { id: '2', content: 'two' },
          { id: '3', content: 'three' }
        ]}
        onDrop={() => {}}
      />
    </div>
  );
  expect(asFragment()).toMatchSnapshot();
});
