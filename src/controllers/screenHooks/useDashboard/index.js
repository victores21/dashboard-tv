import { useState, useEffect } from "react";

const useDashboard = () => {
  const [shows, setShows] = useState([]);

  const getShows = async () => {
    const req = await fetch("https://api.tvmaze.com/shows?page=0");
    const res = req.json();
    return res;
  };

  useEffect(() => {
    getShows().then((res) => setShows(res));
  }, []);

  return { shows };
};
export default useDashboard;
