import Card from './Card';
import './Estilos.css'

export default function Cards({characters, onClose}){
   return (
      <div className='cards'>
      {characters.map(({name, status, gender, species, origin, image, id}) => (
         <Card 
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
         onClose={onClose}
      />
      )
         )}

   </div>
   );
}
