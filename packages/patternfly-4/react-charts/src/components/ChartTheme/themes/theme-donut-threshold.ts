// TODO Replace label props with PF css when available

// Dynamic properties to extend Victory theme
export const dynamicDonut = {
  legend: {
    colorScale: ['#D2D2D2', '#BBBBBB']
  },
  pie: {
    height: 202,
    width: 202
  }
};

// Static (threshold) properties to extend Victory theme
export const staticDonut = {
  pie: {
    colorScale: ['#EDEDED', '#D2D2D2', '#BBBBBB'],
    height: 230,
    padAngle: 1,
    width: 230
  }
};

export default staticDonut;
