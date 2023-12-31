import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Video from './pages/Video';

import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Route, 
  Routes, 
  useNavigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Video />,
  },
  {
      path: "/Home",
      element: <App />,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
