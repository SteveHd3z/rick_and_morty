import { useMyContext } from "../../context/DataProvider";

const Character = () =>{

    const { character } = useMyContext();
    
    console.log('component',character)

    return (   <div>
        {
          // Mapeamos los personajes para renderizarlos en el DOM
          character.map((res) => {          
            return (
              <div key={res.id}>
                <h3>ID: {res.id}</h3>
                <p>Nombre: {res.name}</p>
                <p>Especie: {res.species}</p>
                <img src={res.image} alt={res.name} width="100" />
              </div>
            );
          })
        }
      </div>
    );
}

export default Character;