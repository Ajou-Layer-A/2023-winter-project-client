"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";
import theme from "@/styles/theme";
import Button from "./Button";

interface IProps {
  children?: React.ReactNode;
}
const Modal = ({ children }: IProps) => {
  return (
    <Overlay>
      <Container>
        <ButtonWrapper>
          <Button type="tartiary" icon="close" text="Esc" />
        </ButtonWrapper>
        {children}
      </Container>
    </Overlay>
  );
};
const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  border-radius: 20px;
  background-color: ${theme.color["bg80"]};
  padding: 72px ${theme.space["xLarge"]};
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  top: 72px;
  right: ${theme.space["xLarge"]};
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: center;
`;

export default Modal;
