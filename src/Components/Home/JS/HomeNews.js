import { Link } from "react-router-dom";
import CardNew from '../../Cards/CardNew';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeNews() {

    return (
        <section className='sectionBlock'>
            <section className='sectionTitle'>
                <h3>News</h3>
                <Link to='/news'>
                    <div className='more'>Voir toutes les news</div>
                </Link>
            </section>
            <span className='subTitle'>
                Retrouvez nos news liées au bar, festival et radio
            </span>

            <section className='cards'>
                
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />

                <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" />

            </section>

        </section>
    )
}

export default HomeNews;


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