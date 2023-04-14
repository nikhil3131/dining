import React from 'react';
import './Intro.css'
import meal from '../../assets/video/meal.mp4'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

export default function Intro(){
    const [play, setPlay] = React.useState(false)
    const vidRef = React.useRef();

    function handleVideo(){
        setPlay((prevPLayVideo) => !prevPLayVideo)
        
        if(play){
            vidRef.current.pause();
        }else{
            vidRef.current.play();
        }
    }
    return(
        <div className='app__video'>
            <video 
                src={meal}
                ref={vidRef}
                type='video/mp4'
                loop
                controls={false}
                muted
            />
            <div className='app__video-overlay flex__center'>
                <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
                    {
                        play ? <BsPauseFill color="#fff" fontSize={30}/> : <BsFillPlayFill color="#fff" fontSize={30}/>
                    }
                </div>
            </div>
        </div>
    )
}