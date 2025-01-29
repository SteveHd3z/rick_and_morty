
export const GridCard = ( res ) => {
    return (
        <div className="card" key={res.id}>
            <h3>ID: {res.id}</h3>
            <p>Nombre: {res.names}</p>
            <p>Especie: {res.species}</p>
            <img src={res.image} alt={res.name} width="100" />
        </div>

    )
}

