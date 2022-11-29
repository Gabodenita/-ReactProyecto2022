import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";
// import FlexWrapper from '../FlexWrapper/FlexWrapper';
import "./navbar.css";

function NavBar(){
    return(
        <nav className = "nav_menu">
            <Link to ="/"><h3>MI e-COMERCE</h3></Link>
            <Link to ="/category/smartphones">Smartphones</Link> 
            <Link to ="/category/laptops">Notebooks</Link>
            <Link to ="/category/fragrances">Perfumes</Link>
            <Link to ="/category/skincare">Cuidade de la piel</Link>
            <CartWidget/>
        </nav>
        )
}
export default NavBar; 