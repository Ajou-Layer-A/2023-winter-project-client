"use client";

import Chip from "@/components/commons/Chip";
import GreenLight from "@/components/commons/GreenLight";
import Text from "@/components/commons/Text";
import theme from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";
import Button from "@/components/commons/Button";
import TextButton from "@/components/commons/TextButton";
import { useRouter } from "next/navigation";

export default function MintCollectionPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const router = useRouter();
  return (
    <Container>
      <CollectionWrapper>
        <CollectionImage
          src={
            "https://pbs.twimg.com/profile_images/1514324107881431045/vsF28_QV_400x400.jpg"
          }
          width={270}
          height={270}
          alt="collection Image"
        />
        <Right>
          <CollectionInfoWrapper>
            <TextWrapper>
              <NameWrapper>
                <Text size="title2">{name}</Text>
                {true ? (
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
                We are building the best community on the internet
              </Text>
            </TextWrapper>

            <DetailsWrapper>
              <DetailWrapper>
                <DetailText>Network</DetailText>
                <Chip>Ethereum</Chip>
              </DetailWrapper>
              <DetailWrapper>
                <DetailText>Supply</DetailText>
                <Chip>10000</Chip>
              </DetailWrapper>
              <DetailWrapper>
                <DetailText>Price</DetailText>
                <Chip>2.333</Chip>
              </DetailWrapper>
            </DetailsWrapper>
          </CollectionInfoWrapper>

          <ButtonWrapper>
            <QuantityWrapper>
              <TextButton size="large" icon="minus" />
              <Text>4</Text>
              <TextButton size="large" icon="plus" />
            </QuantityWrapper>
            <Button text="Mint" size="large"></Button>
          </ButtonWrapper>
        </Right>
      </CollectionWrapper>
      <TextButton icon="left" text="back" onClick={() => router.back()} />
    </Container>
  );
}
const Container = styled.div`
  width: 765px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20%;
  gap: ${theme.space["sMedium"]};
`;

const CollectionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${theme.space["medium"]};
`;

const CollectionImage = styled(Image)`
  border-radius: 10px;
`;

const Right = styled.div`
  width: 462px;
  display: flex;
  flex-direction: column;
  gap: ${theme.space["medium"]};
`;

const CollectionInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.space["medium"]};
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
  display: flex;
  flex-direction: column;
  gap: ${theme.space["xTiny"]};
`;

const DetailText = styled(Text)`
  font-size: ${theme.fontSize["body5"]};
  font-weight: 400;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.space["xSmall"]};
`;
const QuantityWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color["bg70"]};
  border: 1px solid ${theme.color["bg50"]};
  border-radius: 5px;
  padding: ${theme.space["xSmall"]} 0px;
`;
