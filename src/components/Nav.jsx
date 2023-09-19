import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'
import './Estilos.css'

const Nav = ({onSearch}) => {
    return(
        <nav className="navbar">
           

        
        
        
            <Link to= '/about'> About </Link>
        
        <Link to= '/home'> Home </Link>
        
        
        <Link to= '/favorites'> Favorites </Link>

        
        <SearchBar onSearch={onSearch}/>
        

        </nav>
    )
}

export default Nav; 