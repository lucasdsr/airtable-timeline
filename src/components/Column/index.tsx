import { forwardRef, PropsWithChildren } from "react";

import { BoxProps } from "@mui/material";

import * as S from "./styles";

export const Column = forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(
  ({ children, ...otherProps }) => (
    <S.StyledColumn {...otherProps}>{children}</S.StyledColumn>
  )
);
