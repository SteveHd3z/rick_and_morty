import { useMyContext } from "../../context/DataProvider";
import './Episode.css'
import CardEpisode from "../card/CardEpisode";
import Practice from "../../Practica1";
import { getCharactersbyId } from "../../helpers/getCharacters";

const Episode = () => {

  const { episode } = useMyContext(); 
  //Practice()
  
  const getLinkCharacter =(episode) => {

    const randomIndex = Math.floor(Math.random() * episode.characters.length);
    const randomCharacter = episode.characters[randomIndex];

    const urlbase=randomCharacter.split('/')
    const linkImage=`https://rickandmortyapi.com/api/character/avatar/${urlbase[5]}.jpeg`

    
    return linkImage;
};


  return (
    <div className="container_episode">

      <h1 hidden>Lista de Episodios</h1>   
      <ul className="list_episode">

        {episode.map((dato) => (
          
          <li key={dato.id}> 
            <CardEpisode 
              id={dato.id}
              name={dato.name}
              link={dato.link}
              character={getLinkCharacter(dato)}
            /> 
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Episode;
