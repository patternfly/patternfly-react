import { render } from '@testing-library/react';
import { FormAlert } from '../FormAlert';
describe('Form Alert component', () => {
  test('should render form group required variant', () => {
    const { asFragment } = render(<FormAlert></FormAlert>);
    expect(asFragment()).toMatchSnapshot();
  });
});
