import { useState } from "react";
//Fake Data
import usersData from "../../../fakeData/users.json";

//Redux
import { useDispatch } from "react-redux";
import { logIn } from "../../../features/user";

//Router
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Functions
  const checkIfUserExist = () => {
    const users = usersData;
    const isUserInDB = users.users_registered.find(
      (user) => user.email === email
    );

    return isUserInDB ? isUserInDB : false;
  };

  const verifyUser = (user, password) => {
    return user.password === password ? true : false;
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const user = checkIfUserExist();

    if (!user) return;

    dispatch(logIn({ email }));
    const isLoginCorrect = verifyUser(user, password);

    if (isLoginCorrect) {
      localStorage.setItem("user", JSON.stringify({ email, isLoggedIn: true }));
      navigate("/dashboard");
    }
  };

  return { email, setEmail, password, setPassword, handleLogin };
};
export default useLogin;
