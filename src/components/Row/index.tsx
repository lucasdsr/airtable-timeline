import { forwardRef, PropsWithChildren } from "react";

import { BoxProps } from "@mui/material";

import * as S from "./styles";

export const Row = forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(
  ({ children, ...otherProps }, ref) => (
    <S.StyledRow ref={ref} {...otherProps}>
      {children}
    </S.StyledRow>
  )
);
