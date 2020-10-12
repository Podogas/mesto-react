import React , { useState }  from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import mestoApi from '../../utils/Api.js';
import Card from '../Card/Card.js'


function Main(props) {
const [userName, setUserName] = useState();
const [userDescription, setUserDescription] = useState();
const [userAvatar, setUserAvatar] = useState();
const [cards, setCards] = useState([]);

  React.useEffect(() => {
    mestoApi.getUserInfo().then((res)=>{
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);
  React.useEffect(() => {
    mestoApi.getInitialCards().then((res)=>{
      setCards(res);
    });
  }, []);       

     
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} ></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">

  { cards.map((card)=>(
      <Card cardData = {card} onCardClick = {props.handleCardClick} key={card._id} ></Card>  
    ))
  }





      </section>
      <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={props.isEditProfilePopupOpen} onClose={props.closeAllPopups}>
          <input type="text" name="name" id="profileNameInput" placeholder="Имя" minLength="2" maxLength="40" required
          className="popup__input-item popup__input-item_edit-profile" />
          <span className="popup__input-error-message" id="profileNameInput-err"></span>
          <input type="text" name="about" id="profileJobInput" placeholder="О себе" minLength="2" maxLength="200" required 
          className="popup__input-item popup__input-item_edit-profile" />
          <span className="popup__input-error-message" id="profileJobInput-err"></span>   
      </PopupWithForm>
      <PopupWithForm name="add-photo" title="Новое место" isOpen={props.isAddPlacePopupOpen} onClose={props.closeAllPopups}>
        <input type="text" name="photoName" id="photoNameInput" placeholder="Название" minLength="1" maxLength="30" required className="popup__input-item popup__input-item_add-photo" />
        <span className="popup__input-error-message" id="photoNameInput-err"></span>
        <input type="url" name="photoUrl" id="photoUrlInput" placeholder="Ссылка на картинку" required className="popup__input-item popup__input-item_add-photo" />
        <span className="popup__input-error-message" id="photoUrlInput-err"></span>
      </PopupWithForm>
      <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={props.isEditAvatarPopupOpen} onClose={props.closeAllPopups}>
        <input type="url" name="avatarUrl" id="avatarUrlInput" placeholder="Ссылка на картинку" required className="popup__input-item popup__input-item_edit-avatar" />
        <span className="popup__input-error-message" id="avatarUrlInput-err"></span>
      </PopupWithForm>
      <PopupWithForm name="confirm-deletion" title="Вы уверены?">
      </PopupWithForm>
      

    </main>
  )};
export default Main;  