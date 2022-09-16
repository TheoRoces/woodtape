
import { useGlobalContext } from '../../Context/eventContext';
import CardEvent from '../../Components/Cards/CardEvent';

function EventsPage() {
    const { events } = useGlobalContext();
    return (
        <section className='sectionPage'>
            <section className='sectionBlock'>
                <section className='sectionTitle'>
                <h1>Évènements</h1>
            </section>
            <h2 className='subTitle'>
                Retrouvez nos évènements liés au bar, festival et radio
            </h2>

            <section className='cardsPage'>
            {events.map((event) => (
							<CardEvent key={event.id} event={event} />
						))}
            </section>
            </section>    
        </section>
    )
}

export default EventsPage;

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