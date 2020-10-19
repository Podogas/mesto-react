import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
function EditProfilePopup(props) {
const avatarRef = React.useRef();  
const btn = document.querySelector('.popup__submit-btn_edit-avatar');
const [isValid, setIsValid] = React.useState(false);
const [errorMessage, setErrorMessage] = React.useState('');
function handleValidation() {
  if(avatarRef.current.validity.valid){
   setErrorMessage({
    urlErr: avatarRef.current.validationMessage
  })
   setIsValid(true)
   btn.removeAttribute('disabled', '');
   btn.classList.remove('popup__submit-btn_blocked');
 }
  else{ 
   setErrorMessage({
    urlErr: avatarRef.current.validationMessage
  })
  setIsValid(false);
  btn.setAttribute('disabled', '');
  btn.classList.add('popup__submit-btn_blocked');
  }
} 


function handleSubmit(e) {
  e.preventDefault();
  props.onUpdateAvatar({
    avatar: avatarRef.current.value,
  });
} 
  return (
    <PopupWithForm name="edit-avatar"
                   title="Обновить аватар"
                   isOpen={props.isOpen} 
                   onClose={props.onClose} 
                   onSubmit= {handleSubmit}
                   btnText="Сохранить">
        <input ref={avatarRef} type="url" name="avatarUrl" id="avatarUrlInput" placeholder="Ссылка на картинку" required className="popup__input-item popup__input-item_edit-avatar" onChange={ handleValidation} />
        <span className="popup__input-error-message" id="avatarUrlInput-err">{errorMessage.urlErr}</span>
      </PopupWithForm>

)};
export default EditProfilePopup;  