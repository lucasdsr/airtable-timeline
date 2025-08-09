import { ReactNode } from "react";
import ReactDOM from "react-dom/client";

import { Container, Timeline } from "./components";

import { ThemeProvider } from "./utils/themes/provider.js";

const App = (): ReactNode => (
  <ThemeProvider>
    <Container>
      <Timeline />
    </Container>
  </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
