import React from "react";
import { Grid, Stack, Divider } from "@mui/material";
import { getChildrenByName } from "../../utils/getChildrenByName";

interface Props {
  children: React.ReactNode;
}

// [Todo] 컴파운드 컴포넌트로 만들기
// Header.item / Header.item
const HeaderMain = ({ children }: Props) => {
  const arrayHeaderItem = getChildrenByName(children, "Item");
  console.log(getChildrenByName(children, "Itessm"));
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={9}>
        <Stack>{/* {} */}</Stack>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

const Logo = () => {};

// getChildren util 필요
const Items = () => {
  return <div>hoho</div>;
};

export const Header = Object.assign(HeaderMain, { Items });
