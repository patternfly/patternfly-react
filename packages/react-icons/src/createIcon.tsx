import { Component } from 'react';

export interface SVGPathObject {
  path: string;
  className?: string;
}
export interface IconDefinition {
  name?: string;
  width: number;
  height: number;
  svgPath: string | SVGPathObject[];
  xOffset?: number;
  yOffset?: number;
  svgClassName?: string;
}

export interface SVGIconProps extends Omit<React.HTMLProps<SVGElement>, 'ref'> {
  title?: string;
  className?: string;
}

let currentId = 0;

/**
 * Factory to create Icon class components for consumers
 */
export function createIcon({
  name,
  xOffset = 0,
  yOffset = 0,
  width,
  height,
  svgPath,
  svgClassName
}: IconDefinition): React.ComponentClass<SVGIconProps> {
  return class SVGIcon extends Component<SVGIconProps> {
    static displayName = name;

    id = `icon-title-${currentId++}`;

    render() {
      const { title, className: propsClassName, ...props } = this.props;

      const hasTitle = Boolean(title);
      const viewBox = [xOffset, yOffset, width, height].join(' ');

      const classNames = ['pf-v6-svg'];
      if (svgClassName) {
        classNames.push(svgClassName);
      }
      if (propsClassName) {
        classNames.push(propsClassName);
      }

      return (
        <svg
          className={classNames.join(' ')}
          viewBox={viewBox}
          fill="currentColor"
          aria-labelledby={hasTitle ? this.id : null}
          aria-hidden={hasTitle ? null : true}
          role="img"
          width="1em"
          height="1em"
          {...(props as Omit<React.SVGProps<SVGElement>, 'ref'>)} // Lie.
        >
          {hasTitle && <title id={this.id}>{title}</title>}
          {Array.isArray(svgPath) ? (
            svgPath.map((pathObject, index) => (
              <path className={pathObject.className} key={`${pathObject.path}-${index}`} d={pathObject.path} />
            ))
          ) : (
            <path d={svgPath} />
          )}
        </svg>
      );
    }
  };
}
