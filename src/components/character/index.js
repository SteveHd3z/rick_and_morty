import { useMyContext } from "../../context/DataProvider";
import { GridCard } from "../card/GridCard";
import Pagination from "../pagination";

const Character = () => {
  const { character } = useMyContext();

  return (
    <>
      <div className="card-grid">
        {character.map((res) => (
          <GridCard key={res.id} {...res} />
        ))}
      </div>      
      <Pagination/>
    </>
  );
};

export default Character;
