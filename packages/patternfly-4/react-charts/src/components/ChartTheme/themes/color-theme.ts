interface ColorThemeInterface {
  COLOR_SCALE: string[];
}

// Victory theme properties only
export const ColorTheme = (props: ColorThemeInterface) => {
  const { COLOR_SCALE } = props;

  return {
    area: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_SCALE[0]
        }
      }
    },
    axis: {
      colorScale: COLOR_SCALE
    },
    bar: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_SCALE[0]
        }
      }
    },
    boxplot: {
      colorScale: COLOR_SCALE
    },
    candlestick: {
      colorScale: COLOR_SCALE
    },
    chart: {
      colorScale: COLOR_SCALE
    },
    errorbar: {
      colorScale: COLOR_SCALE
    },
    group: {
      colorScale: COLOR_SCALE
    },
    legend: {
      colorScale: COLOR_SCALE
    },
    line: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          stroke: COLOR_SCALE[0]
        }
      }
    },
    pie: {
      colorScale: COLOR_SCALE
    },
    scatter: {
      colorScale: COLOR_SCALE
    },
    stack: {
      colorScale: COLOR_SCALE
    },
    voronoi: {
      colorScale: COLOR_SCALE
    }
  };
};
