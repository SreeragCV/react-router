import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import RootLayer from "./pages/Root";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home/>} />
//     <Route path="/name" element={<p>helloooo</p>} />
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayer />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetails /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
