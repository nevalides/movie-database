import React from "react";
import { APP_NAME } from "./config";

const Home = React.lazy(() => import('../pages/Homepage/MainBody'))
const List = React.lazy(() => import('../pages/List/FindList'))
const Detail = React.lazy(() => import('../pages/Detail/Detail'))
const SearchDiscover = React.lazy(() => import('../pages/Discover'))

const GenerateTitle = (name) => (`${name} | ${APP_NAME}`)

const privateRoutes = [
    { exact: true, path: '/', name: GenerateTitle('Home'), component: Home },
    { exact: true, path: '/:mediaType', name: GenerateTitle('List'), component: List },
    { exact: true, path: '/:mediaType/:id', name: GenerateTitle('Detail'), component: Detail },
    { exact: true, path: '/search', name: GenerateTitle('Discover Search'), component: SearchDiscover }
]

const routes = { private: privateRoutes }

export default routes