import logo from '../Assets/Logo.svg'
import spense from '../Assets/Spense_Icon.svg'
import fiberIcon from '../Assets/Fiber_Icon.svg'
import gradie from '../Assets/Gradie_Icon.svg'
import { useState } from 'react'

export default function HeaderPag () {

    const [show, setShow] = useState(false)

    
    
    return (
        <div className="containerHeader">
            <div className="headerEsq">
                <img id='logoPag' src={logo} />
            </div>
            <div className="headerMeio">
                <div className='optionsMenu' onClick={() => setShow(prevState => !prevState)}>Products</div>
                <div id='products' className={`containerProducts ${show == true ? 'active' : ''}`}>
                    <div className="spense">
                        <div className="spense1">
                            <img src={spense} />
                            Spense
                        </div>
                        <div className="texts">
                            Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.
                        </div>
                    </div>
                    <div className="fiber">
                        <div className="fiber1">
                            <img src={fiberIcon} />
                            Fiber Landing Page
                        </div>
                        <div className="texts">
                            An online portfolio generator. Great to practive flex/grid layouts and absolute positioning.
                        </div>
                    </div>
                    <div className="gradie">
                        <div className="gradie1">
                            <img src={gradie} />
                            Gradie Sign Up Pag
                        </div>
                        <div id='textGradie' className="texts">
                            Gradie is a simple sign up page, great to practice centering layouts.
                        </div>
                    </div>
                </div>
                <div className='optionsMenu'>Challenges</div>
                <div className='optionsMenu'>Resources</div>
                <div className='optionsMenu'><span id='otherL'>Other Links</span></div>
            </div>
            <div className="headerDir">
                Sign in <button id='buttonHeader'>Try for free</button>
            </div>
        </div>
    )
}