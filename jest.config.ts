/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '<rootDir>/packages/react-core/src/components/**/*.tsx',
    '!<rootDir>/packages/react-core/src/components/*/examples/*.tsx'
  ],
  coverageDirectory: './packages/react-docs/coverage/',
  clearMocks: true,
  testMatch: ['**/__tests__/**/*.{js,ts}?(x)', '**/*.test.{js,ts}?(x)'],
  modulePathIgnorePatterns: [
    '<rootDir>/packages/*.*/dist/*.*',
    '<rootDir>/packages/*.*/public/*.*',
    '<rootDir>/packages/*.*/.cache/*.*'
  ],
  roots: ['<rootDir>/packages'],
  transform: {
    '^.+\\.m?[jt]sx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transform-stub'
  },
  setupFilesAfterEnv: ['<rootDir>/packages/testSetup.ts'],
  testPathIgnorePatterns: ['<rootDir>/packages/react-integration/'],
  transformIgnorePatterns: ['node_modules/victory-*/', '/node_modules/(?!(case-anything)/)'],
  coveragePathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/packages/react-styles/__mocks__/styleMock.js'
  },
  testEnvironment: 'jsdom'
};

export default config;
