"use client";
// import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/pretty.css";
import StyleProvider from "@/components/StyleProvider";
import GlobalStyle from "@/styles/GlobalStyle";
import Header from "@/components/comn/Header";

// export const metadata: Metadata = {
//   title: "lhjin's blog",
//   description: "Hi! This is lhjin's blog",
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr">
      <body>
        <StyleProvider>
          <Header />
          {children}
          <GlobalStyle />
        </StyleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
