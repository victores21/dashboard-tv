import "./App.css";
import { Routes, Route } from "react-router-dom";

//Hooks
import useViews from "./views";
import useRoutes from "./routes";

function App() {
  //Hooks
  const { Dashboard, Login } = useViews();
  const { PrivateRoutes } = useRoutes();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
