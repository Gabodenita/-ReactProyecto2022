import { Link } from "react-router-dom"
// import CartWidget from "./CartWidget/CartWidget";

// import FlexWrapper from "./FlexWrapper/FlexWrapper";

function NavBar(){
    return(
        <nav className="nav_menu">
            <Link to ="/"><h3>MI e-COMERCE</h3></Link>
            <Link to ="/detalle">Detalle</Link>
            <Link to ="/CartWidget"><img src= "./public/img/107831.jpg" alt="carrito"></img></Link>
        </nav>
    )
}
export default NavBar; 