import { createContext, useCallback, useEffect, useRef, useState } from "react";
import $ from 'jquery';


const defaultApplicationContextValue = {
  user: null,
  setUser: null,
  handlePlayStream1: null,
  handlePlayStream2: null,
  handlePlayStream3: null,
  handlePause: null,
  isPlayingPlayer1: null,
  isPlayingPlayer2: null,
  isPlayingPlayer3: null,
  player1Ref: null,
  player2Ref: null,
  player3Ref: null,
};

export const ApplicationContext = createContext(defaultApplicationContextValue);

export function ApplicationContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isPlayingPlayer1, setIsPlayingPlayer1] = useState(false);
  const [isPlayingPlayer2, setIsPlayingPlayer2] = useState(false);
  const [isPlayingPlayer3, setIsPlayingPlayer3] = useState(false);
  const player1Ref = useRef();
  const player2Ref = useRef();
  const player3Ref = useRef();

  const handlePlayStream1 = useCallback(() => {
    
    player3Ref.current.setAttribute("src", null);
    player2Ref.current.setAttribute("src", null);
    player1Ref.current.setAttribute(
      "src",
      "https://manager8.streamradio.fr:3005/stream"
    );

    player1Ref.current.play();
    setIsPlayingPlayer1(true);
    setIsPlayingPlayer2(false);
    setIsPlayingPlayer3(false);
  }, []);

  const handlePlayStream2 = useCallback(() => {
    player3Ref.current.setAttribute("src", null);
    player2Ref.current.setAttribute(
      "src",
      "https://manager7.streamradio.fr:2520/stream"
    );
    player1Ref.current.setAttribute("src", null);

    player2Ref.current.play();
    setIsPlayingPlayer1(false);
    setIsPlayingPlayer2(true);
    setIsPlayingPlayer3(false);
  }, []);

  const handlePlayStream3 = useCallback(() => {
    player2Ref.current.setAttribute("src", null);
    player3Ref.current.setAttribute(
      "src",
      ""
    );
    player1Ref.current.setAttribute("src", null);

    player3Ref.current.play();
    setIsPlayingPlayer1(false);
    setIsPlayingPlayer2(false);
    setIsPlayingPlayer3(true);
    playhidden('play1')
  }, []);

  const handlePause = useCallback((refObject) => {
    if (refObject.current.getAttribute("id") === "jp_audio_0") {
      setIsPlayingPlayer1(false);
    } else {
      setIsPlayingPlayer2(false);
    }

    refObject.current.setAttribute("src", null);
  }, []);

  const handlePausePodcast = useCallback((refObject) => {
    if (refObject.current.getAttribute("id") === "jp_audio_2") {
      setIsPlayingPlayer3(false);
    }

    refObject.current.setAttribute("src", null);
  }, []);

  useEffect(() => {
    const authJson = window.localStorage.getItem("AUTH-DATA");

    if (authJson) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  const playhidden= useCallback((ref)=>{
    console.log(ref)
    $('#'+ref).addClass('divPlayer1Display')
    $('#'+ref).removeClass('divPlayer2Display')
    if(ref=="play2"){
      $('#play1,#play2').removeClass('divPlayer1Display')
      $('#play1,#play2').addClass('divPlayer2Display')
    }else  if(ref=="play1"){
      $('#play1,#play2').removeClass('divPlayer2Display')
      $('#play1,#play2').addClass('divPlayer1Display')
    }
  })

  return (
    <ApplicationContext.Provider
      value={{
        player1Ref,
        player2Ref,
        player3Ref,
        handlePlayStream1,
        handlePlayStream2,
        handlePlayStream3,
        handlePause,
        handlePausePodcast,
        isPlayingPlayer1,
        isPlayingPlayer2,
        isPlayingPlayer3,
      }}
    >
      <audio ref={player1Ref} id="jp_audio_0" preload="metadata"></audio>
      <audio ref={player2Ref} id="jp_audio_1" preload="metadata"></audio>
      <audio ref={player3Ref} id="jp_audio_2" preload="metadata"></audio>
      {children}
    </ApplicationContext.Provider>
  );
}