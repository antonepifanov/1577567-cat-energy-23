const navMain = document.querySelector(".menu")
const navToggle = document.querySelector(".menu__button")

navMain.classList.remove("menu--nojs")

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu--closed")) {
    navMain.classList.remove("menu--closed")
    navMain.classList.add("menu--opened")
  } else {
    navMain.classList.add("menu--closed")
    navMain.classList.remove("menu--opened")
  }
})

const initValidating = () => {
  const form = document.querySelector(".form")
  const submitButton = form.querySelector(".form__submit-button")
  let inputsToValidate = form.querySelectorAll("input:required")
  submitButton.addEventListener("click", function() {
    for (let input of inputsToValidate) {
      if (!input.checkValidity()) {
        input.classList.add("input-field__input--invalid")
      } else if (input.classList.contains("input-field__input--invalid")) {
        input.classList.remove("input-field__input--invalid")
      }
    }
  })
}
initValidating();

const initPhoneMask = () => {
  var element = document.querySelector("input[type='tel']")
  if (!element) {
    return
  }
  var maskOptions = {
    mask: "{8} (000) 000-00-00"
  }
  var mask = IMask(element, maskOptions)
}
initPhoneMask()
