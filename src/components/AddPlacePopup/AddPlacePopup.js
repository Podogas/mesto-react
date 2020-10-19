import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
function AddPlacePopup(props) {
const btn = document.querySelector('.popup__submit-btn_add-photo');
const [isValid, setIsValid] = React.useState(false);
const cardNameRef = React.useRef();
const cardUrlRef = React.useRef();
const [errorMessage, setErrorMessage] = React.useState('');
function handleValidation() {
  if(cardNameRef.current.validity.valid && cardUrlRef.current.validity.valid){
   setErrorMessage({
    nameErr: cardNameRef.current.validationMessage,
    urlErr: cardUrlRef.current.validationMessage
  })
   setIsValid(true)
   btn.removeAttribute('disabled', '');
   btn.classList.remove('popup__submit-btn_blocked');
 }
  else{ 
   setErrorMessage({
    nameErr: cardNameRef.current.validationMessage,
    urlErr: cardUrlRef.current.validationMessage
  })
  setIsValid(false);
  btn.setAttribute('disabled', '');
  btn.classList.add('popup__submit-btn_blocked');
  }
} 

const [newPlaceName, setNewPlaceName] = React.useState('');
const [newPlaceUrl, setNewPlaceUrl] = React.useState('');
function handleNameChange(e){
  setNewPlaceName(e.target.value);
  handleValidation();
}
function handleUrlChange(e){
  setNewPlaceUrl(e.target.value);
  handleValidation();
}
function handleSubmit(e) {
  e.preventDefault();
  props.onAddPlace(
    {
      name:newPlaceName,
      link:newPlaceUrl
    })
  
} 
  return (
    <PopupWithForm name="add-photo" 
                   title="Новое место" 
                   isOpen={props.isOpen} 
                   onClose={props.onClose} 
                   onSubmit={handleSubmit}
                   btnText="Сохранить">
        <input ref={cardNameRef}type="text" name="photoName" id="photoNameInput" placeholder="Название" minLength="1" maxLength="30" required className="popup__input-item popup__input-item_add-photo" onChange={handleNameChange} />
        <span className="popup__input-error-message" id="photoNameInput-err">{errorMessage.nameErr}</span>
        <input ref={cardUrlRef}type="url" name="photoUrl" id="photoUrlInput" placeholder="Ссылка на картинку" required className="popup__input-item popup__input-item_add-photo" onChange={handleUrlChange}/>
        <span className="popup__input-error-message" id="photoUrlInput-err">{errorMessage.urlErr}</span>
      </PopupWithForm>

)};
export default AddPlacePopup;  