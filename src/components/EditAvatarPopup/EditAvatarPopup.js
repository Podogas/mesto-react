import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
function EditProfilePopup(props) {
const avatarRef = React.useRef();
const [errorMessage, setErrorMessage] = React.useState('');
const [disabled, setDisabled] = React.useState('disabled');
const [classNames, setClassNames] = React.useState('popup__submit-btn popup__submit-btn_edit-avatar popup__submit-btn_blocked');
function handleValidation() {
  setErrorMessage({
    urlErr: avatarRef.current.validationMessage
  })
  if(avatarRef.current.validity.valid){
      setDisabled('')
      setClassNames('popup__submit-btn popup__submit-btn_edit-avatar')
    } else {
      setDisabled('disabled')
      setClassNames('popup__submit-btn popup__submit-btn_edit-avatar popup__submit-btn_blocked')
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
                   btnText="Сохранить"
                   >
        <input ref={avatarRef} 
               type="url" 
               name="avatarUrl" 
               id="avatarUrlInput" 
               placeholder="Ссылка на картинку" 
               required 
               className="popup__input-item popup__input-item_edit-avatar" 
               onChange={handleValidation} />
        <span className="popup__input-error-message" id="avatarUrlInput-err">{errorMessage.urlErr}</span>
        {/*кнопка это часть формы, поэтому логично что она будет здесь а не в PopupWithForm*/}
        <button type='submit' disabled={disabled} className={classNames} >Сохранить</button>
      </PopupWithForm>

)};

export default EditProfilePopup;  