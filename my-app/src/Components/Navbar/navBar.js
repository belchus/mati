import CartWidget from "../CartWidget/cartWidget"
const Navbar = () => {

    return(
    <div className="navbar"> 
<ul>
    <li>
    
    <a href="#">Home</a>
    </li>
    <li>
   
    <a href="#">Productos</a>
    </li>
    <li>
   
    <a href="">Contacto</a>
    </li>
    <li className="Cart">
    <a href="#"><CartWidget/></a>
    </li>
</ul>
</div>)
}
export default Navbar