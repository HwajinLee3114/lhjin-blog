"use client";

import styled from "styled-components";

interface TitleProps {
  title: string;
  highlightTitle?: string; // 하이라이트 적용할 제목
  desc?: string; // 소제목/설명
  className?: string;
}

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.text1};
`;

const Title: React.FC<TitleProps> = ({
  title,
  highlightTitle,
  desc,
  className,
}) => {
  return (
    <>
      <p className={`font-bold text-3xl ${className && className}`}>
        {title} {highlightTitle && <Highlight>{highlightTitle}</Highlight>}
      </p>
      {desc && <span>{desc}</span>}
    </>
  );
};

export default Title;
