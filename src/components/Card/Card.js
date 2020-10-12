import React from 'react';


function Card(props) {
  function handleClick() {
    props.onCardClick(props.cardData);
  }
  return (
    <article className="element">
      <button className="element__trash-can" type="button"></button>
      <div className="element__image-wrap" onClick={handleClick}>
        <img className="element__image" src={props.cardData.link} alt={props.cardData.name}/>
      </div>
      <h3 className="element__caption">{props.cardData.name}</h3>
      <div className="element__like-wrapper">
        <button className="element__like-button" type="button"></button>
        <span className="element__like-counter">{props.cardData.likes.length}</span>
      </div>
    </article> 
)};
export default Card;  