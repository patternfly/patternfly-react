import * as React from 'react';

export interface ChartPathProps {
  className?: string;
  clipPath?: string;
  d?: string;
  events?: any;
  role?: string;
  shapeRendering?: string;
  style?: any;
  transform?: string;
}

export const ChartPath: React.FunctionComponent<ChartPathProps> = ({
  className,
  clipPath,
  d,
  events,
  role,
  shapeRendering,
  style,
  transform
}: ChartPathProps) => {
  return (
    <path
      d={d}
      transform={transform}
      className={className}
      clipPath={clipPath}
      style={style}
      role={role || "presentation"}
      shapeRendering={shapeRendering || "auto"}
      {...events}
    />
  );
};
