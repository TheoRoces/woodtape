import { Link } from "react-router-dom";

const CardEpisode = ({ episode }) => {
    const { meta,title,id } = episode;



    return (
        <div className='card'/* onClick={handlePlayCurrentEpisode} ----- Qqc comme ça qui coupe l'audio des radios si l'une d'elles est lancée, et ça lance l'audio de l'épisode sélectionné à la place -----  
        ////////// src={meta.audio_episode.url} ////////////////// Faudrait surement avoir un player qui cache ceux des radios dans le composant 'Player.js' qui joue l'audio de l'épisode comme ça même en changeant de page l'épisode continue de jouer */ > 

            <div className='etiquette'>
                ÉPISODE
            </div>
            <div className='imageSection'>

                <img src={meta.image_episode.url} alt="Image de l'épisode" className='imageSection'></img>

            </div>
            <div className='content'>
                <div className='metas'>
                    <div className='meta' dangerouslySetInnerHTML={{ __html: meta?.date_episode }} />
                </div>
                <h4 className='title'>
                    {title.rendered}
                        </h4>
                <span className='excerpt' dangerouslySetInnerHTML={{ __html: meta.description_episode }} />
            </div>
            <section className='tags'>
                <div className='tag' dangerouslySetInnerHTML={{ __html: meta.tag_1 }} />
                <div className='tag' dangerouslySetInnerHTML={{ __html: meta.tag_2 }} />
                <div className='tag' dangerouslySetInnerHTML={{ __html: meta.tag_3 }} />
            </section>
        </div>
    )
}

export default CardEpisode;