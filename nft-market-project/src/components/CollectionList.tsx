"use client";

import Text from "@/components/commons/Text";
import theme from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

interface IItem {
  id: number;
  image_url: string;
  name: string;
  offer: number;
  floor_price: number;
  owners: number;
  listed: number;
  total_supply: number;
}

interface IProps {
  item: IItem;
}

const CollectionList = ({ item }: IProps) => {
  return (
    <Container>
      <CollectionListLeft>
        <IdText size="body4" color="bg30">
          {item.id}
        </IdText>
        <ItemWrapper>
          <Image
            src={item.image_url}
            width={32}
            height={32}
            alt="collection Image"
          />
          <Text size="body3">{item.name}</Text>
        </ItemWrapper>
      </CollectionListLeft>
      <CollectionListRight>
        <CollectionText>{item.offer}</CollectionText>

        <CollectionText>{item.floor_price}</CollectionText>

        <CollectionText>{item.owners}</CollectionText>

        <CollectionText>{item.listed}</CollectionText>
      </CollectionListRight>
    </Container>
  );
};

export default CollectionList;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: ${theme.space["small"]};
  padding-bottom: ${theme.space["small"]};
  border-bottom: 1px solid ${theme.color["bg50"]};
`;

const IdText = styled(Text)`
  font-size: ${theme.fontSize["body3"]};
  width: 20px;
`;

const ItemWrapper = styled.div`
  width: 100px;
  display: flex;
  gap: ${theme.space["tiny"]};
  align-items: center;
`;

const CollectionText = styled(Text)`
  font-size: ${theme.fontSize["body3"]};
  width: 30%;
`;

const CollectionListLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space["base"]};
  width: 20%;
`;

const CollectionListRight = styled.div`
  width: 80%;
  display: flex;
`;
