"use client";

import React from "react";
import styled from "styled-components";
import theme from "@/styles/theme";

const GreenLight = () => {
  return <Container></Container>;
};

const Container = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${theme.color["systemGreen"]};
  border-radius: 50%;
  animation: beat 2s infinite;
  box-shadow: 0 0 2px rgba(0, 255, 0, 0.7);

  @keyframes beat {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
      box-shadow: 0 0 2px rgba(0, 255, 0, 0.7);
    }
    50% {
      transform: scale(1.1);
      opacity: 0.5;
      box-shadow: 0 0 2px rgba(0, 255, 0, 1); /* 퍼지는 효과와 밝기 증가 */
    }
  }
`;

export default GreenLight;
