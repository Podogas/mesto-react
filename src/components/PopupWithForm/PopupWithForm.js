import React from "react";
function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__window">
        <button
          className={`popup__close-btn popup__close-btn_${props.name}`}
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className={`popup__heading popup__heading_${props.name}`}>
          {props.title}
        </h2>
        <form
          noValidate
          onSubmit={props.onSubmit}
          className={`popup__input-container popup__input-container_${props.name}`}
          name={props.name}
          method="post"
          action=""
        >
          {props.children}
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
