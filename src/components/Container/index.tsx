import { PropsWithChildren } from "react";

import { Box, Paper } from "@mui/material";

import * as S from "./styles";

export const Container = ({ children }: PropsWithChildren) => (
  <S.StyledBox>
    <S.StyledCard elevation={4}>{children}</S.StyledCard>
  </S.StyledBox>
);
