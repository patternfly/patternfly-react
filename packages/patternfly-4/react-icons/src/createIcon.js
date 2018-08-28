import React from 'react';
import { getSize, propTypes, defaultProps } from './common';

let currentId = 0;

const createIcon = iconDefinition => {
  const viewBox = [0, 0, iconDefinition.width, iconDefinition.height].join(' ');
  class Icon extends React.Component {
    static displayName = iconDefinition.name;
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    id = `icon-title-${currentId++}`;

    render() {
      const { size, color, title, ...props } = this.props;

      const hasTitle = Boolean(title);
      const heightWidth = getSize(size);

      return (
        <svg
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
          <path d={iconDefinition.svgPath} />
        </svg>
      );
    }
  }

  return Icon;
};

export default createIcon;
