"use client";
// import type { Metadata } from "next";

import "@/styles/globals.css";
import "@/styles/pretty.css";
import React from "react";
import StyleProvider from "@/components/StyleProvider";
import GlobalStyle from "@/styles/GlobalStyle";
import Header from "@/components/comn/Header";
import Footer from "@/components/comn/Footer";

// export const metadata: Metadata = {
//   title: "lhjin's blog",
//   description: "Hi! This is lhjin's blog",
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr">
      <body>
        <StyleProvider>
          <GlobalStyle />
          <Header />
          <div className="h-full">{children}</div>
          <Footer />
        </StyleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
