/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryPie } from 'victory';
import ChartLabel from '../ChartLabel/ChartLabel';
import { styles } from '../ChartTheme/themes/theme-donut';
import { getDonutTheme } from '../ChartTheme/themes/theme-utils';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-area/
   */
  '': PropTypes.any,
  /**
   * The height props specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: innerRadius may need to be set when using this property.
   */
  height: PropTypes.number,
  /**
   * The subtitle for the donut chart
   */
  subTitle: PropTypes.string,
  /*
   * Specifies the theme color; blue (default), green, or multi-color. Overridden by the theme property.
   */
  themeColor: PropTypes.string,
  /*
   * Specifies the theme variant; 'dark' or 'light' (default). Overridden by the theme property.
   */
  themeVariant: PropTypes.string,
  /**
   * The title for the donut chart
   */
  title: PropTypes.string,
  /**
   * The width props specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: innerRadius may need to be set when using this property.
   */
  width: PropTypes.number
};

class ChartDonut extends React.Component {
  titleRef = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      height: this.props.height || 0,
      width: this.props.width || 0
    };
  }

  componentDidMount() {
    // Skip resize handler if height and width were provided
    if (!(this.state.height || this.state.width)) {
      setTimeout(() => {
        window.addEventListener('resize', this.handleResize);
      });
      this.handleResize();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  getSubTitle = () => {
    const { subTitle } = this.props;
    const { height, width } = this.state;

    if (subTitle && height && width) {
      const xVal = width / 2 - subTitle.length / 2;
      const yVal = height / 2 + 10;

      return (
        <ChartLabel
          style={styles.label.subTitle}
          text={subTitle}
          textAnchor="middle"
          verticalAnchor="middle"
          x={xVal}
          y={yVal}
        />
      );
    }
    return null;
  };

  getTitle = () => {
    const { title } = this.props;
    const { height, width } = this.state;

    if (title && height && width) {
      const xVal = width / 2 - title.length / 2;
      const yVal = height / 2 - 10;

      return (
        <ChartLabel
          style={styles.label.title}
          text={title}
          textAnchor="middle"
          verticalAnchor="middle"
          x={xVal}
          y={yVal}
        />
      );
    }
    return null;
  };

  handleResize = () => {
    if (this.titleRef.current && this.titleRef.current.parentNode) {
      this.setState({
        height: this.titleRef.current.parentNode.clientHeight,
        width: this.titleRef.current.parentNode.clientWidth
      });
    }
  };

  render() {
    const { subTitle, theme, themeColor, themeVariant, title, ...rest } = this.props;

    // TODO Replace with PF css variable when available
    const titleStyles = {
      height: styles.label.height,
      position: styles.label.position,
      width: styles.label.width
    };

    const chartTheme = theme || getDonutTheme(themeColor, themeVariant);

    return (
      <React.Fragment>
        {Boolean(title || subTitle) && (
          <svg ref={this.titleRef} style={titleStyles}>
            {this.getTitle()}
            {this.getSubTitle()}
          </svg>
        )}
        <VictoryPie labelComponent={<ChartTooltip theme={chartTheme} />} theme={chartTheme} {...rest} />
      </React.Fragment>
    );
  }
}

// Note: VictoryPie.role must be hoisted
hoistNonReactStatics(ChartDonut, VictoryPie);
ChartDonut.propTypes = propTypes;

export default ChartDonut;
