import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../../../Context/applicationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLasts } from '../../../Hooks/useLasts';
import '../CSS/Radios.scss';

function HomeRadios() {

  const {
    isPlayingPlayer1,
    isPlayingPlayer2,
    isPlayingPlayer3,
    handlePause,
    handlePausePodcast,
    handlePlayStream1,
    handlePlayStream2,
    handlePlayStream3,
    player1Ref,
    player2Ref,
    player3Ref,
  } = useContext(ApplicationContext);

  const { lastMusics1, lastMusics2, getLastMusics } = useLasts();
  const { dataLastMusics1,dataLastMusics2 } = useLasts();
  var loadmusic1 = null
  var loadmusic2 = null
  const getMetaHour = (ts) => {
    const date = new Date(ts);
    var mn = date?.getMinutes();
    var hh = date?.getHours();
    if (mn.toString().length == 1) {
      mn = "0" + mn
    }
    if (hh.toString().length == 1) {
      hh = "0" + hh
    }
    return `${hh}:${mn}`;
  };

  loadmusic1 = dataLastMusics1;

  loadmusic2 = dataLastMusics2;

  useEffect(() => {
    

  }, [dataLastMusics1, dataLastMusics2]);

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

  const [changeLastsOpen, setChangeLastsOpen] = useState(false);

  const toggleChangeLasts = () => {
    setChangeLastsOpen(!changeLastsOpen)
  }

  return (

      <section className='sectionBlock'>
      <section className='sectionTitle'>
                <h3>Radios</h3>
                <Link to='/radios'>
                    <div className='more'>Voir les radios</div>
                </Link>
            </section>
            <span className='subTitle'>
                Retrouvez nos news liées au bar, festival et radio
            </span>
        
        <section className='radios'>

          <div className='liveOne liveRadio'>
            <div className='liveRadioPlayer'>
              <div className='imgLive'>
                <img src={lastMusics1[0]?.img_large_url} alt="Pochette musique" />
              </div>

              <div className='controlsLive'>

                <div className='metasMusicLive'>
                  <span className='nameOfLive'>
                    Live 1
              </span>

                  <span className='nameMusicLive'>
                    {lastMusics1[0]?.title}
                  </span>

                  <span className='artistMusicLive'>
                    {lastMusics1[0]?.author}
                  </span>

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
              </div>
            </div>

            
            <section className='tags'>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
            </section>

          </div>

          <div className='liveTwo liveRadio'>

            <div className='liveRadioPlayer'>

              <div className='imgLive'>
                <img src={lastMusics2[0]?.img_large_url} alt="Pochette musique" />
              </div>

              <div className='controlsLive'>

                <div className='metasMusicLive'>
                  <span className='nameOfLive'>
                    Live 2
              </span>

                  <span className='nameMusicLive'>
                    {lastMusics2[0]?.title}
                  </span>

                  <span className='artistMusicLive'>
                    {lastMusics2[0]?.author}
                  </span>

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
              </div>
            </div>

            
            <section className='tags'>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
            </section>

          </div>

        </section>
    </section>
  );
}

export default HomeRadios;