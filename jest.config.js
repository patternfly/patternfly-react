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
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/packages/testSetup.ts'],
  transformIgnorePatterns: ['node_modules/(?!@patternfly|@novnc|@popperjs|lodash|monaco-editor|react-monaco-editor)'],
  testPathIgnorePatterns: ['<rootDir>/packages/react-integration/'],
  coveragePathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/packages/react-styles/__mocks__/styleMock.js'
  },
  testEnvironment: 'jsdom'
};
