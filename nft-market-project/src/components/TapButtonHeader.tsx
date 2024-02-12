"use client";

import React from "react";
import styled from "styled-components";
import Text from "./commons/Text";

import theme from "@/styles/theme";

interface IItem {
  id: number;
  name: string;
}

// MEMO: Page Tab Header
const TapButtonHeader = ({ TABS }: { TABS: IItem[] }) => {
  return (
    <Container>
      <ButtonWrapper>
        {TABS.map((TAB) => {
          return (
            <TabButton key={TAB.id}>
              <Text size="body3" color="bg10">
                {TAB.name}
              </Text>
            </TabButton>
          );
        })}
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
  height: fit-content;
  background-color: ${theme.color["bg70"]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 67px;
  left: 70px;
`;

const ButtonWrapper = styled.div`
  width: 769px;
`;

const TabButton = styled.button`
  width: fit-content;
  border: none;
  padding: ${theme.space["small"]} ${theme.space["base"]};
  border-bottom: 3px solid ${theme.color["brandPurple30"]};
  background-color: ${theme.color["transparent"]};
`;

export default TapButtonHeader;
