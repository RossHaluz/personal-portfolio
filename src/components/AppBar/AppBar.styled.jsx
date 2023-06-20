import styled from "@emotion/styled";
import { Mail, Person, Menu, Close } from "@mui/icons-material"

export const AppBarContainer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 3;
    transition: all 1s ease;
`

export const AppBarWrapper = styled.div`
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.a`
    font-size: 40px;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
    margin-right: 40px;
`

export const MainNavigation = styled.div`
    display: flex;
    align-items: center;
`

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
`

export const ItemContainerIcon = styled(Person, Mail)`
font-size: 18px;
margin-right: 5px;
`

export const ContactInfo = styled.span`
font-size: 15px;
font-weight: 400;
`

export const HamburgerMenu = styled(Menu)`
    width: 32px;
    height: 28px;
    color: #15023a;
    cursor: pointer;
`
export const HAmburgetMenuClose = styled(Close)`
 width: 32px;
    height: 28px;
    color: #15023a;
    cursor: pointer;
`