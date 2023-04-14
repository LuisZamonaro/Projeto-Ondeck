import shopify from '../Assets/Shopify Logo.svg'
import netflix from '../Assets/Netflix Logo.svg'
import spotify from '../Assets/Spotify Logo.svg'
import walmart from '../Assets/Walmart Logo.svg'

export default function FooterPag () {
    return (
        <div className="containerFooter">
            <div className="topoFooter">
                Trusted by 3+ million people at companies like 
            </div>
            <div className="inferiorFooter">
                <img className='iconsFooter' src={netflix} />
                <img className='iconsFooter' src={shopify} />
                <img className='iconsFooter' src={spotify} />
                <img className='iconsFooter' src={walmart} />
            </div>
        </div>
    )
}