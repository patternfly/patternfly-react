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
    '^.+\\.[jt]sx?$': 'babel-jest',
    '\\.(css)$': '<rootDir>/packages/patternfly-4/react-styles/jest-transform.js'
  },
  transformIgnorePatterns: ['node_modules/(?!@patternfly|@novnc|tippy.js|lodash)'],
  testPathIgnorePatterns: [
    '<rootDir>/packages/patternfly-4/react-integration/'
  ],
  coveragePathIgnorePatterns: [
    '/dist/'
  ]
};
