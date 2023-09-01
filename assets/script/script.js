const _cardNumberA = document.querySelector(".input1");
const _cardNumberB = document.querySelector(".input2");
const _cardNumberC = document.querySelector(".input3");
const _cardNumberD = document.querySelector(".input4");
const _numberA = document.querySelector(".num1");
const _numberB = document.querySelector(".num2");
const _numberC = document.querySelector(".num3");
const _numberD = document.querySelector(".num4");
const _name = document.querySelector("#cardholder");
const _inputName = document.querySelector(".name-holder");
const _inputYear = document.querySelector(".input-y");
const _inputM = document.querySelector(".input-m");
const _expiresy = document.querySelector("#expiresy");
const _expiresm = document.querySelector("#expiresm");
const _ccv = document.querySelector(".input-ccv");
const _buttonS = document.querySelector(".submit");

_cardNumberA.addEventListener("input", (e) => {
  let number = e.target.value;

  if (number.length >= 4) {
    _numberA.innerHTML = number;
    _cardNumberA.disabled = true;
    _cardNumberB.focus();
  } else {
    _numberA.innerHTML = number;
  }
});
_cardNumberB.addEventListener("input", (e) => {
  let number = e.target.value;

  if (number.length >= 4) {
    _numberB.innerHTML = number;
    _cardNumberB.disabled = true;
    _cardNumberC.focus();
  } else {
    _numberB.innerHTML = number;
  }
});
_cardNumberC.addEventListener("input", (e) => {
  let number = e.target.value;

  if (number.length >= 4) {
    _numberC.innerHTML = number;
    _cardNumberC.disabled = true;
    _cardNumberD.focus();
  } else {
    _numberC.innerHTML = number;
  }
});
_cardNumberD.addEventListener("input", (e) => {
  let number = e.target.value;

  if (number.length >= 4) {
    _numberD.innerHTML = number;
    _cardNumberD.disabled = true;
    _inputName.focus();
  } else {
    _numberD.innerHTML = number;
  }
});
_inputName.addEventListener("input", (e) => {
  let name = e.target.value;
  _name.innerHTML = name;
});
_inputYear.addEventListener("input", (e) => {
  let year = e.target.value;
  if (year.length >= 2) {
    _expiresy.innerHTML = year;
    _inputYear.disabled = true;
  } else {
    _expiresy.innerHTML = year;
  }
});
_inputM.addEventListener("input", (e) => {
  let m = e.target.value;
  if (m.length >= 2) {
    _expiresm.innerHTML = m;
    _inputM.disabled = true;
    _inputYear.focus();
  } else {
    _expiresm.innerHTML = m;
  }
});
_ccv.addEventListener("input", (e) => {
  let c = e.target.value;
  if (c.length >= 4) {
    _ccv.disabled = true;
  }
});
const _reset = () => {
  _numberA.innerHTML = "";
  _numberB.innerHTML = "";
  _numberC.innerHTML = "";
  _numberD.innerHTML = "";
  _name.innerHTML = "";
  _expiresm.innerHTML = "";
  _expiresy.innerHTML = "";
  _cardNumberA.value = "";
  _cardNumberB.value = "";
  _cardNumberC.value = "";
  _cardNumberD.value = "";
  _inputName.value = "";
  _inputYear.value = "";
  _inputM.value = "";
  _ccv.value = "";
};
_buttonS.addEventListener("click", _reset);
