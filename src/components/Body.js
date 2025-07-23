import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import { useDispatch} from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { supabase } from '../supabaseClient'

const Body = () => {
  const dispatch = useDispatch();
// creating routing for page
   const appRouter = createBrowserRouter ([{
    
     path: "/",
     element: <Login/>,
    },
{
    path : "/browse",
    element:(<ProtectedRoute>
          <Browse />
        </ProtectedRoute>)
},
])

  useEffect(() => {
    // This listener watches for changes in Supabase's auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        // If a session exists (user is logged in), dispatch addUser
        const { user } = session;
        dispatch(addUser({ uid: user.id, email: user.email, displayName: user.user_metadata.full_name }));
      } else {
        // If no session (user is logged out), dispatch removeUser
        dispatch(removeUser());
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      subscription?.unsubscribe();
    };
  }, [dispatch]); // The effect depends on the dispatch function
  return (
    <div>

        {/* now providing router to page {approuter}*/}
        <RouterProvider router={appRouter}/>
        </div>
  )
}

export default Body