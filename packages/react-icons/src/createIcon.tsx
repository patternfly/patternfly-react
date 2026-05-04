import { Component, type ComponentClass, type ReactNode } from 'react';

export interface SVGPathObject {
  path: string;
  className?: string;
}

/** Icon data format */
export interface IconDefinition {
  name?: string;
  width: number;
  height: number;
  xOffset?: number;
  yOffset?: number;
  svgClassName?: string;
  svgPathData?: string | SVGPathObject[];
  /** @deprecated Use `svgPathData` for nested definitions. */
  svgPath?: string | SVGPathObject[];
}

/** Argument shape for {@link createIconBase} (module-private interface, not exported). */
interface CreateIconBaseProps {
  name?: string;
  icon?: IconDefinition;
  rhUiIcon?: IconDefinition | null;
}

/**
 * Flat props shape for {@link createIcon}: layout fields plus `svgPath` (mapped to {@link IconDefinition.svgPathData}
 * on the nested `icon` before calling {@link createIconBase}).
 */
export interface CreateIconProps {
  name?: string;
  width: number;
  height: number;
  xOffset?: number;
  yOffset?: number;
  svgPath?: string | SVGPathObject[];
  svgClassName?: string;
  rhUiIcon?: IconDefinition | null;
}

export interface SVGIconProps extends Omit<React.HTMLProps<SVGElement>, 'ref'> {
  title?: string;
  className?: string;
  /** Indicates the icon should render using alternate svg data for the unified theme */
  set?: 'default' | 'rh-ui';
  /** Indicates the icon should render without its default styling specified in its IconDefinition.svgClassName. */
  noDefaultStyle?: boolean;
}

let currentId = 0;

/** Renders `<path>` elements from `svgPathData` (string `d` or array of `{ path, className? }`). */
function getSvgPaths(svgPathData: string | SVGPathObject[] | undefined): ReactNode {
  return svgPathData && Array.isArray(svgPathData) ? (
    svgPathData.map((pathObject, index) => (
      <path className={pathObject.className} key={`${pathObject.path}-${index}`} d={pathObject.path} />
    ))
  ) : (
    <path d={svgPathData as string} />
  );
}

const createSvg = (icon: IconDefinition, iconClassName: string) => {
  const { xOffset, yOffset, width, height, svgPathData, svgClassName } = icon ?? {};
  const resolvedPathData = svgPathData ?? icon?.svgPath;
  const _xOffset = xOffset ?? 0;
  const _yOffset = yOffset ?? 0;
  const viewBox = [_xOffset, _yOffset, width, height].join(' ');

  const classNames: string[] = [];

  if (svgClassName) {
    classNames.push(svgClassName);
  }
  if (iconClassName) {
    classNames.push(iconClassName);
  }

  return (
    <svg viewBox={viewBox} className={classNames.join(' ')}>
      {getSvgPaths(resolvedPathData)}
    </svg>
  );
};

/**
 * Nested icon factory (used by generated icon modules under `dist`). Omitted from published typings when
 * `stripInternal` is enabled; use {@link createIcon} for the flat `svgPath` + layout props shape.
 *
 * @internal
 */
export function createIconBase({ name, icon, rhUiIcon = null }: CreateIconBaseProps): ComponentClass<SVGIconProps> {
  if (icon == null) {
    throw new Error(
      `@patternfly/react-icons: createIconBase requires an \`icon\` definition (name: ${name ?? 'unknown'}).`
    );
  }
  return class SVGIcon extends Component<SVGIconProps> {
    static displayName = name;

    id = `icon-title-${currentId++}`;

    static defaultProps: SVGIconProps = {
      noDefaultStyle: false
    };

    /**
     * One root `<svg>`: a single flat variant when `set` is defined, or when `set` is omitted and `rhUiIcon` is
     * null; when `set` is omitted and `rhUiIcon` is set, nested inner `<svg>`s (default + RH UI swap layout).
     */
    render() {
      const { title, className: propsClassName, set, noDefaultStyle, ...props } = this.props;

      const hasTitle = Boolean(title);
      const classNames = ['pf-v6-svg'];

      if (propsClassName) {
        classNames.push(propsClassName);
      }

      if (set === 'rh-ui' && rhUiIcon === null) {
        // eslint-disable-next-line no-console -- same behavior as main branch createIcon
        console.warn(
          `Set "rh-ui" was provided for ${name}, but no rh-ui icon data exists for this icon. The default icon will be rendered.`
        );
      }

      if ((set === undefined && rhUiIcon === null) || set !== undefined) {
        const iconData = set !== undefined && set === 'rh-ui' && rhUiIcon !== null ? rhUiIcon : icon;
        const { xOffset, yOffset, width, height, svgPathData, svgClassName } = iconData ?? {};
        const resolvedPathData = svgPathData ?? iconData?.svgPath;
        const _xOffset = xOffset ?? 0;
        const _yOffset = yOffset ?? 0;
        const viewBox = [_xOffset, _yOffset, width, height].join(' ');

        if (svgClassName && !noDefaultStyle) {
          classNames.push(svgClassName);
        }

        return (
          <svg
            className={classNames.join(' ')}
            fill="currentColor"
            viewBox={viewBox}
            aria-labelledby={hasTitle ? this.id : null}
            aria-hidden={hasTitle ? null : true}
            role="img"
            width="1em"
            height="1em"
            {...(props as Omit<React.SVGProps<SVGElement>, 'ref'>)} // Lie.
          >
            {hasTitle && <title id={this.id}>{title}</title>}
            {getSvgPaths(resolvedPathData)}
          </svg>
        );
      }
      return (
        <svg
          className={classNames.join(' ')}
          fill="currentColor"
          aria-labelledby={hasTitle ? this.id : null}
          aria-hidden={hasTitle ? null : true}
          role="img"
          width="1em"
          height="1em"
          {...(props as Omit<React.SVGProps<SVGElement>, 'ref'>)} // Lie.
        >
          {hasTitle && <title id={this.id}>{title}</title>}
          {icon && createSvg(icon, 'pf-v6-icon-default')}
          {rhUiIcon && createSvg(rhUiIcon, 'pf-v6-icon-rh-ui')}
        </svg>
      );
    }
  };
}

/**
 * Maps {@link CreateIconProps} (flat layout + `svgPath`) to a nested {@link IconDefinition} (`svgPath` →
 * `svgPathData`), then returns the component class from {@link createIconBase}. Generated icon modules call
 * {@link createIconBase} directly with nested data (see `@internal` on `createIconBase`).
 */
export function createIcon(props: CreateIconProps): ComponentClass<SVGIconProps> {
  const { rhUiIcon = null, ...rest } = props;
  const icon: IconDefinition = {
    name: rest.name,
    width: rest.width,
    height: rest.height,
    xOffset: rest.xOffset,
    yOffset: rest.yOffset,
    svgClassName: rest.svgClassName,
    svgPathData: rest.svgPath
  };
  return createIconBase({ name: icon.name, icon, rhUiIcon });
}
