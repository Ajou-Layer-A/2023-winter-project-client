import theme from "@/styles/theme";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Button from "../commons/Button";
import Input from "../commons/Input";
import Modal from "../commons/Modal";
import Text from "../commons/Text";

const SignUpModal = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpInfo, setSignUpInfo] = useState<{
    id: string;
    eMail: string;
    password: string;
  }>({
    id: "",
    eMail: "",
    password: "",
  });

  const handleSignUpFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const isSubmitButtonDisabled = () => {
    if (
      signUpInfo.id === "" ||
      signUpInfo.eMail === "" ||
      signUpInfo.password === "" ||
      signUpInfo.password != confirmPassword
    ) {
      return true;
    }
    return false;
  };

  //TODO : POST check id & POST signup info
  const handleCheckId = async () => {};
  const handleSignUpFormSubmit = async () => {};

  return (
    <Modal>
      <TitleWrapper>
        <Text size="display"> Sign Up</Text>
      </TitleWrapper>
      <InputWrapper>
        <Input
          placeholder="ID"
          name="id"
          value={signUpInfo.id}
          onChange={handleSignUpFormChange}
          suffixComponent={
            <Button
              type="primary"
              size="medium"
              text="Check ID"
              disabled={!signUpInfo.id}
              onClick={handleCheckId}
            />
          }
        />
        <Input
          placeholder="E-mail"
          name="eMail"
          value={signUpInfo.eMail}
          onChange={handleSignUpFormChange}
        />
        <Input
          placeholder="Password"
          name="password"
          value={signUpInfo.password}
          onChange={handleSignUpFormChange}
        />
        <Input
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          error={
            signUpInfo.password != confirmPassword && confirmPassword
              ? { message: "Not matched" }
              : { message: "" }
          }
        />
        <Button
          type="primary"
          size="large"
          text="Sign Up"
          disabled={isSubmitButtonDisabled()}
          onClick={handleSignUpFormSubmit}
        />
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
  gap: ${theme.space["base"]};
`;

const TextWrapper = styled.div`
  margin-top: ${theme.space["xTiny"]};
`;

export default SignUpModal;
