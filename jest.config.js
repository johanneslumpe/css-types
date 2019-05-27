module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
    'ts',
    'tsx',
  ],
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
  ],
  testURL: 'http://localhost',
  testPathIgnorePatterns: [
    '/node_modules',
    '__tests__/utils',
  ],
  coverageDirectory: './coverage/',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
  ],
  collectCoverage: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.cjs.test.json',
    },
  },
  preset: 'ts-jest',
}