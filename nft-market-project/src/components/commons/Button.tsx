"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";
import Text from "./Text";
import theme, { ColorType, FontSizeType } from "@/styles/theme";
import Icon from "./Icon";
import { IconTypes } from "./Icon";

type ButtonSizeType = "large" | "medium" | "small";

interface IProps {
  text?: string;
  type?: "primary" | "secondary" | "tartiary";
  size?: ButtonSizeType;
  icon?: IconTypes;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
}
const Button = ({
  text = "",
  size = "medium",
  type = "primary",
  icon,
  onClick = () => {},
  disabled = false,
  loading = false,
  style,
}: IProps) => {
  const [hover, setHover] = useState(false);

  const renderFontColor = (): ColorType => {
    if (type === "primary") {
      if (disabled) return "bg20";
      return "bg0";
    }
    if (type === "secondary") {
      if (disabled) return "bg20";
      return "bg50";
    }
    if (type === "tartiary") {
      if (disabled) return "bg40";
      return "bg10";
    }
    return "bg0";
  };

  const renderButtonColor = (): ColorType => {
    if (type === "primary") {
      if (disabled) return "bg40";
      if (loading) return "brandPurple10";
      if (hover) return "brandPurple20";
      return "brandPurple30"; // default
    }

    if (type === "secondary") {
      if (disabled) return "bg40";
      if (loading) return "brandYellow10";
      if (hover) return "brandYellow20";
      return "brandYellow30"; // default
    }

    if (type === "tartiary") {
      if (loading) return "bg60";
      if (hover) return "bg50";
      return "transparent"; // default & disabled
    }

    return "brandPurple30";
  };

  const renderFontSize = (): FontSizeType => {
    if (size === "large") return "body2";
    if (size === "small") return "body4";
    return "body3"; //medium
  };

  const renderIconSize = () => {
    if (size === "large") return "body1";
    if (size === "small") return "body3";
    return "body2"; //medium
  };

  return (
    <Container
      color={renderButtonColor()}
      size={size}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
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
      <Text color={renderFontColor()} size={renderFontSize()} $bold>
        {text}
      </Text>
    </Container>
  );
};

const Container = styled.button<{
  color: ColorType;
  disabled: boolean;
  size: ButtonSizeType;
  $fontColor: ColorType;
  type: "primary" | "secondary" | "tartiary";
}>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ color }) => theme.color[color]};
  padding: ${({ size }) =>
    size === "large"
      ? `12px 16px`
      : size === "small"
      ? `8px 12px`
      : `10px 14px`};

  gap: 4px;

  width: 100%;
  border-radius: 5px;
  border: ${({ type, disabled }) =>
    type === "tartiary"
      ? disabled
        ? `1px solid ${theme.color["bg40"]}`
        : `1px solid ${theme.color["bg10"]}`
      : "none"};

  display: flex;
  justify-content: center;
  align-items: center;

  /* MEMO: for the icon button hover effect */
  svg {
    path {
      fill: ${({ $fontColor }) => theme.color[$fontColor]};
    }
  }
`;

export default Button;
