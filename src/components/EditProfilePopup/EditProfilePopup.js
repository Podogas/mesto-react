import React, { useState }from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
function EditProfilePopup(props) {

  const user = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user]);
function handleNameChange(e) {
  setName(e.target.value);
}  
function handleDescriptionChange(e) {
  setDescription(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  props.onUpdateUser({
    name: name,
    about: description,
  });
} 
  return (
    <PopupWithForm name="edit-profile" 
                   title="Редактировать профиль" 
                   isOpen={props.isOpen} 
                   onClose={props.onClose} 
                   onSubmit= {handleSubmit}
                   btnText="Сохранить">
        <input type="text" name="name" id="profileNameInput" placeholder="Имя" minLength="2" maxLength="40" required
        className="popup__input-item popup__input-item_edit-profile" value={name || ''} onChange={handleNameChange}/>
        <span className="popup__input-error-message" id="profileNameInput-err"></span>
        <input type="text" name="about" id="profileJobInput" placeholder="О себе" minLength="2" maxLength="200" required 
        className="popup__input-item popup__input-item_edit-profile" value={description || ''} onChange={handleDescriptionChange}/>
        <span className="popup__input-error-message" id="profileJobInput-err"></span>   
    </PopupWithForm>
)};
export default EditProfilePopup;  