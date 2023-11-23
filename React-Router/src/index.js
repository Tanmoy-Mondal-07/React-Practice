import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './Root';
import About from './comp/About/About';
import Home from './comp/Home/Home';
import Contact from './comp/Contact';
import User from './comp/User';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Root/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
<Route path='' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='user/:userid' element={<User/>}/>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
