import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout";
import { lazy, Suspense } from "react";


const _root = lazy(()=>import("./root"));
const _favoritos = lazy(()=>import("./favoritos"));

const rutas = [
    {element: <Layout/>,
      children: [
        {path:"/", element:<Suspense fallback="Cargando..."><_root/></Suspense>},
        {path:"/favoritos", element:<Suspense fallback="Cargando..."><_favoritos/></Suspense>}
      ]
  }
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