import { createBrowserRouter } from "react-router-dom";

import Index from "../view";
import Create from "../view/create";
import Detail from "../view/detail";
import Edit from "../view/edit";

export const routers = createBrowserRouter([
    {
        path:'/',
        element:<Index />
    },
    {
        path:'/products/create',
        element: <Create />
    },
    {
        path:'/products/:id/edit',
        element:<Edit />
    },
    {
        path:'/products/:id',
        element:<Detail />
    }
])