export interface PathHelpersInterface {
  circle: Function;
  dash: Function;
  diamond: Function;
  eyeSlash: Function;
  minus: Function;
  plus: Function;
  star: Function;
  square: Function;
  threshold: Function;
  triangleDown: Function;
  triangleLeft: Function;
  triangleRight: Function;
  triangleUp: Function;
}

export const PathHelpers: PathHelpersInterface = {
  circle: (x: number, y: number, size: number) => `M ${x}, ${y}
      m ${-size}, 0
      a ${size}, ${size} 0 1,0 ${size * 2},0
      a ${size}, ${size} 0 1,0 ${-size * 2},0`,

  dash: (x: number, y: number, size: number) => {
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

  diamond: (x: number, y: number, size: number) => {
    const baseSize = 0.87 * size;
    const length = Math.sqrt(2 * (baseSize * baseSize));
    return `M ${x}, ${y + length}
      l ${length}, -${length}
      l -${length}, -${length}
      l -${length}, ${length}
      l ${length}, ${length}
      z`;
  },

  // The eye slash symbol is used to hide / show each data series individually
  // See https://github.com/patternfly/patternfly-next/issues/2352
  eyeSlash: (x: number, y: number, size: number) => {
    const baseSize = 0.87 * size;
    const x0 = x - baseSize;
    const y1 = y - size * 1.25;

    // For converting to relative paths, see https://aydos.com/svgedit/
    // Data taken from path of assets/Eyecon.svg, minus first two x and y values
    const data =
      '.013 .013 0 0 2.179 2.219c.7-.204 1.418-.307 2.152-.307 2.859 0 5.464 1.551 7.814 4.654.243 .321.268 .753.073 1.097l-.073.111-.236.305c-.632.801-1.282 1.491-1.951 2.071l1.773 1.806c.382.389 .382 1.012 0 1.401l-.058.059c-.387.394-1.02.4-1.414.013l-.013-.013-11.732-11.956c-.382-.389-.382-1.012 0-1.401l.058-.059c.387-.394 1.02-.4 1.414-.013zm-.674 3.71 1.407 1.436c-.329.604-.516 1.298-.516 2.038 0 2.323 1.848 4.206 4.127 4.206.726 0 1.408-.191 2-.526l.966.984c-.956.396-1.945.593-2.966.593-2.859 0-5.464-1.551-7.814-4.654-.243-.321-.268-.753-.073-1.097l.073-.111.236-.305c.823-1.042 1.676-1.897 2.56-2.565zm2.177 2.22 4.072 4.149c-.377.167-.793.259-1.23.259-1.71 0-3.096-1.412-3.096-3.155 0-.445.091-.869.254-1.253zm2.842-2.953c-.43 0-.845.067-1.234.191l.865.882c.121-.015.244-.022.369-.022 1.71 0 3.096 1.412 3.096 3.155 0 .127-.007.252-.022.375l.866.882c.122-.397.187-.819.187-1.257 0-2.323-1.848-4.206-4.127-4.206z';
    return `m${x0}, ${y1} ${data}`;
  },

  minus: (x: number, y: number, size: number) => {
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

  plus: (x: number, y: number, size: number) => {
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

  star: (x: number, y: number, size: number) => {
    const baseSize = 1.35 * size;
    const angle = Math.PI / 5;
    const starCoords = [...Array(10).keys()].map(index => {
      const length = index % 2 === 0 ? baseSize : baseSize / 2;
      return `${length * Math.sin(angle * (index + 1)) + x},
        ${length * Math.cos(angle * (index + 1)) + y}`;
    });
    return `M ${starCoords.join('L')} z`;
  },

  square: (x: number, y: number, size: number) => {
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

  threshold: (x: number, y: number, size: number) => {
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
  },

  triangleDown: (x: number, y: number, size: number) => {
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

  triangleLeft: (x: number, y: number, size: number) => {
    const height = (size / 2) * Math.sqrt(3);
    const x0 = x - height;
    const x1 = x + size;
    const y0 = y - size;
    const y1 = y + size;
    return `M ${x1}, ${y0}
      L ${x1}, ${y1}
      L ${x0}, ${y}
      z`;
  },

  triangleRight: (x: number, y: number, size: number) => {
    const height = (size / 2) * Math.sqrt(3);
    const x0 = x - size;
    const x1 = x + height;
    const y0 = y - size;
    const y1 = y + size;
    return `M ${x0}, ${y0}
      L ${x0}, ${y1}
      L ${x1}, ${y}
      z`;
  },

  triangleUp: (x: number, y: number, size: number) => {
    const height = (size / 2) * Math.sqrt(3);
    const x0 = x - size;
    const x1 = x + size;
    const y0 = y - height;
    const y1 = y + size;
    return `M ${x0}, ${y1}
      L ${x1}, ${y1}
      L ${x}, ${y0}
      z`;
  }
};
