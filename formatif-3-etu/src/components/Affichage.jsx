import {useRef} from 'react';
import {Video} from "./Video.jsx";
import styles from  "./affichage/Affichage.module.css"

// eslint-disable-next-line react/prop-types
export default function Affichage({style}) {

    const videoRef = useRef()
    const playBtnRef = useRef();
    const stopBtnRef = useRef();



    function handleStartVideo() {
        videoRef.current.play()
        stopBtnRef.current.focus();


    }

    function handleStopVideo() {
        videoRef.current.pause();
        videoRef.current.currentTime=0
        playBtnRef.current.focus();
    }

    return (
        <>
            <button
                className={styles.orangered}
            //    style={style}
                ref={playBtnRef}
                onClick={handleStartVideo}


            >
                Débuter
            </button>
            <button
                style={style}
                ref={stopBtnRef}
                onClick={handleStopVideo}

            >
                Arrêter
            </button>
            <Video ref={videoRef}/>
        </>
    );
}