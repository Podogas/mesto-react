import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
function AddPlacePopup(props) {
const [newPlaceName, setNewPlaceName] = React.useState('');
const [newPlaceUrl, setNewPlaceUrl] = React.useState('');
function handleNameChange(e){
  setNewPlaceName(e.target.value);
}
function handleUrlChange(e){
  setNewPlaceUrl(e.target.value);
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
        <input type="text" name="photoName" id="photoNameInput" placeholder="Название" minLength="1" maxLength="30" required className="popup__input-item popup__input-item_add-photo" onChange={handleNameChange} />
        <span className="popup__input-error-message" id="photoNameInput-err"></span>
        <input type="url" name="photoUrl" id="photoUrlInput" placeholder="Ссылка на картинку" required className="popup__input-item popup__input-item_add-photo" onChange={handleUrlChange}/>
        <span className="popup__input-error-message" id="photoUrlInput-err"></span>
      </PopupWithForm>

)};
export default AddPlacePopup;  