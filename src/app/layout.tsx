// "use client";

import "@/styles/globals.css";
import "@/styles/pretty.css";
import React from "react";

import { Metadata } from "next";
import LayoutContainer from "@/components/template/LayoutContainer";

export const metadata: Metadata = {
  title: "이화진",
  description: "이화진 홈페이지",
  keywords: [
    "이화진",
    "프로젝트",
    "포트폴리오",
    "블로그",
    "프론트엔드",
    "개발자",
  ],
  authors: [{ name: "이화진" }],
  publisher: "이화진",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "WGYedLKpn1zREOI5rXofXQjkcrTXjmdygEmE9EjXil8",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr">
      <body className="flex flex-col min-h-screen">
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  );
};

export default RootLayout;
