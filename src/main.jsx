import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import ErrorPage from "./error-page";
import BookDetails from "./components/BookDetails/BookDetails";
import WishList from "./components/WishList/WishList";
import Read from "./components/Read/Read";
import toast, { Toaster } from 'react-hot-toast';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Listed',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <Read></Read> ,
          },
          {
            path: "WishList",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: '/Pages',
        element: <PagesToRead></PagesToRead>
      },
     
      {
        path: '/BookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../Books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>
);