import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
// import AuthWrapper from './Auth/AuthWrapper.jsx';
import Cart from './pages/Cart.jsx';
import './index.css'; //
const AuthWrapper = lazy(() => import("./Auth/AuthWrapper.jsx"));
// const LatestProducts = lazy(() => import("./pages/LatestProduct.jsx"));
import LatestProduct from './pages/LatestProduct.jsx';
import ViewAll from './pages/viewproducts/ViewProducts.jsx';




// Create browser router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: ( 
      <Suspense fallback={<div>Loading...</div>}>
      <AuthWrapper />
    </Suspense>
    ),
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      { 
        path: 'cart', 
        element: <Cart/>,
      },
      { 
        path: 'viewall', 
        element: <LatestProduct/>,
      },
      { 
        path: 'view-product', 
        element: <ViewAll/>,
      },
    ],
  },





]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
