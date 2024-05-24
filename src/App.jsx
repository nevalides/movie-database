import { Children, useState } from "react";
import Header from "./components/Header";
import MainBody from "./pages/Homepage/MainBody";
import Footer from "./components/Footer";
import FindList from "./pages/FindList";
import Detail from "./pages/Detail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DbContext } from "./store/db-context";
import Layout from "./layout/Layout";
import SearchContextProvider from "./store/search-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainBody />,
      },
      {
        path: ":mediaType",
        children: [
          {
            index: true,
            element: <FindList />,
          },
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
      <SearchContextProvider>
        <RouterProvider router={router} />
      </SearchContextProvider>
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
