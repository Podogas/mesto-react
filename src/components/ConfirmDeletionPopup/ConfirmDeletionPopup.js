import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
function ConfirmDeletionPopup(props) {

function handleSubmit(e) {
  e.preventDefault();
  props.onSubmit();
  props.onClose();
} 
  return (
    <PopupWithForm name="confirm-deletion" title="Вы уверены?" btnText="Да" 
                   isOpen={props.isOpen} 
                   onClose={props.onClose} 
                   onSubmit={handleSubmit}>
    </PopupWithForm>

)};
export default ConfirmDeletionPopup;  