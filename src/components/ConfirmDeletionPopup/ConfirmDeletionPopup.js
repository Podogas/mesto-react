import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
function ConfirmDeletionPopup(props) {

function handleSubmit(e) {
  e.preventDefault();
  props.onSubmit();
  props.onClose();
} 
  return (
    <PopupWithForm name="confirm-deletion" title="Вы уверены?" 
                   isOpen={props.isOpen} 
                   onClose={props.onClose} 
                   onSubmit={handleSubmit}>
      <button type='submit'  className='popup__submit-btn' >Да</button>             
    </PopupWithForm>

)};
export default ConfirmDeletionPopup;  