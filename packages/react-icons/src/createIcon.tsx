import { Component, type ComponentClass, type ReactNode } from 'react';

export interface SVGPathObject {
  path: string;
  className?: string;
}

/** Icon data format */
export interface IconData {
  name?: string;
  width: number;
  height: number;
  xOffset?: number;
  yOffset?: number;
  svgClassName?: string;
  svgPathData?: string | SVGPathObject[];
}

/** Internal API props  */
interface CreateIconBaseProps {
  name?: string;
  icon?: IconData;
  rhUiIcon?: IconData | null;
}

/** Public API props */
export interface IconDefinition {
  name?: string;
  width: number;
  height: number;
  xOffset?: number;
  yOffset?: number;
  svgPath?: string | SVGPathObject[];
  svgClassName?: string;
  rhUiIcon?: IconData | null;
}

/** Additional svg props */
export interface SVGIconProps extends Omit<React.HTMLProps<SVGElement>, 'ref'> {
  title?: string;
  className?: string;
  /** Indicates the icon should render using alternate svg data for the unified theme */
  set?: 'default' | 'rh-ui';
  /** Indicates the icon should render without its default styling specified in its IconDefinition.svgClassName. */
  noDefaultStyle?: boolean;
}

let currentId = 0;

/** Returns svg path(s) from a given svg data object. */
function getSvgPaths(svgPathData: string | SVGPathObject[] | undefined): ReactNode {
  return svgPathData && Array.isArray(svgPathData) ? (
    svgPathData.map((pathObject, index) => (
      <path className={pathObject.className} key={`${pathObject.path}-${index}`} d={pathObject.path} />
    ))
  ) : (
    <path d={svgPathData as string} />
  );
}

const createInnerSvg = (icon: IconData, iconClassName: string) => {
  const { xOffset, yOffset, width, height, svgPathData, svgClassName } = icon ?? {};
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
      {getSvgPaths(svgPathData)}
    </svg>
  );
};

/**
 * Internal API for creating icons. Subject to change at any time. Please use `createIcon` instead.
 * @internal
 */
export function createIconBase({ name, icon, rhUiIcon = null }: CreateIconBaseProps): ComponentClass<SVGIconProps> {
  if (icon == null) {
    // eslint-disable-next-line no-console
    console.warn(
      `@patternfly/react-icons: createIconBase is missing an \`icon\` definition (name: ${name ?? 'unknown'}).`
    );
  }
  return class SVGIcon extends Component<SVGIconProps> {
    static displayName = name;

    id = `icon-title-${currentId++}`;

    static defaultProps: SVGIconProps = {
      noDefaultStyle: false
    };

    render() {
      const { title, className: propsClassName, set, noDefaultStyle, ...props } = this.props;

      const hasTitle = Boolean(title);
      const classNames = ['pf-v6-svg'];

      if (propsClassName) {
        classNames.push(propsClassName);
      }

      if (set === 'rh-ui' && rhUiIcon === null) {
        // eslint-disable-next-line no-console
        console.warn(
          `Set "rh-ui" was provided for ${name}, but no rh-ui icon data exists for this icon. The default icon will be rendered.`
        );
      }

      if ((set === undefined && rhUiIcon === null) || set !== undefined) {
        const iconData = set !== undefined && set === 'rh-ui' && rhUiIcon !== null ? rhUiIcon : icon;
        const { xOffset, yOffset, width, height, svgPathData, svgClassName } = iconData ?? {};
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
            {getSvgPaths(svgPathData)}
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
          {icon && createInnerSvg(icon, 'pf-v6-icon-default')}
          {rhUiIcon && createInnerSvg(rhUiIcon, 'pf-v6-icon-rh-ui')}
        </svg>
      );
    }
  };
}

/** Public API for creating icons. Will be maintained up to breaking releases. */
export function createIcon(props: IconDefinition): ComponentClass<SVGIconProps> {
  const { rhUiIcon = null, ...rest } = props;
  const icon: IconData = {
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
