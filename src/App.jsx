import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const API_KEY = "jLTEx0toLAlQTW6vcjuFD518ufJsR0nZxGrOyKFEI3lUK5PPL8JcUAMq";
// const api = "https://api.pexels.com/v1/search?query=people";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("nature");
  const [inputVal, setInputVal] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`,
      {
        headers: {
          Authorization: API_KEY,
        },
      },
    );
    const data = await res.json();
    setApiData((prev) => [...prev, data.photos]);
  };

  useEffect(() => {
    fetchData();
  }, [query, page]);

  const handleChange = () => {
    setQuery(inputVal);
    setApiData([]);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="flex flex-col gap-5">
      <Header
        setInputVal={setInputVal}
        handleChange={handleChange}
        query={query}
      />

      <div className="grid grid-cols-4 place-items-center gap-10">
        {apiData.flat(Infinity)?.map((item, index) => (
          <div key={index}>
            <Card data={item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center py-5">
        <button
          onClick={loadMore}
          className="bg-indigo-600 py-2 px-12 rounded text-white font-semibold hover:scale-105 duration-400 active:scale-100 hover:bg-indigo-800"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default App;
