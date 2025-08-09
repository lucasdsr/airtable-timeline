import { PropsWithChildren } from "react";

import * as S from "./styles";

export const Row = ({ children }: PropsWithChildren) => (
  <S.StyledRow>{children}</S.StyledRow>
);
