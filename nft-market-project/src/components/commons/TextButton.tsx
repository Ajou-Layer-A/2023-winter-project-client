"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import theme, { ColorType } from "@/styles/theme";
import Icon from "./Icon";
import { IconTypes } from "./Icon";

interface IProps {
  children?: React.ReactNode;
  text: string;
  icon?: IconTypes;
  size?: "large" | "medium" | "small";
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const TextButton = ({
  children,
  text = "",
  icon,
  size = "medium",
  disabled = false,
  onClick = () => {},
}: IProps) => {
  const [hover, setHover] = useState(false);

  const renderFontSize = () => {
    if (size === "large") return "body2";
    if (size === "small") return "body4";
    return "body3"; //medium
  };

  const renderIconSize = () => {
    if (size === "large") return "body1";
    if (size === "small") return "body3";
    return "body2"; //medium
  };

  const renderFontColor = (): ColorType => {
    if (disabled) return "bg50";
    if (hover) return "bg0";
    return "bg30";
  };

  return (
    <Container
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      $fontColor={renderFontColor()}
    >
      {icon == null ? null : (
        <Icon type={icon} height={renderIconSize()} color={renderFontColor()} />
      )}
      <Text size={renderFontSize()} color={renderFontColor()} $bold>
        {text}
      </Text>
    </Container>
  );
};

const Container = styled.button<{
  disabled: boolean;
  $fontColor: ColorType;
}>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  gap: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  /* MEMO: for the icon button hover effect */
  div {
    svg {
      path {
        fill: ${({ $fontColor }) => theme.color[$fontColor]};
      }
    }
  }
`;

export default TextButton;
