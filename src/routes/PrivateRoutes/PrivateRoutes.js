import { Outlet, Navigate } from "react-router-dom";
import useControllers from "../../controllers";

const PrivateRoutes = () => {
  const { useGeneralHooks } = useControllers();
  const { useAuth } = useGeneralHooks();
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
