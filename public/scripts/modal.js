export default function Modal() {
  const modalwrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    modalwrapper.classList.add('active')
  }

  function close() {
    modalwrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
