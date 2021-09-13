module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverageFrom: ['packages/**/*.{ts,tsx,js,jsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/dist', '.config'],
  globals: {
    window: {},
  },
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '^.+\\.css$': '<rootDir>/__mocks__/styleMock.ts',
  },
  preset: 'ts-jest',
  reporters: ['default'],
  transform: {
    '^.+\\.tsx?$': require.resolve('ts-jest'),
  },
};
