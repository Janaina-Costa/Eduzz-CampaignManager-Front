import * as S from './style'
import megafone from '../../assets/icon-megafone.svg'
import linkedin from '../../assets/icon-lkd.svg'
import insta from '../../assets/icon-insta.svg'
import telegram from '../../assets/icon-telegram.svg'
import face from '../../assets/icon-facebook.svg'
import whats from '../../assets/icon-wath.svg'
import twitter from '../../assets/icon-twitter.svg'


export const SiderBanner = ()=>{
    return (
        <S.Container>            
           <div className='titles'>
                <img src={megafone} alt="icone megafone" className="megafone"/>
                <img src={linkedin} alt="icone linkedin" className="linkedin"/>
                <img src={insta} alt="icone instagram" className="instagram"/>
                <img src={whats} alt="icone whatsup" className="whats"/>
                <img src={telegram} alt="icone telegram" className="telegram"/>
                <img src={face} alt="icone facebook" className="face"/>
                <img src={twitter} alt="icone twitter" className="twitter"/>
               
                <h1>Eduzz Campaign Manager</h1>
                <p>Gerencie suas campanhas de forma simples, rápida e fácil.</p>
           </div>
        </S.Container>
    )
}