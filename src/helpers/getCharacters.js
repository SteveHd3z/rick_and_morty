export const getCharacters = async() => {
    const url = `https://rickandmortyapi.com/api/character`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    const character = results.map( res => ({
        id: res.id,
        names: res.name,
        species: res.species,
        image: res.image
    }));
    
    return character;

}
