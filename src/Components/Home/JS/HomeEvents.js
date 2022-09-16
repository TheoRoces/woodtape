import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGlobalContext } from '../../../Context/eventContext';
import CardEvent from '../../Cards/CardEvent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/Carousels.scss';

function HomeEvents() {

  const { events } = useGlobalContext();

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
        <h3>Évènements</h3>
        <Link to='/evenements'>
          <div className='more'>Voir tous les évènements</div>
        </Link>
      </section>
      <span className='subTitle'>
        Retrouvez nos évènements liés au bar, festival et radio
            </span>

      {scrollX !== 0 && (
        <button
          className="prev"
          onClick={() => slide(-628)}
        >
          <span>Précédent</span>
        </button>
      )}

      <section className='cards cardsEvents' ref={scrl} onScroll={scrollCheck}>

      {events.map((event) => (
							<CardEvent key={event.id} event={event} />
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

export default HomeEvents;


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