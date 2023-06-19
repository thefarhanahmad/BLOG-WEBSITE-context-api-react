import React from "react";
import "../App.css";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import {MdOutlineLightMode,MdLightMode} from "react-icons/md"

const Header = () => {

  const{darkMode,setDarkMode} = useContext(BlogContext)

  function darkModeHandler(){
    if(darkMode===false){
      setDarkMode(true)
    }else if(darkMode===true){
      setDarkMode(false)
    }
  }

  return (
    <div className={`w-full flex fixed justify-center flex-row top-0  border-b shadow-md py-4 font-semibold   text-center ${darkMode ? 'bg-black text-white':'bg-white text-black'}`}>
      <h1 className="text-3xl">CodeHelp Blogs</h1>
      <button onClick={darkModeHandler} className={`absolute right-40 top-5 text-3xl ${darkMode?"border-white":"border-black"}`}>
        {
          darkMode?(<MdLightMode/>):(<MdOutlineLightMode/>)
        }
        </button>
    </div>
      
  );
};

export default Header;
