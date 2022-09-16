import React, { useCallback, useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../../Context/applicationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/player.css';
import { useLasts } from '../../../../Hooks/useLasts';

function Player() {

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

  const [extendPlayerOpen, setExtendPlayerOpen] = useState(false);

    const toggleExtendPlayer = () =>{
        setExtendPlayerOpen(!extendPlayerOpen)
    }

  return (
    <>
      <section className='playerRadioSection'>
        <section className="playerRadioApp">

          <section className='playerLiveOne playersLives divPlayer1Display' id='play1'>

          <div className='pochetteMusic'>
            <img src={lastMusics1[0]?.img_large_url} alt="Pochette musique"/>
          </div>

          <div className="controls">
                    <FontAwesomeIcon
                      icon={["fas", "play"]}
                      onClick={() => handlePlayStream1()}
                      style={{ display: isPlayingPlayer1 ? "none" : "block" }}
                    />
                    <FontAwesomeIcon
                      icon={["fas", "pause"]}
                      onClick={() => handlePause(player1Ref)}
                      style={{ display: isPlayingPlayer1 ? "block" : "none" }}
                    />
            </div>

          <div className='metasMusic'>
            <span className="nameMusic">{lastMusics1[0]?.title}</span>
            <span className="artistMusic">{lastMusics1[0]?.author}</span>
          </div>

          </section>



          <section className='playerLiveTwo playersLives divPlayer1Display' id='play2'>

            <div className='pochetteMusic'>
              <img src={lastMusics2[0]?.img_large_url} alt="Pochette musique"/>
            </div>
            
            <div className="controls">
                    <FontAwesomeIcon
                      icon={["fas", "play"]}
                      onClick={() => handlePlayStream2()}
                      style={{ display: isPlayingPlayer2 ? "none" : "block" }}
                    />
                    <FontAwesomeIcon
                      icon={["fas", "pause"]}
                      onClick={() => handlePause(player2Ref)}
                      style={{ display: isPlayingPlayer2 ? "block" : "none" }}
                    />
                  </div>

            <div className='metasMusic'>
              <span className="nameMusic">{lastMusics2[0]?.title}</span>
              <span className="artistMusic">{lastMusics2[0]?.author}</span>
            </div>
            
          </section>

          <section className='sectionBtnExpendPlayer' onClick={toggleExtendPlayer}>
            <div className="btnExpendPlayer">
              <span className='arrowLeftExpendPlayer arrowExpendPlayer'></span>
              <span className='arrowRightExpendPlayer arrowExpendPlayer'></span>
            </div>
          </section>

        </section>

        <section className='sectionExtendedPlayer'>
          <h3>Radios</h3>
          <section className='sectionPlayersExtend'>
            <div className='playerLiveOneExtend playerLiveExtend'>
              <div className='pochetteMusic leftPlayerExtend'>
                <div className='divNameLivePlayer'>
                  1
                </div>
                <img src={lastMusics1[0]?.img_large_url} alt="Pochette musique"/>
              </div>

              <div className='rightPlayerExtend'>
                <div className="controls">
                  <FontAwesomeIcon
                    icon={["fas", "play"]}
                    onClick={() => handlePlayStream1()}
                    style={{ display: isPlayingPlayer1 ? "none" : "block" }}
                  />
                  <FontAwesomeIcon
                    icon={["fas", "pause"]}
                    onClick={() => handlePause(player1Ref)}
                    style={{ display: isPlayingPlayer1 ? "block" : "none" }}
                  />
                </div>

                <div className='metasMusic'>
                  <span className="nameMusic"><b>Titre : </b>{lastMusics1[0]?.title}</span>
                  <span className="artistMusic"><b>Artiste : </b>{lastMusics1[0]?.author}</span>
                </div>
              </div>
            </div>

            <div className='playerLiveTwoExtend playerLiveExtend'>
              <div className='pochetteMusic leftPlayerExtend'>
                <div className='divNameLivePlayer'>
                  2
                </div>
                <img src={lastMusics2[0]?.img_large_url} alt="Pochette musique"/>
              </div>

              <div className='rightPlayerExtend'>
                <div className="controls">
                  <FontAwesomeIcon
                    icon={["fas", "play"]}
                    onClick={() => handlePlayStream2()}
                    style={{ display: isPlayingPlayer2 ? "none" : "block" }}
                  />
                  <FontAwesomeIcon
                    icon={["fas", "pause"]}
                    onClick={() => handlePause(player2Ref)}
                    style={{ display: isPlayingPlayer2 ? "block" : "none" }}
                  />
                </div>

                <div className='metasMusic'>
                  <span className="nameMusic"><b>Titre : </b>{lastMusics2[0]?.title}</span>
                  <span className="artistMusic"><b>Artiste : </b>{lastMusics2[0]?.author}</span>
                </div>
              </div>
            </div>
          </section>
        </section>

        <style jsx>{`
        .playerRadioSection {
          top: ${extendPlayerOpen ? 'calc(100vh - 380px)' : 'calc(100vh - 60px)'};
        }

        .btnExpendPlayer {
          transform: ${extendPlayerOpen ? 'rotate(180deg)' : 'rotate(0)'}
        }

      `}</style>
      </section>
      </>
  );
}

export default Player;