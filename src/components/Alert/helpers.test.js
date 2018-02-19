import { warnIfDeprecatedType, getIconName, getClassName } from './helpers';
import { ALERT_TYPES, DEPRECATED_ALERT_TYPES } from './AlertConstants';

const ALL_ALERT_TYPES = [...ALERT_TYPES, ...DEPRECATED_ALERT_TYPES];

describe('Alert helpers', () => {
  beforeAll(() => jest.spyOn(console, 'warn').mockImplementation(() => {}));
  afterAll(() => {
    // eslint-disable-next-line no-console
    console.warn.mockRestore();
  });

  test('should warn about deprecated types', () => {
    ALL_ALERT_TYPES.forEach(type => warnIfDeprecatedType(type));

    // eslint-disable-next-line no-console
    expect(console.warn).toMatchSnapshot();
  });

  ALL_ALERT_TYPES.forEach(type => {
    test(`should get icon name for type ${type}`, () => {
      expect(getIconName(type)).toMatchSnapshot();
    });
  });

  ALL_ALERT_TYPES.forEach(type => {
    test(`should get class name for type ${type}`, () => {
      expect(getClassName(type)).toMatchSnapshot();
    });
  });
});
