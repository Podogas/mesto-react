import React , { useState } from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import mestoApi from '../../utils/Api.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import ImagePopup from '../ImagePopup/ImagePopup.js';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup.js';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup.js';
import ConfirmDeletionPopup from '../ConfirmDeletionPopup/ConfirmDeletionPopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeletionPopupOpen, setIsConfirmDeletionPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cardToDelete, setCardToDelete] = useState({});
  const [cards, setCards] = useState([]);
  React.useEffect(() => {
    mestoApi.getInitialCards().then((res)=>{
      setCards(res);
    })
    .catch( err => console.error(`Ошибка при загрузке фотографий ${err}` ));
  }, []); 

  React.useEffect(() => {
    mestoApi.getUserInfo().then((res)=>{
      setCurrentUser(res)
    })
    .catch( err => console.error(`Ошибка при загрузке данных пользователя ${err}` ));
  }, []);

  const handleEditProfileClick = ()=>{
   setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  const handleAddPlaceClick = ()=>{
   setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  const handleEditAvatarClick = ()=>{
   setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
   const handleCardConfirmDeletion = (card)=>{
    setIsConfirmDeletionPopupOpen(!isConfirmDeletionPopupOpen);
    setCardToDelete(card);
  }
  const closeAllPopups = ()=>{
   setIsEditProfilePopupOpen(false)
   setIsAddPlacePopupOpen(false);
   setIsEditAvatarPopupOpen(false);
   setSelectedCard(false);
   setIsConfirmDeletionPopupOpen(false);
  }
  const handleCardClick =(card)=>{
    setSelectedCard(card)
  }
  const handleUpdateUser =(data)=>{
    mestoApi.patchUserInfo(data).then((res)=>{
      setCurrentUser(res)
      closeAllPopups();
    })
    .catch( err => console.error(`Ошибка при загрузке данных пользователя ${err}` ));
  }
  const handleUpdateAvatar =(url)=>{
    mestoApi.patchAvatar(url.avatar).then((res)=>{
      setCurrentUser(res)
      closeAllPopups();
    })
    .catch( err => console.error(`Ошибка ${err}` ));
  }
    function handleCardLike(card){
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const method = isLiked? 'DELETE' : 'PUT';
    mestoApi.like(card._id, method).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch( err => console.error(`Ошибка ${err}` ));
  }
 
  function handleAddPlaceSubmit(data){
    mestoApi.postNewCard(data).then((newCard)=>{  
      setCards([...cards, newCard]); 
      closeAllPopups();
    })
    .catch( err => console.error(`Ошибка ${err}` ));
  }
   function handleCardDeletion(){
    console.log(cardToDelete._id)
    mestoApi.deleteCard(cardToDelete._id).then((deleledCard)=> {
      const newCards = cards.filter((c)=> c._id !== cardToDelete._id);
      setCards(newCards);
    })
    .catch( err => console.error(`Ошибка ${err}` ));
  }
  return (
  <CurrentUserContext.Provider value={currentUser}>
   <div className="page">
    <Header/>
    <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          handleCardClick ={handleCardClick}
          cards = {cards}
          onCardLike = {handleCardLike}
          onCardDelete = {handleCardConfirmDeletion}
          />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 
      <ConfirmDeletionPopup isOpen={isConfirmDeletionPopupOpen} onClose={closeAllPopups} onSubmit={handleCardDeletion}></ConfirmDeletionPopup>          
    <Footer/>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
   </div>  
  </CurrentUserContext.Provider>
  );
}

export default App;
