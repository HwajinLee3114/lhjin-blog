import React from "react";

interface CodeBlockProps {
  language: string;
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => (
  <pre className={`bg-gray-800 text-white p-4 rounded-lg overflow-x-auto`}>
    <code className={`language-${language}`}>{children}</code>
  </pre>
);

export default CodeBlock;
