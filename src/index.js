// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from './routes/App';
// import Bag from "./routes/Bag";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import reportWebVitals from './reportWebVitals';
// import Home from './routes/Home';
// import { Provider } from "react-redux";
// import myntraStore from './store';

// const router = createBrowserRouter([
//   {
//     path: "/", element: <App />,
//     children: [
//       { path: "/", element: <Home /> },
//       {
//         path: "/bag",
//         element: <Bag />,
//       }
//     ]
//   }

// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={myntraStore}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// );
// // reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './routes/App';
import Bag from "./routes/Bag";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import reportWebVitals from './reportWebVitals'; // Commented out
import Home from './routes/Home';
import { Provider } from "react-redux";
import myntraStore from './store';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
// reportWebVitals(); // Commented out
