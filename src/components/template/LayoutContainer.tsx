"use client";
import React from "react";

import StyleProvider from "@/components/StyleProvider";
import GlobalStyle from "@/styles/GlobalStyle";
import Header from "@/components/template/header/Header";
import Footer from "@/components/template/Footer";
import { useHydration } from "@/hooks/useHydration";
import useThemeStore from "@/store/useThemeStore";
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
