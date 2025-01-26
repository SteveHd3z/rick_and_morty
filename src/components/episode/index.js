import { useMyContext } from "../../context/DataProvider";


const Episode=()=>{

    const {character} = useMyContext();

    return (
        <>
          {character.map((res) => (
            <div key={res.id}>
              <img src={res.image} alt={res.name} width="100" />
            </div>
          ))}
        </>
      );
}

export default Episode;