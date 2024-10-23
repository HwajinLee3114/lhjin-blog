````markdown
# LHJin Blog

이 프로젝트는 Next.js와 TypeScript를 사용하여 개인 블로그를 구현한 것입니다. 이 블로그는 정적 사이트 생성(SSG)을 통해 빠른 성능을 제공합니다.

## 기술 스택

- **프레임워크**: Next.js
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **테스트**: Jest, Testing Library

## 설치 및 실행

### 1. 리포지토리 클론

```bash
git clone <repository-url>
cd lhjin-blog
```
````

### 2. 패키지 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 테스트 실행

```bash
npm test
```

## 추가 라이브러리

- **Contentlayer**: 콘텐츠 관리를 위한 라이브러리
- **rehype-highlight**: Markdown 코드 블록을 아름답게 꾸미기 위한 라이브러리
- **rehype-pretty-code**: 코드 블록의 스타일을 개선하는 라이브러리
- **Shiki**: 다양한 언어의 문법 하이라이팅을 지원하는 라이브러리

## ESLint 설정

- `.eslintrc.json` 파일:
  ```json
  {
    "extends": ["next/core-web-vitals", "next/typescript"]
  }
  ```

## Jest 설정

- **jest.config.ts** 파일:

  ```typescript
  import type { Config } from "jest";

  const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
      "@/(.*)$": "<rootDir>/src/$1",
    },
  };

  export default config;
  ```

- **jest.setup.ts** 파일:
  ```typescript
  import "@testing-library/jest-dom";
  ```
