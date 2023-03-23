import { useContext } from "react";
import React from "react";
import classes from "./MeetupItem.module.css";
import Cards from "../ui/Cards";
import FavoritesContext from "../../store/favorites-context";
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorites = favoritesCtx.itemIsFavorites(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorites) {
      favoritesCtx.removeFavorites(props.id);
    } else {
      favoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Cards>
        <div className={classes.image}>
          <img src={props.image} alt="/" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorites ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Cards>
    </li>
  );
}

export default MeetupItem;
