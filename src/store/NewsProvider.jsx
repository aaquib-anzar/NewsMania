import { useState } from "react";
import NewsContext from "./NewsContext";

function NewsProvider({children}){
    const [isDark,setIsDark] =useState(JSON.parse(localStorage.getItem('isDark')))
    return(
        <NewsContext.Provider value ={[isDark,setIsDark]} >
            {children}
        </NewsContext.Provider>
    )
}
export default NewsProvider