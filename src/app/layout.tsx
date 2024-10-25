"use client";
// import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/pretty.css";
import StyleProvider from "@/components/StyleProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import GlobalStyle from "@/styles/GlobalStyle";

// export const metadata: Metadata = {
//   title: "lhjin's blog",
//   description: "Hi! This is lhjin's blog",
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr">
      <body>
        <StyleProvider>
          <ThemeSwitcher />
          {children}
          <GlobalStyle />
        </StyleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
