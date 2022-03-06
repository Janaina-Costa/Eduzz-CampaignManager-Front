import { Login } from '../Login'
import { SiderBanner } from '../SideBanner'
import * as S from './style'

export const Dashboard = ()=>{
    return(
        <S.Wrapper>
            <SiderBanner/>
            <Login/>
        </S.Wrapper>
    )
}