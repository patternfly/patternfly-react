import * as React from 'react';
import { Data, DataGetterPropType } from 'victory-core';

interface DomainInterface {
  data?: any;
  maxDomain?: any;
  minDomain?: any;
  x?: DataGetterPropType;
  y?: DataGetterPropType;
}

interface SourcesInterface {
  maxDomain?: any;
  minDomain?: any;
  sources?: {
    component?: React.ReactElement<any>;
    data?: any;
  }[];
}

export interface ChartDomain {
  x: [number, number];
  y: [number, number];
}

// Returns the min and max domain for given data
export const getDomain = ({ data, maxDomain, minDomain, x, y }: DomainInterface): ChartDomain => {
  // x-domain
  let xLow = 0;
  let xHigh = 0;
  let xLowSearch = true;
  let xHighSearch = true;
  if (minDomain !== undefined && minDomain.x !== undefined) {
    xLow = minDomain.x;
    xLowSearch = false;
  } else if (minDomain !== undefined && minDomain.y === undefined) {
    xLow = minDomain;
    xLowSearch = false;
  }
  if (maxDomain !== undefined && maxDomain.x !== undefined) {
    xHigh = maxDomain.x;
    xHighSearch = false;
  } else if (maxDomain !== undefined && maxDomain.y === undefined) {
    xHigh = maxDomain;
    xHighSearch = false;
  }

  // y-domain
  let yLow = 0;
  let yHigh = 0;
  let yLowSearch = true;
  let yHighSearch = true;
  if (minDomain !== undefined && minDomain.y !== undefined) {
    yLow = minDomain.y;
    yLowSearch = false;
  } else if (minDomain !== undefined && minDomain.x === undefined) {
    yLow = minDomain;
    yLowSearch = false;
  }
  if (maxDomain !== undefined && maxDomain.y !== undefined) {
    yHigh = maxDomain.y;
    yHighSearch = false;
  } else if (maxDomain !== undefined && maxDomain.x === undefined) {
    yHigh = maxDomain;
    yHighSearch = false;
  }

  // Search data for max / min range
  const datum = Data.formatData(data, { x, y }, ['x', 'y']);
  datum.forEach((dataPoint: any) => {
    if (xLowSearch) {
      if (dataPoint._x < xLow) {
        xLow = dataPoint._x;
      }
    }
    if (xHighSearch) {
      if (dataPoint._x > xHigh) {
        xHigh = dataPoint._x;
      }
    }
    if (yLowSearch) {
      if (dataPoint._y < yLow) {
        yLow = dataPoint._y;
      }
    }
    if (yHighSearch) {
      if (dataPoint._y > yHigh) {
        yHigh = dataPoint._y;
      }
    }
  });
  return { x: [xLow, xHigh], y: [yLow, yHigh] };
};

export const getDomains = ({ maxDomain, minDomain, sources }: SourcesInterface): ChartDomain => {
  const domains: ChartDomain[] = [];
  sources.forEach(source => {
    const { data: compData = source.data } = source.component ? source.component.props : undefined;
    const domain = getDomain({
      data: compData,
      maxDomain,
      minDomain,
      x: source.component ? source.component.props.x : undefined,
      y: source.component ? source.component.props.y : undefined
    });
    domains.push(domain);
  });

  const xDomains: any[] = [];
  const yDomains: any[] = [];
  domains.forEach((domain: any) => {
    xDomains.push(...domain.x);
    yDomains.push(...domain.y);
  });

  const xLow = Math.min(...xDomains);
  const xHigh = Math.max(...xDomains);
  const yLow = Math.min(...yDomains);
  const yHigh = Math.max(...yDomains);

  return { x: [xLow, xHigh], y: [yLow, yHigh] };
};
