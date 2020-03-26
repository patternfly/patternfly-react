import * as React from 'react';

let currentId = 0;

export const IconSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
};

export const getSize = size => {
  switch (size) {
    case IconSize.sm:
      return '1em';
    case IconSize.md:
      return '1.5em';
    case IconSize.lg:
      return '2em';
    case IconSize.xl:
      return '3em';
    default:
      return '1em';
  }
};

export interface IconDefinition {
  height: number;
  name: string;
  svgPath: string;
  width: number;
  xOffset: number;
  yOffset: number;
  transform: string;
}

interface SVGIconProps extends Omit<React.HTMLProps<SVGElement>, 'size' | 'ref'> {
  config: IconDefinition;
  color?: string;
  size?: typeof IconSize | keyof typeof IconSize;
  title?: string;
  noVerticalAlign?: boolean;
}

export class SVGIcon extends React.Component<SVGIconProps> {
  displayName = this.props.config.name;
  static defaultProps = {
    color: 'currentColor',
    size: IconSize.sm,
    title: null,
    noVerticalAlign: false
  };

  id = `icon-title-${currentId++}`;

  render() {
    const { size, color, title, noVerticalAlign, config, ...props } = this.props;

    const hasTitle = Boolean(title);
    const heightWidth = getSize(size);
    const baseAlign = -0.125 * Number.parseFloat(heightWidth);
    const style = noVerticalAlign ? null : { verticalAlign: `${baseAlign}em` };
    const viewBox = [
      config.xOffset || 0,
      config.yOffset || 0,
      config.width,
      config.height
    ].join(' ');
    
    return (
      <svg
        style={style}
        fill={color}
        height={heightWidth}
        width={heightWidth}
        viewBox={viewBox}
        aria-labelledby={hasTitle ? this.id : null}
        aria-hidden={hasTitle ? null : true}
        role="img"
        {...props}
      >
        {hasTitle && <title id={this.id}>{title}</title>}
        <path d={config.svgPath} transform={config.transform} />
      </svg>
    );
  }
}
