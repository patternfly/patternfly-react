import * as React from 'react';
import { Gallery } from '../Gallery';
import { GalleryItem } from '../GalleryItem';
import { render } from '@testing-library/react';

test('gutter', () => {
  const view = render(<Gallery hasGutter />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('gutter breakpoints', () => {
  const view = render(
    <Gallery
      hasGutter
      minWidths={{
        default: '100%',
        md: '100px',
        xl: '300px'
      }}
      maxWidths={{
        md: '200px',
        xl: '1fr'
      }}
    />
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('alternative component', () => {
  const view = render(
    <Gallery component="ul">
      <GalleryItem component="li">Test</GalleryItem>
    </Gallery>
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
