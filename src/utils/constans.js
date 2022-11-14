// попап редактирования профиля

export const buttonEdit = document.querySelector('.profile__btn-edit');

export const nameInput = document.querySelector('.popup-edit').querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup-edit').querySelector('.popup__input_type_job');

export const nameInfo = document.querySelector('.profile__name');
export const jobInfo = document.querySelector('.profile__job')

// попап добавления фото
export const buttonAddCard = document.querySelector('.profile__btn-add');


//_____________________________
// карточки по умолчанию
//_____________________________
export const initialCards = [
    {
      name: 'Италия',
      link: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Канада',
      link: 'https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80'
    },
    {
      name: 'Озеро Ратлснейк',
      link: 'https://images.unsplash.com/photo-1502318217862-aa4e294ba657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
    },
    {
      name: 'Тула',
      link: 'https://images.unsplash.com/photo-1595552598993-0510760b1860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    {
      name: 'Портланд',
      link: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80'
    },
    {
      name: 'Кильписъярви',
      link: 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ];

//_____________________________
//  для валидации
//_____________________________

export const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'btn-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  fieldSet:'.popup__set'
};