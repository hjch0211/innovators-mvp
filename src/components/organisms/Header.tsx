import React from "react";
import { Grid, Stack, Divider, Typography, Button } from "@mui/material";
import { getChildrenByName } from "../../utils/getChildrenByName";
import { isEmpty } from "../../utils/isEmpty";

interface Props {
  children: React.ReactNode;
}

// [Todo] 의존성 주입을 조금 더 신경 써보는 것은 어떨까
const HeaderMain = ({ children }: Props) => {
  const arrayHeaderItem = getChildrenByName(children, "Item");
  const arrayHeaderLogo = getChildrenByName(children, "Logo");
  const arrayHeaderProfile = getChildrenByName(children, "Profile");

  // [Todo] styled 컴포넌트로 떼어내기
  return (
    <Grid container spacing={2} padding={3}>
      <Grid item xs={2}>
        {isEmpty(arrayHeaderLogo) ? "" : arrayHeaderLogo}
      </Grid>

      <Grid item xs={9}>
        {isEmpty(arrayHeaderItem) ? (
          ""
        ) : (
          <Stack direction="row" spacing={1}>
            {arrayHeaderItem}
          </Stack>
        )}
      </Grid>

      <Grid item xs={1} display="flex" justifyContent="center">
        {isEmpty(arrayHeaderProfile) ? "" : arrayHeaderProfile}
      </Grid>
    </Grid>
  );
};

const Logo = ({ children }: Props) => <>{children}</>;

const Item = ({ content }: { content: string }) => {
  return (
    <Button variant="text" color="secondary">
      {content}
    </Button>
  );
};

const Profile = ({ children }: Props) => <>{children}</>;

export const Header = Object.assign(HeaderMain, { Logo, Item, Profile });
