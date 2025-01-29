
const getEpisodes = async () => {

    try {
        const url = 'https://rickandmortyapi.com/api/episode'; // Verifica que esta URL sea válida
        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const data = await resp.json();

        // Asegúrate de que `data.results` exista y sea un array
        if (!Array.isArray(data.results)) {
            throw new Error("Expected an array in `data.results`");
        }

        const episode = data.results.map(res => ({
            id: res.id,
            name: res.name,
            characters: res.characters,
            link: res.url,
            created: res.created
        }));  

        return episode;
    } catch (error) {
        console.error("Error al obtener los episodios:", error.message);
        return []; // Devuelve un array vacío en caso de error
    }
};

export default getEpisodes;
