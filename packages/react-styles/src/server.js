import { renderStylesToString } from 'emotion-server';

export function renderStatic(renderFn) {
  const html = renderStylesToString(renderFn());
  return { html };
}
