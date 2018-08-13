import { StyleSheetServer } from 'aphrodite';
import { preventInjection, getBufferedStyles, dataAttribute } from './inject';

export function renderStatic(renderFn) {
  preventInjection();
  const { html, css: aphroditeCss } = StyleSheetServer.renderStatic(() => renderFn());
  const css = getBufferedStyles().join('');
  return {
    html,
    styleTags: [
      {
        attributes: { [dataAttribute]: true },
        content: css
      },
      {
        attributes: { 'data-aphrodite': true },
        content: aphroditeCss.content
      }
    ],
    renderedClassNames: [aphroditeCss.renderedClassNames]
  };
}
