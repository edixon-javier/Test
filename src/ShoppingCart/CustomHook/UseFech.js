import { useEffect, useState } from "react";

export function useFetch(prop) {
  const [data, setData] = useState([]);
  const [uLoanding, setLoanding] = useState(true);
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/${prop}`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "e2f0fa47f1mshcd4c29938670ea1p13f620jsn646665d010a3",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoanding(true);
    setTimeout(() => {
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        })
        .finally(() => setLoanding(false))
        .catch((err) => console.error(err));
    }, 1000);
  }, [url]);

  return { data, uLoanding };
}
