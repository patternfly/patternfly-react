// TODO Replace label props with PF css when available
export const styles = {
  label: {
    subTitle: {
      fill: '#bbb',
      fontSize: 16
    },
    title: {
      fontSize: 26
    }
  },
  legend: {
    orientation: 'vertical'
  },
  thresholds: {
    colorScale: ['#F0AB00', '#C9190B']
  }
};

// Donut utilization properties to extend Victory theme
export const dynamicDonut = {
  pie: {
    height: 230,
    padAngle: 1,
    width: 230
  }
};

export const staticDonut = {
  legend: {
    colorScale: ['#EDEDED', '#D2D2D2', '#BBBBBB']
  },
  pie: {
    colorScale: ['#EDEDED']
  }
};

export default dynamicDonut;
