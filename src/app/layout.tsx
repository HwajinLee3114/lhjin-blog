"use client";

import "@/styles/globals.css";
import "@/styles/pretty.css";
import React, { useEffect, useState } from "react";
import StyleProvider from "@/components/StyleProvider";
import GlobalStyle from "@/styles/GlobalStyle";
import Header from "@/components/template/header/Header";
import Footer from "@/components/template/Footer";
import { useHydration } from "@/hooks/useHydration";
import useThemeStore from "@/store/useThemeStore";
import Overlay from "@/components/comn/Overlay";
import Spinner from "@/components/comn/Spinner";
import CustomStyle from "@/styles/CustomStyle";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "이화진",
//   description: "이화진 홈페이지",
//   keywords: [
//     "이화진",
//     "프로젝트",
//     "포트폴리오",
//     "블로그",
//     "프론트엔드",
//     "개발자",
//   ],
//   authors: [{ name: "이화진" }],
//   publisher: "이화진",
//   referrer: "origin-when-cross-origin",
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const currTheme = useHydration(
    useThemeStore,
    (state) => state.currentThemeOption
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currTheme !== null) {
      setIsLoading(false);
    }
  }, [currTheme]);

  return (
    <html lang="kr">
      <body className="flex flex-col min-h-screen">
        {isLoading && (
          <Overlay isVisible={isLoading}>
            <Spinner />
          </Overlay>
        )}
        <StyleProvider>
          <GlobalStyle />
          <CustomStyle />
          <Header />
          <div className="h-full flex-1 mt-14 p-5">{children}</div>
          <Footer />
        </StyleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
