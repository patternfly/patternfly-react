import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModalContainer } from '../AboutModalContainer';

const props = {
  children: 'modal content',
  productName: 'Product Name',
  trademark: 'Trademark and copyright information here',
  brandImageSrc: 'brandImg...',
  brandImageAlt: 'Brand Image',
  backgroundImageSrc: 'backgroundImageSrc...',
  'aria-labelledby': 'ariaLablledbyId',
  'aria-describedby': 'ariaDescribedById'
};
test('About Modal Container Test simple', () => {
  const view = render(<AboutModalContainer {...props}>This is ModalBox content</AboutModalContainer>);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('About Modal Container Test isOpen', () => {
  const view = render(
    <AboutModalContainer title="Test Modal Container title" {...props} isOpen>
      This is ModalBox content
    </AboutModalContainer>
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('About Modal Container Test with onlose', () => {
  const view = render(
    <AboutModalContainer onClose={() => undefined} {...props}>
      This is ModalBox content
    </AboutModalContainer>
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
