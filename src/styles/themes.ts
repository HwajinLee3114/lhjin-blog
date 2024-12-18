import { Theme } from "@/types/theme";

export const lightTheme: Theme = {
  colors: {
    background1: "#f5faff", // 메인 배경
    background2: "#e9edf6", // 블로그 리스트 항목 배경(.l_blog-item)
    background3: "#E4E6E8",
    background4: "#f9f9f9",

    border1: "#eaeaed",
    border2: "#dee2e6",
    border3: "#b5b5b5",
    border4: "#343a40",

    text1: "#476491", // Title 하이라이트
    text2: "#476491",
    text3: "#1B2937",
    text4: "#121D27",

    text: "#000000",
    primary: "#0070f3",
  },
  fontSize: {
    small: "12px",
    medium: "16px",
    large: "20px",
  },
};

export const darkTheme: Theme = {
  colors: {
    background1: "#333333",
    background2: "#2a2829",
    background3: "#1B2937",
    background4: "#121D27",

    border1: "#2a2a2a",
    border2: "#4d4d4d",
    border3: "#a0a0a0",
    border4: "#e0e0e0",

    text1: "#c5bcbc",
    text2: "#c5bcbc",
    text3: "#E4E6E8",
    text4: "#f9f9f9",

    text: "#545454",
    primary: "#ff4081",
  },
};

export const customTheme: Theme = {
  colors: {
    background1: "#fffaf5",
    background2: "#fff8e4",
    background3: "#ffffff",
    background4: "#ffffff",
    background5: "#ffffff",

    border1: "#eaeaed",
    border2: "#dee2e6",
    border3: "#b5b5b5",
    border4: "#343a40",

    text1: "#b8b2af",
    text2: "#b8b2af",
    text3: "#1B2937",
    text4: "#121D27",

    text: "#333333",
    primary: "#FAAD1A",
  },
};
