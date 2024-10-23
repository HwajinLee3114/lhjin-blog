import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lhjin's blog",
  description: "Hi! This is lhjin's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
