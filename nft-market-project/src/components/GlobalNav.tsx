"use client";

import React from "react";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import theme from "@/styles/theme";
import Icon from "./commons/Icon";
import Text from "./commons/Text";

// MEMO: Global Navigation Header
const GlobalNav = () => {
  const pathName = usePathname();

  const router = useRouter();

  return (
    <Container $pathName={pathName}>
      <LogoWrapper
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src="/images/logo.png" width={40} height={40} alt="logo image" />
      </LogoWrapper>
      <Text color="bg10">Menu</Text>
      <ButtonWrapper>
        <NavButton>
          <Icon type="store" height="title2" />
        </NavButton>
        <NavButton>
          <Icon type="mint" height="title2" />
        </NavButton>
        <NavButton>
          <Icon type="wallet" height="title2" />
        </NavButton>
      </ButtonWrapper>
    </Container>
  );
};

const LogoWrapper = styled.span`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

const Container = styled.nav<{ $pathName: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  border-right: 1px solid ${theme.color["bg50"]};
  gap: ${theme.space["base"]};
  background-color: ${theme.color["bg70"]};
  padding: ${theme.space.xSmall} ${theme.space.xSmall};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space["small"]};
`;

const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  svg {
    path {
      fill: ${theme.color["bg40"]};
    }
  }

  background-color: ${theme.color["transparent"]};

  &:hover {
    background-color: ${theme.color["bg50"]};
    svg {
      path {
        fill: ${theme.color["brandPurple20"]};
      }
    }
  }
`;

export default GlobalNav;
