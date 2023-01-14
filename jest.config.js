/* eslint-disable no-undef */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(tsx|js)?$": "ts-jest",
    "^.+\\.scss$": "<rootDir>/node_modules/jest-scss-transform",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|js|ts)?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/public/"],
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
  collectCoverageFrom: ["{src}/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageReporters: ["json-summary", "text", "lcov"],
  collectCoverage: true,
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "^@src(.*)$": "<rootDir>/src$1",
    "^lodash-es$": "lodash",
  },
  modulePathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/tests-setup.ts"],
  testTimeout: 10000,
};
