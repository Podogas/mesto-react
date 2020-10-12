import React , { useState } from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import ImagePopup from '../ImagePopup/ImagePopup.js';
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
          isEditProfilePopupOpen ={isEditProfilePopupOpen}
          onAddPlace={handleAddPlaceClick}
          isAddPlacePopupOpen ={isAddPlacePopupOpen} 
          onEditAvatar={handleEditAvatarClick}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          closeAllPopups ={closeAllPopups}
          handleCardClick ={handleCardClick}
          />
    <Footer/>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
   </div>  



    

    

  </>
  );
}

export default App;
