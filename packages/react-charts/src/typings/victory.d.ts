import 'victory-core';

declare module 'victory-core' {
  export const CommonProps: any;
  export const Data: any;
  export const Helpers: any;
  export const Line: any;
  export const Path: any;
  export const TextSize: any;
}

declare module 'hoist-non-react-statics' {
  const hoist: any;
  export default hoist;
}
