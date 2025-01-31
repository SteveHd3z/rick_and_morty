import './Card.css'

const CardEpisode=(props)=>{

    console.info('Personaje en Card: ',props.character)

    return (
    <a className='card' href={props.link} target='blank'>
        <h3>{props.id}. {props.name}</h3>
        <img src={props.character} alt={props.name}/>    
    </a>
    )
}

export default CardEpisode;