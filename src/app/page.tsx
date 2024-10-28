"use client";
import styled from "styled-components";

export default function Home() {
  const Button = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
  `;
  return (
    <div>
      <div>여기가 홈이야?</div>
      <Button className="p-2 text-white rounded-md">테마별 버튼 테스트</Button>
    </div>
  );
}
