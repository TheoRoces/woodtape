import { Link } from "react-router-dom";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../Context/applicationContext";
import { useLasts } from '../../../Hooks/useLasts';
import '../CSS/Hero.scss';
import ArrowBottom from '../../../Icones/arrow_bottom.png';

function Home() {

    const {
        isPlayingPlayer1,
        isPlayingPlayer2,
        handlePause,
        handlePlayStream1,
        handlePlayStream2,
        player1Ref,
        player2Ref,
    } = useContext(ApplicationContext);

    const { lastMusics1, lastMusics2, getLastMusics } = useLasts();

    useEffect(() => {
        getLastMusics(20, 1);
        getLastMusics(20, 2);
        const interval = setInterval(() => {
            getLastMusics(20, 1);
            getLastMusics(20, 2);
        }, 50000);

        return () => {
            clearInterval(interval);
        };
    }, [getLastMusics]);

    return (
        <section className="sectionHero">

            <section className="sectionLeftHero">

                <div className='divAnimEntryHero'>
                    <h1 className="h1Hero">WOODTAPE</h1>
                </div>

                <div className='divAnimEntryHero animEntryTitle2'>
                    <h2 className="h2Hero">THE PERFECT</h2>
                </div>

                <div className='divAnimEntryHero'>
                    <h3 className="h3Hero">PLACE</h3>
                </div>

                <section className="sectionLeftBottomHero">

                    <p className="paragrapheHero">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum cupiditate numquam aspernatur! Quaerat
                        inventore
                        exercitationem nihil illo, possimus corporis omnis sunt vitae placeat! Sequi reprehenderit, voluptas
                        accusamus
                        id eos hic!
                        <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat, dicta consectetur ipsam iusto
                        molestias
                        distinctio ipsa officia reiciendis accusamus iste veniam, impedit a voluptatum esse earum, enim eius
                        mollitia!
                    </p>

                    <div className="roundPlayRadio"
                        onClick={() => handlePlayStream1()}>
                        <span>PLAY RADIO</span>
                    </div>
                </section>
            </section>

            <section className='sectionRightHero'>
                <div className="parentImg">
                    <img src={lastMusics1[1]?.img_large_url} className="img1"></img>
                    <img src={lastMusics1[2]?.img_large_url} className="img2"></img>
                    <img src={lastMusics1[3]?.img_large_url} className="img3"></img>
                    <img src={lastMusics1[4]?.img_large_url} className="img4"></img>
                    <img src={lastMusics1[5]?.img_large_url} className="img5"></img>
                    <img src={lastMusics1[6]?.img_large_url} className="img6"></img>
                    <img src={lastMusics1[1]?.img_large_url} className="img1"></img>
                    <img src={lastMusics1[2]?.img_large_url} className="img2"></img>
                    <img src={lastMusics1[3]?.img_large_url} className="img3"></img>
                    <img src={lastMusics1[4]?.img_large_url} className="img4"></img>
                    <img src={lastMusics1[5]?.img_large_url} className="img5"></img>
                    <img src={lastMusics1[6]?.img_large_url} className="img6"></img>
                    <img src={lastMusics1[1]?.img_large_url} className="img1"></img>
                    <img src={lastMusics1[2]?.img_large_url} className="img2"></img>
                    <img src={lastMusics1[3]?.img_large_url} className="img3"></img>
                    <img src={lastMusics1[4]?.img_large_url} className="img4"></img>
                    <img src={lastMusics1[5]?.img_large_url} className="img5"></img>
                    <img src={lastMusics1[6]?.img_large_url} className="img6"></img>
                </div>
            </section>

            <a href='#arrowBottom' className="arrowScrollHero">
                <img src={ArrowBottom}></img>
            </a>


            <div id='arrowBottom'></div>

        </section>
    )
}

export default Home;




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