import React , { useState } from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import ImagePopup from '../ImagePopup/ImagePopup.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  const handleEditProfileClick = ()=>{
   setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  const handleAddPlaceClick = ()=>{
   setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  const handleEditAvatarClick = ()=>{
   setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  const closeAllPopups = ()=>{
   setIsEditProfilePopupOpen(false)
   setIsAddPlacePopupOpen(false);
   setIsEditAvatarPopupOpen(false);
   setSelectedCard(false);
  }
  const handleCardClick =(card)=>{
    setSelectedCard(card)
  }
  return (
  <>
  <div className="page">
    <Header/>
    <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          handleCardClick ={handleCardClick}
          />
      <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} btnText="Сохранить">
          <input type="text" name="name" id="profileNameInput" placeholder="Имя" minLength="2" maxLength="40" required
          className="popup__input-item popup__input-item_edit-profile" />
          <span className="popup__input-error-message" id="profileNameInput-err"></span>
          <input type="text" name="about" id="profileJobInput" placeholder="О себе" minLength="2" maxLength="200" required 
          className="popup__input-item popup__input-item_edit-profile" />
          <span className="popup__input-error-message" id="profileJobInput-err"></span>   
      </PopupWithForm>
      <PopupWithForm name="add-photo" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} btnText="Сохранить">
        <input type="text" name="photoName" id="photoNameInput" placeholder="Название" minLength="1" maxLength="30" required className="popup__input-item popup__input-item_add-photo" />
        <span className="popup__input-error-message" id="photoNameInput-err"></span>
        <input type="url" name="photoUrl" id="photoUrlInput" placeholder="Ссылка на картинку" required className="popup__input-item popup__input-item_add-photo" />
        <span className="popup__input-error-message" id="photoUrlInput-err"></span>
      </PopupWithForm>
      <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} btnText="Сохранить">
        <input type="url" name="avatarUrl" id="avatarUrlInput" placeholder="Ссылка на картинку" required className="popup__input-item popup__input-item_edit-avatar" />
        <span className="popup__input-error-message" id="avatarUrlInput-err"></span>
      </PopupWithForm>
      <PopupWithForm name="confirm-deletion" title="Вы уверены?" btnText="Да">
      </PopupWithForm>          
    <Footer/>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
   </div>  



    

    

  </>
  );
}

export default App;
