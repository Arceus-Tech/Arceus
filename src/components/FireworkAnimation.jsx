import React from "react";
import { useLottie } from "lottie-react";
import fireWorkAnimation from "./anim/fire-works.json";

const FireworkAnimation = () => {
  const options = {
    animationData: fireWorkAnimation,
    loop: false,
    
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default FireworkAnimation;