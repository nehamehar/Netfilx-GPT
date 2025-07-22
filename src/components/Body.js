import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'


const Body = () => {
  
// creating routing for page
   const appRouter = createBrowserRouter ([{
    
     path: "/",
     element: <Login/>,
    },
{
    path : "/browse",
    element: <Browse/>
}])
  return (
    <div>
        {/* now providing router to page {approuter}*/}
        <RouterProvider router={appRouter}/>
        </div>
  )
}

export default Body