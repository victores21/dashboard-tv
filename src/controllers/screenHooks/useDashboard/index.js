import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShows, getShowsByQuery } from "../../../features/shows";

const useDashboard = () => {
  //Hooks
  const dispatch = useDispatch();
  const showsStore = useSelector((store) => store.shows);

  //Stores
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(0);

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

  useEffect(() => {
    if (pagination <= 0) return setPagination(0);

    dispatch(getShows(pagination));
  }, [pagination, dispatch]);

  return {
    showsStore,
    search,
    setSearch,
    handleSearch,
    pagination,
    setPagination,
  };
};

export default useDashboard;
