import { createBrowserRouter } from "react-router-dom";
import Root from "./root"
import Favoritos from "./favoritos";

const rutas = [
    {path:"/", element:<Root/>},
    {path:"/favoritos", element:<Favoritos/>},
    {path:"/dos", element:<div>Hello Word 2</div>}
  
  ]

const router = createBrowserRouter(rutas);

export default router