import { PropsWithChildren, ReactElement, ReactNode } from "react";

import { ThemeProvider as Provider } from "@mui/material/styles";

import { theme } from "./theme";

export const ThemeProvider = ({
  children,
}: PropsWithChildren): ReactElement => (
  <Provider theme={theme}>{children}</Provider>
);
