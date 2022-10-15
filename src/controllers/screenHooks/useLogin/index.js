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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorInForm, setIsErrorInForm] = useState();

  //Functions
  const checkIfUserExist = () => {
    const users = usersData;
    const isUserInDB = users.users_registered.find(
      (user) => user.username === username
    );

    return isUserInDB ? isUserInDB : false;
  };

  const verifyUser = (user, password) => {
    return user.password === password ? true : false;
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const user = checkIfUserExist();

    setIsErrorInForm(true);
    if (!user) return;

    dispatch(logIn({ username }));
    const isLoginCorrect = verifyUser(user, password);

    if (isLoginCorrect) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username, isLoggedIn: true })
      );
      navigate("/dashboard");
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    isErrorInForm,
  };
};
export default useLogin;
