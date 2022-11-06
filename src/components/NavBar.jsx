import Button from "./Button/Button";
import CartWidget from "./CartWidget/CartWidget";
import FlexWrapper from "./FlexWrapper/FlexWrapper";

function NavBar(){

    return(
        <>
            <h3>Mi tienda de QUEEN</h3>
            <FlexWrapper>
                <Button color="red">
                    Discografía
                </Button>
                <Button>
                    Merchandising
                </Button>
                <Button color="blue"> 
                    Log In
                </Button>
                <CartWidget/>
            </FlexWrapper>
            
        </>
    )
}
export default NavBar; 