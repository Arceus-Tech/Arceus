import React from "react";
import { useLottie } from "lottie-react";
import scrollDownAnimation from "./anim/scroll-down.json";

const ScrollDownAnimation = () => {
  const options = {
    animationData: scrollDownAnimation,
    loop: true,
    
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default ScrollDownAnimation;