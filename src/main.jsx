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
import Faq from "./components/Faq/Faq";
import Pricing from "./components/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Listed',
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <Read />,
          },
          {
            path: "WishList",
            element: <WishList />,
          },
        ],
      },
      {
        path: '/Pages',
        element: <PagesToRead />,
      },
      {
        path: '/Faq',
        element: <Faq />,
      },
      {
        path: '/Pricing',
        element: <Pricing />,
      },
      {
        path: '/BookDetails/:bookId',
        element: <BookDetails />,
        loader: () => fetch('../Books.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors font-sans">
      <RouterProvider router={router} />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </div>
  </React.StrictMode>
);