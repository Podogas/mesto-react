import React from 'react';
function ImagePopup(props) {
  return (
    <section className={`popup popup__photo-browsing ${(props.card)? 'popup_opened' : ''}`}>
      <div className="popup__window popup__window_photo-browsing">
        <button className="popup__close-btn popup__close-btn_photo-browsing" type="button" onClick={props.onClose}></button>
        <img className="popup__image-photo-browsing"  alt={props.card.name} src={props.card.link}/>
        <span className="popup__caption-photo-browsing">{props.card.name}</span>
      </div>
    </section>
)};
export default ImagePopup;  
