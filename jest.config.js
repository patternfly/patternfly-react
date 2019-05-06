module.exports = {
  collectCoverage: true,
  clearMocks: true,
  coverageReporters: ['lcov'],
  modulePathIgnorePatterns: [
    '<rootDir>/packages/*.*/dist/*.*',
    '<rootDir>/packages/*.*/public/*.*',
    '<rootDir>/packages/*.*/.cache/*.*'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/packages/*.*/dist/*.*',
    '<rootDir>/packages/*.*/examples/*.*',
    '<rootDir>/packages/*.docs.*',
    '<rootDir>/packages/react-docs/*.*'
  ],
  modulePaths: [
    '<rootDir>/**/node_modules/',
    '<rootDir>/packages/',
    '<rootDir>/packages/patternfly-3/',
    '<rootDir>/packages/patternfly-4/'
  ],
  roots: ['<rootDir>/packages'],
  setupFiles: ['./test.env.js'],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
    '<rootDir>/packages/patternfly-4/react-core/build/snapshot-serializer'
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(css)$': '<rootDir>/packages/patternfly-4/react-styles/jest-transform.js'
  },
  testPathIgnorePatterns: [
    '<rootDir>/scripts/generators/',
    '<rootDir>/packages/patternfly-4/react-integration/',
    '<rootDir>/node_modules/(?!lodash-es/.*)'
  ],
  transformIgnorePatterns: ['node_modules/(?!@patternfly|@novnc|tippy.js|lodash-es)'],
  // https://github.com/kulshekhar/ts-jest/blob/master/docs/user/config/index.md
  preset: 'ts-jest/presets/js-with-babel',
  globals: {
    'ts-jest': {
      tsConfig: 'packages/patternfly-4/react-core/tsconfig.jest.json'
    }
  }
};
