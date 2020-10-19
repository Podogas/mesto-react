import React, { useState }from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
function EditProfilePopup(props) {
  const btn = document.querySelector('.popup__submit-btn_edit-profile');
  const user = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const profileNameRef = React.useRef();
  const profileDesctiptionRef = React.useRef();

  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user]);
function handleValidation() {
  if(profileNameRef.current.validity.valid && profileDesctiptionRef.current.validity.valid){
   setErrorMessage({
    nameErr: profileNameRef.current.validationMessage,
    profileErr: profileDesctiptionRef.current.validationMessage
  })
   setIsValid(true)
   btn.removeAttribute('disabled', '');
   btn.classList.remove('popup__submit-btn_blocked');
 }
  else{ 
   setErrorMessage({
    nameErr: profileNameRef.current.validationMessage,
    profileErr: profileDesctiptionRef.current.validationMessage
  })
  setIsValid(false);
  btn.setAttribute('disabled', '');
  btn.classList.add('popup__submit-btn_blocked');
  }
} 
function handleNameChange(e) {
  setName(e.target.value);
  handleValidation()
}  
function handleDescriptionChange(e) {
  setDescription(e.target.value);
  handleValidation()
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
                   btnText="Сохранить"
                   >
        <input ref={profileNameRef} type="text" name="name" id="profileNameInput" placeholder="Имя" minLength="2" maxLength="40" required
        className="popup__input-item popup__input-item_edit-profile" value={name || ''} onChange={handleNameChange}/>
        <span className="popup__input-error-message" id="profileNameInput-err">{errorMessage.nameErr}</span>
        <input ref={profileDesctiptionRef}type="text" name="about" id="profileJobInput" placeholder="О себе" minLength="2" maxLength="200" required 
        className="popup__input-item popup__input-item_edit-profile" value={description || ''} onChange={handleDescriptionChange}/>
        <span className="popup__input-error-message" id="profileJobInput-err">{errorMessage.profileErr}</span>   
    </PopupWithForm>
)};
export default EditProfilePopup;  