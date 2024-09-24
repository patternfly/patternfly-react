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

test('Renders as "hr" element when component="hr"', () => {
  render(<Content component="hr" />);
  expect(screen.getByRole('separator')).toHaveProperty('nodeName', 'HR');
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

test(`Renders with class name ${styles.contentH1} when component="h1"`, () => {
  render(<Content component="h1">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentH1);
});

test(`Renders with class name ${styles.contentH2} when component="h2"`, () => {
  render(<Content component="h2">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentH2);
});

test(`Renders with class name ${styles.contentH3} when component="h3"`, () => {
  render(<Content component="h3">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentH3);
});

test(`Renders with class name ${styles.contentH4} when component="h4"`, () => {
  render(<Content component="h4">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentH4);
});

test(`Renders with class name ${styles.contentH5} when component="h5"`, () => {
  render(<Content component="h5">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentH5);
});

test(`Renders with class name ${styles.contentH6} when component="h6"`, () => {
  render(<Content component="h6">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentH6);
});

test(`Renders with class name ${styles.contentP} when component="p"`, () => {
  render(<Content component="p">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentP);
});

test(`Renders with class name ${styles.contentA} when component="a"`, () => {
  render(<Content component="a">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentA);
});

test(`Renders with class name ${styles.contentSmall} when component="small"`, () => {
  render(<Content component="small">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentSmall);
});

test(`Renders with class name ${styles.contentBlockquote} when component="blockquote"`, () => {
  render(<Content component="blockquote">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentBlockquote);
});

test(`Renders with class name ${styles.contentPre} when component="pre"`, () => {
  render(<Content component="pre">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentPre);
});

test(`Renders with class name ${styles.contentHr} when component="hr"`, () => {
  render(<Content component="hr" />);
  expect(screen.getByRole('separator')).toHaveClass(styles.contentHr);
});

test(`Renders with class name ${styles.contentUl} when component="ul"`, () => {
  render(<Content component="ul">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentUl);
});

test(`Renders with class name ${styles.contentOl} when component="ol"`, () => {
  render(<Content component="ol">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentOl);
});

test(`Renders with class name ${styles.contentDl} when component="dl"`, () => {
  render(<Content component="dl">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentDl);
});

test(`Renders with class name ${styles.contentLi} when component="li"`, () => {
  render(<Content component="li">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentLi);
});

test(`Renders with class name ${styles.contentDt} when component="dt"`, () => {
  render(<Content component="dt">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentDt);
});

test(`Renders with class name ${styles.contentDd} when component="dd"`, () => {
  render(<Content component="dd">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.contentDd);
});

test(`Renders with class name ${styles.content} when no component prop is provided`, () => {
  render(<Content>Test</Content>);
  expect(screen.getByText('Test')).toHaveClass(styles.content);
});

test(`Renders without class name ${styles.content} when component is provided`, () => {
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

test(`Renders without class name ${styles.modifiers.editorial} by default`, () => {
  render(<Content>Test</Content>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-editorial');
});

test(`Renders with class name ${styles.modifiers.editorial} when isEditorial = true`, () => {
  render(<Content isEditorial>Test</Content>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-editorial');
});

test(`Renders with class name ${styles.modifiers.editorial} when isEditorial = true and component is specified`, () => {
  render(
    <Content component="h1" isEditorial>
      Test
    </Content>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-editorial');
});

test(`Renders without class name ${styles.modifiers.editorial} when isEditorial = false`, () => {
  render(<Content isEditorial={false}>Test</Content>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-editorial');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Content ouiaId="ouia-id">Test</Content>);
  expect(asFragment()).toMatchSnapshot();
});
