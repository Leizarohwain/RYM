import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import Detail from './components/Detail';
import About from './components/About';
import {Route, Routes, useLocation} from 'react-router-dom'
import Form from './components/Form';
import Favorites from './components/Favorites';

function App() {
   const location = useLocation();
   const[characters, setCharacters] = useState([])
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => 
         character.id !== Number(id))
         setCharacters(charactersFiltered)
   }
 

   return (
      <div className='App'>
         {
            location.pathname !== '/'
            ? <Nav onSearch={onSearch}/> 
            : null
         }
         
         <Routes>
            <Route path='/' element={<Form/>}/>
         <Route path='/home' element= {<Cards characters={characters}  onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='favorites' element= {<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
