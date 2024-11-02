"use client";
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

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <>
      {currTheme && (
        <StyleProvider>
          <GlobalStyle />
          <CustomStyle />
          <Header />
          <div className="h-full flex-1 mt-14 p-5">{children}</div>
          <Footer />
        </StyleProvider>
      )}
    </>
  );
}
