---
id: Prometheus chart
section: demos
---

import { Chart, ChartArea, ChartAxis, ChartGroup, ChartLegend, ChartLegendTooltip, ChartLine, ChartStack, ChartThemeColor, ChartThemeVariant, ChartVoronoiContainer, createContainer, getCustomTheme } from '@patternfly/react-charts';
import imgBrand from '@patternfly/react-core/src/components/Brand/examples/pfLogo.svg';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
import { mockData } from './mockData.js';

## Demos

### Prometheus Chart

```js isFullscreen
import React from 'react';
import {
  Avatar,
  Brand,
  Checkbox,
  Divider,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  TextContent,
  Text
} from '@patternfly/react-core';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartLegend,
  ChartLegendTooltip,
  ChartLine,
  ChartStack,
  ChartThemeColor,
  ChartThemeVariant,
  ChartVoronoiContainer,
  createContainer,
  getCustomTheme
} from '@patternfly/react-charts';
import { css } from '@patternfly/react-styles';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import imgBrand from '@patternfly/react-core/src/components/Brand/examples/pfLogo.svg';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
import mockData from './mockData.js';

PrometheusChart = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [isStacked, setIsStacked] = React.useState(true);
  const containerRef = React.useRef(null);
  const legendData = [];
  const tooltipSeriesNames = [];
  const results = mockData.data.result;

  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const timeFormatter = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric'
  });

  const dateTimeFormatterWithSeconds = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric'
  });

  const formatSeriesValues = values => {
    const newValues = values.map(v => {
      const y = Number(v[1]);
      return {
        x: new Date(v[0] * 1000),
        y: Number.isNaN(y) ? null : y
      };
    });
    return newValues;
  };

  const data = results.map(({ metric, values }) => {
    return [metric, formatSeriesValues(values)];
  });

  data.forEach(([metric, values], i) => {
    const name = `cpu${metric.cpu}`;
    legendData.push({ name, childName: metric.cpu });
    tooltipSeriesNames.push(name);
  });

  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');

  const graphContainer = (
    <CursorVoronoiContainer
      cursorDimension="x"
      labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
      labelComponent={
        <ChartLegendTooltip legendData={legendData} title={datum => dateTimeFormatterWithSeconds.format(datum.x)} />
      }
      mouseFollowTooltips
      voronoiDimension="x"
      voronoiPadding={50}
    />
  );

  const theme = getCustomTheme(ChartThemeColor.multiUnordered, ChartThemeVariant.light);
  const colors = theme.line.colorScale;

  const xAxisTickFormat = d => {
    return timeFormatter.format(d);
  };

  const GroupComponent = isStacked ? ChartStack : ChartGroup;
  const ChartComponent = isStacked ? ChartArea : ChartLine;

  const PageToolbar = <div>need to implement new toolbar</div>;
  const Header = (
    <PageHeader
      logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
      toolbar={PageToolbar}
      avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
    />
  );
  const pageId = 'main-content-page-layout-default-nav';

  return (
    <React.Fragment>
      <Page header={Header} mainContainerId={pageId}>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Prometheus Chart</Text>
            <Text component="p">
              This demo mainly shows how to format data from the Prometheus database and use the PatternFly Chart to
              consume the data. This demo could be used on monitoring visualization.
            </Text>
          </TextContent>
        </PageSection>
        <Divider component="div" />
        <PageSection variant={PageSectionVariants.light}>
          <div ref={containerRef}>
            <Checkbox id="stacked" isChecked={isStacked} label="Stacked" onChange={v => setIsStacked(v)} />
            <Chart
              containerComponent={graphContainer}
              ariaTitle="query browser chart"
              domainPadding={{ y: 1 }}
              height={400}
              padding={{
                bottom: 75,
                left: 50,
                right: 50,
                top: 50
              }}
              legendData={legendData}
              legendPosition="bottom-left"
              scale={{ x: 'time', y: 'linear' }}
              theme={theme}
              width={width}
            >
              <ChartAxis fixLabelOverlap={true} tickCount={10} tickFormat={xAxisTickFormat} />
              <ChartAxis crossAxis={false} dependentAxis showGrid tickCount={6} />
              <GroupComponent>
                {data.map((series, i) => {
                  const [metric, values] = series;
                  if (values === null) {
                    return null;
                  }
                  const color = colors[i % colors.length];
                  const style = {
                    data: { [isStacked ? 'fill' : 'stroke']: color },
                    labels: { fill: color, name: tooltipSeriesNames[i] }
                  };
                  return (
                    <ChartComponent data={values} groupComponent={<g />} key={i} name={metric.cpu} style={style} />
                  );
                })}
              </GroupComponent>
            </Chart>
          </div>
        </PageSection>
      </Page>
    </React.Fragment>
  );
};
```
