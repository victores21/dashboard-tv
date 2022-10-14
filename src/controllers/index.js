import useScreenHooks from "./screenHooks";
import useComponentHooks from "./componentHooks";

const useControllers = () => {
  return { useScreenHooks, useComponentHooks };
};

export default useControllers;
