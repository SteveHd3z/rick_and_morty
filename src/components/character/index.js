import { useMyContext } from "../../context/DataProvider";
import { GridCard } from "../card/GridCard";

const Character = () => {

  const { character } = useMyContext();

  return (

      // Mapeamos los personajes para renderizarlos en el DOM
      <div className="card-grid" >
         {character.map((res) => 
         (       
            <GridCard
            key={res.id}
              {...res}
            />   
        )
      )}
      </div>  
  );
}

export default Character;