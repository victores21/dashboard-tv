import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((store) => store.user);
  let userLocalstorage = localStorage.getItem("user");

  if (userLocalstorage.length === 0) return user && user.isLoggedIn;

  userLocalstorage = JSON.parse(localStorage.getItem("user"));

  return userLocalstorage.isLoggedIn;
};

export default useAuth;
