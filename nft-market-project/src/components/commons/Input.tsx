import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import Text from "./Text";
import theme from "@/styles/theme";

interface IProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  value?: string | number;
  error?: {
    message?: string;
  };
  info?: {
    message: string;
  };
  placeholder?: string;
  style?: React.CSSProperties;
  prefixComponent?: React.ReactElement; // TODO: left component (e.g. SearchInput)
  suffixComponent?: React.ReactElement; // right component (e.g. Button)
}

const Input = ({
  onChange,
  type = "text",
  name,
  value,
  error = undefined,
  info = undefined,
  placeholder,
  style,
  prefixComponent,
  suffixComponent,
}: IProps) => {
  return (
    <Container>
      <InputWrapper className="input-wrapper">
        <Left>
          <PrefixContent>{prefixComponent}</PrefixContent>
          <StyledInput
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            style={style}
          />
        </Left>
        <SuffixContent>{suffixComponent}</SuffixContent>
      </InputWrapper>
      {(error?.message || info?.message) && (
        <TextWrapper>
          <Text
            $thin
            size="body4"
            color={error?.message ? "systemRed" : "systemBlue"}
          >
            {error?.message ? error?.message : info?.message}
          </Text>
        </TextWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Left = styled.div`
  flex: 1;
`;

const PrefixContent = styled.div``;

const SuffixContent = styled.div`
  padding-right: ${theme.space.xTiny};
`;

const InputWrapper = styled.div`
  transition: border-color 0.1s ease;
  padding-left: ${theme.space.sMedium};
  height: 41px;
  border: 1px solid ${theme.color.bg40};
  border-radius: 5px;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus-within {
    border: 1px solid ${theme.color.brandPurple20};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  color: ${theme.color.bg0};
  font-size: ${theme.fontSize.body3};
  line-height: ${theme.lineHeight.body3};
  border: none;
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: ${theme.color.bg40};
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 45px;
`;

export default Input;
