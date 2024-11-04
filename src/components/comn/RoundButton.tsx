import React from "react";

interface RoundButtonProp {
  event?: () => void;
  img: React.ReactNode;
  styles?: string;
}

export default function RoundButton({ event, img, styles }: RoundButtonProp) {
  return (
    <button className={styles} onClick={event}>
      {React.isValidElement(img) ? img : <></>}
    </button>
  );
}
