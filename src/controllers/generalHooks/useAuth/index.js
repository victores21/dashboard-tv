const useAuth = () => {
  const user = { isLoggedIn: false };

  return user && user.isLoggedIn;
};

export default useAuth;
