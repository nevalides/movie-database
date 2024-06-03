// import { Children, useState } from "react";
// import Header from "./components/Header";
// import MainBody from "./pages/Homepage/MainBody";
// import Footer from "./components/Footer";
// import FindList from "./pages/List/FindList";
// import Detail from "./pages/Detail/Detail";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
// import { DbContext } from "./store/db-context";
import Layout from "./layout/Layout";
import SearchContextProvider from "./store/search-context";
import routes from "./config/route";
import { Suspense } from "react";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <MainBody />,
//       },
//       {
//         path: ":mediaType",
//         children: [
//           {
//             index: true,
//             element: <FindList />,
//           },
//           {
//             path: ":id",
//             element: <Detail />,
//           },
//         ],
//       },
//     ],
//   },
//   {},
// ]);

const LoadingPage = () => {
  return <div className='w-[100vw] h-[100vh] bg-base text-white font-semibold flex items-center justify-center'>Loading...</div>
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            {routes.private.map((route, index) => {
              const Component = route?.component
              return <Route key={index} {...route} element={
                <SearchContextProvider>
                  <Layout>
                    <Component title={route?.name} />
                  </Layout>
                </SearchContextProvider>
              } />
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* <SearchContextProvider>
        <RouterProvider router={router} />
      </SearchContextProvider> */}
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
