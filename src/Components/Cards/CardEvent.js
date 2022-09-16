import { Link } from "react-router-dom";

const CardEvent = ({ event }) => {
    const { meta,title,id } = event;



    return (
        <Link to={`/evenements/${id}`} className='card'>

            <div className='etiquette'>
                ÉVÈNEMENT
            </div>
            <div className='imageSection'>

                <img src={meta.image_evenement} alt="Image de l'évènement" className='imageSection'></img>
            </div>
            <div className='content'>
                <div className='metas'>
                    <div className='meta' dangerouslySetInnerHTML={{ __html: meta?.date_evenement }} />

                    <div dangerouslySetInnerHTML={{ __html: meta?.lieu_evenement}} className='meta'/>
                </div>
                <h4 className='title'>
                    {title.rendered}
                        </h4>
                <span className='excerpt' dangerouslySetInnerHTML={{ __html: meta.description_evenement }} />
            </div>
            <section className='tags'>
                <div className='tag' dangerouslySetInnerHTML={{ __html: meta.tag_1 }} />
                <div className='tag' dangerouslySetInnerHTML={{ __html: meta.tag_2 }} />
                <div className='tag' dangerouslySetInnerHTML={{ __html: meta.tag_3 }} />
            </section>
        </Link>
    )
}

export default CardEvent;