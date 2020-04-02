module.exports = {
  roots: ['<rootDir>/packages'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!@patternfly)'],
  testMatch: [
    '<rootDir>/packages/**/__tests__/**/*.{js,ts}?(x)',
    '<rootDir>/packages/**/*.test.{js,ts}?(x)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/packages/react-integration/'
  ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/packages/react-styles/__mocks__/styleMock.js'
  },
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/packages/setupEnzyme.js'],
  // Some suites expect this between test cases
  clearMocks: true
};
