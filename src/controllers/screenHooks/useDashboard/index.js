import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShows } from "../../../features/shows";

const useDashboard = () => {
  const dispatch = useDispatch();
  const showsStore = useSelector((store) => store.shows);

  useEffect(() => {
    dispatch(getShows());
  }, [dispatch]);

  return { showsStore };
};

export default useDashboard;
