export const PathHelpers = {
  circle(x: number, y: number, size: number) {
    return `M ${x}, ${y}
      m ${-size}, 0
      a ${size}, ${size} 0 1,0 ${size * 2},0
      a ${size}, ${size} 0 1,0 ${-size * 2},0`;
  },

  square(x: number, y: number, size: number) {
    const baseSize = 0.87 * size;
    const x0 = x - baseSize;
    const y1 = y + baseSize;
    const distance = x + baseSize - x0;
    return `M ${x0}, ${y1}
      h${distance}
      v-${distance}
      h-${distance}
      z`;
  },

  diamond(x: number, y: number, size: number) {
    const baseSize = 0.87 * size;
    const length = Math.sqrt(2 * (baseSize * baseSize));
    return `M ${x}, ${y + length}
      l ${length}, -${length}
      l -${length}, -${length}
      l -${length}, ${length}
      l ${length}, ${length}
      z`;
  },

  triangleDown(x: number, y: number, size: number) {
    const height = (size / 2) * Math.sqrt(3);
    const x0 = x - size;
    const x1 = x + size;
    const y0 = y - size;
    const y1 = y + height;
    return `M ${x0}, ${y0}
      L ${x1}, ${y0}
      L ${x}, ${y1}
      z`;
  },

  triangleUp(x: number, y: number, size: number) {
    const height = (size / 2) * Math.sqrt(3);
    const x0 = x - size;
    const x1 = x + size;
    const y0 = y - height;
    const y1 = y + size;
    return `M ${x0}, ${y1}
      L ${x1}, ${y1}
      L ${x}, ${y0}
      z`;
  },

  plus(x: number, y: number, size: number) {
    const baseSize = 1.1 * size;
    const distance = baseSize / 1.5;
    return `
      M ${x - distance / 2}, ${y + baseSize}
      v-${distance}
      h-${distance}
      v-${distance}
      h${distance}
      v-${distance}
      h${distance}
      v${distance}
      h${distance}
      v${distance}
      h-${distance}
      v${distance}
      z`;
  },

  minus(x: number, y: number, size: number) {
    const baseSize = 1.1 * size;
    const lineHeight = baseSize - baseSize * 0.3;
    const x0 = x - baseSize;
    const y1 = y + lineHeight / 2;
    const distance = x + baseSize - x0;
    return `M ${x0}, ${y1}
      h${distance}
      v-${lineHeight}
      h-${distance}
      z`;
  },

  star(x: number, y: number, size: number) {
    const baseSize = 1.35 * size;
    const angle = Math.PI / 5;
    const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const starCoords = range.map(index => {
      const length = index % 2 === 0 ? baseSize : baseSize / 2;
      return `${length * Math.sin(angle * (index + 1)) + x},
        ${length * Math.cos(angle * (index + 1)) + y}`;
    });
    return `M ${starCoords.join('L')} z`;
  },

  dash(x: number, y: number, size: number) {
    const baseSize = 1.1 * size;
    const lineHeight = baseSize - baseSize * 0.3;
    const x0 = x - baseSize;
    const y1 = y + lineHeight / 2;
    const distance = (x + baseSize - x0) * 0.3;
    const padding = distance / 3;
    return `M ${x0}, ${y1}
      h${distance}
      v-${lineHeight}
      h-${distance}
      z
      M ${x0 + distance + padding}, ${y1}
      h${distance}
      v-${lineHeight}
      h-${distance}
      z
      M ${x0 + distance * 2 + padding * 2}, ${y1}
      h${distance}
      v-${lineHeight}
      h-${distance}
      z`;
  },

  threshold(x: number, y: number, size: number) {
    const baseSize = 1.1 * size;
    const lineHeight = baseSize - baseSize * 0.3;
    const x0 = x - baseSize;
    const y1 = y + lineHeight / 2;
    const distance = (x + baseSize - x0) * 0.5;
    const padding = distance / 3;
    return `M ${x0}, ${y1}
      h${distance}
      v-${lineHeight}
      h-${distance}
      z
      M ${x0 + distance + padding}, ${y1}
      h${distance}
      v-${lineHeight}
      h-${distance}
      z`;
  }
};
