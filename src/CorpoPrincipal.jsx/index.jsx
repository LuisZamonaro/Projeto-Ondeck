import capterra from '../Assets/Capterra Logo.svg'
import alternative from '../Assets/AlternativeTo Logo.svg'
import hero from '../Assets/Hero Image.png'

export default function CorpoPrincipal () {
    return  (
        <>
        <div className="containerCorpoGeral">
            <div className="containerCorpoEsq">
                <div className="ondeckIs">
                    <h1>Ondeck is your remote <span id='conference'>conference  calling tool</span> </h1>
                </div>
                <div className="ondeckServ">
                    <p>Ondeck is a service that all allows to create beautiful, online, and encrypted video calls for you and your remote team</p>
                </div>
                <div className="botaoCorpo">
                    <button id='buttonBody'>Try for free</button>
                </div>
                <div className="containerCincoPonto">
                    <div className="cincoPonto">
                        5.0 Rating based on reviews from :
                    </div>
                    <div className="logosCorpo">
                        <img id='capterra' src={capterra}/>
                        <img id='alternative' src={alternative}/>
                    </div>
                </div>
            </div>
            <div className="containerCorpoDir">
                <img id='heroImage' src={hero}/>
            </div>
        </div>
        
        </>
    )
}