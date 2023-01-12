import React from "react";
import { Empty } from "../../components/atoms/Empty";
import { Header } from "../../components/organisms";
import { Typography, Container, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Main = () => {
  return (
    <>
      <Header>
        <Header.Logo>
          <Typography variant="h1">Innovators</Typography>
        </Header.Logo>
        <Header.Item content="과거의 산물" />
        <Header.Item content="현재의 고민" />
        <Header.Profile>
          <IconButton color="secondary">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Header.Profile>
      </Header>
      <Container maxWidth="md"></Container>
    </>
  );
};
