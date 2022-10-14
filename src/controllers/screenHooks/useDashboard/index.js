import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShows, getShowsByQuery } from "../../../features/shows";

const useDashboard = () => {
  //Hooks
  const dispatch = useDispatch();
  const showsStore = useSelector((store) => store.shows);

  //Stores
  const [search, setSearch] = useState("");

  //Functions
  const handleSearch = (event) => {
    if (event.key !== "Enter") return;

    if (event.target.value.length === 0) return dispatch(getShows());

    setSearch(event.target.value);
    dispatch(getShowsByQuery(search));
  };

  useEffect(() => {
    dispatch(getShows());
  }, [dispatch]);

  return { showsStore, search, setSearch, handleSearch };
};

export default useDashboard;
