import { Suspense } from "react";
import { AppRoutes } from "./routes";
import { Loader } from "./components";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={AppRoutes} />
    </Suspense>
  );
};

export default App;
