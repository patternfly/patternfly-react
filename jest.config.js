module.exports = {
  roots: ['<rootDir>/packages'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  testMatch: ['<rootDir>/packages/**/*.test.{js,ts}?(x)'],
  testPathIgnorePatterns: ['<rootDir>/packages/react-integration/'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/packages/react-styles/__mocks__/styleMock.js'
  },
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/packages/setupEnzyme.js'],
  // Some suites expect this between test cases
  clearMocks: true,
  // Record results
  collectCoverage: true,
  coverageReporters: ['lcov']
};
