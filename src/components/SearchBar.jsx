import { useState } from "react";
import './Estilos.css';

export default function SearchBar({onSearch}) {
const [id,setId] =useState('')

const handleChange = (event) => {
   setId(event.target.value)
}

   return (
      <div className='searchbar'>
          <input className='input' type='search' onChange={handleChange} value={id} />
         <button className='btn' onClick={() => onSearch(id)}>Agregar</button> 
      </div>
   );
}
