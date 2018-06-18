export interface StaticRenderResult {
  html: string;
  styleTags: {
    attributes: { [key: string]: string | boolean }[];
    css: string;
  }[];
  renderedClassNames: any[];
}

export function renderStatic(renderFn: () => string): StaticRenderResult;
