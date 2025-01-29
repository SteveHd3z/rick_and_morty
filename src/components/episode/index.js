import { useMyContext } from "../../context/DataProvider";
import './Episode.css'
import Card from "../card/Card";

const Episode = () => {

  const { episode } = useMyContext();

  const getRandomCharacter = (characters) => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  };

  return (
    <div className="container_episode">
      <h1>Lista de Episodios</h1>
      <ul className="list_episode">
        {episode.map((enlace) => (
          <li key={enlace.id}> 
          <Card>
            <a href={enlace.link} target="_blank">
              Episodio: {enlace.id}{" "}
            </a>
          </Card>           
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Episode;
