import * as helpers from './helpers';

describe('bindMethods', () => {
  test('binds specified methods and ignores unspecified', () => {
    class Test {
      constructor() {
        helpers.bindMethods(this, ['bound']);
      }

      bound() {
        expect(this).toBeInstanceOf(Test);
      }

      unbound() {
        expect(this).toBeNull();
      }
    }
    const instance = new Test();
    instance.bound.call(null);
    instance.unbound.call(null);
  });
});

describe('selectKeys', () => {
  test('defaults function to an identity function', () => {
    const obj = {
      key: 'value'
    };
    const newObj = helpers.selectKeys(obj, ['key']);
    expect(newObj.key).toBe(obj.key);
  });

  test('allows a function to be passed', () => {
    const obj = {
      key: 'value'
    };

    const newValue = 'newValue';
    const fn = jest.fn(() => newValue);
    const newObj = helpers.selectKeys(obj, ['key'], fn);
    expect(newObj.key).toBe(newValue);
    expect(fn).toBeCalledWith(obj.key);
  });

  test('removes keys unspecified', () => {
    const obj = {
      key: 'value'
    };

    const newValue = 'newValue';
    const fn = jest.fn(() => newValue);
    const newObj = helpers.selectKeys(obj, [], fn);
    expect(newObj.key).toBeUndefined();
  });
});
