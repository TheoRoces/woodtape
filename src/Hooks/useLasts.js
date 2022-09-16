import { useCallback, useState } from "react";
import { useFetch } from "./useFetch";

export const useLasts = () => {
  const { request } = useFetch();
  const [lastMusics1, setLastMusics1] = useState([]);
  const [lastMusics2, setLastMusics2] = useState([]);
  const dataLastMusics1=JSON.parse(localStorage.getItem("LastMusics1"));
  const dataLastMusics2=JSON.parse(localStorage.getItem("LastMusics2"));
  const live1Url =
    "https://manager8.streamradio.fr:2990/api/v2/history/?format=json";

  const live2Url =
    "https://manager7.streamradio.fr:2510/api/v2/history/?format=json";

  const getLastMusics = useCallback(
    ( limit = 100, id = 1 ) => {
      request(`${id === 1 ? live1Url : live2Url}&limit=${limit ?? 100}`)
        .then((request) => request.json())
        .then((data) => {
          if (id === 1) {
            localStorage.setItem("LastMusics1", JSON.stringify(data?.results));
            setLastMusics1(data?.results);
          } else if (id === 2) {
            localStorage.setItem("LastMusics2", JSON.stringify(data?.results));
            setLastMusics2(data?.results);
          }
        }).catch((error) => {
          
        });
    },
    [request]
  );


  return {
    lastMusics1,
    lastMusics2,
    dataLastMusics1,
    dataLastMusics2,
    getLastMusics
  };
};
