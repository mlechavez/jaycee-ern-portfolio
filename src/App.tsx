import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/default";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ],
  { basename: "/jaycee-ern-portfolio" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
