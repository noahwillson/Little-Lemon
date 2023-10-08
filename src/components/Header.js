import Logo from "../images/Logo.svg"
import Nav from "./Nav"
import MetaTags from "react-meta-tags";
const Header = () => {
    return (
        <header>
            <MetaTags>
            <meta name="description" content="This is a description"/>
            <meta name="og:title" content="Little Lemon" />
            <meta name="og:description" content="This is a description" />
            <meta name="og:image" content="https://www.littlelemon.com/images/logo.svg" />
            </MetaTags>
            <img src={Logo}/>
            <Nav/>
        </header>
        
    )
}
export default Header