"use client";

import CollectionList from "@/components/CollectionList";
import Input from "@/components/commons/Input";
import Text from "@/components/commons/Text";
import HomeMintHeader from "@/components/TapButtonHeader";
import theme from "@/styles/theme";
import styled from "styled-components";
import items from "../../lib/mock.json";

const TABS = [
  {
    id: 1,
    name: "Trending",
  },
  {
    id: 2,
    name: "item",
  },
];

export default function HomePage() {
  return (
    <Container>
      <HomeMintHeader TABS={TABS} />
      <ContentsWrapper>
        <TextWrapper>
          <Text size="title2">Trending Collections</Text>
          <Text size="body3" color="bg40">
            You can check trending collections
          </Text>
        </TextWrapper>
        <InputWrapper>
          <Input placeholder="search" />
        </InputWrapper>
        <CollectionWrapper>
          <CollectionHeaderWrapper>
            <CollectionHeaderLeft>
              <CollectionHeaderNameText>Collection</CollectionHeaderNameText>
            </CollectionHeaderLeft>
            <CollectionHeaderRight>
              <CollectionHeaderText>Top&nbsp;Offer</CollectionHeaderText>
              <CollectionHeaderText>Floor&nbsp;Price</CollectionHeaderText>
              <CollectionHeaderText>Owner</CollectionHeaderText>
              <CollectionHeaderText>Listed</CollectionHeaderText>
            </CollectionHeaderRight>
          </CollectionHeaderWrapper>

          {items.map((item) => {
            return <CollectionList key={item.id} item={item} />;
          })}
        </CollectionWrapper>
      </ContentsWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding-left: 70px;
  padding-top: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  row-gap: ${theme.space["base"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 400px;
  height: fit-content;
  display: flex;
  align-items: center;
`;

const CollectionWrapper = styled.div`
  width: 769px;
`;

const CollectionHeaderWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;

  padding-top: ${theme.space["tiny"]};
  padding-bottom: ${theme.space["tiny"]};
  border-top: 1px solid ${theme.color["bg50"]};
  border-bottom: 1px solid ${theme.color["bg50"]};
`;

const CollectionHeaderLeft = styled.div`
  width: 20%;
`;

const CollectionHeaderRight = styled.div`
  width: 80%;
  display: flex;
`;

const CollectionHeaderNameText = styled(Text)`
  font-size: ${theme.fontSize["body5"]};
  color: ${theme.color["bg50"]};
  margin-left: 44px;
`;

const CollectionHeaderText = styled(Text)`
  font-size: ${theme.fontSize["body5"]};
  color: ${theme.color["bg50"]};
  width: 30%;
`;
