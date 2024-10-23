/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // 경로 별칭을 사용하고 있다면, 아래와 같이 설정
    "@/(.*)$": "<rootDir>/src/$1",
  },
};
