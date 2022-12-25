import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <StrictMode>
    <ChakraProvider resetCSS>
      <App />
    </ChakraProvider>
  // </StrictMode>
);
