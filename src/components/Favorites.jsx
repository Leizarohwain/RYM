import Card from "./Card";
import { connect } from "react-redux";

const Favorites = ({myFavorites}) => {
return (
    <div className="fav">
{
        myFavorites?.map(fav => {
            return (
                <Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                image={fav.image}
                species={fav.species}
                origin={fav.origin}
                />
            )

        })
    }
    </div>
)
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)