"use client";

import Button from "@/components/commons/Button";
import Chip from "@/components/commons/Chip";
import Icon from "@/components/commons/Icon";
import Input from "@/components/commons/Input";
import Modal from "@/components/commons/Modal";
import Text from "@/components/commons/Text";
import TextButton from "@/components/commons/TextButton";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const Div = styled.div`
  width: 300px;
  margin: 60px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 70px;
  padding-top: 67px;
`;

const Sqaure = styled.div`
  width: 300px;
  height: 200px;
`;
export default function HomePage() {
  const router = useRouter();

  const moveTest = () => {
    router.push("/test");
  };
  return (
    <Container>
      <Text color="bg30" size="title1" $bold>
        Hello
      </Text>
      <div>
        <Div>
          <TextButton text="textbutton" icon="wallet"></TextButton>
        </Div>
        <Div>
          <Button
            type="secondary"
            size="large"
            text="button"
            onClick={moveTest}
            icon="mint"
          />
        </Div>
        <Div>
          <Button size="small" text="button2" icon="wallet" />
        </Div>
        <Div>
          <Button type="tartiary" text="button2" icon="mint"></Button>
        </Div>
        <Div>
          <Input placeholder="text" info={{ message: "info message" }} />
        </Div>
        <Div>
          <Input placeholder="text" error={{ message: "error message" }} />
        </Div>
        <Div>
          <Chip>hello</Chip>
        </Div>
        {/* <Modal>
          <Sqaure>
            <Text>Test Modal</Text>
          </Sqaure>
        </Modal> */}
      </div>
    </Container>
  );
}
