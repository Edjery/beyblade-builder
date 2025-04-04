import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router.tsx";
import queryClient from "./values/queryClient.ts";
import theme from "./values/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <ToastContainer limit={1} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
