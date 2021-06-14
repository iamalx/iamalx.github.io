import '../App.css';
import { useState, useEffect } from 'react';

const Intro = () => {

    const [ h1, setH1 ] = useState(' ')
    const [ h2, setH2 ] = useState(' ')
    const [ h2Second, setH2Second ] = useState('')

    const finalString = "Hello World! I'm Alex, an avid software developer."

    useEffect(() => {
        // Intro "Hello World" animations
        let index = 0
        let interval = setInterval(() => {

            if(index <= 12 )
                setH1(val => setH1(val.concat(finalString.charAt(index))))
            else if(index <= 22 )
                setH2(val => setH2(val.concat(finalString.charAt(index))))
            else 
                setH2Second(val => setH2Second(val.concat(finalString.charAt(index))))

            if(index >= finalString.length) {
                index = 0
                clearInterval(interval) 
            }

            index++
        }, 100)

    }, []) 

    return (
        <div className='error-bar white-font intro-mn-hg' >
            <h1 className='h-font white-font'>{h1? h1:' '}</h1>
            <p className='main-font'>{h2? h2:' '}</p>
            <p className='main-font'>{h2Second? h2Second:' '}</p>
        </div>
    );
}

export default Intro;