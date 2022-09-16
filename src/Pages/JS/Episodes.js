import { useGlobalContext } from '../../Context/episodeContext';
import CardEpisode from '../../Components/Cards/CardEpisode';

function EpisodesPage() {
    const { episodes } = useGlobalContext();
    return (
        <section className='sectionPage'>
            <section className='sectionBlock'>
                <section className='sectionTitle'>
                <h1>Épisodes</h1>
            </section>
            <h2 className='subTitle'>
                Retrouvez nos épisodes liés au bar, festival et radio
            </h2>

            <section className='cardsPage'>
            {episodes.map((episode) => (
							<CardEpisode key={episode.id} episode={episode} />
						))}
            </section>
            </section>    
        </section>
    )
}

export default EpisodesPage;

/*

sectionPage
sectionBlock
h1
h2 - subTitle
h3
cards
card
content
metas
meta
title
excerpt
tags
tag
button

*/