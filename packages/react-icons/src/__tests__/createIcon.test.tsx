import { render, screen } from '@testing-library/react';
import { IconDefinition, CreateIconProps, createIcon, createIconBase, SVGPathObject } from '../createIcon';

/** Mirrors the non-exported argument type of {@link createIconBase} for tests. */
type CreateIconBaseProps = Parameters<typeof createIconBase>[0];

const multiPathIcon: IconDefinition = {
  name: 'IconName',
  width: 10,
  height: 20,
  svgPathData: [
    { path: 'svgPath1', className: 'class1' },
    { path: 'svgPath2', className: 'class2' }
  ],
  svgClassName: 'test'
};

const singlePathIcon: IconDefinition = {
  name: 'IconName',
  width: 10,
  height: 20,
  svgPathData: 'svgPath',
  svgClassName: 'test'
};

const rhStandardIcon: IconDefinition = {
  name: 'IconName',
  width: 10,
  height: 20,
  svgPathData: 'svgPath',
  svgClassName: 'pf-v6-icon-rh-standard'
};

const iconDef: CreateIconBaseProps = {
  name: 'SinglePathIconName',
  icon: singlePathIcon
};

const iconDefWithArrayPath: CreateIconBaseProps = {
  name: 'MultiPathIconName',
  icon: multiPathIcon
};

const iconDefWithRhStandard: CreateIconBaseProps = {
  name: 'RhStandardIconName',
  icon: rhStandardIcon
};

const SVGIcon = createIconBase(iconDef);
const SVGArrayIcon = createIconBase(iconDefWithArrayPath);
const RhStandardIcon = createIconBase(iconDefWithRhStandard);

test('sets correct viewBox', () => {
  render(<SVGIcon />);
  expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
    'viewBox',
    `0 0 ${singlePathIcon.width} ${singlePathIcon.height}`
  );
});

test('sets correct svgPath if string', () => {
  render(<SVGIcon />);
  expect(screen.getByRole('img', { hidden: true }).querySelector('path')).toHaveAttribute(
    'd',
    singlePathIcon.svgPathData
  );
});

test('accepts flat createIcon({ svgPath }) shape', () => {
  const legacyDef: CreateIconProps = {
    name: 'LegacyIcon',
    width: 10,
    height: 20,
    svgPath: 'legacy-path',
    svgClassName: 'legacy-svg'
  };
  const LegacySVGIcon = createIcon(legacyDef);
  render(<LegacySVGIcon />);
  expect(screen.getByRole('img', { hidden: true }).querySelector('path')).toHaveAttribute('d', 'legacy-path');
});

test('sets correct svgClassName by default', () => {
  render(<RhStandardIcon />);
  expect(screen.getByRole('img', { hidden: true })).toHaveClass('pf-v6-icon-rh-standard');
});

test('sets svgClassName when noDefaultStyle is false', () => {
  render(<RhStandardIcon noDefaultStyle={false} />);
  expect(screen.getByRole('img', { hidden: true })).toHaveClass('pf-v6-icon-rh-standard');
});

test('does not set svgClassName when noDefaultStyle is true', () => {
  render(<RhStandardIcon noDefaultStyle />);
  expect(screen.getByRole('img', { hidden: true })).not.toHaveClass('pf-v6-icon-rh-standard');
});

test('sets correct svgPath if array', () => {
  render(<SVGArrayIcon />);
  const paths = screen.getByRole('img', { hidden: true }).querySelectorAll('path');
  expect(paths).toHaveLength(2);
  expect(paths[0]).toHaveAttribute('d', (multiPathIcon.svgPathData as SVGPathObject[])[0].path);
  expect(paths[1]).toHaveAttribute('d', (multiPathIcon.svgPathData as SVGPathObject[])[1].path);
  expect(paths[0]).toHaveClass((multiPathIcon.svgPathData as SVGPathObject[])[0].className ?? '');
  expect(paths[1]).toHaveClass((multiPathIcon.svgPathData as SVGPathObject[])[1].className ?? '');
});

test('sets correct svgClassName', () => {
  render(<SVGArrayIcon />);
  const paths = screen.getByRole('img', { hidden: true });
  expect(paths).toHaveClass(multiPathIcon.svgClassName ?? '');
});

test('aria-hidden is true if no title is specified', () => {
  render(<SVGIcon />);
  expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
});

