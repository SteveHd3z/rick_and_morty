import { useMyContext } from "../../context/DataProvider";

const Episode = () => {
  const { episode } = useMyContext();

  return (
    <div>
      <h1>Lista de Episodios</h1>
      <ul>
        {" "}
        {episode.map((enlace) => (
          <li key={enlace.id}>
            {" "}
            {/* Etiqueta <a> renderizada dinámicamente */}{" "}
            <a href={enlace.link} target="_blank">
              {" "}
              Episodio: {enlace.id}{" "}
            </a>
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default Episode;
