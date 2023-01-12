import React from "react";
import { Stack, Divider } from "@mui/material";
import { getChildrenByName } from "../../utils/getChildrenByName";

interface Props {
  children: React.ReactNode;
}

// [Todo] 컴파운드 컴포넌트로 만들기
// Header.item / Header.item
const HeaderMain = ({ children }: Props) => {
  console.log(getChildrenByName(children, "Item"));
  return (
    <div>
      <Stack></Stack>
    </div>
  );
};

// getChildren util 필요
const Item = () => {
  return <div>hoho</div>;
};

export const Header = Object.assign(HeaderMain, { Item });
