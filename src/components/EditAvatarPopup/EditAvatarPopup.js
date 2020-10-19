import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
function EditProfilePopup(props) {


  const avatarRef = React.useRef();

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
        <input ref={avatarRef} type="url" name="avatarUrl" id="avatarUrlInput" placeholder="Ссылка на картинку" required className="popup__input-item popup__input-item_edit-avatar" />
        <span className="popup__input-error-message" id="avatarUrlInput-err"></span>
      </PopupWithForm>

)};
export default EditProfilePopup;  