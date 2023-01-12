import React from "react";
import { Empty } from "../../components/atoms/Empty";
import { Header } from "../../components/organisms";
import { Typography, Container } from "@mui/material";

export const Main = () => {
  return (
    <>
      <Header>
        <Header.Items />
        <div>hoho</div>
        <div>hoho</div>
        <div>hoho</div>
        <div>hoho</div>
      </Header>
      <Container maxWidth="md">
        <Typography variant="h1">Innovators</Typography>
      </Container>
    </>
  );
};
