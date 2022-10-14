import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((store) => store.user);
  // const user = { isLoggedIn: true };

  return user && user.isLoggedIn;
};

export default useAuth;
