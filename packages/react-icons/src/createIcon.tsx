import { Component } from 'react';

export interface SVGPathObject {
  path: string;
  className?: string;
}

export interface IconDefinition {
  name?: string;
  width: number;
  height: number;
  svgPathData: string | SVGPathObject[];
  xOffset?: number;
  yOffset?: number;
  svgClassName?: string;
}

export interface CreateIconProps {
  name?: string;
  icon?: IconDefinition;
  rhUiIcon?: IconDefinition | null;
}

export interface SVGIconProps extends Omit<React.HTMLProps<SVGElement>, 'ref'> {
  title?: string;
  className?: string;
  /* Indicates the icon should render using alternate svg data for unified theme */
  set?: 'default' | 'rh-ui';
}

let currentId = 0;

const createSvg = (icon: IconDefinition, iconClassName: string) => {
  const { xOffset, yOffset, width, height, svgPathData, svgClassName } = icon ?? {};
  const _xOffset = xOffset ?? 0;
  const _yOffset = yOffset ?? 0;
  const viewBox = [_xOffset, _yOffset, width, height].join(' ');

  const classNames = [];

  if (svgClassName) {
    classNames.push(svgClassName);
  }
  if (iconClassName) {
    classNames.push(iconClassName);
  }

  const svgPaths =
    svgPathData && Array.isArray(svgPathData) ? (
      svgPathData.map((pathObject, index) => (
        <path className={pathObject.className} key={`${pathObject.path}-${index}`} d={pathObject.path} />
      ))
    ) : (
      <path d={svgPathData as string} />
    );

  return (
    <svg viewBox={viewBox} className={classNames.join(' ')}>
      {svgPaths}
    </svg>
  );
};

/**
 * Factory to create Icon class components for consumers
 */
export function createIcon({ name, icon, rhUiIcon = null }: CreateIconProps): React.ComponentClass<SVGIconProps> {
  return class SVGIcon extends Component<SVGIconProps> {
    static displayName = name;

    id = `icon-title-${currentId++}`;

    constructor(props: SVGIconProps) {
      super(props);
    }

    render() {
      const { title, className: propsClassName, set, ...props } = this.props;

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

        if (svgClassName) {
          classNames.push(svgClassName);
        }

        const svgPaths =
          svgPathData && Array.isArray(svgPathData) ? (
            svgPathData.map((pathObject, index) => (
              <path className={pathObject.className} key={`${pathObject.path}-${index}`} d={pathObject.path} />
            ))
          ) : (
            <path d={svgPathData as string} />
          );

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
            {svgPaths}
          </svg>
        );
      } else {
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
    }
  };
}
