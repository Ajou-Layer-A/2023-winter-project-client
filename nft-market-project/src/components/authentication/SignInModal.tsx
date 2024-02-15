import theme from "@/styles/theme";
import { ChangeEvent, MouseEvent, useState } from "react";
import styled from "styled-components";
import Button from "../commons/Button";
import Input from "../commons/Input";
import Modal from "../commons/Modal";
import Text from "../commons/Text";

const SignInModal = () => {
  const [signInInfo, setSignInInfo] = useState<{
    id: string;
    password: string;
  }>({
    id: "",
    password: "",
  });

  const handleSignInFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const isSubmitButtonDisabled = () => {
    if (signInInfo.id === "" || signInInfo.password === "") {
      return true;
    }
    return false;
  };

  //TODO : POST signin info
  const handleSignInFormSubmit = async () => {
    // console.log(signInInfo);
    // const response = await fetch(
    //   ``,{
    //     method:`POST`,
    //     body : JSON.stringify(signInInfo)
    //   }
    // );
    // if (!response.ok){
    //   throw new Error('')
    // }
  };

  return (
    <Modal>
      <TitleWrapper>
        <Text size="display"> Sign In</Text>
      </TitleWrapper>
      <InputWrapper>
        <Input
          placeholder="ID"
          name="id"
          value={signInInfo.id}
          onChange={handleSignInFormChange}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={signInInfo.password}
          onChange={handleSignInFormChange}
        />
        <Button
          type="primary"
          size="large"
          text="Sign In"
          onClick={handleSignInFormSubmit}
          disabled={isSubmitButtonDisabled()}
        />
      </InputWrapper>
      <TextWrapper>
        <Text size="body5" color="bg40">
          Don't have Account?
        </Text>
        &nbsp;
        <Text size="body5" color="systemBlue">
          Sign Up
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
export default SignInModal;
