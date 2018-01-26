import { closest } from './closestPolyfill';

describe('closest', () => {
  beforeEach(() => {
    Element.prototype.polyfillClosest = closest;

    const container = document.createElement('div');
    container.innerHTML = `
      <div id='div1'>
        <span class="test_cls" id='span1'>
          <span class="test_cls" id='span2'>
            <a id='start'></a>
          </span>
        </span>
      <div>
    `;
    document.body.appendChild(container);
  });

  test('returns null when enothing is found', () => {
    const el = document.getElementById('start');
    expect(el.polyfillClosest('.unknown')).toBeNull();
  });

  test('finds closest element by class', () => {
    const el = document.getElementById('start');
    expect(el.polyfillClosest('.test_cls').id).toEqual('span2');
  });

  test('finds closest element by tag name', () => {
    const el = document.getElementById('start');
    expect(el.polyfillClosest('div').id).toEqual('div1');
  });
});
