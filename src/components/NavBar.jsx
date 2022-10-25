import Button from "./button";
import CartWidget from "./CartWidget";

function NavBar(){

    return(
        <>
            <h3>Mi tienda de QUEEN</h3>
            <Button text="Discografía"/>
            <Button text="Merchandising"/>
            <Button text="Log In"/>
            <CartWidget/>
        </>
    )
}
export default NavBar;