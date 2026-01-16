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
  set?: 'default' | 'unified';
}

let currentId = 0;
const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Factory to create Icon class components for consumers
 */
export function createIcon({ name, icon, rhUiIcon = null }: CreateIconProps): React.ComponentClass<SVGIconProps> {
  return class SVGIcon extends Component<SVGIconProps, { themeClassVersion: number }> {
    static displayName = name;

    id = `icon-title-${currentId++}`;
    private observer: MutationObserver | null = null;

    constructor(props: SVGIconProps) {
      super(props);
      this.state = { themeClassVersion: 0 };
    }

    componentDidMount() {
      if (rhUiIcon !== null && canUseDOM) {
        this.observer = new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              const target = mutation.target as HTMLElement;
              const hadClass = (mutation.oldValue || '').includes('pf-v6-theme-unified');
              const hasClass = target.classList.contains('pf-v6-theme-unified');

              if (hadClass !== hasClass && this.props.set === undefined) {
                this.setState((prevState) => ({
                  themeClassVersion: prevState.themeClassVersion + 1
                }));
              }
            }
          }
        });

        this.observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class'],
          attributeOldValue: true
        });
      }
    }

    componentWillUnmount() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    }

    render() {
      const { title, className: propsClassName, set, ...props } = this.props;

      const shouldUseAltData =
        rhUiIcon !== null &&
        (set === 'unified' ||
          (set === undefined && canUseDOM && document.documentElement.classList.contains('pf-v6-theme-unified')));

      const iconData = shouldUseAltData ? rhUiIcon : icon;
      const { xOffset, yOffset, width, height, svgClassName, svgPathData } = iconData ?? {};
      const _xOffset = xOffset ?? 0;
      const _yOffset = yOffset ?? 0;

      const hasTitle = Boolean(title);
      const viewBox = [_xOffset, _yOffset, width, height].join(' ');

      const classNames = ['pf-v6-svg'];
      if (svgClassName) {
        classNames.push(svgClassName);
      }
      if (propsClassName) {
        classNames.push(propsClassName);
      }

      const svgPaths = Array.isArray(svgPathData) ? (
        svgPathData.map((pathObject, index) => (
          <path className={pathObject.className} key={`${pathObject.path}-${index}`} d={pathObject.path} />
        ))
      ) : (
        <path d={svgPathData as string} />
      );

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
          {svgPaths}
        </svg>
      );

      // Alternate CSS method tinkering
      // TODO: remove or refactor to use this method
      // Below works for paths, but not viewbox without needing the MutationObserver which would be nice to not have when using CSS method
      // May be able to use two separate svgs instead of paths instead if going this route

      //   const defaultSvgPathData = Array.isArray(icon?.svgPathData) ? (
      //     icon?.svgPathData.map((pathObject, index) => (
      //       <path className={pathObject.className} key={`${pathObject.path}-${index}`} d={pathObject.path} />
      //     ))
      //   ) : (
      //     <path d={icon?.svgPathData as string} />
      //   );

      //   const rhUiSvgPathData =
      //     rhUiIcon?.svgPathData && Array.isArray(rhUiIcon?.svgPathData) ? (
      //       rhUiIcon?.svgPathData.map((pathObject, index) => (
      //         <path className={pathObject.className} key={`${pathObject.path}-${index}`} d={pathObject.path} />
      //       ))
      //     ) : (
      //       <path d={rhUiIcon?.svgPathData as string} />
      //     );

      //   const finalSvgPath =
      //     rhUiIcon !== null ? (
      //       <>
      //         <g className="pf-icon">{defaultSvgPathData}</g>
      //         <g className="rh-icon">{rhUiSvgPathData}</g>
      //       </>
      //     ) : (
      //       pfSvgPathData
      //     );

      //   return (
      //     <svg
      //       className={classNames.join(' ')}
      //       viewBox={viewBox}
      //       fill="currentColor"
      //       aria-labelledby={hasTitle ? this.id : null}
      //       aria-hidden={hasTitle ? null : true}
      //       role="img"
      //       width="1em"
      //       height="1em"
      //       {...(props as Omit<React.SVGProps<SVGElement>, 'ref'>)} // Lie.
      //     >
      //       {hasTitle && <title id={this.id}>{title}</title>}
      //       <style type="text/css">
      //         {/* Testing CSS visibility switching */}
      //         {/* TODO: move to css file, add to global styles */}
      //         {`
      //           .pf-v6-theme-unified {
      //             .pf-icon {
      //               display: none;
      //             }
      //             .rh-icon {
      //               display: block;
      //             }
      //           }
      //           .rh-icon {
      //             display: none;
      //           }

      //         `}
      //       </style>
      //       {finalSvgPath}
      //     </svg>
      //   );
    }
  };
}
