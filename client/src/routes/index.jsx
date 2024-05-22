import MainRoot from '../pages/MainRoot'
import Home from '../pages/Home/Home'
import Basket from '../pages/Basket/Basket'
import Add from '../pages/Add/Add'

export const ROUTES=[
    {
        element:<MainRoot/>,
        path:'',
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'add',
                element:<Add/>
            },
            {
                path:'basket',
                element:<Basket/>
            }
        ]
    }
]