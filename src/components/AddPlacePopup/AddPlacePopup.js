import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
function AddPlacePopup(props) {
const cardNameRef = React.useRef();
const cardUrlRef = React.useRef();
const [errorMessage, setErrorMessage] = React.useState('');
const [disabled, setDisabled] = React.useState('disabled');
const [classNames, setClassNames] = React.useState('popup__submit-btn popup__submit-btn_edit-avatar popup__submit-btn_blocked');
function handleValidation() {
  setErrorMessage({
    nameErr: cardNameRef.current.validationMessage,
    urlErr: cardUrlRef.current.validationMessage
  })
  if(cardNameRef.current.validity.valid && cardUrlRef.current.validity.valid){
   setDisabled('')
   setClassNames('popup__submit-btn popup__submit-btn_edit-avatar')
 }
  else{ 
    setDisabled('disabled')
    setClassNames('popup__submit-btn popup__submit-btn_edit-avatar popup__submit-btn_blocked')
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
                   >
        <input ref={cardNameRef}type="text" name="photoName" id="photoNameInput" placeholder="Название" minLength="1" maxLength="30" required className="popup__input-item popup__input-item_add-photo" onChange={handleNameChange} />
        <span className="popup__input-error-message" id="photoNameInput-err">{errorMessage.nameErr}</span>
        <input ref={cardUrlRef}type="url" name="photoUrl" id="photoUrlInput" placeholder="Ссылка на картинку" required className="popup__input-item popup__input-item_add-photo" onChange={handleUrlChange}/>
        <span className="popup__input-error-message" id="photoUrlInput-err">{errorMessage.urlErr}</span>
        <button type='submit' disabled={disabled} className={classNames} >Сохранить</button>
      </PopupWithForm>

)};
export default AddPlacePopup;  