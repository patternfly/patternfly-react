import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Content } from '../Content';
import styles from '@patternfly/react-styles/css/components/Content/content';

test('Renders without children', () => {
  render(
    <div data-testid="test-content">
      <Content />
    </div>
  );
  expect(screen.getByTestId('test-content').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Content>Test</Content>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Content className="custom-class">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders as "div" element by default', () => {
  render(<Content>Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DIV');
});

test('Renders as "h1" element when component="h1"', () => {
  render(<Content component="h1">Test</Content>);
  expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
});

test('Renders as "h2" element when component="h2"', () => {
  render(<Content component="h2">Test</Content>);
  expect(screen.getByRole('heading', { level: 2 })).toBeVisible();
});

test('Renders as "h3" element when component="h3"', () => {
  render(<Content component="h3">Test</Content>);
  expect(screen.getByRole('heading', { level: 3 })).toBeVisible();
});

test('Renders as "h4" element when component="h4"', () => {
  render(<Content component="h4">Test</Content>);
  expect(screen.getByRole('heading', { level: 4 })).toBeVisible();
});

test('Renders as "h5" element when component="h5"', () => {
  render(<Content component="h5">Test</Content>);
  expect(screen.getByRole('heading', { level: 5 })).toBeVisible();
});

test('Renders as "h6" element when component="h6"', () => {
  render(<Content component="h6">Test</Content>);
  expect(screen.getByRole('heading', { level: 6 })).toBeVisible();
});

test('Renders as "a" element when component="a"', () => {
  render(<Content component="a">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'A');
});

test('Renders as "blockquote" element when component="blockquote"', () => {
  render(<Content component="blockquote">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'BLOCKQUOTE');
});

test('Renders as "pre" element when component="pre"', () => {
  render(<Content component="pre">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'PRE');
});

test('Renders as "ul" element component="ul"', () => {
  render(<Content component="ul">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'UL');
});

test('Renders as "ol" element when component="ol"', () => {
  render(<Content component="ol">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'OL');
});

test('Renders as "dl" element when component="dl"', () => {
  render(<Content component="dl">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DL');
});

test('Renders as "li" element when component="li"', () => {
  render(<Content component="li">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'LI');
});

test('Renders as "dt" element when component="dt"', () => {
  render(<Content component="dt">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DT');
});

test('Renders as "dd" element when component="dd"', () => {
  render(<Content component="dd">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DD');
});

test(`Renders with class name ${styles.content} when no component prop is provided`, () => {
  render(<Content>Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.content);
});

test(`Renders with class name ${styles.content} when component is 'ul', 'ol' or 'dl'`, () => {
  render(
    <>
      <Content component="ul">Test1</Content>
      <Content component="ol">Test2</Content>
      <Content component="dl">Test3</Content>
    </>
  );
  expect(screen.getByText('Test1')).toHaveClass(styles.content);
  expect(screen.getByText('Test2')).toHaveClass(styles.content);
  expect(screen.getByText('Test3')).toHaveClass(styles.content);
});

test(`Renders without class name ${styles.content} when component is provided and it is not a list`, () => {
  render(<Content component="p">Test</Content>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.content);
});

test(`Renders with class name pf-m-plain when isPlainList=true and component is 'ul', 'ol' or 'dl'`, () => {
  render(
    <>
      <Content component="ul" isPlainList>
        Test1
      </Content>
      <Content component="ol" isPlainList>
        Test2
      </Content>
      <Content component="dl" isPlainList>
        Test3
      </Content>
    </>
  );
  expect(screen.getByText('Test1')).toHaveClass('pf-m-plain');
  expect(screen.getByText('Test2')).toHaveClass('pf-m-plain');
  expect(screen.getByText('Test3')).toHaveClass('pf-m-plain');
});

test(`Renders without class name pf-m-plain by default`, () => {
  render(<Content component="ul">Test</Content>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-plain');
});

test(`Renders without class name pf-m-plain when isPlainList=true, but component is not 'ul', 'ol' or 'dl'`, () => {
  render(
    <Content component="p" isPlainList>
      Test
    </Content>
  );
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-plain');
});

test('Renders without class name pf-m-visited by default', () => {
  render(<Content>Test</Content>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-visited');
});

test('Renders with class name pf-m-visited when isVisitedLink=true', () => {
  render(<Content isVisitedLink={true}>Test</Content>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-visited');
});

test('Renders with class name pf-m-visited when isVisitedLink=true and component="a"', () => {
  render(
    <Content isVisitedLink={true} component="a">
      Test
    </Content>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-visited');
});

test('Renders with inherited element props spread to the component', () => {
  render(<Content aria-label="Test label">Test</Content>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Content ouiaId="ouia-id">Test</Content>);
  expect(asFragment()).toMatchSnapshot();
});
