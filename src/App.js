import Header from "./components/Header";
import BlogPage from "./components/BlogPage";
import Pagination from "./components/Pagination";
import { useContext, useState } from "react";
import { BlogContext } from "./context/BlogContext";

export default function App() {

  const{darkMode,setDarkMode} = useContext(BlogContext)

 
  return (
    <div className={`h-full w-full relative ${darkMode ? 'bg-black text-white':'bg-white text-black'}`}>
     
      <Header />
      <BlogPage />
      <Pagination />
    </div>
  );
}
