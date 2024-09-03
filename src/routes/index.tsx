

import { createBrowserRouter } from "react-router-dom";
import Root from "./root"
import Favoritos from "./favoritos";
import Layout from "../layouts/layout";

const rutas = [
    {element: <Layout/>, children: [
      {path:"/", element:<Root/>},
      {path:"/favoritos", element:<Favoritos/>}
    ]}
  ]

const router = createBrowserRouter(rutas);

export default router




/*



import { createBrowserRouter } from "react-router-dom";
import Root from "./root"
import Favoritos from "./favoritos";
import Layout from "../layouts/layout";

const rutas = [
    {element: <Layout/>, children: [
      {path:"/", element:<Root/>},
      {path:"/favoritos", element:<Favoritos/>}
    ]}
  ]

const router = createBrowserRouter(rutas);

export default router


*/