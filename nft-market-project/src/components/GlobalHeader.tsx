"use client";

import React from "react";
import styled from "styled-components";

import theme from "@/styles/theme";
import Icon from "./commons/Icon";
import Button from "./commons/Button";
import Input from "./commons/Input";
import SignUpModal from "./authentication/SignUpModal";
import SignInModal from "./authentication/SignInModal";
import { isModalOpenState } from "@/atoms/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

// MEMO: Global Navigation Header
const GlobalHeader = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  //   const setIsModalOpen = useSetRecoilState(isModalOpenState);
  return (
    <Container>
      <Left>
        <InputWrapper>
          <Input placeholder="Search" />
        </InputWrapper>
      </Left>
      <Right>
        <ButtonWrapper>
          {" "}
          <Button
            type="tartiary"
            size="small"
            text="Sign Up"
            onClick={() => {
              setIsModalOpen("signUp");
            }}
          ></Button>
        </ButtonWrapper>
        {isModalOpen === "signUp" && <SignUpModal />}

        <ButtonWrapper>
          {" "}
          <Button
            type="secondary"
            size="small"
            text="Sign In"
            onClick={() => {
              setIsModalOpen("signIn");
            }}
          ></Button>
        </ButtonWrapper>
        {isModalOpen === "signIn" && <SignInModal />}
      </Right>
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
  display: flex;
  background-color: ${theme.color["bg90"]};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding-top: ${theme.space["xSmall"]};
  padding-bottom: ${theme.space["xSmall"]};
`;

const InputWrapper = styled.div`
  display: flex;
  width: 350px;
`;

const Left = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: ${theme.space.mLarge};
  margin-left: 82px;
`;

const Right = styled.div`
  display: flex;
  width: fit-content;
  gap: ${theme.space.xSmall};
  margin-right: ${theme.space["xSmall"]};
`;

const ButtonWrapper = styled.div`
  width: 80px;
`;

export default GlobalHeader;
