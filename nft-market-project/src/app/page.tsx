"use client";

import Button from "@/components/commons/Button";
import Icon from "@/components/commons/Icon";
import Text from "@/components/commons/Text";
import TextButton from "@/components/commons/TextButton";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const Div = styled.div`
  margin: 20px;
`;
export default function Home() {
  const router = useRouter();

  const moveTest = () => {
    router.push("/test");
  };
  return (
    <div>
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
      </div>
    </div>
  );
}
