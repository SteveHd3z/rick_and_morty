import { useMyContext } from "../../context/DataProvider";
import './Episode.css'
import CardEpisode from "../card/CardEpisode";

const Episode = () => {

  const { episode,character } = useMyContext();
  

  const getRandomCharacter = (episode) => {

    if (!episode || !episode.characters || episode.characters.length === 0) {
        console.warn("No hay personajes en este episodio.");
        return null;
    }

    const randomIndex = Math.floor(Math.random() * episode.characters.length);
    const randomCharacter = episode.characters[randomIndex];

    console.log("Character Episode:", randomCharacter);
    return randomCharacter;
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
              character={getRandomCharacter(episode)}
            /> 
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Episode;
