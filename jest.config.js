module.exports = {
  collectCoverage: true,
  coverageReporters: ['lcov'],
  clearMocks: true,
  testMatch: ['**/__tests__/**/*.{js,ts}?(x)', '**/*.test.{js,ts}?(x)'],
  modulePathIgnorePatterns: [
    '<rootDir>/packages/*.*/dist/*.*',
    '<rootDir>/packages/*.*/public/*.*',
    '<rootDir>/packages/*.*/.cache/*.*'
  ],
  roots: ['<rootDir>/packages'],
  setupFiles: ['<rootDir>/jest.env.js'],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!@patternfly|@novnc|tippy.js|lodash)'],
  testPathIgnorePatterns: [
    '<rootDir>/packages/react-integration/'
  ],
  coveragePathIgnorePatterns: [
    '/dist/'
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/packages/react-styles/__mocks__/styleMock.js"
  }
};
