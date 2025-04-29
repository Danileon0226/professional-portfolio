import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import CV from "./components/layout/CV";

declare module "html2pdf.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cv",
    element: <CV />,
  },
]);

export default router;
