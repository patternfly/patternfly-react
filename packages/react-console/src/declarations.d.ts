declare module '@spice-project/spice-html5' {
  export const SpiceMainConn: any;
  export const sendCtrlAltDel: any;
}

declare module '@novnc/novnc/core/rfb' {
  class RFB {
    constructor(target: any, url: any, options: any);
  }
  export = RFB;
}

declare module '@novnc/novnc/core/util/logging' {
  export const initLogging: any;
}
