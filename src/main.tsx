import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

// Importing the monaco editor.. this breaks the build...
import { initializeMode } from "monaco-graphql/initializeMode";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(monaco);
initializeMode({
  formattingOptions: {
    prettierConfig: {
      printWidth: 120,
    },
  },
});
