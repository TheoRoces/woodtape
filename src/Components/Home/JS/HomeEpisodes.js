import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGlobalContext } from '../../../Context/episodeContext';
import CardEpisode from '../../Cards/CardEpisode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/Carousels.scss';

function HomeEpisodes() {

  const { episodes } = useGlobalContext();

  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <section className='sectionBlock'>
      <section className='sectionTitle'>
        <h3>Épisodes</h3>
        <Link to='/episodes'>
          <div className='more'>Voir tous les épisodes</div>
        </Link>
      </section>
      <span className='subTitle'>
        Retrouvez nos épisodes liés au bar, festival et radio
            </span>

      {scrollX !== 0 && (
        <button
          className="prev"
          onClick={() => slide(-628)}
        >
          <span>Précédent</span>
        </button>
      )}

      <section className='cards cardsEpisodes' ref={scrl} onScroll={scrollCheck}>

      {episodes.map((episode) => (
							<CardEpisode key={episode.id} episode={episode} />
						))}

      </section>

      {!scrolEnd && (
        <button
          className="next"
          onClick={() => slide(628)}
        >
          <span>Suivant</span>
        </button>
      )}

    </section>
  )
}

export default HomeEpisodes;


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