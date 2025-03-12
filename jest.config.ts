import nextJest from 'next/jest'
const createJestConfig = nextJest({ dir: './' })
const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
}
export default createJestConfig(customJestConfig)