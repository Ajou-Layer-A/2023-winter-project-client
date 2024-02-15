import styled from "styled-components";

import MintIcon from "@/assets/icons/mint.svg";
import WalletIcon from "@/assets/icons/wallet.svg";
import CloseIcon from "@/assets/icons/close.svg";
import CartIcon from "@/assets/icons/cart.svg";
import StoreIcon from "@/assets/icons/store.svg";
import DoubleArrowIcon from "@/assets/icons/doubleArrow.svg";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import LogoIcon from "@/assets/icons/logo.svg";
import LeftIcon from "@/assets/icons/left.svg";

import theme, { ColorType, FontSizeType } from "@/styles/theme";

export type IconTypes =
  | "mint"
  | "wallet"
  | "close"
  | "cart"
  | "store"
  | "doubleArrow"
  | "plus"
  | "minus"
  | "logo"
  | "left";

interface IProps {
  type: IconTypes;
  color?: ColorType;
  height?: FontSizeType | number;
}

const Icon = ({ type, height = "body3", color = "bg0" }: IProps) => {
  const renderIcon = () => {
    switch (type) {
      case "mint":
        return <MintIcon />;
      case "wallet":
        return <WalletIcon />;
      case "close":
        return <CloseIcon />;
      case "cart":
        return <CartIcon />;
      case "store":
        return <StoreIcon />;
      case "doubleArrow":
        return <DoubleArrowIcon />;
      case "plus":
        return <PlusIcon />;
      case "minus":
        return <MinusIcon />;
      case "logo":
        return <LogoIcon />;
      case "left":
        return <LeftIcon />;
    }
  };
  console.log(renderIcon());
  return (
    <Container height={height} color={color}>
      {renderIcon()}
    </Container>
  );
};

const Container = styled.div<{
  height: FontSizeType | number;
  color: ColorType;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: ${({ height }) =>
      typeof height === "number" ? `${height}px` : theme.fontSize[height]};
    height: ${({ height }) =>
      typeof height === "number" ? `${height}px` : theme.fontSize[height]};
    path {
      fill: ${({ color }) => theme.color[color]};
      object-fit: contain;
    }
    circle {
      fill: ${({ color }) => theme.color[color]};
      object-fit: contain;
    }
  }
`;

export default Icon;
