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
      <body className="h-screen">
        {isLoading && (
          <Overlay isVisible={isLoading}>
            <Spinner />
          </Overlay>
        )}
        <StyleProvider>
          <GlobalStyle />
          <Header />
          <div className="h-full flex-grow mt-14 p-5">{children}</div>
          <Footer />
        </StyleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
