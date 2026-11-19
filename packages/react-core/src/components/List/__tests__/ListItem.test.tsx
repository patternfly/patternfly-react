import { render, screen } from '@testing-library/react';
import { ListItem } from '../ListItem';
import { Content } from '../../Content';
import styles from '@patternfly/react-styles/css/components/List/list';

test('Renders with children', () => {
  render(<ListItem>List item content</ListItem>);

  expect(screen.getByRole('listitem')).toHaveTextContent('List item content');
});

test('Renders block content without an inline wrapper when there is no icon', () => {
  render(
    <ListItem>
      <Content data-testid="content">List item content</Content>
    </ListItem>
  );

  expect(screen.getByTestId('content').parentElement).toBe(screen.getByRole('listitem'));
});

test(`Does not render with a class by default`, () => {
  render(<ListItem>List item content</ListItem>);

  expect(screen.getByRole('listitem')).not.toHaveClass();
});

test(`Renders with custom class when className is passed`, () => {
  render(<ListItem className="test-class">List item content</ListItem>);

  expect(screen.getByRole('listitem')).toHaveClass('test-class', { exact: true });
});

test(`Renders with icon content when icon prop is passed`, () => {
  render(<ListItem icon={<div>Icon content</div>}>List item content</ListItem>);

  expect(screen.getByRole('listitem')).toContainHTML('<div>Icon content</div>');
});

test(`Renders with class ${styles.listItem} when icon prop is passed`, () => {
  render(<ListItem icon={<div>Icon content</div>}>List item content</ListItem>);

  expect(screen.getByRole('listitem')).toHaveClass(styles.listItem, { exact: true });
});

test(`Spreads additional props when passed`, () => {
  render(<ListItem id="test-ID">List item content</ListItem>);

  expect(screen.getByRole('listitem')).toHaveAttribute('id', 'test-ID');
});

test('Matches snapshot without icon', () => {
  const { asFragment } = render(<ListItem>List item content</ListItem>);

  expect(asFragment()).toMatchSnapshot();
});

test('Matches snapshot with icon', () => {
  const { asFragment } = render(<ListItem icon={<div>Icon content</div>}>List item content</ListItem>);

  expect(asFragment()).toMatchSnapshot();
});
