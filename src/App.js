import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
