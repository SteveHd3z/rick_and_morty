import React, { useState, useContext, useEffect} from "react";
import { getCharacters } from "../helpers/getCharacters";

export const dataContext = React.createContext();
export const useMyContext = () => useContext(dataContext);

export const DataProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState( true );
    const [character, setCharacter]  = useState([]);

    const getAllCharacters = async() =>{
      
        const newCharacter = await getCharacters();

        setCharacter( newCharacter );
        console.log('Entre', newCharacter)
    }

    useEffect( () => {
        getAllCharacters();
    }, []);



    return (
        <dataContext.Provider value={{ character, setCharacter, isLoading, setIsLoading }}>
            { children }
        </dataContext.Provider>

    );


}