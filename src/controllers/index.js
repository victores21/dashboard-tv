import useScreenHooks from "./screenHooks";
import useComponentHooks from "./componentHooks";
import useGeneralHooks from "./generalHooks";

const useControllers = () => {
  return { useScreenHooks, useComponentHooks, useGeneralHooks };
};

export default useControllers;
