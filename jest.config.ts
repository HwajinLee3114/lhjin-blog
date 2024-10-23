import type { Config } from "jest";

/** @type {Config} */
const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom", // 명시적으로 지정
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
