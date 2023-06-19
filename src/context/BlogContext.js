import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

// creating context
export const BlogContext = createContext();

// creating context provider function
export function BlogContextProvider({ children }) {
  // all states are here
  const [loader, setLoader] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState("");
  const [totalPages, setTotalPages] = useState(null);
  const[darkMode,setDarkMode] = useState(false)

  // function to fetch data from api
  async function getData(page) {
    setLoader(true);
    try {
      const dataUrl = `${baseUrl}?page=${page}`;
      const url = await fetch(dataUrl);
      const data = await url.json();
      setPosts(data.posts);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoader(false);
  }

  // useeffect to fetchdata
  useEffect(() => {
    getData(page);
  }, []);

  // all data which send to consumer
  const value = {
    loader,
    setLoader,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    getData,
    darkMode,
    setDarkMode
  };
  // return contextprovider provider
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
