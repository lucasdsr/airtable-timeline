import { ReactNode, StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { Container, Timeline } from "./components";

import { ThemeProvider } from "./utils/themes/provider.js";

export const App = (): ReactNode => (
  <ThemeProvider>
    <Container>
      <Timeline />
    </Container>
  </ThemeProvider>
);
