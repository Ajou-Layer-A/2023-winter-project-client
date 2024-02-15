"use client";

import React from "react";
import styled from "styled-components";
import Text from "./Text";

import theme from "@/styles/theme";

interface IProps {
  children: React.ReactNode;
}
const Chip = ({ children }: IProps) => {
  return (
    <Container>
      <Text size="body4" color="bg30" $thin>
        {children}
      </Text>
    </Container>
  );
};

const Container = styled.span`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px ${theme.space["tiny"]};
  background-color: ${theme.color["bg50"]};
  border-radius: 5px;
`;

export default Chip;
