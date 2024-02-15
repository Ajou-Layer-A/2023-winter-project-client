"use client";

import Text from "@/components/commons/Text";
import theme from "@/styles/theme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Chip from "../commons/Chip";
import GreenLight from "../commons/GreenLight";
import Icon from "../commons/Icon";

interface IItem {
  id: number;
  image_url: string;
  description: string;
  name: string;
  network: string;
  price: number;
  total_supply: number;
  is_live: boolean;
}

interface IProps {
  item: IItem;
}

const MintCollectionList = ({ item }: IProps) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/mint/${item.name}`)}>
      <CollectionImage
        src={item.image_url}
        width={100}
        height={100}
        alt="collection Image"
      />
      <CollectionInfoWrapper>
        <TextWrapper>
          <NameWrapper>
            <Text size="title2">{item.name}</Text>
            {item.is_live ? (
              <LiveWrapper>
                <GreenLight />
                <Text size="body3">Live</Text>
              </LiveWrapper>
            ) : (
              <Text size="body3" color="bg30">
                Close
              </Text>
            )}
          </NameWrapper>
          <Text size="body3" color="bg30">
            {item.description}
          </Text>
        </TextWrapper>

        <DetailsWrapper>
          <DetailWrapper>
            <DetailText>Network</DetailText>
            <Chip>{item.network}</Chip>
          </DetailWrapper>
          <DetailWrapper>
            <DetailText>Supply</DetailText>
            <Chip>{item.total_supply}</Chip>
          </DetailWrapper>
          <DetailWrapper>
            <DetailText>Price</DetailText>
            <Chip>{item.price}</Chip>
          </DetailWrapper>
        </DetailsWrapper>
      </CollectionInfoWrapper>

      <Icon type="doubleArrow" height="title1" color="bg40"></Icon>
    </Container>
  );
};

export default MintCollectionList;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
  padding: ${theme.space["sMedium"]} ${theme.space["medium"]};
  border: 1px solid ${theme.color["bg50"]};
  background-color: ${theme.color["bg70"]};
  border-radius: 20px;

  &:hover {
    background-color: ${theme.color["bg60"]};
    svg {
      path {
        fill: ${theme.color["brandPurple30"]};
      }
    }
  }
`;

const CollectionImage = styled(Image)`
  border-radius: 50%;
`;

const CollectionInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.space["tiny"]};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.space["sMedium"]};
`;

const LiveWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.space["xSmall"]};
`;

const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${theme.space["xLarge"]};
`;

const DetailWrapper = styled.div`
  width: 30%;
`;

const DetailText = styled(Text)`
  font-size: ${theme.fontSize["body5"]};
  font-weight: 400;
`;
