export default {
    transform: {
      "^.+\\.(js|jsx)$": "@swc/jest"
    },
    testEnvironment: "@happy-dom/jest-environment",
    moduleFileExtensions: ["js", "jsx"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
  };