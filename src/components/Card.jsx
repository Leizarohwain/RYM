import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from '../redux/actions'

export function Card({name, species, origin, image, onClose, id, addFav, removeFav, myFavorites}) {
  const [isFav, setIsFav] = useState(false);

   const handleFavorite = (event) => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({name, species, origin, image, id});
    }
  };

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

  return (
    <div className='card'>
      <div className>
        {isFav
          ? onClose && (
              <button className="btn-corazon" onClick={handleFavorite}>
                ❤️
              </button>
            )
          : onClose && (
              <button className="btn-corazon" onClick={handleFavorite}>
                🤍
              </button>
            )}
        {onClose && (
          <button className="btn-cerrar" onClick={onClose}>
            X
          </button>
        )}
      </div>
      <div className='details'>
        <Link className="detalle" to={`/detail/${id}`}>
          <img src={image} alt={name} />
          <h2 >{name}</h2>
        </Link>
      </div>
      <div>
        <h4 className="species">{species}</h4>
        
      </div>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
