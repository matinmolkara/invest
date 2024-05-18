import { useState,createContext,useContext} from "react";
import { pageTitle } from "./constants";

const DataContext = createContext ();

export const DataProvider = ({children}) =>{
    const [isActive, setIsActive] = useState(false);
  
    const [data, setData] = useState({
        about: { 
            title: 'All You Need To Know About invest pack!',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        plans: { title: 'Choose your pack',
                 content: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
        terms: { 
            title: 'Our terms and conditions', 
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
      });
  
    return (
        <DataContext.Provider value={
            {pageTitle,
            data,isActive,setIsActive}
        }>
            {children}
            </DataContext.Provider>
    )
}

export default DataContext;