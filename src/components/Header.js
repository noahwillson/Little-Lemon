import Logo from "../images/Logo.svg"
import Nav from "./Nav"
const Header = () => {
    return (
        <header>
            <img src={Logo}/>
            <Nav/>
        </header>
        
    )
}
export default Header