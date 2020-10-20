import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Card(props) {
  const user = React.useContext(CurrentUserContext);
  const isOwn = props.cardData.owner._id === user._id;
  const isLiked = props.cardData.likes.some((i) => i._id === user._id);
  function handleClick() {
    props.onCardClick(props.cardData);
  }
  function handleLikeClick() {
    props.onCardLike(props.cardData);
  }
  function handleCardDeletion() {
    props.onCardDelete(props.cardData);
  }
  return (
    <article className="element">
      {isOwn ? (
        <button
          className="element__trash-can"
          type="button"
          onClick={handleCardDeletion}
        ></button>
      ) : null}
      <div className="element__image-wrap" onClick={handleClick}>
        <img
          className="element__image"
          src={props.cardData.link}
          alt={props.cardData.name}
        />
      </div>
      <h3 className="element__caption">{props.cardData.name}</h3>
      <div className="element__like-wrapper">
        <button
          className={`element__like-button ${
            isLiked ? "element__like-button_liked" : ""
          }`}
          type="button"
          onClick={handleLikeClick}
        ></button>
        <span className="element__like-counter">
          {props.cardData.likes.length}
        </span>
      </div>
    </article>
  );
}
export default Card;
