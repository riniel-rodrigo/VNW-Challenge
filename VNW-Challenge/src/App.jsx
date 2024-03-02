
import { useState} from "react"

export default function App() {

  const [second, setSecond] = useState(0);

  const [timer, setTimer] = useState();

  const [clicado, setClicado] = useState(false);


  function Start() {


      if (clicado == false) {

        let timerEvent = setInterval(() => {
            setSecond(second => second + 1);
        }, 1000)

        setTimer(timerEvent);

        setClicado(true);
    }

  }


    function Pause() {

      setClicado(false);
      clearInterval(timer);

    }


    function Restart() {
      setSecond(0);
    }




    return (

      <>
        <div className="container">
          <h2>{second}</h2>

          <div className="buttons">
            <svg onClick={Restart} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>

            <svg onClick={Pause} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
            </svg>

            <svg onClick={Start} disabled={clicado} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
          </div>

        </div>



      </>


    )
}