//___________________________________
//  ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА
//___________________________________

export default class Popup {
    constructor (selectorPopup) {
        this._selectorPopup = document.querySelector(selectorPopup)
    }

    open() {
        this._selectorPopup.classList.add('popup_opened');
        this.setEventListeners();
    }

    close = () => {
        document.removeEventListener('keydown', () => this._handeListenEscape);
        this._selectorPopup.classList.remove('popup_opened');
    }

    _handeListenEscape = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
          };
    }

    _handleListenOverlay = (evt) => {
        if (evt.target.classList.contains('popup')){
            this.close();
          }
    }

    setEventListeners() {
        this._selectorPopup.addEventListener('click', this._handleListenOverlay)
        document.addEventListener('keydown', this._handeListenEscape);
        this._selectorPopup.querySelector('.popup__btn-close').addEventListener('click', this.close)
    }
}