module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.ts']
}
