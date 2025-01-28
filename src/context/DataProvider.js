import React, { useState, useContext, useEffect} from "react";
import { getCharacters } from "../helpers/getCharacters";
import getEpisodes from "../helpers/getEpisodes";

export const dataContext = React.createContext();
export const useMyContext = () => useContext(dataContext);

export const DataProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState( true );
    const [character, setCharacter]  = useState([]);
    const [episode, setEpisode]= useState()

    const getAllCharacters = async() =>{      
        const newCharacter = await getCharacters();
        setCharacter( newCharacter );
    }

    const getAllEpisodes=async()=>{
        const newEpisodes= await getEpisodes();
        setEpisode(newEpisodes)
    }

    useEffect( () => {
        getAllCharacters();
    }, []);

    useEffect(()=>{
        getAllEpisodes();
    },[]);


    return (
        <dataContext.Provider value={{ character, setCharacter, isLoading, setIsLoading , episode, setEpisode}}>
            { children }
        </dataContext.Provider>

    );
    
}