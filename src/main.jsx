import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./components/CreatePost.jsx";
import PostListProvider from "./store/store-list.jsx"; // ✅ Add this
import PostList from "./components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/createpost",
        element: (
          <PostListProvider>
            <CreatePost />
          </PostListProvider>
        ),
        loader: () => {},
      },

      {
        path: "/Home",
        element: (
          <PostListProvider>
            <PostList />
          </PostListProvider>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
