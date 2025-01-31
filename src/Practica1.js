import { useMyContext } from "./context/DataProvider";



const Practice=()=>{

    const {episode}=useMyContext()

    const Padre = {
        "episode1": {
            id: 1,
            name: "Lawnmower Dog 1",
            air_date: "December 9, 2013",
            episode: "S01E02",
            characters: [
                "https://rickandmortyapi.com/api/character/1",
                "https://rickandmortyapi.com/api/character/4",
                "https://rickandmortyapi.com/api/character/38"
            ],
            url: "https://rickandmortyapi.com/api/episode/2",
            created: "2017-11-10T12:56:33.916Z"
        },
        "episode2": {
            id: 2,
            name: "Lawnmower Dog 2",
            air_date: "December 9, 2013",
            episode: "S01E02",
            characters: [
                "https://rickandmortyapi.com/api/character/10",
                "https://rickandmortyapi.com/api/character/20",
                "https://rickandmortyapi.com/api/character/380"
            ],
            url: "https://rickandmortyapi.com/api/episode/2",
            created: "2017-11-10T12:56:33.916Z"
        }
    };

    const {episode1, episode2}=Padre
    const {characters}=episode1

    //console.log('Person!! 1: ',characters)

    Object.values(Padre).map((padre)=>{
        padre.characters.map((pers)=>{
            //console.log('Personajes de cada Padre ',padre.id,' ',pers)
        })    
    });

    episode.map(ep=>
        ep.characters.map(element => {
            //console.log('Episode: ',ep.id,' Characters: ',element)
        })
    )

};

export default Practice;