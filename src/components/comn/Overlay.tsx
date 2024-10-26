import React from "react";

interface OverlayProps {
  isVisible: boolean;
  onClick?: () => void; // 배경 클릭 시 액션을 위한 핸들러
  children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClick, children }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClick} // 배경 클릭 시 액션을 추가할 수 있음
    >
      {children}
    </div>
  );
};

export default Overlay;
