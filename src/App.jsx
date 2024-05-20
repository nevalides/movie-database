import { Children, useState } from "react";
import Header from "./components/Header";
import MainBody from "./pages/MainBody";
import Footer from "./components/Footer";
import FindList from "./pages/FindList";
import Detail from "./pages/Detail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DbContext } from "./store/db-context";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainBody />,
      },
      {
        path: ":mediaType",
        element: <FindList />,
        children: [
          {
            path: ":id",
            element: <Detail />,
          },
        ],
      },
    ],
  },
  {},
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Header /> */}
      {/* <MainBody /> */}
      {/* <FindList /> */}
      {/* <Detail /> */}
      {/* <Footer /> */}
      {/* <DbContext.Provider></DbContext.Provider> */}
    </>
  );
}

export default App;
