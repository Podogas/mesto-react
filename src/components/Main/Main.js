import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import Card from "../Card/Card.js";

function Main(props) {
  const user = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${user.avatar})` }}
        ></div>
        <div className="profile__info">
          <h1 className="profile__name">{user.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__job">{user.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <Card
            cardData={card}
            onCardClick={props.handleCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            key={card._id}
          ></Card>
        ))}
      </section>
    </main>
  );
}
export default Main;
