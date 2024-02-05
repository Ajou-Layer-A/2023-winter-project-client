import theme from "@/styles/theme";
import styled from "styled-components";
import Button from "../commons/Button";
import Input from "../commons/Input";
import Modal from "../commons/Modal";
import Text from "../commons/Text";

const SignUpModal = () => {
  return (
    <Modal>
      <TitleWrapper>
        <Text size="display"> Sign Up</Text>
      </TitleWrapper>
      <InputWrapper>
        <Input placeholder="ID" />
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <Button type="primary" size="large" text="Sign Up" />
      </InputWrapper>
      <TextWrapper>
        <Text size="body5" color="bg40">
          Already have Account?
        </Text>
        &nbsp;
        <Text size="body5" color="systemBlue">
          Sign In
        </Text>
      </TextWrapper>
    </Modal>
  );
};

const TitleWrapper = styled.div`
  margin-bottom: ${theme.space["xLarge"]};
`;

const InputWrapper = styled.div`
  width: 380px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${theme.space["xSmall"]};
`;

const TextWrapper = styled.div`
  margin-top: ${theme.space["xTiny"]};
`;

export default SignUpModal;
