import { PropsWithChildren } from "react";

import * as S from "./styles";

export const Column = ({ children }: PropsWithChildren) => (
  <S.StyledColumn>{children}</S.StyledColumn>
);