test('title is not rendered if a title is not passed', () => {
  render(<SVGIcon />);
  expect(screen.queryByRole('img', { hidden: true })?.querySelector('title')).toBeNull();
});

test('aria-labelledby is null if a title is not passed', () => {
  render(<SVGIcon />);
  expect(screen.getByRole('img', { hidden: true })).not.toHaveAttribute('aria-labelledby');
});

test('title is rendered', () => {
  const title = 'icon title';

  render(<SVGIcon title={title} />);
  expect(screen.getByText(title)).toBeInTheDocument();
});

test('aria-labelledby matches title id', () => {
  render(<SVGIcon title="icon title" />);

  const svg = screen.getByRole('img', { hidden: true });
  const labelledby = svg.getAttribute('aria-labelledby');
  const titleId = svg.querySelector('title')?.getAttribute('id');

  expect(labelledby).toEqual(titleId);
});

test('additional props should be spread to the root svg element', () => {
  render(<SVGIcon data-testid="icon" />);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});

describe('rh-ui mapping: nested SVGs, set prop, and warnings', () => {
  const defaultPath = 'M0 0-default';
  const rhUiPath = 'M0 0-rh-ui';

  const defaultIconDef: IconDefinition = {
    name: 'DefaultVariant',
    width: 16,
    height: 16,
    svgPathData: defaultPath
  };

  const rhUiIconDef: IconDefinition = {
    name: 'RhUiVariant',
    width: 16,
    height: 16,
    svgPathData: rhUiPath
  };

  const dualConfig: CreateIconBaseProps = {
    name: 'DualMappedIcon',
    icon: defaultIconDef,
    rhUiIcon: rhUiIconDef
  };

  const DualMappedIcon = createIconBase(dualConfig);

  test('renders two nested inner svgs when rhUiIcon is set and `set` is omitted (swap layout)', () => {
    render(<DualMappedIcon />);
    const root = screen.getByRole('img', { hidden: true });
    expect(root).toHaveClass('pf-v6-svg');
    const innerSvgs = root.querySelectorAll(':scope > svg');
    expect(innerSvgs).toHaveLength(2);
    expect(root?.querySelector('.pf-v6-icon-default path')).toHaveAttribute('d', defaultPath);
    expect(root?.querySelector('.pf-v6-icon-rh-ui path')).toHaveAttribute('d', rhUiPath);
  });

  test('set="default" renders a single flat svg using the default icon paths', () => {
    render(<DualMappedIcon set="default" />);
    const root = screen.getByRole('img', { hidden: true });
    expect(root.querySelectorAll(':scope > svg')).toHaveLength(0);
    expect(root).toHaveAttribute('viewBox', '0 0 16 16');
    expect(root.querySelector('path')).toHaveAttribute('d', defaultPath);
    expect(root.querySelectorAll('svg')).toHaveLength(0);
  });

  test('set="rh-ui" renders a single flat svg using the rh-ui icon paths', () => {
    render(<DualMappedIcon set="rh-ui" />);
    const root = screen.getByRole('img', { hidden: true });
    expect(root.querySelectorAll(':scope > svg')).toHaveLength(0);
    expect(root.querySelector('path')).toHaveAttribute('d', rhUiPath);
    expect(root.querySelectorAll('svg')).toHaveLength(0);
  });

  test('set="rh-ui" with no rhUiIcon mapping falls back to default and warns', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      const IconNoRhMapping = createIconBase({
        name: 'NoRhMappingIcon',
        icon: defaultIconDef,
        rhUiIcon: null
      });

      render(<IconNoRhMapping set="rh-ui" />);

      expect(warnSpy).toHaveBeenCalledWith(
        'Set "rh-ui" was provided for NoRhMappingIcon, but no rh-ui icon data exists for this icon. The default icon will be rendered.'
      );
      const root = screen.getByRole('img', { hidden: true });
      expect(root.querySelector('path')).toHaveAttribute('d', defaultPath);
      expect(root.querySelectorAll('svg')).toHaveLength(0);
    } finally {
      warnSpy.mockRestore();
    }
  });

  test('warns when createIconBase omits icon', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    createIconBase({
      name: 'MissingDefaultIcon',
      rhUiIcon: null
    });
    expect(warnSpy).toHaveBeenCalledWith(
      '@patternfly/react-icons: createIconBase is missing an `icon` definition (name: MissingDefaultIcon).'
    );
  });
});
