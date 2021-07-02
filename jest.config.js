module.exports = {
  ...require('@snowpack/app-scripts-react/jest.config.js')(),
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest/svgTransform.js',
    '^.+\\.css$': '<rootDir>/jest/cssTransform.js',
  },
  testEnvironment: 'jsdom',
};
