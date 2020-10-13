import React , { useState }  from 'react';
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
    })
    .catch( err => console.error(`Ошибка при загрузке данных пользователя ${err}` ));
  }, []);
  React.useEffect(() => {
    mestoApi.getInitialCards().then((res)=>{
      setCards(res);
    })
    .catch( err => console.error(`Ошибка при загрузке фотографий ${err}` ));;
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

      

    </main>
  )};
export default Main;  