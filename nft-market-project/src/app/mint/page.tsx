"use client";

import Text from "@/components/commons/Text";
import theme from "@/styles/theme";
import styled from "styled-components";
import items from "../../lib/mock2.json";
import MintCollectionList from "@/components/mints/MintCollectionList";

export default function MintPage() {
  return (
    <Container>
      <TextWrapper>
        <Text size="title2">Live Mints</Text>
        <Text size="body3" color="bg40">
          You can mint collections
        </Text>
      </TextWrapper>
      <MintItemsWrapper>
        {items.map((item) => {
          return <MintCollectionList key={item.id} item={item} />;
        })}
      </MintItemsWrapper>
    </Container>
  );
}

const Container = styled.div`
  row-gap: ${theme.space["base"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MintItemsWrapper = styled.div`
  width: 769px;
  display: flex;
  flex-direction: column;
  row-gap: ${theme.space["sMedium"]};
`;
