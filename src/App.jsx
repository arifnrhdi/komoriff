import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./components/router/Portofolio";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
